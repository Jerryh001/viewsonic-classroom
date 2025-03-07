import { ContentCopy } from "@mui/icons-material";
import { Button, buttonClasses, ButtonProps, styled } from "@mui/material";

export const CopyButton: React.FC<ButtonProps> = (props) => {
    return (
        <CopyButtonRoot variant="contained" size="small" {...props}>
            <ContentCopy />
        </CopyButtonRoot>
    );
};

/**
 * Make the Button look like IconButton with "contained" variant
 */
const CopyButtonRoot = styled(Button, { name: "CopyButtonRoot" })`
    min-width: 0px;

    // hard-coded from MUI
    padding: 6px;

    &.${buttonClasses.sizeSmall} {
        // hard-coded from MUI
        padding: 4px;
    }
`;
