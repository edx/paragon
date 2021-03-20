import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

import { useHandleLogClick } from '../hooks/analytics';

const Hyperlink = React.forwardRef(({
  analyticEvents,
  destination,
  children,
  target,
  onClick,
  externalLinkAlternativeText,
  externalLinkTitle,
  rel,
  ...attrs
}, forwardedRef) => {
  const [handleLogClick, ref] = useHandleLogClick({
    event: analyticEvents?.onClick,
    onClick,
    forwardedRef,
  });

  let externalLinkIcon;

  if (target === '_blank') {
    // Add this rel attribute to prevent Reverse Tabnabbing
    Object.assign(attrs, {
      rel: rel ? `noopener ${rel}` : 'noopener',
    });

    externalLinkIcon = (
      <span
        className={classNames('fa', 'fa-external-link')}
        aria-hidden={false}
        aria-label={externalLinkAlternativeText}
        title={externalLinkTitle}
      />
    );
  }

  return (
    <a
      ref={ref}
      href={destination}
      target={target}
      onClick={handleLogClick}
      {...attrs}
    >
      {children}
      {externalLinkIcon && (
        <>
          {' '}
          {externalLinkIcon}
        </>
      )}
    </a>
  );
});

Hyperlink.defaultProps = {
  target: '_self',
  rel: undefined,
  onClick: () => {},
  externalLinkAlternativeText: 'Opens in a new window',
  externalLinkTitle: 'Opens in a new window',
  analyticEvents: undefined,
};

Hyperlink.propTypes = {
  /** specifies the URL */
  destination: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one. If the target is `_blank` (opening a new window) `rel='noopener'` will be added to the anchor tag to prevent any potential [reverse tabnabbing attack](https://www.owasp.org/index.php/Reverse_Tabnabbing).
   */
  target: PropTypes.string,
  /** specifies the relationship between the current document and the linked document; the
   * `noopener` value is automatically added if `target` is "_blank".
   */
  rel: PropTypes.string,
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  // eslint-disable-next-line max-len
  /** specifies the text for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkAlternativeText: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  // eslint-disable-next-line max-len
  /** specifies the title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLinkTitle: isRequiredIf(
    PropTypes.string,
    props => props.target === '_blank',
  ),
  /** specifies the analytic events to dispatch for when the user interacts with this component, e.g. `onClick`. */
  analyticEvents: PropTypes.shape({
    onClick: PropTypes.shape({
      name: PropTypes.string,
      properties: PropTypes.shape({}),
      dispatchers: PropTypes.arrayOf(PropTypes.func),
    }),
  }),
};

export default withDeprecatedProps(Hyperlink, 'Hyperlink', {
  /** specifies the text or element that a URL should be associated with */
  content: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children',
  },
});
