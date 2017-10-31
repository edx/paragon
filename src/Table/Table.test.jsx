/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Table from './index';

const props = {
  columns: [
    { key: 'num', label: 'Number' },
    { key: 'x2', label: 'Number * 2' },
    { key: 'sq', label: 'Number Squared' },
  ],
  data: [
    { sq: 1, num: 1, x2: 2 },
    { sq: 4, num: 2, x2: 4 },
    { sq: 9, num: 3, x2: 6 },
  ],
};

const sortableColumnProps = {
  num: {
    columnSortable: true,
    onSort: () => {},
  },
  x2: {
    columnSortable: true,
    onSort: () => {},
  },
  sq: {
    columnSortable: false,
  },
};

const sortableColumns = props.columns.map(column => ({
  ...column,
  ...sortableColumnProps[column.key],
}));

const sortableProps = {
  columns: sortableColumns,
  data: props.data,
  tableSortable: true,
  defaultSortedColumn: sortableColumns[0].key,
  defaultSortDirection: 'desc',
};

describe('<Table />', () => {
  describe('renders', () => {
    const wrapper = shallow(
      <Table
        {...props}
      />,
    );

    it('with display columns in the right order', () => {
      wrapper.find('th').forEach((th, i) => {
        expect(th.text()).toEqual(props.columns[i].label);
      });
    });

    it('with data in the same order as the columns', () => {
      wrapper.find('tr').at(1).find('td').forEach((td, i) => {
        expect(Number(td.text())).toEqual(props.data[0][props.columns[i].key]);
      });
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual('');
      expect(wrapper.state('sortDirection')).toEqual('');
    });
  });

  describe('that is non-sortable renders', () => {
    const wrapper = mount(
      <Table
        {...sortableProps}
        tableSortable={false}
      />,
    );

    it('without sortable columns', () => {
      const tableHeadings = wrapper.find('th');

      tableHeadings.forEach((heading) => {
        expect((heading).hasClass('sortable')).toEqual(false);
      });
    });

    it('without column buttons', () => {
      const buttons = wrapper.find('button');
      expect(buttons).toHaveLength(0);
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual('');
      expect(wrapper.state('sortDirection')).toEqual('');
    });
  });

  describe('that is sortable and has mixed columns renders', () => {
    let wrapper = shallow(
      <Table
        {...sortableProps}
      />,
    );

    it('with sortable classname on correct headings', () => {
      const tableHeadings = wrapper.find('th');

      expect(tableHeadings).toHaveLength(sortableProps.columns.length);
      expect(tableHeadings.at(0).hasClass('sortable')).toEqual(true);
      expect(tableHeadings.at(1).hasClass('sortable')).toEqual(true);
      expect(tableHeadings.at(2).hasClass('sortable')).toEqual(false);
    });

    it('with sr-only classname on correct headings', () => {
      const srOnly = wrapper.find('.sr-only');

      expect(srOnly).toHaveLength(sortableProps.columns.length - 1);
      expect((srOnly).at(0).hasClass('sr-only')).toEqual(true);
      expect((srOnly).at(1).hasClass('sr-only')).toEqual(true);
    });

    it('with correct initial sr-only text on correct headings', () => {
      const headings = wrapper.find('.sr-only');

      expect(headings.at(0).text()).toEqual(' sort descending');
      expect(headings.at(1).text()).toEqual(' click to sort');
    });

    it('with correct initial state', () => {
      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual(sortableProps.defaultSortDirection);
    });

    wrapper = mount(
      <Table
        {...sortableProps}
      />,
    );

    it('with correct column buttons', () => {
      const buttons = wrapper.find('button');
      expect(buttons).toHaveLength(2);
    });

    it('with correct initial sort icons', () => {
      const buttons = wrapper.find('button');

      expect(buttons.find('.fa')).toHaveLength(sortableProps.columns.length - 1);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(1);
    });
  });

  describe('that is sortable and has mixed columns has behavior that', () => {
    let wrapper;
    let buttons;
    let numSpy;
    let x2Spy;

    beforeEach(() => {
      wrapper = mount(
        <Table
          {...sortableProps}
        />,
      );

      buttons = wrapper.find('button');
      numSpy = jest.fn();
      x2Spy = jest.fn();

      sortableProps.columns.find(column => (column.key === 'num')).onSort = numSpy;
      sortableProps.columns.find(column => (column.key === 'x2')).onSort = x2Spy;
    });

    it('changes sort icons appropriately on click', () => {
      buttons.at(0).simulate('click');

      expect(buttons.at(0).find('.fa')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-asc')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort')).toHaveLength(0);

      expect(buttons.at(1).find('.fa')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(1);

      buttons.at(1).simulate('click');

      expect(buttons.at(0).find('.fa')).toHaveLength(1);
      expect(buttons.at(0).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort-desc')).toHaveLength(0);
      expect(buttons.at(0).find('.fa-sort')).toHaveLength(1);

      expect(buttons.at(1).find('.fa')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort-asc')).toHaveLength(0);
      expect(buttons.at(1).find('.fa-sort-desc')).toHaveLength(1);
      expect(buttons.at(1).find('.fa-sort')).toHaveLength(0);
    });

    it('changes sr-only text appropriately on click', () => {
      const headings = wrapper.find('.sr-only');

      buttons.at(0).simulate('click');

      expect(headings.at(0).text()).toEqual(' sort ascending');
      expect(headings.at(1).text()).toEqual(' click to sort');

      buttons.at(1).simulate('click');

      expect(headings.at(0).text()).toEqual(' click to sort');
      expect(headings.at(1).text()).toEqual(' sort descending');
    });

    it('changes state appropriately on click', () => {
      buttons.at(0).simulate('click');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual('asc');

      buttons.at(0).simulate('click');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.defaultSortedColumn);
      expect(wrapper.state('sortDirection')).toEqual('desc');

      buttons.at(1).simulate('click');

      expect(wrapper.state('sortedColumn')).toEqual(sortableProps.columns[1].key);
      expect(wrapper.state('sortDirection')).toEqual('desc');
    });

    it('calls onSort function correctly on click', () => {
      expect(numSpy).toHaveBeenCalledTimes(0);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      buttons.at(0).simulate('click');

      expect(numSpy).toHaveBeenCalledTimes(1);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('asc');

      buttons.at(0).simulate('click');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(0);

      expect(numSpy).toBeCalledWith('desc');

      buttons.at(1).simulate('click');

      expect(numSpy).toHaveBeenCalledTimes(2);
      expect(x2Spy).toHaveBeenCalledTimes(1);

      expect(x2Spy).toBeCalledWith('desc');
    });
  });
});
