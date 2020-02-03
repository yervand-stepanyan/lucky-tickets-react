import React from 'react';
import './input.css';
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false
    };
  }

  onInputChange = event => {
    this.props.onInputChange(event.target.value);
  };

  onEnter = e => {
    if (e.key === 'Enter') {
      this.props.onInputClick();
    }
  };

  render() {
    return (
      <div className="inputMainDiv">
        <TextField
          disabled={this.state.isDisabled}
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
