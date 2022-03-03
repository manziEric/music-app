import { render } from '@testing-library/react';
import ButtonContainer from 'components/input/ButtonContainer';
import Input from 'components/input/Input';

describe('renders button container', () => {
  it('render button container', () => {
    const { getByTestId } = render(
      <ButtonContainer id={1}>Test</ButtonContainer>
    );
    expect(getByTestId('buttonContainer')).toBeInTheDocument();
  });
  it('render button input', () => {
    const { getByTestId } = render(<Input id={1} name="testInput" />);
    expect(getByTestId('input')).toBeInTheDocument();
  });
});
