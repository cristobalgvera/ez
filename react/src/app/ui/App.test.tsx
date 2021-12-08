import { render } from '@testing-library/react';
import { App } from './App';

describe('app component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('should render welcome page', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('welcome-page')).toBeInTheDocument();
  });
});
