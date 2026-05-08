import { createRoot } from "react-dom/client";
import "@uswds/uswds/css/uswds.css";
import "./index.css";
import App from "./App";

document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(<App />);
