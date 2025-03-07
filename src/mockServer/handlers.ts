import { http, HttpResponse } from "msw";
import { backendUrl } from "./util";
import { classRoom, classRoomStudents } from "./mockData";
import { API } from "../types/api";

export const handlers = [
    http.get<{ id: string }, null, API.ClassRoom.Get.Response>(
        backendUrl("/classrooms/:id"),
        ({ params }) => {
            if (params.id === undefined) {
                return HttpResponse.json(null, { status: 400 });
            }
            // I assume the request is correct since it just a mock server

            return HttpResponse.json(classRoom);
        }
    ),
    http.get<{ id: string }, null, API.ClassRoom.ListStudents.Response>(
        backendUrl("/classrooms/:id/students"),
        ({ params }) => {
            if (params.id === undefined) {
                return HttpResponse.json(null, { status: 400 });
            }
            // I assume the request is correct since it just a mock server

            return HttpResponse.json(classRoomStudents);
        }
    ),
];
