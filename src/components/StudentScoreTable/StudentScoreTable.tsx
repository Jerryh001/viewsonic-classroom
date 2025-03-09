import { Grid2 } from "@mui/material";
import { StudentScoreCard } from "../StudentScoreCard";
import { classRoomApi } from "../../redux/api";

export const StudentScoreTable: React.FC = () => {
    const { data: students } =
        classRoomApi.useListClassRoomStudentsQuery("XH8E9647");

    return (
        <Grid2 container spacing={2} justifyContent="space-evenly">
            {students?.map((student) => (
                <Grid2 key={student.seatNumber}>
                    <StudentScoreCard student={student} />
                </Grid2>
            ))}
        </Grid2>
    );
};
