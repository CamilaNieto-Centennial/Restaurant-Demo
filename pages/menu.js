import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React from 'react'

import {
    Title,
    Text,
    Anchor,
    rem,
    createStyles,
    Paper,
    Image,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    full_container: {
        height: `calc(100vh - 60px)`,
        position: 'relative',
        background: 'linear-gradient(20deg, purple, darkslateblue);',
    },

    form_container: {
      width: '50%',
      height: '100%',
      float: 'left',
      position: 'relative',
      [theme.fn.smallerThan('sm')]: {
          width: '100%',
      },
    },

    image_container: {
      width: '50%',
      height: '100%',
      float: 'left',
      background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/credit_card1.png") center/cover no-repeat',
      
      [theme.fn.smallerThan('sm')]: {
          display: 'none',
      },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

export function Menu() {
    const { classes } = useStyles();

    return (
      <h1>Menu</h1>
    );
}



/* Set the Global User Context to Menu Component */
export default function MenuWithContext(){
  return (
  <>
    <NavBar />
    <UserProvider>
      <Menu />
    </UserProvider>
  </>
  )
}
