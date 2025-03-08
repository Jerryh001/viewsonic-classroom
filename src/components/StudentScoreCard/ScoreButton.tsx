import { Button, ButtonProps, styled } from "@mui/material";

export const ScoreButton: React.FC<ButtonProps> = (props) => {
    return <ScoreButtonRoot variant="contained" size="small" {...props} />;
};

const ScoreButtonRoot = styled(Button)`
    min-width: 0;
    line-height: 1;
`;
