import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useResizeDetector } from 'react-resize-detector/build/withPolyfill';

import { useReversedChildren } from '../../hooks';

export const CardFooterContext = React.createContext();

export const CARD_FOOTER_BREAKPOINTS = {
  STACKED: 460,
};

const CardFooter = ({
  className,
  children,
  stacked: controlledStacked,
  breakpoints,
  ...attrs
}) => {
  const [stacked, setStacked] = useState(controlledStacked);

  const handleResize = (width) => {
    if (controlledStacked) {
      // ``stacked`` was passed in as a prop so this component is being used as a
      // controlled component; rely on this prop instead of setting ``stacked`` state below.
      return;
    }

    // TODO: what to do about hardcoded width breakpoints...?
    if (width < (breakpoints?.stacked || CARD_FOOTER_BREAKPOINTS.STACKED)) {
      setStacked(true);
    } else {
      setStacked(false);
    }
  };

  const { ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'throttle',
    refreshRate: 100,
    onResize: handleResize,
  });

  const reversedChildren = useReversedChildren(children);

  // ``contextValue`` must be memoized to ensure the object reference stays consistent on re-renders,
  // so that children of CardFooterContext do not constantly re-render, too.
  const contextValue = useMemo(
    () => ({
      stacked,
    }),
    [stacked],
  );

  return (
    <div
      ref={ref}
      {...attrs}
      className={classNames('pgn__card-footer', className, {
        stacked,
      })}
    >
      <CardFooterContext.Provider value={contextValue}>
        {stacked ? reversedChildren : children}
      </CardFooterContext.Provider>
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  stacked: PropTypes.bool,
  breakpoints: PropTypes.shape({
    // px width at which the component will switch to stacked view
    stacked: PropTypes.number.isRequired,
  }),
};

CardFooter.defaultProps = {
  className: undefined,
  stacked: undefined, // the internals of ``CardFooter`` will decide the initial default state.
  breakpoints: {
    stacked: CARD_FOOTER_BREAKPOINTS.STACKED,
  },
};

export default CardFooter;
