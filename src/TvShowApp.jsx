import React, { Component } from 'react';
import { Background, Container } from './ui/atoms/';
import { createGlobalStyle } from 'styled-components';
import PopularShows from './components/organisms/PopularShows';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuButton } from './components/atoms/';
import { TopMenu } from './components/organisms/TopMenu';
import { connect } from 'react-redux';
import { toggleTopMenu } from './redux/uiActionsCreators';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }

  html, #root, main {
    overflow: hidden;
  }

  main {
    width: 100vw;
    height: 100vh;
  }
`;

class TvShowApp extends Component {
  constructor(props) {
    super(props);

    this.closeTopMenu = this.closeTopMenu.bind(this);
    this.openTopMenu = this.openTopMenu.bind(this);
  }

  closeTopMenu() {
    return this.props.dispatch(toggleTopMenu(false));
  }

  openTopMenu() {
    return this.props.dispatch(toggleTopMenu(true));
  }

  render() {
    return (
      <Router>
        <main>
          <GlobalStyle />
          <Background />

          {this.props.isTopMenuOpen ? (
            <TopMenu closeTopMenu={this.closeTopMenu} />
          ) : null}

          <MenuButton onClick={() => this.openTopMenu()} />
          <Container>
            <Route path="/popular" component={PopularShows} />
          </Container>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isTopMenuOpen: state.uiReducer.isTopMenuOpen
});

export default connect(mapStateToProps)(TvShowApp);
