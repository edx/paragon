import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useReversedChildren } from '../../hooks';

const CardSectionActions = ({
  className,
  children,
  ...attrs
}) => {
  const reversedChildren = useReversedChildren(children);

  return (
    <div
      {...attrs}
      className={classNames('pgn__card-section-actions', className)}
    >
      {reversedChildren}
    </div>
  );
};

CardSectionActions.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionActions.defaultProps = {
  className: undefined,
};

export default CardSectionActions;
