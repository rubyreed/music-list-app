import React, { Component } from 'react';
import './App.css';
import { Container, Header } from "semantic-ui-react";
import Songs from './Songs';
import SongForm from './SongForm';

class App extends Component {
  state={
    songs : [
      {id:1, name: "Fire on the Mountain", artist: "Grateful Dead"},
      {id:2, name: "Black Magic Woman", artist: "Santana",},
      {id:3, name: "Walk on the Wild Side", artist: "Lou Reed",}
    ],
  };

  removeSong= (id) => {
    console.log(id);
    const songs=this.state.songs.filter(song => {
      if (song.id !== id) {return song}
    });
    this.setState({ songs: [...songs],});
  };

  getID=()=>{
    //NOTE: using this as a helper function for id's since there is no DB
    return Math.floor((1+Math.random()) * 10000);
  };

  addSong = (songData) => {
    let song = { id: this.getID(), ...songData, };
    this.setState({ songs: [song, ...this.state.songs],});
  };

  render () {
    return(
      <Container style={{paddingTop: "25px"}}>
        <Header as="h1">Song List</Header>
        <Songs 
        songs={this.state.songs}
        remove={this.removeSong}
        />
        <SongForm add={this.addSong}/>
      </Container>
    );
  }
}

export default App;
