import React from 'react';
import './input.css';
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  onInputChange = event => {
    this.props.onInputChange(event.target.value);
  };

  onEnter = e => {
    if (e.key === 'Enter') {
      this.props.onInputClick();
      e.target.blur();
    }
  };

  render() {
    return (
      <div className="inputMainDiv">
        <TextField
          id="outlined-basic"
          label="Ticket Number Length"
          variant="outlined"
          onChange={this.onInputChange}
          onKeyDown={e => this.onEnter(e)}
        />
      </div>
    );
  }
}
