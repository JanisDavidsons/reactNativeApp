import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from '../../../src/components/Input';

storiesOf('Input', module)
    .add('empty input', () => <Input label="Sample" />)
    .add('focused input', () => <Input label="Sample" focused={true} />);