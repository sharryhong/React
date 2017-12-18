import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// 메인컴포넌트가 데이터를 모두 가지고 있다.
// 한 개의 데이터 소스를 가지고 각 컴포넌트별로 출력만 하면 된다.
const movies = [
  {
    title: "totoro",
    poster: "https://img00.deviantart.net/3ed5/i/2015/140/1/d/totoro_march_by_inveeous-d8u4rmr.png"
  },
  {
    title: "matrix",
    poster: "https://metrouk2.files.wordpress.com/2017/02/the-matrix.jpg?w=748&h=420&crop=1"
  },
  {
    title: "star wars",
    poster: "https://lc-imageresizer-live-s.legocdn.com/resize?mode=landscape&size=incredible&ratio=1&imageUrl=https://lc-www-live-s.legocdn.com/r/www/r/starwars/-/media/franchises/starwars2015/misc/tfa_cta_744x421.jpg?l.r2=-521045527"
  },
  {
    title: "oldboy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy3trJbe2Jz9Xas3kduXgo3feec3imIIIXQAdD1B8cGEZR9WQ"
  }
]

// 메인 컴포넌트 : 영화 리스트
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, i) => {
          return <Movie key={i} title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
