import { createRoot } from "react-dom/client";
import First from "./first.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <First/>
        </StrictMode>
    )