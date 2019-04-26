import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { withKnobs, text, } from '@storybook/addon-knobs';
 
const stories = storiesOf('Storybook Knobs', module);
 
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
 
// Knobs for React props
stories.add('Button', () => (
  <Button text={text('Name', 'Qualogy')} />
));