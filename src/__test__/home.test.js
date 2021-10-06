import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

it('expect to render home components', () => {
  const result = renderer.create(<Home />).toJSON;
  expect(result).toMatchSnapshot();
});
