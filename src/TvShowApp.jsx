import React, { Component } from 'react';
import { Background, Container } from './ui/atoms/';
import ShowsThread from './components/organisms/ShowsThread';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './ui/pages';
import TopMenu from './components/organisms/TopMenu';
import {
  getMostPopular,
  getLatest,
  getOnTheAir,
  getTopRated,
  getAiringToday
} from './redux/actionsCreators';

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
                  dispatchAction={getMostPopular}
                  stateData="mostPopularData"
                />
              )}
            />
            <Route
              path="/toprated"
              render={() => (
                <ShowsThread
                  type="top_rated"
                  heading="Top Rated"
                  dispatchAction={getTopRated}
                  stateData="topRatedData"
                />
              )}
            />
            <Route
              path="/airtoday"
              render={() => (
                <ShowsThread
                  type="airing_today"
                  heading="Airing Today"
                  dispatchAction={getAiringToday}
                  stateData="airingTodayData"
                />
              )}
            />
            <Route
              path="/air"
              render={() => (
                <ShowsThread
                  type="on_the_air"
                  heading="On The Air"
                  dispatchAction={getOnTheAir}
                  stateData="onTheAirData"
                />
              )}
            />
          </Container>
        </main>
      </Router>
    );
  }
}
