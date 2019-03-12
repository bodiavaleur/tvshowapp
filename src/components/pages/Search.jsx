import React, { Component } from 'react';
import { SearchWrapper, SearchListItem } from '../../ui/molecules';
import { SearchList } from '../../ui/organisms';
import { AnimInput } from '../atoms';
import { searchTvShow } from '../../utils';
import { connect } from 'react-redux';
import { searchData } from '../../redux/actionsCreators';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchHasValue: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const value = event.target.value;
    const hasValue = !!value ? true : false;
    return searchTvShow(value, data => {
      this.setState({
        searchHasValue: hasValue
      });

      this.props.dispatch(searchData(data.results));
    });
  }

  render() {
    return (
      <SearchWrapper>
        <AnimInput
          handleOnChange={this.handleOnChange}
          animState={this.state.searchHasValue}
        />
        {!!this.props.search.length ? (
          <SearchList>
            {this.props.search.map((tvshow, idx) => (
              <SearchListItem
                key={idx}
                poster={tvshow.poster_path}
                to={`/details/${tvshow.id}`}
              />
            ))}
          </SearchList>
        ) : null}
      </SearchWrapper>
    );
  }
}

const mapStateToProps = state => ({
  search: state.tvshowsReducer.search
});

export default connect(mapStateToProps)(Search);
