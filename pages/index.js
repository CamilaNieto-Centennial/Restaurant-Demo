import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React, { useState } from 'react';
import Desserts from '../components/dessertsSection';
import MainCard from '../components/card';
import MenuItem from '../components/menuItem'
import Footer from '../components/footer';
import Comment from '../components/comment';

import { Carousel } from '@mantine/carousel';
import { createStyles, Overlay, Container, Title, Flex, Button, Text, rem, Image, Grid, SimpleGrid } from '@mantine/core';

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

  subtitle: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
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

  titleSection: {
    fontFamily: 'Carter One, cursive',
    color: theme.red,
    fontSize: '50px',
    lineHeight: '5rem'
  },

  gridImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'block',
      margin: '0 auto'
    },
    [theme.fn.largerThan('lg')]: {
      width: 260
    },
  },

  gridText: {
    [theme.fn.largerThan('lg')]: {
      marginTop: 22
    },
  },

  textContainer: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  imageSection: {
    position: 'relative',
    backgroundImage:
      'url(/img/kitchen_1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '20% 50%',
  },

  redLine: {
    '&::after': {
      content: '""',
      margin: "0 auto",
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.xs,
    },
  },


}));

export function Home() {
  const { classes } = useStyles();


  return (
    <>
      {/*HERO*/}
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>Where Every Bite Tells a Story</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Embark on a gastronomic journey where creativity meets flavor. Our culinary artistry transforms each dish into an unforgettable masterpiece.
          </Text>
          <Button variant="gradient" gradient={{ from: '#C53030', to: '#63171B' }} size="lg" radius="lg" className={classes.control}>
            Get started
          </Button>
        </Container>
      </div>

      {/*QUICK DESCRIPTION & HOT DESSERTS*/}
      <Desserts />

      {/*ABOUT*/}
      <Container size="lg" pt="xl" pb="xs" mt="xl">
        <Title order={2} ta="center" my="sm" className={`${classes.subtitle} ${classes.redLine}`}>About Us</Title>
        <Grid mt={10} gutter={18}>
          {/*<Grid.Col xs={12} sm="content"  className={classes.childEl}>
            <div className={classes.backItem}>
              <img radius="md" src="/img/graph_2.png" alt="Back Image" width={300} />
            </div>
            <div className={classes.frontItem}>
              <img radius="md" src="/img/about_3.jpg" alt="About Image" width={240} className={classes.borderImage} />
            </div>
          </Grid.Col>*/}
          <Grid.Col xs={12} sm="content">
            <img radius="md" src="/img/dish.png" alt="About Image" width={240} className={classes.gridImage} />
          </Grid.Col>
          <Grid.Col xs={12} sm="auto" className={classes.gridText}>
            <Text align='justify'>
              Our culinary journey began with a simple belief – that exceptional food has the power to create unforgettable memories. From our kitchen to your table, each dish is thoughtfully curated to celebrate the rich tapestry of flavors and culture. As a family-driven establishment, we take pride in welcoming you into our warm and inviting space, where every meal is an expression of heartfelt hospitality.
            </Text>
            <Text align='justify'>
              Immerse yourself in a world where innovation meets tradition. Our menu, a symphony of culinary artistry, blends timeless classics with daring innovations. With every bite, you'll embark on a flavorful expedition that awakens the senses and nourishes the soul. Join us in celebrating the joys of food and community, as we craft moments that linger in your heart and memory.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {/*MENU*/}
      <Container size="lg" py="xl" mt="xl">
        <div className={classes.textContainer}>
          <Title order={2} ta="center" my="sm" className={`${classes.subtitle} ${classes.redLine}`}>Menu</Title>
          <Flex
            mih={50}
            gap="xl"
            justify="center"
            align="flex-start"
            direction="row"
            wrap="wrap"
            mt="lg"
          >
            <MenuItem
              title="Breakfast"
              img="/img/noodles_and_egg.png"
            />
            <MenuItem
              title="Lunch"
              img="/img/stew.png"
            />
            <MenuItem
              title="Dinner"
              img="/img/porridge_beans.png"
            />
          </Flex>
        </div>
      </Container>

      {/*MOST POPULAR RECIPES*/}
      <Container size="lg" py="xl" mt="xl">
        <div className={classes.textContainer}>
          <Title order={2} ta="center" my="sm" className={`${classes.subtitle} ${classes.redLine}`}>Most Popular Recipes</Title>
          <SimpleGrid cols={3} mt={10} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}>
            <MainCard
              title="Banga Soup"
              img="/img/banga_soup.jpg"
              tag="8.5"
              description="$15.99"
              btn="ADD TO CART"
            />
            <MainCard
              title="Jollof Rice"
              img="/img/jollof_rice.jpg"
              tag="8.0"
              description="$11.99"
              btn="ADD TO CART"
            />
            <MainCard
              title="Suya"
              img="/img/suya.jpg"
              tag="9.0"
              description="$14.99"
              btn="ADD TO CART"
            />
          </SimpleGrid>
        </div>
      </Container>

      {/*COMMENTS*/}
      <div>
        <Container size="lg" py="xl" mt="xl">
          <div className={classes.textContainer}>
            <Title order={2} ta="center" my="sm" className={`${classes.subtitle} ${classes.redLine}`}>Comments</Title>
            <Carousel
              mx="auto"
              slideGap="md" loop draggable={false}
            >
              <Carousel.Slide>
                <Comment image="/img/user.jpeg" name="Mike" postedAt="10 minutes ago" body="An enchanting culinary adventure that took me straight to the heart of Nigeria. The fusion of innovation and tradition on the menu is unparalleled. Dining here felt like an embrace from family, where every dish shared a story." />
              </Carousel.Slide>
              <Carousel.Slide>
                <Comment image="/img/user_2.jpg" name="Victoria" postedAt="30 minutes ago" body="Unforgettable memories were woven with each exquisite dish. From the warm ambiance to the authentic flavors, this restaurant embodies the heart of Nigeria's culinary heritage. It's more than food; it's an immersive journey." />
              </Carousel.Slide>
              <Carousel.Slide>
                <Comment image="/img/user_3.jpg" name="Alex" postedAt="45 minutes ago" body="A truly captivating experience! The flavors are a heartfelt ode to tradition, weaving tales of culture and community. Every bite felt like a journey to Nigeria's culinary soul. I'll cherish these memories forever." />
              </Carousel.Slide>
            </Carousel>
          </div>
        </Container >
      </div >

      {/*FOOTER*/}
      < Footer />
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
