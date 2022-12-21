import React from "react";
import { Card } from "semantic-ui-react";
import ButtonStyled from "./ButtonStyled";

import classes from "./styles/ButtonPreview.module.scss";
import { ButtonStyledAlignment } from "./styles/ButtonPreview.styled";

interface Props {
}

const ButtonPreview: React.FC<Props> = (props) => {
    return (
        <div className="ButtonPreview">
            <Card fluid>
                <Card.Content>
                    <Card.Header>Preview</Card.Header>
                </Card.Content>
                <Card.Content className={classes.card_content_size}>
                    {/* <ButtonStyledAlignment> */}
                        <ButtonStyled
                            text="My Button"
                        />
                    {/* </ButtonStyledAlignment> */}
                </Card.Content>
            </Card>
        </div>
    );
}

export default ButtonPreview;