import React, {Component} from 'react';
import Row from '../row';
import $ from 'jquery';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = []
    this.perfomeSearch('')
  }

  perfomeSearch(searchTerm) {
    if(searchTerm === null) {
      this.setState({ rowTv: []});
      this.setState({ row: []});
    } else {
    const urlMovieString = 'https://api.themoviedb.org/3/search/movie?api_key=8d6a986a87237d51fe99ddc99547c5cc&language=en-US&page=1&include_adult=false&query=' + searchTerm
    const urlTvString = 'https://api.themoviedb.org/3/search/tv?api_key=8d6a986a87237d51fe99ddc99547c5cc&page=1&query=' + searchTerm
    $.ajax({
      url: urlMovieString,
      success: (searchResult) => {
        const result = searchResult.results
        var moviesRows = []
        
        result.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <Row key={movie.id} data={movie} />
          moviesRows.push(movieRow)
        })
        console.log(moviesRows);
        this.setState({row: moviesRows})
      },
      error: (xhr, status, err) => {
        console.log('failed')
      }
    })
    $.ajax({
      url: urlTvString,
      success: (searchResult) => {
        const result = searchResult.results
        var tvRows = []
        
        result.forEach((tv) => {
          tv.poster_src = "https://image.tmdb.org/t/p/w185" + tv.poster_path
          const tvRow = <Row key={tv.id} data={tv} />
          tvRows.push(tvRow)
        })
        this.setState({rowTv: tvRows})
      },
      error: (xhr, status, err) => {
        console.log('failed')
      }
    })
  }
}

  searchChangeHandler(event) {
    console.log(event.target.value)
    var searchTerm = event.target.value
    this.perfomeSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
        }} onChange={this.searchChangeHandler.bind(this)} placeholder='Enter search Movie/ Tv Series'/>
        {this.state.row}
        {this.state.rowTv}
      </div>
    );
  }
}

export default Home;
