import React from "react";
import './input.css';
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="inputMainDiv">
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
      </div>
    );
  }
}