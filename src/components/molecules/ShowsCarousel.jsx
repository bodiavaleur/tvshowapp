import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ShowCard } from '../../ui/atoms';
import { CarouselStyle } from '../../ui/pages';
import { Link } from 'react-router-dom';

export class ShowsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 2
    };

    this.cardSizes = this.cardSizes.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  cardSizes(show, idx) {
    // FIXME: refactor
    const poster = `https://image.tmdb.org/t/p/w500/${show.poster_path}`;
    const clickRight = () => this.setIndex(this.state.current + 1);
    const clickLeft = () => this.setIndex(this.state.current - 1);

    switch (idx) {
      case this.state.current + 2:
        // Middle card
        // [] [] [*] [] []
        return (
          <Link to={`/details/${show.id}`}>
            <ShowCard lg key={idx} poster={poster} />;
          </Link>
        );
      case this.state.current + 1:
        // Left card from middle
        // [] [*] [] [] []
        return (
          <ShowCard left md key={idx} poster={poster} onClick={clickLeft} />
        );
      case this.state.current + 3:
        // Right card from middle
        // [] [] [] [*] []
        return <ShowCard md key={idx} poster={poster} onClick={clickRight} />;
      case this.state.current:
        // First card
        // [*] [] [] [] []
        return (
          <ShowCard left sm key={idx} poster={poster} onClick={clickLeft} />
        );
      default:
        return <ShowCard sm key={idx} poster={poster} onClick={clickRight} />;
    }
  }

  setIndex(idx) {
    this.setState({ current: idx });
  }

  render() {
    return (
      <React.Fragment>
        <CarouselStyle />
        <AliceCarousel
          infinite={false}
          buttonsDisabled
          dotsDisabled
          mouseDragEnabled
          startIndex={this.state.current}
          onSlideChanged={item => this.setIndex(item.item)}
          items={this.props.data.map(this.cardSizes)}
          responsive={{
            768: { items: 4 },
            1024: { items: 5 }
          }}
        />
      </React.Fragment>
    );
  }
}
