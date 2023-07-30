import { createStyles, Text, Avatar, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: rem(54),
    paddingTop: theme.spacing.sm,
  },
}));



export default function Comment(props) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={props.image} alt={props.name} radius="xl" />
        <div>
          <Text size="sm">{props.name}</Text>
          <Text size="xs" color="dimmed">
            {props.postedAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {props.body}
      </Text>
    </div>
  );
}