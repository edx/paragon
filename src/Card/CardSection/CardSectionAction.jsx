import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSectionAction = ({
  as: Component,
  className,
  children,
  ...attrs
}) => (
  <Component
    {...attrs}
    className={classNames('pgn__card-section-action', className)}
  >
    {children}
  </Component>
);

CardSectionAction.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionAction.defaultProps = {
  as: 'a',
  className: undefined,
};

export default CardSectionAction;
