import React from 'react';
import PropTypes from 'prop-types';
import useArrowKeyNavigationHook from 'react-arrow-key-navigation-hook';

const Menu = ({
  as,
  arrowKeyNavigationSelector,
  children,
  ...props
}) => {
  const parentRef = useArrowKeyNavigationHook({ selectors: arrowKeyNavigationSelector });
  return React.createElement(
    as,
    {
      ...props,
      ref: parentRef,
    },
    children,
  );
};

Menu.propTypes = {
  arrowKeyNavigationSelector: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node,
};

Menu.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  as: 'div',
  children: null,
};

export default Menu;
