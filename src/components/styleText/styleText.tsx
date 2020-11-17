import React, { Component } from 'react'
import { Text } from 'react-native';


class StyleText extends Component {
    render() {
      return (
          <Text style={{ fontFamily: 'Montserrat'  }}>
            {this.props}
          </Text>
      );
    }
  }

export default StyleText