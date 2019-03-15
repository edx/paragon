import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import Icon from './index';
import README from './README.md';

storiesOf('Icon', module)
  .addDecorator(withInfo)
  .addDecorator(withA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <Icon
      className={[
        FontAwesomeStyles.fa,
        FontAwesomeStyles['fa-birthday-cake'],
        FontAwesomeStyles['fa-4x'],
      ]}
    />
  ))
  .add('with screenreader text', () => (
    <Icon
      id="SampleIcon"
      className={[
        FontAwesomeStyles.fa,
        FontAwesomeStyles['fa-smile-o'],
        FontAwesomeStyles['fa-4x'],
      ]}
      screenReaderText="Happy Icon"
    />
  ));
