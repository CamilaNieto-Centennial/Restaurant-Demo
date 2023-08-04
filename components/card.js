import { Card, Image, Text, Badge, Button, Group, Center } from '@mantine/core';

import { IconStarFilled } from '@tabler/icons-react';

export default function MainCard(props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={props.img}
          height={160}
          alt={props.title}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.title}</Text>
        <Center c="red.9">
          <IconStarFilled size="1rem" stroke={1.5} />
          <Text fw={700} fz="sm" c="red.9" ml={4}>
            {props.tag}
          </Text>
        </Center>
      </Group>

      <Text size="sm" fw={700} color="dimmed">
        {props.description}
      </Text>

      <Button variant="gradient" gradient={{ from: '#C53030', to: '#822727' }} fullWidth mt="md" radius="md">
        {props.btn}
      </Button>
    </Card>
  );
}