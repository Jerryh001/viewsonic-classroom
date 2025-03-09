import { Container, Stack, Typography } from "@mui/material";
import { ClassRoomDetailCard } from "./components/ClassRoomDetailCard";
import { ClassRoomStudentCard } from "./components/ClassRoomStudentCard";
import { useSelector } from "react-redux";
import { layoutSlice } from "./redux/slices";

function App() {
    const detailCardOpened = useSelector(
        layoutSlice.selectors.selectDetailCard
    );

    const studentCardOpened = useSelector(
        layoutSlice.selectors.selectStudentCard
    );

    return (
        <Container maxWidth={false}>
            <Typography variant="h1">Class Room Demo</Typography>
            <Stack direction="row" spacing={1} height={700}>
                {detailCardOpened && <ClassRoomDetailCard />}
                {studentCardOpened && <ClassRoomStudentCard />}
            </Stack>
        </Container>
    );
}

export default App;
