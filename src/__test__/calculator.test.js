import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('expect to render home components', () => {
  const result = renderer.create(<App />).toJSON;
  expect(result).toMatchSnapshot();
});

it('expect to render home components', () => {
  const result = renderer.create(<App result="0" />).toJSON;
  expect(result).toMatchSnapshot();
});
