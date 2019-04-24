import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
 
const stories = storiesOf('Storybook Knobs', module);
 
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// color selection
const colorLabel = 'Color';
const colorOptions = {
  Red: 'red',
  Orange: 'orange',
  Brown: 'brown',
  Green: 'green',
};
const colorDefaultValue = 'red';

// size selection
const sizeLabel = 'Size';
const sizeOptions = {
  Small: 'small',
  Normal: 'medium',
  Large: 'large',
};
const sizeDefaultValue = 'medium';
 
// Knobs for React props
stories.add('with a button', () => (
  <Button 
    disabled={boolean('Disabled', false)}
    text={text('Label', 'Hello Storybook')}
    color={select(colorLabel, colorOptions, colorDefaultValue)}
    size={select(sizeLabel, sizeOptions, sizeDefaultValue)}
   />
));