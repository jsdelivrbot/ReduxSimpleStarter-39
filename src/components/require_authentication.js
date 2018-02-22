import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Authentication extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  componentWillMount() {
    if (!this.props.authenticated) {
      this.context.router.history.push('/');
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated) {
      this.context.router.history.push('/');
    }
  }

  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(Authentication);
