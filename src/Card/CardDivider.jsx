import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardDivider = ({ className, ...attrs }) => (
  <div
    {...attrs}
    className={classNames('pgn__card-divider', className)}
  />
);

CardDivider.propTypes = {
  className: PropTypes.string,
};

CardDivider.defaultProps = {
  className: undefined,
};

export default CardDivider;
