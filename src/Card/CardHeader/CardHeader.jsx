import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardHeader = ({
  className,
  children,
  ...attrs
}) => (
  <div
    {...attrs}
    className={classNames('pgn__card-header', className)}
  >
    {children}
  </div>
);

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardHeader.defaultProps = {
  className: undefined,
};

export default CardHeader;
