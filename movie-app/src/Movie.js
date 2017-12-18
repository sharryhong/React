import React, { Component } from 'react';
import './Movie.css';

// 영화 카드 컴포넌트
class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <MoviePoster poster={this.props.poster}/>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return(
      <img src={this.props.poster} />
    );
  }
}

export default Movie;
