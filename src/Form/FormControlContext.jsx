import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { newId } from '../utils';
import {
  callAllHandlers,
  useIdList,
  omitEmptyProperties,
} from './fieldUtils';
import { FORM_CONTROL_SIZES } from './constants';

const identityFn = props => props;
const noop = () => {};

const FormControlContext = React.createContext({
  getControlProps: identityFn,
  setControlIsGroup: noop,
  getLabelProps: identityFn,
  getDescriptorProps: identityFn,
  addDescriptorId: identityFn,
  getNewDescriptorId: identityFn,
  removeDescriptorId: identityFn,
});

const useFormControlContext = () => React.useContext(FormControlContext);

// const useControlDescriptorId = (explicitId) => {
//   const {
//     controlId,
//     getNewDescriptorId,
//     addDescriptorId,
//     removeDescriptorId,
//   } = useFormControlContext();
//   const [id, setId] = useState(explicitId);
//   useEffect(() => {
//     if (explicitId) {
//       addDescriptorId(explicitId);
//     } else if (!id) {
//       setId(getNewDescriptorId(controlId));
//     }
//     return () => removeDescriptorId(id);
//   }, [id]);
//   return id;
// };

const useControlIsGroup = (defaultIsGroup) => {
  const [isGroup, setIsGroup] = useState(defaultIsGroup);
  const setIsGroupEffect = (newIsGroup) => {
    useEffect(() => setIsGroup(newIsGroup), []);
  };
  return [isGroup, setIsGroupEffect];
};

const FormControlContextProvider = ({
  children,
  controlId,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  onChange,
  size,
}) => {
  const resolvedId = React.useMemo(() => controlId || newId('form-field'), [controlId]);
  const [describedByIds, useDescriptorId] = useIdList(resolvedId);
  const [labelledByIds, useLabellerId] = useIdList(resolvedId);
  const [controlIsGroup, setControlIsGroup] = useControlIsGroup(false);

  const getControlProps = (controlProps) => {
    // labelledByIds from the list above should only be added to a control
    // if it the control is a group. We prefer adding a condition here because:
    //    - Hooks cannot be called inside conditionals
    //    - The getLabelProps function below is forced to generate an id
    //      whether it is needed or not.
    //    - This is what allows consumers of Paragon to use <Form.Label>
    //      interchangeably between ControlGroup type controls and regular Controls
    const labelledByIdsForControl = controlIsGroup ? labelledByIds : undefined;
    return omitEmptyProperties({
      ...controlProps,
      onBlur: callAllHandlers(controlProps.onBlur, onBlur),
      onFocus: callAllHandlers(controlProps.onFocus, onFocus),
      onChange: callAllHandlers(controlProps.onChange, onChange),
      'aria-describedby': classNames(controlProps['aria-describedby'], describedByIds),
      'aria-labelledby': classNames(controlProps['aria-labelledby'], labelledByIdsForControl),
      id: resolvedId,
    });
  };

  const getLabelProps = (labelProps) => {
    const id = useLabellerId(labelProps?.id);
    if (controlIsGroup) {
      return { ...labelProps, id };
    }
    return { ...labelProps, htmlFor: resolvedId };
  };

  const getDescriptorProps = (descriptorProps) => {
    const id = useDescriptorId(descriptorProps?.id);
    return { ...descriptorProps, id };
  };

  const contextValue = {
    getControlProps,
    getLabelProps,
    getDescriptorProps,
    setControlIsGroup,
    controlIsGroup,
    controlId: resolvedId,
    isInvalid,
    isValid,
    size,
  };
  return (
    <FormControlContext.Provider value={contextValue}>
      {children}
    </FormControlContext.Provider>
  );
};

FormControlContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  controlId: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};

FormControlContextProvider.defaultProps = {
  controlId: undefined,
  isInvalid: undefined,
  isValid: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  size: undefined,
};

export {
  FormControlContext,
  FormControlContextProvider,
  useFormControlContext,
};
