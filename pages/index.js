import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React, { useState } from 'react';
import ImageCard from '../components/card';
import Footer from '../components/footer';
import Comment from '../components/comment';

import { createStyles, Overlay, Container, Title, Flex, Button, Text, rem, Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(/img/hero_2.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: '20% 50%',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  containerSmall: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  section: {
    marginTop: '30px',
    [theme.fn.smallerThan('md')]: {
      marginTop: '15px',
    },
  },

  titleSection: {
    fontFamily: 'Carter One, cursive',
    color: theme.red,
    fontSize: '50px',
    lineHeight: '5rem'
  },

  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
  },

  childEl: {
    position: 'relative',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  backItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },

  frontItem: {
    position: 'relative',
    zIndex: '1',
    marginTop: '69px', // 50 65
    marginLeft: '26px', // 15 25
  },

  borderImage: {
    border: "15px solid white",
    borderRadius: "50%",
  },

  textContainer: {
    maxWidth: "800px",
    marginLeft: theme.spacing.xl,
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.md,
      marginLeft: 0,
    },
  },

  imageSection: {
    position: 'relative',
    backgroundImage:
      'url(/img/kitchen_1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '20% 50%',
  },

}));

export function Home() {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>Lorem ipsum dolor sit amet</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lectus urna duis convallis convallis tellus id interdum.
          </Text>

          <Button variant="gradient" gradient={{ from: '#C53030', to: '#63171B' }} size="lg" radius="lg" className={classes.control}>
            Get started
          </Button>
        </Container>
      </div>
      {/*ABOUT*/}
      <Container className={classes.section}>
        <Flex
          mih={80}
          gap="lg"
          wrap="wrap"
          className={classes.flexContainer}
        >
          <div className={classes.childEl}>
            <div className={classes.backItem}>
              <img radius="md" src="/img/graph_2.png" alt="Back Image" width={300} />
            </div>
            <div className={classes.frontItem}>
              <img radius="md" src="/img/about_3.jpg" alt="About Image" width={240} className={classes.borderImage} />
            </div>
          </div>
          <div className={classes.textContainer}>
            <Title className={classes.titleSection}>About Us</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Diam donec adipiscing tristique risus nec feugiat. Quam vulputate dignissim suspendisse in est ante in.
            </Text>
            <Text>
              Senectus et netus et malesuada. Tortor aliquam nulla facilisi cras. Auctor urna nunc id cursus. Ut pharetra sit amet aliquam. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Quis lectus nulla at volutpat diam ut venenatis. Ut diam quam nulla porttitor massa id. Bibendum at varius vel pharetra vel turpis. Interdum velit euismod in pellentesque massa placerat duis. Scelerisque viverra mauris in aliquam. Mauris sit amet massa vitae tortor.
            </Text>
          </div>
        </Flex>
      </Container>
      {/*MENU*/}

      <div className={classes.section}> {/* className={classes.imageSection}*/}
        {/*
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        */}
        <Container>
          <div className={classes.textContainer}>
            <Title className={classes.titleSection}>Menu</Title>
            <Flex
              mih={50}
              gap="md"
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap"
            >
              <ImageCard href="/" image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Hello World" author="Kmi" views="40" comments="2" />
              <ImageCard href="/" image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Hello World" author="Kmi" views="40" comments="2" />
              <ImageCard href="/" image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Hello World" author="Kmi" views="40" comments="2" />
            </Flex>
          </div>
        </Container>
      </div>
      {/*COMMENTS*/}
      <div>
        <Container>
          <div className={classes.textContainer}>
            <Title className={classes.titleSection}>Comments</Title>
            <Comment name="Mike" postedAt="10 minutes ago" body="I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash."/>
          </div>
        </Container>
      </div>
      {/*FOOTER*/}
      <Footer />
    </>
  );
}



/* Set the Global User Context to Home Component */
export default function HomeWithContext() {
  return (
    <>
      <NavBar />
      <UserProvider>
        <Home />
      </UserProvider>
    </>
  )
}
