import React from 'react';
import { mount } from 'enzyme';
import classNames from 'classnames';

import Hyperlink from '.';

const content = 'content';
const destination = 'destination';
const onClick = () => {};
const props = {
  content,
  destination,
  onClick,
};
const externalLinkAlternativeText = 'externalLinkAlternativeText';
const externalLinkTitle = 'externalLinktTitle';
const externalLinkProps = {
  target: '_blank',
  externalLinkAlternativeText,
  externalLinkTitle,
  ...props,
};

describe('correct rendering', () => {
  it('renders Hyperlink', () => {
    const wrapper = mount(<Hyperlink {...props} />).find('a');
    expect(wrapper).toHaveLength(1);

    expect(wrapper.prop('children')).toEqual([content, undefined]);
    expect(wrapper.prop('href')).toEqual(destination);
    expect(wrapper.prop('target')).toEqual('_self');

    expect(wrapper.find('span')).toHaveLength(0);
    expect(wrapper.find('i')).toHaveLength(0);
  });

  it('renders external Hyperlink', () => {
    const wrapper = mount(<Hyperlink {...externalLinkProps} />);

    expect(wrapper.find('span')).toHaveLength(1);

    const icon = wrapper.find('span').at(0);

    expect(icon.prop('aria-hidden')).toEqual(false);
    expect(icon.prop('className')).toEqual(classNames('fa', 'fa-external-link'));
    expect(icon.prop('aria-label')).toEqual(externalLinkAlternativeText);
    expect(icon.prop('title')).toEqual(externalLinkTitle);
  });
});

describe('security', () => {
  it('prevents reverse tabnabbing for links with target="_blank"', () => {
    const wrapper = mount(<Hyperlink {...externalLinkProps} />);
    expect(wrapper.find('a').prop('rel')).toEqual('noopener');
  });
});

describe('event handlers are triggered correctly', () => {
  let spy;

  beforeEach(() => { spy = jest.fn(); });

  it('should fire onClick', () => {
    const wrapper = mount(<Hyperlink {...props} onClick={spy} />);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
