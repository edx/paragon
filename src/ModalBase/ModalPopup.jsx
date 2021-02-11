import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import Portal from './Portal';
import PopperElement from './PopperElement';
import ModalContext from './ModalContext';

const useMemoizedValues = ({ close, isOpen, isBlocking }) => useMemo(() => ({
  close,
  isOpen,
  isBlocking,
}), [close, isOpen, isBlocking]);

const ModalPopup = ({
  children, close, isOpen, positionRef, isBlocking, withPortal, placement, ...popperProps
}) => {
  const RootComponent = withPortal ? Portal : React.Fragment;

  const modalContextValue = useMemoizedValues({ close, isOpen, isBlocking });

  return (
    <ModalContext.Provider value={modalContextValue}>
      <RootComponent>
        <PopperElement target={positionRef} placement={placement} {...popperProps}>
          <FocusOn
            scrollLock={false}
            enabled={isOpen}
            onEscapeKey={close}
            onClickOutside={close}
          >
            {isOpen && (
              <div>
                {children}
              </div>
            )}
          </FocusOn>
        </PopperElement>
      </RootComponent>
    </ModalContext.Provider>
  );
};

ModalPopup.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isBlocking: PropTypes.bool,
  withPortal: PropTypes.bool,
  // This type: https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
  positionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.element }),
  ]).isRequired,
  placement: PopperElement.propTypes.placement,
};

ModalPopup.defaultProps = {
  isBlocking: false,
  withPortal: false,
  placement: 'bottom-start',
};

export default ModalPopup;