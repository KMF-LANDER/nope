import React, { Component } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

class Radios extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.parent.setState({
      ...this.props.state,
      currentTab: event.value,
    })
    console.log(1)
  }



  render() {
    return (
        <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="cau 1" />
          <FormControlLabel value="2" control={<Radio />} label="cau 2" />
          <FormControlLabel value="3" control={<Radio />} label="cau 3" />
          
        </RadioGroup>
      </FormControl>
    );
  }
}

export default Radios;