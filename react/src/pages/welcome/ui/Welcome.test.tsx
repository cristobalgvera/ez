import { render } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('welcome page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Welcome />);
    expect(container).toBeInTheDocument();
  });

  it('should render basic counter feature', () => {
    const { getByTestId } = render(<Welcome />);
    expect(getByTestId('basic-counter')).toBeInTheDocument();
  });
});
