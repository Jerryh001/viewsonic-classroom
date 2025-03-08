import { API } from "../../types/api";
import { api } from "./baseApi";

export const classRoomApi = api.injectEndpoints({
    endpoints: (build) => ({
        getClassRoom: build.query<API.ClassRoom.Get.Response, string>({
            query: (arg) => `/classrooms/${arg}`,
        }),
        listClassRoomStudents: build.query<
            API.ClassRoom.ListStudents.Response,
            string
        >({
            query: (arg) => `/classrooms/${arg}/students`,
        }),
    }),
});
