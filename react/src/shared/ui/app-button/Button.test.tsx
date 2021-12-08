import { render } from '@testing-library/react';
import { Button } from './Button';

describe('app button component', () => {
  it('should render properly', () => {
    const { container } = render(<Button title="test" onClick={() => ({})} />);
    expect(container).toBeTruthy();
  });

  it('should render provided title on it', () => {
    const { getByText } = render(<Button title="test" onClick={() => ({})} />);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('should have provided title as button text', () => {
    const { getByTestId } = render(
      <Button title="test" onClick={() => ({})} />,
    );
    expect(getByTestId('button')).toHaveTextContent('test');
  });

  it('should call provided onClick handler once', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button title="test" onClick={onClick} />);
    getByTestId('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
