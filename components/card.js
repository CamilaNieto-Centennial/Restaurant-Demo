import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

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
        <Badge color="pink" variant="light">
          {props.tag}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        {props.btn}
      </Button>
    </Card>
  );
}