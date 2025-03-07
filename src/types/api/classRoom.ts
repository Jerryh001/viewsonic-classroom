import { Resource } from "../resource";

export namespace Get {
    // `Request` is for the payload (body), not used in this demo
    // export type Request = void
    export type Response = Resource.ClassRoom.ClassRoom;
}

export namespace ListStudents {
    export type Response = Resource.ClassRoom.Student[];
}
