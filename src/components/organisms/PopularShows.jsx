import React, { Component } from 'react';
import { ShowsCarousel } from '../molecules';
import { PageHeading } from '../../ui/atoms/';
import { connect } from 'react-redux';
import { getTvShows } from '../../utils';
import { getMostPopular } from '../../redux/actionsCreators';

class PopularShows extends Component {
  componentDidMount() {
    getTvShows('popular', data =>
      this.props.dispatch(getMostPopular(data.results))
    );
  }

  render() {
    return (
      <section>
        <PageHeading>Popular TV Shows</PageHeading>
        <ShowsCarousel data={this.props.mostPopularData} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  mostPopularData: state.tvshowsReducer.mostPopularData
});

export default connect(mapStateToProps)(PopularShows);
