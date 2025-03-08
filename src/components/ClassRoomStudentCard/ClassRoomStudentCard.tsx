import { Card } from "@mui/material";
import { StudentScoreCard } from "../StudentScoreCard";
import { Resource } from "../../types/resource";

export const ClassRoomStudentCard: React.FC = () => {
    return (
        <Card>
            <StudentScoreCard student={s} />
        </Card>
    );
};

const s: Resource.ClassRoom.Student = {
    groupId: 0,
    score: 0,
    seatNumber: 1,
    student: {
        id: "aaa",
        name: "Name",
    },
};
