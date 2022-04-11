import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '@app/ui';

const container = document.getElementById('app') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
