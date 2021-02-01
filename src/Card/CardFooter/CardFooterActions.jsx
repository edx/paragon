import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useReversedChildren } from '../../hooks';
import { CardFooterContext } from './CardFooter';

const CardFooterActions = ({
  className,
  children,
  ...attrs
}) => {
  const { stacked } = useContext(CardFooterContext);
  const reversedChildren = useReversedChildren(children);

  return (
    <div
      {...attrs}
      className={classNames('pgn__card-footer-actions', className)}
    >
      {stacked ? children : reversedChildren}
    </div>
  );
};

CardFooterActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardFooterActions.defaultProps = {
  className: undefined,
};

export default CardFooterActions;
