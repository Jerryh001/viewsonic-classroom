import { useCallback, useRef, useState } from "react";
import {
    darken,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Stack,
    styled,
    Tab,
    tabClasses,
    tabsClasses,
} from "@mui/material";
import { TabList, TabListProps } from "@mui/lab";
import {
    Check,
    MoreVert,
    NoMeetingRoom,
    RestartAlt,
} from "@mui/icons-material";

export type ClassRoomTabListProps = TabListProps;

export const ClassRoomTabList: React.FC<ClassRoomTabListProps> = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuIconRef = useRef<React.ComponentRef<typeof IconButton>>(null);

    const onClickMenuIcon = useCallback(() => {
        setMenuOpen(true);
    }, []);
    const onCloseMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

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
            <IconButton ref={menuIconRef} onClick={onClickMenuIcon}>
                <MoreVert />
            </IconButton>
            <Menu
                open={menuOpen}
                anchorEl={menuIconRef.current}
                onClose={onCloseMenu}
                // click any item will not close the menu by default
                onClick={onCloseMenu}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Check fontSize="small" />
                    </ListItemIcon>
                    Check Attendance
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <NoMeetingRoom fontSize="small" />
                    </ListItemIcon>
                    Dismiss Class
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <RestartAlt fontSize="small" />
                    </ListItemIcon>
                    Reset All Scores
                </MenuItem>
            </Menu>
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
