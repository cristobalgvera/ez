import { AppButton } from '@shared/ui';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      data-testid="basic-counter"
      className="flex flex-col items-center justify-center gap-y-4"
    >
      <div className="text-center">
        <p className="text-3xl font-semibold">{count}</p>
      </div>
      <div className="flex justify-center gap-x-2">
        <AppButton onClick={() => setCount(count - 1)} title="Decrement" />
        <AppButton onClick={() => setCount(count + 1)} title="Increment" />
      </div>
    </div>
  );
}
