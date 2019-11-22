import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';


class Details extends React.Component {
        
        constructor(props) {
            super(props);
            
            this.state = {
                rating: 0,
                oldData: [],
            }
        }
      handleDecrease(){
        var decreaseRating = this.state.rating - 0.5;
        if(decreaseRating > 10 || decreaseRating < 0 ){
            alert('rating should between 0 to 10');
        } else {
            this.setState({rating: decreaseRating});
        }
      }
      handleIncrease(){
        var increaseRating = this.state.rating + 0.5;
        if(increaseRating > 10){
            alert('rating should between 0 to 10');
        } else {
            this.setState({rating: increaseRating});
        }
      }

      handleSession(id, ratings){
          const urlSessionString = 'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8d6a986a87237d51fe99ddc99547c5cc'
          
        $.ajax({
            url: urlSessionString,
            success: (result) => {
              const data = result
              const session_id = data.guest_session_id
              const urlPostRatings = "https://api.themoviedb.org/3/movie/"+ id +"/rating?api_key=8d6a986a87237d51fe99ddc99547c5cc&guest_session_id="+ session_id
              console.log(urlPostRatings)
              $.ajax({
                type: "POST",
                url: urlPostRatings,
                data: {
                    "value": ratings
                },
                success: function(msg){
                  alert('successfully submited the ratings');
                }
             });
            },
            error: (xhr, status, err) => {
              console.log('failed')
            }
          })

      }

      handleSubmit(id, name, rating){
          //localStorage.clear();
          this.handleSession(id, rating)
           if(localStorage.getItem('name') == null && localStorage.getItem('rating') == null){
               var movieName = [];
               var movieRating = [];
               movieName.push(name)
               localStorage.setItem('name', JSON.stringify(movieName));
               movieRating.push(rating)
               localStorage.setItem('rating', JSON.stringify(movieRating));
           } else {
               var movieName = JSON.parse(localStorage.getItem('name'));
                movieName.push(name);
                localStorage.setItem('name', JSON.stringify(movieName));

                var movieRating = JSON.parse(localStorage.getItem('rating'));
                movieRating.push(rating);
                localStorage.setItem('rating', JSON.stringify(movieRating));
            }
      }

    render(){
        var finalRating = this.state.rating;
        let id = this.props.match.params.id;
        let name = this.props.match.params.name;
        console.log(this.props.match.params.img);
        return(
            <div>
                <Link to='/myratings'>My Ratings</Link>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Movie Name: {name}
                                <p>
                                    {this.props.match.params.overview}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Please rate the movie from 0 to 10</td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={()=>{this.handleIncrease(finalRating)}}>+</button>
                                    <div>{finalRating}</div>
                                <button onClick={()=>{this.handleDecrease(finalRating)}}>-</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={()=>{this.handleSubmit(id,name,finalRating)}}>
                                    Submit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details;