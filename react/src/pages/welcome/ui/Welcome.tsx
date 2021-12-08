import { BasicCounter } from '@features/basic-counter';

export function Welcome() {
  return (
    <div
      data-testid="welcome-page"
      className="h-screen flex flex-col items-center justify-center gap-y-4"
    >
      <div className="my-4 text-center">
        <h1 className="text-6xl font-bold text-pink-500 animate-bounce">
          EZ React
        </h1>
      </div>
      <BasicCounter />
    </div>
  );
}
