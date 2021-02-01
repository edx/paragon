import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardFooterAction = ({
  as: Component,
  className,
  children,
  ...attrs
}) => (
  <Component
    {...attrs}
    className={classNames('pgn__card-footer-action', className)}
  >
    {children}
  </Component>
);

CardFooterAction.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardFooterAction.defaultProps = {
  as: 'a',
  className: undefined,
};

export default CardFooterAction;
