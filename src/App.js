import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color:'#fff'
};

let fakeServerData = {
  user: {
    name: 'Natt',
    playlists: [
      {
        name: 'My favorite',
        songs: [
          { name:'Wana',duration:1264 },
          { name:'mewm',duration:1231 },
          { name:'fdfeesd',duration:2321 }
        ]
      },
      {
        name: 'Discover this week',
        songs: [
          { name:'fdsfs',duration:1234 },
          { name:'fsdfs',duration:1351 },
          { name:'fdfsdfds',duration:4333 }
        ]
      },
      {
        name:'Another playlist - the best!',
        songs: [
          { name:'ghg',duration:1134 },
          { name:'hgt',duration:1241 },
          { name:'hhh',duration:4343 }
        ]
      },
      {
        name:'Playlist - Yeah!',
        songs: [
          { name:'kjjkj',duration:1134 },
          { name:'hgjkjt',duration:1241 },
          { name:'cvvbbb',duration:4343 }
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width: "40%",display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playslists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render(){
    let allSongs = this.props.playlists.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[])
    let totalDuration = allSongs.reduce((sum,eachSong) => {
      return sum + eachSong.duration
    },0)
    return (
      <div style={{...defaultStyle, width: "40%",display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle,display:'inline-block', width:"25%"}}>
      <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData:{}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData:fakeServerData});
    },1000);
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>

          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={{defaultStyle}}>loading...</h1>
        }
      </div>
    );
  }
}

export default App;
