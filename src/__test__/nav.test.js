import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../components/nav';

it('expect to render Nav components', () => {
  const result = renderer.create(
    <Router>
      <Nav />
    </Router>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
