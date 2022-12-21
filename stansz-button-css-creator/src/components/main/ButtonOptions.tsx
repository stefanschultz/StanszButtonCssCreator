import React from "react";
import ButtonOptionsAccordionCard from "./ButtonOptionsAccordionCard";

interface IOptionCard {
    accordionIndex: number;
    initialCollapsed: boolean;
    title: string;
}

function ButtonOptions() {
    const optionCards: IOptionCard[] = [
        {
            accordionIndex: 0,
            initialCollapsed: false,
            title: 'Button: Basics'
        },
        {
            accordionIndex: 1,
            initialCollapsed: true,
            title: 'Button: Text Shadow'
        },
        {
            accordionIndex: 2,
            initialCollapsed: true,
            title: 'Button: Box Shadow'
        },
        {
            accordionIndex: 3,
            initialCollapsed: true,
            title: 'Button: Border'
        },
        {
            accordionIndex: 4,
            initialCollapsed: true,
            title: 'Button: Background'
        },
        {
            accordionIndex: 5,
            initialCollapsed: true,
            title: 'Button: Hover'
        },
    ];

    const getOptionCards = () => {
        return (
            optionCards.map(m => (
                <ButtonOptionsAccordionCard
                    accordionIndex={m.accordionIndex}
                    initialCollapsed={m.initialCollapsed}
                    title={m.title}
                >
                    {m.title}
                </ButtonOptionsAccordionCard>
            ))
        );
    };

    return (
        <div className="ButtonOptions">
            {getOptionCards()}
        </div>
    );
}

export default ButtonOptions;