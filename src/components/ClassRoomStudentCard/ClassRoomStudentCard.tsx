import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardHeader, IconButton, Stack, styled } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Close } from "@mui/icons-material";
import { ClassRoomTitle } from "./ClassRoomTitle";
import { ClassRoomTabList, ClassRoomTabListProps } from "./ClassRoomTabList";
import { StudentScoreTable } from "../StudentScoreTable";
import { layoutSlice } from "../../redux/slices";

export const ClassRoomStudentCard: React.FC = () => {
    const dispatch = useDispatch();
    const [tab, setTab] = useState("STUDENT");

    const onTabChange = useCallback<
        NonNullable<ClassRoomTabListProps["onChange"]>
    >((_event, value: string) => {
        setTab(value);
    }, []);

    const closeCard = useCallback(() => {
        dispatch(layoutSlice.actions.closeStudentCard());
    }, [dispatch]);

    return (
        <CardRoot>
            <CardHeader
                action={
                    <IconButton onClick={closeCard}>
                        <Close />
                    </IconButton>
                }
            />
            <Stack flex={1} spacing={3} overflow="hidden">
                <ClassRoomTitle />
                <Stack flex={1} overflow="hidden">
                    <TabContext value={tab}>
                        <ClassRoomTabList onChange={onTabChange} />
                        <StyledTabPanel value="STUDENT">
                            <StudentScoreTable />
                        </StyledTabPanel>
                        <StyledTabPanel value="GROUP">GROUP</StyledTabPanel>
                    </TabContext>
                </Stack>
            </Stack>
        </CardRoot>
    );
};

const CardRoot = styled(Card)`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
    flex: 1;
    background-color: ${theme.palette.background.default};
    border-radius: ${theme.shape.borderRadius}px;
    box-shadow: ${theme.shadows[10]};
    overflow: auto
`
);
