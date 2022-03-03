import { render } from '@testing-library/react';
import Sidebar from 'components/sidebar/Sidebar';

describe('renders Sidebar container', () => {
  it('render Sidebar container', () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId('sidebar')).toBeInTheDocument();
  });
});
