/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Modal from './index';
import Button from '../Button';


const modalOpen = (isOpen, wrapper) => {
  expect(wrapper.hasClass('modal-open')).toEqual(isOpen);
  expect(wrapper.state('open')).toEqual(isOpen);
};
const title = 'Modal title';
const body = 'Modal body';
const defaultProps = {
  title,
  body,
  open: true,
  onClose: () => {},
};

let wrapper;

describe('<Modal />', () => {
  describe('correct rendering', () => {
    const buttons = [
      <Button
        display="Blue button!"
        buttonType="primary"
      />,
      {
        display: 'Red button!',
        buttonType: 'danger',
      },
      <Button
        display="Green button!"
        buttonType="success"
      />,
    ];

    it('renders default buttons', () => {
      wrapper = mount(
        <Modal
          {...defaultProps}
        />,
      );
      const modalTitle = wrapper.find('.modal-title');
      const modalBody = wrapper.find('.modal-body');

      expect(modalTitle.text()).toEqual(title);
      expect(modalBody.text()).toEqual(body);
      expect(wrapper.find('button')).toHaveLength(2);
    });

    it('renders custom buttons', () => {
      wrapper = mount(
        <Modal
          {...defaultProps}
          buttons={buttons}
        />,
      );
      expect(wrapper.find('button')).toHaveLength(buttons.length + 2);
    });
  });

  describe('props received correctly', () => {
    it('component receives props', () => {
      wrapper = mount(
        <Modal
          title={title}
          body={body}
          onClose={() => {}}
        />,
      );

      modalOpen(false, wrapper);
      wrapper.setProps({ open: true });
      modalOpen(true, wrapper);
    });
    it('component receives props and ignores prop change', () => {
      wrapper = mount(
        <Modal
          {...defaultProps}
        />,
      );

      modalOpen(true, wrapper);
      wrapper.setProps({ title: 'Changed modal title' });
      modalOpen(true, wrapper);
    });
  });

  describe('close functions properly', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal
          {...defaultProps}
        />,
      );
    });

    it('closes when x button pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('click');
      modalOpen(false, wrapper);
    });

    it('closes when Close button pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(1).simulate('click');
      modalOpen(false, wrapper);
    });

    it('closes when Escape key pressed', () => {
      modalOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('keyDown', { key: 'Escape' });
      modalOpen(false, wrapper);
    });
    it('calls callback function on close', () => {
      const spy = jest.fn();

      wrapper = mount(
        <Modal
          {...defaultProps}
          onClose={spy}
        />,
      );

      expect(spy).toHaveBeenCalledTimes(0);

      // press X button
      wrapper.find('button').at(0).simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      wrapper = mount(
        <Modal
          {...defaultProps}
        />,
      );
    });

    it('does nothing on invalid keystroke q', () => {
      const buttons = wrapper.find('button');

      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      modalOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'q' });
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      modalOpen(true, wrapper);
    });
    it('does nothing on invalid keystroke + ctrl', () => {
      const buttons = wrapper.find('button');

      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      modalOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'Tab', ctrlKey: true });
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      modalOpen(true, wrapper);
    });
  });
  describe('focus changes correctly', () => {
    let buttons;

    beforeEach(() => {
      wrapper = mount(
        <Modal
          {...defaultProps}
        />,
      );

      buttons = wrapper.find('button');
    });

    it('has correct initial focus', () => {
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
    });
    it('has reset focus after close and reopen', () => {
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      wrapper.setProps({ open: false });
      modalOpen(false, wrapper);
      wrapper.setProps({ open: true });
      modalOpen(true, wrapper);
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
    });
    it('traps focus forwards on tab keystroke', () => {
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      buttons.last().simulate('keyDown', { key: 'Tab' });
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
    });
    it('traps focus backwards on shift + tab keystroke', () => {
      expect(buttons.at(0).matchesElement(document.activeElement)).toEqual(true);
      buttons.at(0).simulate('keyDown', { key: 'Tab', shiftKey: true });
      expect(buttons.last().matchesElement(document.activeElement)).toEqual(true);
    });
  });
});
