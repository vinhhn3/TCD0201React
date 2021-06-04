import React, {Component} from 'react';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const{login} = this.props.user;
    return (
      <div>
        <h1>{login}</h1>
      </div>
    );
  }
}

export default User;