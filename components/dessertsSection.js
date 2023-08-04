import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Image,
} from '@mantine/core';

const mockdata = [
    {
        title: 'Coconut candy',
        description:
            '$4',
        icon: '/img/coconut_candy.png',
    },
    {
        title: 'Chin chin',
        description:
            '$4',
        icon: '/img/chin_chin.png',
    },
    {
        title: 'Akara',
        description:
            '$4',
        icon: '/img/akara.png',
    },
    {
        title: 'Meat Pie',
        description:
            '$4',
        icon: '/img/meat_pie.png',
    },
];

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    bottomLine: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },


    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.xs,
        },
    },
}));

export default function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 30 }]}
                style={{ marginTop: 30 }}
            >
                <Image maw={100} mx="auto" src={feature.icon} alt={feature.title} />
                <div>
                    <Text fz="lg" fw={500} className={classes.cardTitle} >
                        {feature.title}
                    </Text>
                    <Text fz="sm"  fw={700} mt="sm">
                        {feature.description}
                    </Text>
                </div>
            </SimpleGrid>
        </Card>
    ));

    return (
        <Container size="lg" py="xl" mt="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    Best resturant ever
                </Badge>
            </Group>

            <Title order={3} className={`${classes.title}`} ta="center" mt="sm">
                Savor the Moments, Taste the Perfection
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Indulge in our exquisite dishes crafted with passion and flair. At [Restaurant Name], we believe that every plate we serve is an invitation to savor life's extraordinary flavors.
            </Text>

            <Title order={5} mt={30}>HOT DESSERTS</Title>

            <SimpleGrid cols={4} mt={10} spacing="xl" breakpoints={[{ maxWidth: 'lg', cols: 2 }, { maxWidth: 'xs', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}