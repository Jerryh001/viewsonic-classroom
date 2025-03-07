import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export function configureWorker() {
    return setupWorker(...handlers);
}
