import React from 'react';
import './luckyTickets.css';
import Input from '../Input/Input';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const VARIABLES = {
  title: 'Enter the length of the Ticket Number!',
  radio1: 'All 0 not included',
  radio2: 'All 0 included'
};

export default class LuckyTickets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticketNumLength: 0,
      radioValue: VARIABLES.radio1,
      luckyTicketsCount: 0,
      error: ''
    };
  }

  onInputChange = ticketNumLength => {
    this.setState({ ticketNumLength });
  };

  onRadioChange = event => {
    this.setState({ radioValue: event.target.value });
  };

  checkTickets = () => {
    this.setState({ luckyTicketsCount: 0, error: '' });

    this.getLuckyTickets(this.state.ticketNumLength);
  };

  getLuckyTickets = n => {
    if (n % 2 !== 0) {
      this.setState({
        error: `Invalid argument!!! "n" should be even, "${n}" is odd!`
      });
    } else if (n <= 0 || n > 100) {
      this.setState({
        error: `Invalid argument!!! "n" should be between 2 and 100!`
      });
    } else {
      const ticketNumStr = this.generateTicketNumber(n);

      const initialNumber = +ticketNumStr;

      const lastNumber = this.generateLastNumber(n);

      for (let i = initialNumber; i <= lastNumber; i++) {
        const numAsStr = '' + i;
        let ticketNumToCheck = '';

        if (ticketNumStr.length > numAsStr.length) {
          for (let k = 0; k < ticketNumStr.length - numAsStr.length; k++) {
            ticketNumToCheck += 0;
          }
        }

        for (let j = 0; j < numAsStr.length; j++) {
          ticketNumToCheck += numAsStr[j];
        }

        const firstPartStr = ticketNumToCheck.slice(0, n / 2);
        const secondPartStr = ticketNumToCheck.slice(n / 2);

        const firstPartSum = firstPartStr
          .split('')
          .reduce((acc, next) => acc + Number(next), 0);
        const secondPartSum = secondPartStr
          .split('')
          .reduce((acc, next) => acc + Number(next), 0);

        if (firstPartSum === secondPartSum) {
          this.setState(state => ({
            luckyTicketsCount: state.luckyTicketsCount + 1
          }));
        }
      }
    }
  };

  generateTicketNumber = n => {
    let ticketNum = '';

    if (this.state.radioValue === VARIABLES.radio1) {
      for (let i = 0; i < n; i++) {
        if (i === n / 2 - 1 || i === n - 1) {
          ticketNum += 1;
        } else {
          ticketNum += 0;
        }
      }
    } else {
      for (let i = 0; i < n; i++) {
        ticketNum += 0;
      }
    }

    return ticketNum;
  };

  generateLastNumber = n => {
    let lastNum = '';

    for (let i = 0; i < n; i++) {
      lastNum += 9;
    }

    return Number(lastNum);
  };

  handleSubmit = () => {
    this.checkTickets();
  };

  handleSubmitOnEnterKey = () => {
    this.checkTickets();
  };

  render() {
    const {
      radioValue,
      ticketNumLength,
      luckyTicketsCount,
      error
    } = this.state;

    return (
      <div className="mainDiv">
        <div className="title">
          <Typography align="center" color="primary" variant="h4">
            {VARIABLES.title}
          </Typography>
        </div>
        <div className="inputWrapper">
          <Input
            className="input"
            onInputClick={this.handleSubmitOnEnterKey}
            onInputChange={this.onInputChange}
          />
        </div>
        <div className="radioWrapper">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="ticketNum"
              name="ticketNum"
              value={radioValue}
              onChange={this.onRadioChange}
            >
              <FormControlLabel
                value={VARIABLES.radio1}
                control={<Radio color="primary" />}
                label={VARIABLES.radio1}
                labelPlacement="end"
              />
              <FormControlLabel
                value={VARIABLES.radio2}
                control={<Radio color="primary" />}
                label={VARIABLES.radio2}
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="buttonWrapper">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.handleSubmit}
          >
            Check
          </Button>
        </div>
        <div className="textWrapper">
          <Typography align="center" color="textSecondary" variant="h5">
            {luckyTicketsCount ? `n: ${ticketNumLength}` : ''}
          </Typography>
          <Typography align="center" color="secondary" variant="h4">
            {error
              ? error
              : luckyTicketsCount
              ? `Lucky Tickets: ${luckyTicketsCount}`
              : ''}
          </Typography>
        </div>
      </div>
    );
  }
}
