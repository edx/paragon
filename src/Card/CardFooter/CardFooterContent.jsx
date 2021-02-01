import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardFooterContent = ({
  className,
  children,
  ...attrs
}) => (
  <div
    {...attrs}
    className={classNames('pgn__card-footer-content', className)}
  >
    {children}
  </div>
);

CardFooterContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardFooterContent.defaultProps = {
  className: undefined,
};

export default CardFooterContent;
