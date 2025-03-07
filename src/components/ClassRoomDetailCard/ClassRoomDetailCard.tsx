import {
    Button,
    Card,
    CardContent,
    cardContentClasses,
    CardHeader,
    cardHeaderClasses,
    IconButton,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import { ArrowBackIosNew, Close } from "@mui/icons-material";
import { QRCodeSVG } from "qrcode.react";
import { CopyButton } from "../shared/CopyButton";

export const ClassRoomDetailCard: React.FC = () => {
    return (
        <CardRoot>
            <CardHeader
                disableTypography
                title={
                    <Button
                        color="inherit"
                        size="small"
                        startIcon={<ArrowBackIosNew />}
                    >
                        Back To Class List
                    </Button>
                }
                action={
                    <IconButton>
                        <Close />
                    </IconButton>
                }
            />
            <CardContent>
                <Stack spacing={2}>
                    <CardText gutterBottom>Join 302 Science</CardText>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CardText>ID: XH8E9647</CardText>
                            <CopyButton />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CardText>Link</CardText>
                            <CopyButton />
                        </Stack>
                    </Stack>
                    <QRCodeSVG
                        size={500}
                        marginSize={1}
                        value="https://www.classswift.viewsonic.io/"
                    />
                    <Typography align="center" fontSize="0.7rem">
                        Version 1.1.7
                    </Typography>
                </Stack>
            </CardContent>
        </CardRoot>
    );
};

const CardRoot = styled(Card, { name: "Card" })(
    ({ theme }) => `
    .${cardHeaderClasses.root} {
        padding: ${theme.spacing(1)}
    }
    .${cardContentClasses.root} {
        padding: ${theme.spacing(1, 3)}
    }
`
);

const CardText = styled(Typography, { name: "CardText" })(
    ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold}
`
);
