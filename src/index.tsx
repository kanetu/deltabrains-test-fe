import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")! as HTMLElement); // notice the '!'
root.render(<App />);
