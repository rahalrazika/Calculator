import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/quotes';

it('expect to render home components', () => {
  const result = renderer.create(<Quotes />).toJSON;
  expect(result).toMatchSnapshot();
});
