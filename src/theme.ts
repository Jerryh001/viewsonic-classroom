import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0b8dee",
        },
        background: {
            paper: "#f6f6f6",
        },
        success: {
            main: "#78ca3b",
            contrastText: "white",
        },
        error: {
            main: "#ed486c",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "unset",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "unset",
                },
            },
        },
    },
});
