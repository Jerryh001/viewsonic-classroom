import { styled, Typography } from "@mui/material";
import { ScoreButton } from "./ScoreButton";
import { Resource } from "../../types/resource";
import { useCallback, useState } from "react";

export interface StudentScoreCardProps {
    student: Resource.ClassRoom.Student;
}

export const StudentScoreCard: React.FC<StudentScoreCardProps> = ({
    student,
}) => {
    const [score, setScore] = useState(student.score);

    const scoreIncrease = useCallback(() => {
        setScore((s) => s + 1);
    }, []);

    const scoreDecrease = useCallback(() => {
        setScore((s) => s - 1);
    }, []);

    const isEmptySeat = !student.student;

    const decreaseDisabled = isEmptySeat || score <= 0;
    const increaseDisabled = isEmptySeat;

    return (
        <CardRoot disabled={isEmptySeat}>
            <CardHeader disabled={isEmptySeat}>
                <Typography align="center">
                    {student.seatNumber.toString().padStart(2, "0")}
                </Typography>
            </CardHeader>
            <CardBody>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    color={isEmptySeat ? "textDisabled" : "textPrimary"}
                    align="center"
                >
                    {student.student?.name ?? "Guest"}
                </Typography>
            </CardBody>
            <CardFooter disabled={isEmptySeat}>
                <ScoreButton
                    color="error"
                    disabled={decreaseDisabled}
                    onClick={scoreDecrease}
                >
                    {"-1"}
                </ScoreButton>
                <Typography
                    flex={1}
                    align="center"
                    color={isEmptySeat ? "textDisabled" : "textPrimary"}
                >
                    {score}
                </Typography>
                <ScoreButton
                    color="success"
                    disabled={increaseDisabled}
                    onClick={scoreIncrease}
                >
                    {"+1"}
                </ScoreButton>
            </CardFooter>
        </CardRoot>
    );
};

interface CardRootProps {
    disabled?: boolean;
}

const CardRoot = styled("div")<CardRootProps>(
    ({ theme, disabled }) => `
    width: 150px;
    height: 150px;
    border: 2px solid ${
        disabled ? theme.palette.action.disabled : theme.palette.primary.main
    };
    border-radius: ${theme.shape.borderRadius}px;
    display: flex;
    flex-direction: column;
`
);

interface CardHeaderProps {
    disabled?: boolean;
}

const CardHeader = styled("div")<CardHeaderProps>(
    ({ theme, disabled }) => `
        color: ${theme.palette.primary.contrastText};
        background-color: ${
            disabled
                ? theme.palette.action.disabled
                : theme.palette.primary.main
        };
    `
);

const CardBody = styled("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

interface CardFooterProps {
    disabled?: boolean;
}

const CardFooter = styled("div")<CardFooterProps>(
    ({ theme, disabled }) => `
    display: flex;
    padding: ${theme.spacing(0.5)};
    align-items: center;
    border-top: 2px solid ${
        disabled ? theme.palette.action.disabled : theme.palette.primary.main
    };
`
);
