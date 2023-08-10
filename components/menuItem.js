import React from 'react';
import { useState } from 'react';

import { createStyles, Title, Text, Image, } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    roundImg: {
        borderRadius: "50%",
        outlineOffset: "5px",
        marginBottom: ".8em",
    },
    redCircle: {
        outline: "3px solid #C53030",
        boxShadow: "4px 4px 20px 6px rgba(229, 62, 62, 0.3)",
        animation: "rotate-center 0.6s ease-in-out both",
    },
    blackCircle: {
        outline: "3px solid #000",
        boxShadow: "4px 4px 20px 6px rgba(0, 0, 0, 0.3)",
    },
    redText: {
        color: "#C53030"
    },
    blackText: {
        color: "#000"
    },

}));

export default function menuItem(props) {
    const { classes } = useStyles();
    const [active, setActive] = useState(false);

    function handleClick() {
        console.log(`${props.title} Clicked`);
        setActive(!active);
    }

    function handleBlur() {
        setActive(false);
    };

    return (
        <div onClick={handleClick} onBlur={handleBlur} tabIndex={0}>
            <img className={`${classes.roundImg} ${active ? classes.redCircle : classes.blackCircle}`} radius="md" href="/" width={240} src={props.img} alt={props.title} />
            <Title className={active ? classes.redText : classes.blackText} span order={4} ta="center">{props.title} <Text span inherit component="a" href="https://mantine.dev/core/"> &gt;</Text></Title>
        </div>
    )
}
