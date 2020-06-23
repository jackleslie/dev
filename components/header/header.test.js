import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header';

const defaultTitle = 'Jack Leslie';

test('renders default title with no prop', () => {
  render(<Header />);
  expect(screen.getByText(defaultTitle)).toBeInTheDocument();
});

test('renders passed title prop with preceding slash', () => {
  const title = 'Blog';
  const renderedTitle = '/ Blog';
  render(<Header title={title} />);
  expect(screen.getByText(defaultTitle)).toBeInTheDocument();
  expect(screen.getByText(renderedTitle)).toBeInTheDocument();
});
