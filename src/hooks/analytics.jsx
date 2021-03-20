import {
  createRef, useCallback, useContext, useMemo,
} from 'react';

import { ParagonContext } from '../ParagonProvider';

export const ANALYTICS_TIMEOUT_MS = 300;

/**
 * Returns the ``analytics`` key stored in ParagonProvider's context
 */
export const useAnalytics = () => {
  const { analytics } = useContext(ParagonContext) || {};
  return analytics;
};

/**
 *
 * @param {object} [event] Object containing the analytic event name, properties, and dispatchers.
 * @param {function} [onClick] Custom event handler to call when processing the onClick event.
 * @param {object} [forwardedRef] An optional React forwarded ref.
 *
 * @returns {array} Array containing an onClick event handler to pass to an element that will dispatch
 *  an analytics event, and an element ref.
 */
export const useHandleLogClick = ({
  event, onClick, forwardedRef,
}) => {
  const ref = useMemo(
    () => forwardedRef || createRef(),
    [forwardedRef],
  );
  const analytics = useAnalytics();
  const {
    name: eventName,
    properties: eventProperties,
    dispatchers: eventDispatchers,
  } = event || {};

  /**
   * Iterates through all analytic event dispatch functions passed in, passing the event name and
   * properties to each.
   */
  const sendEventToDispatchers = useCallback(
    () => {
      if (!eventDispatchers) {
        return;
      }
      eventDispatchers.filter(dispatcher => typeof dispatcher === 'function').forEach((dispatch) => {
        dispatch(eventName, eventProperties);
      });
    },
    [eventName, eventProperties, eventDispatchers],
  );

  /**
   * Sends an analytic event to ``analytics.sendTrackEvent`` if it exists as well as sending the
   * same event to the provided custom event dispatchers.
   */
  const dispatchAnalyticEvents = () => {
    if (analytics?.sendTrackEvent) {
      analytics.sendTrackEvent(eventName, eventProperties);
    }
    sendEventToDispatchers();
  };

  /**
   * An onClick event handler that appropriately configures an element to dispatch an analytic event.
   * If the element has an `href` (i.e., hyperlink), delay execution of the location redirect to give
   * enough time for the analytic event to be dispatched. Otherwise, dispatch the analytic event immediately.
   *
   * @param {event} e The event associated with onClick.
   */
  const handleLogClick = (e) => {
    if (event) {
      // handle clicked anchor links that open in same tab by adding a slight delay
      // to the page redirect to allow enough time for an analytics event to
      // be dispatched.
      if (ref?.current?.href && ref?.current?.target !== '_blank') {
        e.preventDefault();
        dispatchAnalyticEvents();
        setTimeout(() => {
          global.location.href = ref.current.href;
        }, [ANALYTICS_TIMEOUT_MS]);
        return;
      }

      // if ``ref`` is not an anchor link (e.g., a button), dispatch the
      // analytic events immediately.
      dispatchAnalyticEvents();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return [handleLogClick, ref];
};
