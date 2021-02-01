import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BaseCard from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';

const Card = ({
  className,
  children,
  ...attrs
}) => (
  <BaseCard
    {...attrs}
    className={classNames('pgn__card', className)}
  >
    {children}
  </BaseCard>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: undefined,
};

Card.Img = CardImg;

export default Card;
