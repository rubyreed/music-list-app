import React from "react";
import { Button, Table } from "semantic-ui-react";

const Song = ({id, name, artist, remove}) => (
<Table.Row>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{artist}</Table.Cell>
    <Table.Cell>
      <Button color="purple" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Song;