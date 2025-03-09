import {
    darken,
    IconButton,
    Stack,
    styled,
    Tab,
    tabClasses,
    tabsClasses,
} from "@mui/material";
import { TabList, TabListProps } from "@mui/lab";
import { MoreVert } from "@mui/icons-material";

export interface ClassRoomTabListProps extends TabListProps {
    onMenuOpen?(): void;
}

export const ClassRoomTabList: React.FC<ClassRoomTabListProps> = ({
    onMenuOpen,
    ...props
}) => {
    return (
        <Stack
            paddingLeft={2}
            paddingRight={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <TabListRoot {...props}>
                <Tab label="Student List" value="STUDENT" />
                <Tab label="Group" value="GROUP" />
            </TabListRoot>
            <IconButton onClick={onMenuOpen}>
                <MoreVert />
            </IconButton>
        </Stack>
    );
};

const TabListRoot = styled(TabList)(
    ({ theme }) => `
    .${tabsClasses.indicator} {
        // hide the indicator bar
        display: none;
    }
    .${tabClasses.root} {
        margin: ${theme.spacing(0, 0.5)};
        background-color: ${darken(theme.palette.background.paper, 0.1)};
        border-top-left-radius: ${theme.shape.borderRadius}px;
        border-top-right-radius: ${theme.shape.borderRadius}px;
        &.${tabClasses.selected} {
            background-color: ${theme.palette.background.default};
        }
    }
`
);
