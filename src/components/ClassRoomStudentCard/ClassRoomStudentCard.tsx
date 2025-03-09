import { useCallback, useState } from "react";
import { Card, CardHeader, IconButton, Stack, styled } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Close } from "@mui/icons-material";
import { ClassRoomTitle } from "./ClassRoomTitle";
import { ClassRoomTabList, ClassRoomTabListProps } from "./ClassRoomTabList";

export const ClassRoomStudentCard: React.FC = () => {
    const [tab, setTab] = useState("STUDENT");

    const onTabChange = useCallback<
        NonNullable<ClassRoomTabListProps["onChange"]>
    >((_event, value: string) => {
        setTab(value);
    }, []);

    return (
        <CardRoot>
            <CardHeader
                action={
                    <IconButton>
                        <Close />
                    </IconButton>
                }
            />
            <Stack flex={1} spacing={3}>
                <ClassRoomTitle />
                <Stack flex={1}>
                    <TabContext value={tab}>
                        <ClassRoomTabList onChange={onTabChange} />
                        <StyledTabPanel value="STUDENT">STUDENT</StyledTabPanel>
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
`
);
