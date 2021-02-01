import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'react-bootstrap/Card';

import { AVAILABLE_HEADING_VALUES, HEADING_SIZES_MAP } from '../constants';

const useFormattedHeaderTitle = ({
  as, sizes, small,
}) => {
  const Component = useMemo(
    () => {
      if (as) {
        return as;
      }
      return small ? sizes.small : sizes.default;
    },
    [as, sizes, small],
  );
  return Component;
};

const CardHeaderTitle = ({
  as,
  sizes,
  className,
  children,
  small,
  ...attrs
}) => {
  const FormattedHeaderTitle = useFormattedHeaderTitle({
    as, sizes, small,
  });

  return (
    <Card.Title
      {...attrs}
      className={classNames('pgn__card-header-title', className)}
      as={FormattedHeaderTitle}
    >
      {children}
    </Card.Title>
  );
};

CardHeaderTitle.propTypes = {
  as: PropTypes.elementType,
  sizes: PropTypes.shape({
    default: PropTypes.oneOf(AVAILABLE_HEADING_VALUES).isRequired,
    small: PropTypes.oneOf(AVAILABLE_HEADING_VALUES).isRequired,
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

CardHeaderTitle.defaultProps = {
  as: undefined,
  sizes: {
    default: HEADING_SIZES_MAP.H3,
    small: HEADING_SIZES_MAP.H4,
  },
  className: undefined,
  small: false,
};

export default CardHeaderTitle;
