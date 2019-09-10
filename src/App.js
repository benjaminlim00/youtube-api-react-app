import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList } from './components';

class App extends React.Component {
  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBCzhg0QoLmIXKf4O-0u3P0GtlNiQ3sKbI',
        q: searchTerm
      }
    });

    console.log(response);
  };

  render() {
    return (
      <Grid item justify='center' xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>

          <Grid item xs={8}>
            <VideoDetail />
          </Grid>

          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
