import { useMemo } from "react";
import { Person } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { classRoomApi } from "../../redux/api";

export const ClassRoomTitle: React.FC = () => {
    const { data: classRoom } = classRoomApi.useGetClassRoomQuery("XH8E9647");
    const { data: students } =
        classRoomApi.useListClassRoomStudentsQuery("XH8E9647");

    const nonEmptyCount = useMemo(
        () =>
            students?.reduce((count, curr) => {
                if (!curr.student) {
                    return count;
                }

                return count + 1;
            }, 0) ?? 0,
        [students]
    );

    return (
        <Stack direction="row" alignItems="center" spacing={1} paddingLeft={3}>
            <Typography component="span" variant="h5" fontWeight={700}>
                {classRoom?.name}
            </Typography>
            <Person />
            <Typography component="span" variant="h5" fontWeight={700}>
                {`${nonEmptyCount} / ${students?.length ?? 0}`}
            </Typography>
        </Stack>
    );
};
