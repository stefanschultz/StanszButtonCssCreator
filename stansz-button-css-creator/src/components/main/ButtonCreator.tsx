import React from "react";
import { Container, Grid } from "semantic-ui-react";

import { ButtonCreatorWrapper } from "./styles/ButtonCreator.styled";
import ButtonOptions from "./ButtonOptions";
import ButtonPreview from "./ButtonPreview";

function ButtonCreator() {
    return (
        <ButtonCreatorWrapper>
            <Container>
                <Grid>
                    
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <ButtonPreview />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <ButtonOptions />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </ButtonCreatorWrapper>
    );
}

export default ButtonCreator;