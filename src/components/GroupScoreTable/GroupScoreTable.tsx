import { Divider, Grid2, Stack } from "@mui/material";
import { StudentScoreCard } from "../StudentScoreCard";
import { classRoomApi } from "../../redux/api";
import { useMemo } from "react";

export const GroupScoreTable: React.FC = () => {
    const { data: students } =
        classRoomApi.useListClassRoomStudentsQuery("XH8E9647");

    const groupedStudents = useMemo(
        () => (students ? Object.groupBy(students, (s) => s.groupId) : {}),
        [students]
    );

    return (
        <Stack spacing={2} divider={<Divider />}>
            {Object.entries(groupedStudents).map(([id, students]) =>
                id === "0" ? null : (
                    <Grid2 key={id} container spacing={2}>
                        {students?.map((student) => (
                            <Grid2 key={student.seatNumber}>
                                <StudentScoreCard student={student} />
                            </Grid2>
                        ))}
                    </Grid2>
                )
            )}
        </Stack>
    );
};
