
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.tsx'

// Make sure we're targeting the correct root element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <ThemeProvider defaultTheme="light">
    <App />
  </ThemeProvider>
);
