import React from "react";
import { Button, Table} from "semantic-ui-react";
import Song from "./Song";

const Songs = ({songs, remove}) => (
  <Table celled padded>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Artist</Table.HeaderCell>
      <Table.HeaderCell>Options</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {
      songs.map( song => ( 
        <Song key={song.id}{...song} remove={remove}/>
      ))
    }
  </Table.Body>
</Table>
);

export default Songs;

