import React, { Component } from 'react';
import { ShowsCarousel } from '../molecules';
import { PageHeading } from '../../ui/atoms';
import { connect } from 'react-redux';
import { getTvShows } from '../../utils';

class ShowsThread extends Component {
  componentDidMount() {
    getTvShows(this.props.type, data =>
      this.props.dispatch(this.props.dispatchAction(data.results))
    );
  }

  render() {
    return (
      <section>
        <PageHeading>{this.props.heading}</PageHeading>
        <ShowsCarousel data={this.props[`${this.props.stateData}`]} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  mostPopularData: state.tvshowsReducer.mostPopularData,
  airingTodayData: state.tvshowsReducer.airingTodayData,
  onTheAirData: state.tvshowsReducer.onTheAirData,
  topRatedData: state.tvshowsReducer.topRatedData
});

export default connect(mapStateToProps)(ShowsThread);
