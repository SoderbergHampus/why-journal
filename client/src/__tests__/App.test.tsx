import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import App from '../App';

describe('describe', () => {
  test('This test that page loads', async () => {
    render(<App />);
    expect(screen.getByTestId('main-heading')).toBeDefined();
  });
});
