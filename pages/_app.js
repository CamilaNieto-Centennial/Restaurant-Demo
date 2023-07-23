/* Global styles fixed with this strategy */
import '../styles/globals.css'
import React, { useState } from 'react';

import {
    MantineProvider,
    ColorSchemeProvider,
    Container,
} from '@mantine/core';

export default function MyApp({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const containerStyles = {
        backgroundColor: colorScheme === 'dark' ? '#1F2937' : undefined,
        color: colorScheme === 'dark' ? '#F9FAFB' : undefined,
    };

    // Define the custom theme
    const theme = {
        fontFamily: 'Open Sans, sans-serif',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
        components: {
            Button: {
                styles: {
                    root: { fontSize: 18 },
                },
            },
        },
        colors: {
            brand: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565', '#E53E3E', '#C53030', '#9B2C2C', '#822727', '#63171B'],
        },
        primaryColor: 'brand',
        colorScheme,
    }

    return (
        <MantineProvider theme={theme} >
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <Container fluid p={0} h={"100%"} style={containerStyles}>
                    <Component {...pageProps} />
                </Container>
            </ColorSchemeProvider>
        </MantineProvider>
    );
}
