import React, { Component } from 'react';
import { ShowsCarousel } from '../molecules';
import { PageHeading } from '../../ui/atoms';
import { connect } from 'react-redux';
import { getTvShows } from '../../utils';

class ShowsThread extends Component {
  constructor(props) {
    super(props);

    this.reduxData = this.props[`${this.props.stateData}`];
  }

  componentDidMount() {
    return !!this.reduxData.length
      ? null
      : getTvShows(this.props.type, data =>
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
  popular: state.tvshowsReducer.popular,
  airingToday: state.tvshowsReducer.airingToday,
  onTheAir: state.tvshowsReducer.onTheAir,
  topRated: state.tvshowsReducer.topRated
});

export default connect(mapStateToProps)(ShowsThread);
