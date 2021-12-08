import { render } from '@testing-library/react';
import { Counter } from './Counter';

describe('basic counter feature', () => {
  it('renders without crashing', () => {
    const { container } = render(<Counter />);
    expect(container).toBeInTheDocument();
  });

  it('increase count number in two when increase button is pressed twice', () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText('Increment');
    const countNumber = getByText('0');

    increaseButton.click();
    increaseButton.click();

    expect(countNumber.textContent).toBe('2');
  });

  it('decrease count number in two when decrease button is pressed twice', () => {
    const { getByText } = render(<Counter />);
    const decreaseButton = getByText('Decrement');
    const countNumber = getByText('0');

    decreaseButton.click();
    decreaseButton.click();

    expect(countNumber.textContent).toBe('-2');
  });
});
