import { render } from '@testing-library/react';
import App from 'App';

it('renders app', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app')).toBeInTheDocument();
});
