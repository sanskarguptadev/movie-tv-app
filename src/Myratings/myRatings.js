import React, {Component} from 'react';


class Myratings extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        var data = []
        var name = []
        var rating = []
        name = JSON.parse(localStorage.getItem('name'));
        rating = JSON.parse(localStorage.getItem('rating'));
        for(var i =0 ; i<name.length; i++){
            var jsonObj = {}
            jsonObj['name'+ i] = name[i];
            jsonObj['rating' + i] = rating[i];
            data.push(jsonObj);
        }
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
                                {data.map((item,index) => <p>{item['name'+index]}</p>)} 
                            </td>
                            <td>
                                <p>My Ratings</p>
                                {data.map((item,index) => <p>{item['rating'+index]}</p>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Myratings;