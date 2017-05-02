// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import LocationMap from './LocationMap';
import { AppStore } from '../../data/store';

const makeStore = () => {
  const store = new AppStore();
  store.apiKeys = window.API_KEYS;
  return store;
};

storiesOf('LocationMap', module)
  .addDecorator((story) => (
    <div style={{ width: '100vw', height: '100vh' }}>{ story() }</div>
  ))
  .add('inactive', () => (
    <LocationMap store={makeStore()} mode="inactive" />
  ))
  .add('picker', () => (
    <LocationMap store={makeStore()} mode="picker" />
  ));