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
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "unset",
                },
            },
        },
    },
});
