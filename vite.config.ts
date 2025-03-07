import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    server: {
        proxy: {
            /**
             * In the official documentation, msw worker need to be installed to the root of the server
             * I redirect the request of the file to simulate the behavior without install
             */
            "/mockServiceWorker.js": {
                bypass() {
                    const fileURL = import.meta.resolve(
                        "msw/mockServiceWorker.js"
                    );
                    // includes the first slash
                    const path = fileURLToPath(fileURL, { windows: false });
                    return `/@fs${path}`;
                },
            },
        },
    },
    plugins: [react()],
});
