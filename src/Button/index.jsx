import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from 'react-bootstrap/Button';

import { useHandleLogClick } from '../hooks/analytics';

import ButtonDeprecated from './deprecated';

const Button = React.forwardRef(({
  children,
  analyticEvents,
  onClick,
  ...attrs
}, forwardedRef) => {
  const [handleLogClick, ref] = useHandleLogClick({
    event: analyticEvents?.onClick,
    onClick,
    forwardedRef,
  });

  return (
    <ButtonBase
      ref={ref}
      {...attrs}
      onClick={handleLogClick}
    >
      {children}
    </ButtonBase>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /** specifies the callback function when the button is clicked */
  onClick: PropTypes.func,
  /** specifies the analytic events to dispatch for when the user interacts with this component, e.g. `onClick`. */
  analyticEvents: PropTypes.shape({
    onClick: PropTypes.shape({
      name: PropTypes.string,
      properties: PropTypes.shape({}),
      dispatchers: PropTypes.arrayOf(PropTypes.func),
    }),
  }),
};

Button.defaultProps = {
  onClick: undefined,
  analyticEvents: undefined,
};

Button.Deprecated = ButtonDeprecated;

export default Button;
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
