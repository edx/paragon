import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Dropdown from './index';

const props = {
  buttonContent: 'Trigger Label',
};

const menuContent = (
  <React.Fragment>
    <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
    <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
    <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
  </React.Fragment>
);

const menuOpen = (isOpen, wrapper) => {
  expect(wrapper.childAt(0).hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('Button').prop('aria-expanded')).toEqual(isOpen);
  expect(wrapper.find('[aria-hidden=false]').exists()).toEqual(isOpen);
};

describe('<Dropdown />', () => {
  describe('Rendering', () => {
    it('renders the happy path', () => {
      const tree = renderer.create((
        <Dropdown {...props}>
          {menuContent}
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders when there is html content in the trigger button', () => {
      const tree = renderer.create((
        <Dropdown buttonContent={(<span>Trigger Label</span>)}>
          {menuContent}
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom menu content', () => {
      const tree = renderer.create((
        <Dropdown {...props}>
          Custom Content
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Mouse Interactions', () => {
    const wrapper = mount(<Dropdown {...props}>{menuContent}</Dropdown>);
    const menuTrigger = wrapper.find('Button');
    const menuContainer = wrapper.find('.dropdown-menu');
    const menuItems = wrapper.find('.dropdown-menu a');

    it('opens on trigger click', () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', () => {
      expect(menuItems.first().is(':focus')).toBe(true);
    });

    it('does not close on click inside the menu', () => {
      menuContainer.simulate('click'); // Do nothing
      menuOpen(true, wrapper);
    });

    it('closes on trigger click', () => {
      menuTrigger.simulate('click'); // Close
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', () => {
      expect(menuTrigger.is(':focus')).toBe(true);
    });

    it('closes on document click when open', () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
      document.dispatchEvent(new MouseEvent('click'));
      wrapper.update(); // Let react re-render
      menuOpen(false, wrapper);
    });
  });


  describe('Keyboard Interactions', () => {
    // Note: menuContent has three items
    const wrapper = mount(<Dropdown {...props}>{menuContent}</Dropdown>);
    const menuTrigger = wrapper.find('Button');
    const menuContainer = wrapper.find('.dropdown-menu');
    const menuItems = wrapper.find('.dropdown-menu a');

    it('opens on click', () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', () => {
      expect(menuItems.first().is(':focus')).toBe(true);
    });

    it('should focus the next item after ArrowDown keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'ArrowDown' });
      expect(menuItems.at(1).is(':focus')).toBe(true);
    });

    it('should focus the next item after Tab keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Tab' });
      expect(menuItems.at(2).is(':focus')).toBe(true);
    });

    it('should loop focus to the first item after Tab keyDown on last item', () => {
      menuContainer.simulate('keyDown', { key: 'Tab' });
      expect(menuItems.at(0).is(':focus')).toBe(true);
    });

    it('should loop focus to the last item after ArrowUp keyDown on first item', () => {
      menuContainer.simulate('keyDown', { key: 'ArrowUp' });
      expect(menuItems.at(2).is(':focus')).toBe(true);
    });

    it('should focus the previous item after Shift + Tab keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Tab', shiftKey: true });
      expect(menuItems.at(1).is(':focus')).toBe(true);
    });

    it('should close the menu on Escape keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Escape' });
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', () => {
      expect(menuTrigger.is(':focus')).toBe(true);
    });
  });
});
