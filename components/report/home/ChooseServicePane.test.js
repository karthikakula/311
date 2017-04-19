// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import ChooseServicePane from './ChooseServicePane';

const SERVICE_SUMMARIES = [{
  name: 'Cosmic Incursion',
  code: 'CSMCINC',
  hasMetadata: true,
  locationRequired: true,
}];

describe('rendering', () => {
  test('some suggested summaries', () => {
    const component = renderer.create(
      <ChooseServicePane description="Thanos is attacking" handleDescriptionChanged={jest.fn()} suggestedServiceSummaries={SERVICE_SUMMARIES} />,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('no suggested summaries', () => {
    const component = renderer.create(
      <ChooseServicePane description="Thanos is attacking" handleDescriptionChanged={jest.fn()} suggestedServiceSummaries={[]} />,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('loading', () => {
    const component = renderer.create(
      <ChooseServicePane description="Thanos is attacking" handleDescriptionChanged={jest.fn()} suggestedServiceSummaries={null} />,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('no description', () => {
    const component = renderer.create(
      <ChooseServicePane description="" handleDescriptionChanged={jest.fn()} suggestedServiceSummaries={[]} />,
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});