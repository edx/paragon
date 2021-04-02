import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FormRadioSetContextProvider } from './FormRadioSetContext';

const FormRadioSet = ({
  children,
  name,
  value,
  defaultValue,
  isInline,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const { getControlProps, setControlIsGroup } = useFormGroupContext();
  setControlIsGroup(true);
  const controlProps = getControlProps(props);
  const className = classNames(
    'pgn__form-radio-group',
    props.className,
    { 'pgn__form-radio-group-inline': isInline },
  );
  return (
    <FormRadioSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div
        role="radiogroup"
        className={className}
        {...controlProps}
      >
        {children}
      </div>
    </FormRadioSetContextProvider>
  );
};

FormRadioSet.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-describedby': PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  isInline: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

FormRadioSet.defaultProps = {
  className: undefined,
  'aria-describedby': undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

export default FormRadioSet;
