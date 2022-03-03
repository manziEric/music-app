import { render } from '@testing-library/react';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

describe('renders ErrorMessage container', () => {
  it('render ErrorMessage container', () => {
    const { getByTestId } = render(<ErrorMessage>Test message</ErrorMessage>);
    expect(getByTestId('errorMessage')).toBeInTheDocument();
  });
});
