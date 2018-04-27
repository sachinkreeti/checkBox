import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckBox } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({ checkBox1: 'checked', checkBox2: true });
  }

  toggleCheckBox = () => this.setState(prevState => ({ checkBox1: !prevState.checkBox1 }));

  render() {
    return (
      <TouchableOpacity >
        <CheckBox
          checked={this.state.checkBox1}
          onPress={this.toggleCheckBox}
        />
      </TouchableOpacity>
    );
  }
}
