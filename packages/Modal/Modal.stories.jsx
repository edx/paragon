import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';

import Modal from './index';
import Button from '../Button';
import InputText from '../InputText';

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: false };
  }

  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
    this.button.focus();
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          title={this.props.title}
          body={this.props.body}
          onClose={this.resetModalWrapperState}
        />
        <Button
          onClick={this.openModal}
          display="Click me to open a modal!"
          buttonType="light"
          inputRef={(input) => { this.button = input; }}
        />
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

ModalWrapper.defaultProps = {
  open: false,
};

storiesOf('Modal', module)
  .add('basic usage', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      onClose={() => {}}
    />
  ))
  .add('configurable buttons', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button
          display="Blue button!"
          buttonType="primary"
        />,
        {
          display: 'Red button!',
          buttonType: 'danger',
        },
        <Button
          display="Green button!"
          buttonType="success"
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable title and body', () => (
    <Modal
      open
      title="Custom title!"
      body="Custom body!"
      buttons={[
        <Button
          display="Dark button!"
          buttonType="dark"
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable buttons that perform actions', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      buttons={[
        <Button
          display="Click me and check the console!"
          buttonType="light"
          onClick={action('button-click')}
        />,
      ]}
      onClose={() => {}}
    />
  ))
  .add('configurable close button', () => (
    <Modal
      open
      title="Modal title."
      body="Modal body."
      closeText="SHOO!"
      onClose={() => {}}
    />
  ))
  .add('modal invoked via a button', () => (
    <ModalWrapper
      title="I am the modal!"
      body="I was invoked by a button!"
    />
  ))
  .add('modal with element body', () => (
    <Modal
      open
      title="Modal title."
      body={(
        <div>
          <p>Enter your e-mail address to receive free cat facts!</p>
          <InputText
            name="e-mail"
            label="E-Mail Address"
          />
          <Button
            display="Get my facts!"
          />
        </div>
      )}
      onClose={() => {}}
    />
  ));
