import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { HEADING_SIZES_MAP } from '../constants';

const CardSectionTitle = ({
  as: Component,
  className,
  children,
  ...attrs
}) => (
  <Component
    {...attrs}
    className={classNames('pgn__card-section-title', className)}
  >
    {children}
  </Component>
);

CardSectionTitle.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionTitle.defaultProps = {
  as: HEADING_SIZES_MAP.H5,
  className: undefined,
};

export default CardSectionTitle;
