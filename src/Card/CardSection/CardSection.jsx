import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

const CardSection = ({
  className,
  children,
  ...attrs
}) => (
  <Card.Body
    {...attrs}
    className={classNames('pgn__card-section', className)}
  >
    {children}
  </Card.Body>
);

CardSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSection.defaultProps = {
  className: undefined,
};

export default CardSection;
