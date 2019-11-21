import React, {Component} from 'react';


class Myratings extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        var data = []
        var name = []
        name = JSON.parse(localStorage.getItem('name'));
        const rating = JSON.parse(localStorage.getItem('rating'));
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                My Ratings
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Movie List</p>
                                {name.map((item) => <p>{item}</p>)} 
                            </td>
                            <td>
                                <p>My Ratings</p>
                                {rating.map((item) => <p>{item}</p>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Myratings;