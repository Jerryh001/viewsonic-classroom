import { http, HttpResponse } from "msw";
import { backendUrl } from "./util";

export const handlers = [
    http.get<{ id: string }, null, {} | null>(
        backendUrl("/classroom/:id"),
        ({ params }) => {
            if (params.id === undefined) {
                return HttpResponse.json(null, { status: 400 });
            }
            // I assume the request is correct since it just a mock server

            return HttpResponse.json({});
        }
    ),
    http.get<{ id: string }, null, string[] | null>(
        backendUrl("/classroom/:id/students"),
        ({ params }) => {
            if (params.id === undefined) {
                return HttpResponse.json(null, { status: 400 });
            }
            // I assume the request is correct since it just a mock server

            return HttpResponse.json([]);
        }
    ),
];
