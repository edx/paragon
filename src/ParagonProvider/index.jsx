import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const ParagonContext = React.createContext({});

const ParagonProvider = ({
  analytics,
  children,
}) => {
  // ``contextValue`` must be memoized such that re-renders of ParagonProvider do
  // not trigger erroneous updates of the context value.
  const contextValue = useMemo(
    () => ({
      analytics,
    }),
    [analytics],
  );

  return (
    <ParagonContext.Provider value={contextValue}>
      {children}
    </ParagonContext.Provider>
  );
};

ParagonProvider.propTypes = {
  children: PropTypes.node.isRequired,
  analytics: PropTypes.shape({
    sendTrackEvent: PropTypes.func,
  }),
};

ParagonProvider.defaultProps = {
  analytics: undefined,
};

export default ParagonProvider;
