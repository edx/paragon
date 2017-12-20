import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Modal.scss';
import Button, { buttonPropTypes } from '../Button';
import newId from '../utils/newId';

const modalRootId = 'modal-root';
let modalRoot = document.getElementById(modalRootId);

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setXButton = this.setXButton.bind(this);
    this.setCloseButton = this.setCloseButton.bind(this);

    this.headerId = newId();
    this.el = document.createElement('div');

    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = modalRootId;
      document.body.appendChild(modalRoot);
    }

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.open && !prevState.open) {
      this.xButton.focus();
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  setXButton(input) {
    this.xButton = input;
  }

  setCloseButton(input) {
    this.closeButton = input;
  }

  close() {
    this.setState({ open: false });
    this.props.onClose();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    } else if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (e.target === this.xButton) {
          e.preventDefault();
          this.closeButton.focus();
        }
      } else if (e.target === this.closeButton) {
        e.preventDefault();
        this.xButton.focus();
      }
    }
  }

  renderButtons() {
    return this.props.buttons.map((button, i) => {
      let buttonElement = button;
      let buttonProps = button.props;

      if (button.type !== Button) {
        buttonProps = button;
      }

      buttonElement = (<Button
        {...buttonProps}
        key={i}
        onKeyDown={this.handleKeyDown}
      />);

      return buttonElement;
    });
  }

  renderBody() {
    let { body } = this.props;

    if (typeof body === 'string') {
      body = <p>{body}</p>;
    }

    return body;
  }

  renderModal() {
    const { open } = this.state;

    return (
      <div
        className={classNames(
          styles.modal,
          {
            [styles['modal-open']]: open,
            [styles['modal-backdrop']]: open,
            [styles.show]: open,
            [styles.fade]: !open,
          },
        )}
        role="dialog"
        aria-modal
        aria-labelledby={this.headerId}
      >
        <div className={styles['modal-dialog']}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h5 className={styles['modal-title']} id={this.headerId}>{this.props.title}</h5>
              <Button
                label={<span aria-hidden="true">&times;</span>}
                aria-label={this.props.closeText}
                buttonType="light"
                onClick={this.close}
                inputRef={this.setXButton}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className={styles['modal-body']}>
              {this.renderBody()}
            </div>
            <div className={styles['modal-footer']}>
              {this.renderButtons()}
              <Button
                label={this.props.closeText}
                buttonType="secondary"
                onClick={this.close}
                inputRef={this.setCloseButton}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.renderModal(),
      this.el,
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape(buttonPropTypes),
  ])),
  closeText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  open: false,
  buttons: [],
  closeText: 'Close',
};


export default Modal;
