import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FocusOn } from 'react-focus-on';

import SheetContainer from './SheetContainer';

export const POSITIONS = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
};

export const VARIANTS = {
  light: 'light',
  dark: 'dark',
};

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.renderSheet = this.renderSheet.bind(this);
    this.lockFocusEl = this.lockFocusEl.bind(this);
  }

  lockFocusEl(renderContent) {
    if (!this.props.blocking) {
      return renderContent;
    }
    return (
      <FocusOn enabled={this.props.show}>
        {renderContent}
      </FocusOn>
    );
  }

  renderSheet() {
    const { children, position, variant } = this.props;
    return (
      <div
        className={classNames(
          'pgn__sheet-component',
          `pgn__sheet__${variant}`,
          position,
        )}
        role="alert"
        {...{
          'aria-live': 'polite',
          'aria-atomic': 'true',
        }}
      >
        <div className="pgn__sheet-content">
          { children }
        </div>
      </div>
    );
  }

  render() {
    const {
      blocking,
      show,
    } = this.props;
    if (!show) {
      return null;
    }
    return (
      <SheetContainer>
        <div
          className={classNames(
            'pgn__sheet-skrim',
            { hidden: !blocking },
          )}
          role="presentation"
        />
        {this.lockFocusEl(this.renderSheet())}
      </SheetContainer>
    );
  }
}

Sheet.propTypes = {
  /** specifies whether the sheet provides a click-blocking scrim */
  blocking: PropTypes.bool,
  /** an element rendered inside the sheet */
  children: PropTypes.node,
  /** a string designating the sheet's position on the window */
  position: PropTypes.oneOf([
    POSITIONS.left,
    POSITIONS.right,
    POSITIONS.top,
    POSITIONS.bottom,
  ]),
  /** Boolean used to control whether the Sheet shows. */
  show: PropTypes.bool,
  /** a string designating which version of the sheet to show (light vs dark) */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark]),
};

Sheet.defaultProps = {
  blocking: false,
  children: undefined,
  position: POSITIONS.bottom,
  show: true,
  variant: VARIANTS.light,
};

export default Sheet;
