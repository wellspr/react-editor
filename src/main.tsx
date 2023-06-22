import "./sass/main.scss";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl as HTMLElement);
root.render(<App />);
