import React, {useState} from "react";
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react";

interface Props {
    accordionIndex: number;
    initialCollapsed: boolean;
    title: string;
    children: React.ReactNode;
}

const ButtonOptionsAccordionCard: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(props.initialCollapsed === true ? -1 : props.accordionIndex);
    
    const handleClickAccordionCollapsing = (event: any, titleProps: AccordionTitleProps) => {
        console.log(titleProps);
        
        let currentActiveIndex = activeIndex;
        let newIndex = -1;

        if (typeof titleProps.index === 'number')
            newIndex = currentActiveIndex === titleProps.index ? -1 : titleProps.index;
        else if (typeof titleProps.index === 'string')
            newIndex = currentActiveIndex === parseInt(titleProps.index) ? -1 : parseInt(titleProps.index);

        setActiveIndex(newIndex);
    };

    return (
        <div className="ButtonOptionsAccordionCard">
            <Accordion styled>
                <Accordion.Title
                    active={activeIndex === props.accordionIndex}
                    index={props.accordionIndex}
                    onClick={handleClickAccordionCollapsing}
                >
                    <Icon name="dropdown" />
                    {props.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === props.accordionIndex}>
                    {props.children}
                </Accordion.Content>
            </Accordion>
        </div>
    );
}

export default ButtonOptionsAccordionCard;