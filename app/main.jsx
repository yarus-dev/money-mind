import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider  } from './utils/theme/provider'
import { App } from './components/App'
import './assets/global.css'



const container = document.getElementById("🤑");
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);