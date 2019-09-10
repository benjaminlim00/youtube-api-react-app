import React from "react";
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange= (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }




  handleSubmit = (e) => {
    const {searchTerm} = this.state;
    const {onFormSubmit} = this.props;

    onFormSubmit(searchTerm);
    e.preventDefault();
  }

  render() {
    // console.log(this.state)
    return (
    <Paper elevation={6}
      style={{padding: '25px'}}>
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="searchTerm"
          fullWidth
          label="Search..."
          onChange={this.handleChange}/>
      </form>
    </Paper>);
  }
}

export default SearchBar;
