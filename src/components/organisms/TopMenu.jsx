import React, { Component } from 'react';
import { Header } from '../../ui/organisms';
import { BackgroundDark } from '../../ui/atoms';

export class TopMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>Oopsie doopsie</Header>
        <BackgroundDark onClick={() => this.props.closeTopMenu()} />
      </React.Fragment>
    );
  }
}
