import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

const PopperElement = ({
  children, target, strategy, placement, modifiers,
}) => {
  const popperElement = useRef(null);
  const popperOptions = { modifiers, strategy, placement };
  const {
    styles,
    attributes,
  } = usePopper(target.current, popperElement.current, popperOptions);

  return (
    <div ref={popperElement} style={{ ...styles.popper, zIndex: 2000 }} {...attributes.popper}>
      {children}
    </div>
  );
};

PopperElement.propTypes = {
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  target: PropTypes.object.isRequired,
  strategy: PropTypes.oneOf(['absolute', 'fixed']),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  modifiers: PropTypes.arrayOf(PropTypes.object),
};

PopperElement.defaultProps = {
  children: undefined,
  strategy: 'absolute',
  placement: 'bottom-start',
  modifiers: [
    {
      name: 'flip',
      enabled: true,
    },
    {
      name: 'preventOverflow',
      options: {
        tether: false,
      },
    },
  ],
};

export default PopperElement;
