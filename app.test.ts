import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

describe('app', () => {
  afterEach(cleanup);

  test('renders', () => {
    expect(true).toBeTruthy();
  });
});
