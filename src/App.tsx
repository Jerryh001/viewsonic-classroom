import { Container, Stack, Typography } from "@mui/material";
import { ClassRoomDetailCard } from "./components/ClassRoomDetailCard";
import { ClassRoomStudentCard } from "./components/ClassRoomStudentCard";

function App() {
    return (
        <Container maxWidth={false}>
            <Typography variant="h1">Class Room Demo</Typography>
            <Stack direction="row" spacing={1} height={700}>
                <ClassRoomDetailCard />
                <ClassRoomStudentCard />
            </Stack>
        </Container>
    );
}

export default App;
