import React from "react";

import { ButtonStyledElement } from "./styles/ButtonStyled.styled";

interface Props {
    text: string;
}

const ButtonStyled: React.FC<Props> = (props) => {
    return (
        <ButtonStyledElement>{props.text}</ButtonStyledElement>
    );
};

export default ButtonStyled;