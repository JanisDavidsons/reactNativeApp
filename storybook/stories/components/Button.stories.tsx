import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from '../../../src/components/Button';

import { Alert } from 'react-native';

storiesOf('Button', module).add('default', () => <Button title={'Press me'} onPress = {()=> Alert.alert('pressed')} />);
