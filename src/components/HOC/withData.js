import React, { Component } from 'react'

import LoadSpinner from '../LoadSpinner'
import ErrorIndicator from '../ErrorIndicator'

const withData = View => {
  return class extends Component {

    state = {
      data: null,
      isLoad: false,
      hasError: false
    }

    componentDidMount = () => {
      this.update();
    }

    update = () => {
      this.setState({
        isLoad: false,
        hasError: false
      });

      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            isLoad: true
          });
        })
        .catch(() => {
          this.setState({
            hasError: true,
            isLoad: true
          });
        });
    }

    render() {
      const { data, isLoad, hasError } = this.state

      if (!isLoad) return <LoadSpinner />;
      if (hasError) return <ErrorIndicator />;

      return <View {...this.props} data={data} />;
    }
  }
}

export default withData