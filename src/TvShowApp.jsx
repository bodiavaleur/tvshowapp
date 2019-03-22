import React, { Component } from 'react';
import { Background, Container } from './ui/atoms/';
import ShowsThread from './components/pages/ShowsThread';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './ui/pages';
import TopMenu from './components/organisms/TopMenu';
import {
  getPopular,
  onTheAir,
  topRated,
  airingToday
} from './redux/actionsCreators';
import { ShowDetails } from './components/pages';
import Search from './components/pages/Search';

export default class TvShowApp extends Component {
  render() {
    return (
      <Router>
        <main>
          <GlobalStyle />
          <Background />

          <TopMenu />

          <Container>
            <Route
              path="/popular"
              render={() => (
                <ShowsThread
                  type="popular"
                  heading="Popular TV Shows"
                  dispatchAction={getPopular}
                  stateData="popular"
                />
              )}
            />
            <Route
              path="/toprated"
              render={() => (
                <ShowsThread
                  type="top_rated"
                  heading="Top Rated"
                  dispatchAction={topRated}
                  stateData="topRated"
                />
              )}
            />
            <Route
              path="/airtoday"
              render={() => (
                <ShowsThread
                  type="airing_today"
                  heading="Airing Today"
                  dispatchAction={airingToday}
                  stateData="airingToday"
                />
              )}
            />
            <Route
              path="/air"
              render={props => (
                <ShowsThread
                  {...props}
                  type="on_the_air"
                  heading="On The Air"
                  dispatchAction={onTheAir}
                  stateData="onTheAir"
                />
              )}
            />
            <Route
              path="/details/:id"
              render={props => <ShowDetails {...props} />}
            />
            <Route path="/search" component={Search} />
          </Container>
        </main>
      </Router>
    );
  }
}
