import { render } from '@testing-library/react';
import Text from 'components/text/Text';

describe('renders Text container', () => {
  it('render Text container', () => {
    const { getByTestId } = render(
      <Text title="Test text component" text="test component" />
    );
    expect(getByTestId('text')).toBeInTheDocument();
  });
});
