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
import { classRoomApi } from "../../redux/api";
import { useCallback, useMemo } from "react";
import { layoutSlice } from "../../redux/slices";
import { useDispatch } from "react-redux";

export const ClassRoomDetailCard: React.FC = () => {
    const dispatch = useDispatch();
    const { data: classRoom } = classRoomApi.useGetClassRoomQuery("XH8E9647");

    /** assume the link should be pass from somewhere else or need some preprocess */
    const link = useMemo(() => "https://www.classswift.viewsonic.io/", []);

    const closeCard = useCallback(() => {
        dispatch(layoutSlice.actions.closeDetailCard());
    }, [dispatch]);

    const copyID = useCallback(async () => {
        if (!classRoom?.id) return;
        try {
            await navigator.clipboard.writeText(classRoom.id);
        } catch (error) {
            console.error(error);
        }
    }, [classRoom?.id]);

    const copyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(link);
        } catch (error) {
            console.error(error);
        }
    }, [link]);

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
                    <IconButton onClick={closeCard}>
                        <Close />
                    </IconButton>
                }
            />
            <CardContent>
                <Stack spacing={2}>
                    <CardText gutterBottom>{`Join ${
                        classRoom?.name ?? ""
                    }`}</CardText>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CardText>{`ID: ${classRoom?.id ?? ""}`}</CardText>
                            <CopyButton onClick={copyID} />
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <CardText>Link</CardText>
                            <CopyButton onClick={copyLink} />
                        </Stack>
                    </Stack>
                    <QRCodeSVG size={500} marginSize={1} value={link} />
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
