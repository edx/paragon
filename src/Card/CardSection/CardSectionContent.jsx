import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSectionContent = ({
  className,
  children,
  ...attrs
}) => (
  <div
    {...attrs}
    className={classNames('pgn__card-section-content', className)}
  >
    {children}
  </div>
);

CardSectionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionContent.defaultProps = {
  className: undefined,
};

export default CardSectionContent;
