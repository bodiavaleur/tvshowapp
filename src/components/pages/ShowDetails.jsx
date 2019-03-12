import React, { Component } from 'react';
import { ShowCard, Background, BackgroundDark } from '../../ui/atoms';
import { getCast, getDetails } from '../../utils';
import { SectionTitle, Title, Info, Description } from '../../ui/atoms/';
import {
  DetailsContainer,
  SideDetailsWrapper,
  SideDetails,
  MainDetails,
  PosterContainer,
  DetailsItem
} from '../../ui/organisms';

export class ShowDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      cast: []
    };
  }

  mapToItem(dataArr) {
    return dataArr.map((item, idx) => (
      <DetailsItem key={idx}>{item.name}</DetailsItem>
    ));
  }

  componentDidMount() {
    getDetails(this.props.match.params.id, data =>
      this.setState({ data: data })
    );
    getCast(this.props.match.params.id, data => this.setState({ cast: data }));
  }

  render() {
    const {
      genres,
      created_by,
      name,
      vote_average,
      number_of_seasons,
      first_air_date,
      overview,
      poster_path,
      backdrop_path
    } = this.state.data;

    return (
      <DetailsContainer>
        {!!Object.keys(this.state.data).length && (
          <React.Fragment>
            <Background
              bg={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            />
            <BackgroundDark full />
            <SideDetailsWrapper>
              <SideDetails>
                <SectionTitle>Genres</SectionTitle>
                {this.mapToItem(genres)}
              </SideDetails>
              <SideDetails>
                <SectionTitle>Director</SectionTitle>
                {this.mapToItem(created_by)}
              </SideDetails>
              <SideDetails>
                <SectionTitle>Cast</SectionTitle>
                {this.mapToItem(this.state.cast)}
              </SideDetails>
            </SideDetailsWrapper>
            <MainDetails>
              <Title>{name}</Title>
              <Info>
                <i className="far fa-star" />
                {vote_average} {`S${number_of_seasons}`} {first_air_date}
              </Info>
              <Description>{overview}</Description>
            </MainDetails>
            <PosterContainer>
              <ShowCard
                poster={`https://image.tmdb.org/t/p/w500${poster_path}`}
                md
              />
            </PosterContainer>
          </React.Fragment>
        )}
      </DetailsContainer>
    );
  }
}
