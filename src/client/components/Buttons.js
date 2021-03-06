import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Buttons extends React.Component {

  static propTypes = {
    onDatePick: PropTypes.func.isRequired
  }

  //TODO get from server
  render() {
    var dateOptions = [
    { value: "1789-01-01", label: '1789-01-01' }
  ];
    return (
      <div>
        <Select
          name="form-field-name"
          value="one"
          options={dateOptions}
          onChange={(e) => this.props.onDatePick(e.value)}
          placeholder="Select Date"
          searchable={false}
          clearable={false}
        />
      </div>
    );
  }
}

export default Buttons;
