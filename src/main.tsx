import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import App from "./App";
import { theme } from "./theme";
import { store } from "./redux/store";

if (import.meta.env.DEV) {
    const { configureWorker } = await import("./mockServer/browser");
    const worker = configureWorker();
    await worker.start();
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
