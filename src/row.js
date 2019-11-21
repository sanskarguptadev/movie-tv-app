import React from 'react';
import { withRouter } from "react-router-dom";


class Row extends React.Component {

    constructor(props) {
        super(props);
        this.handleDetailsPage = this.handleDetailsPage.bind(this);
    }
    handleDetailsPage(id,name,overview,img) {
        this.props.history.push('/details/'+id+'/'+name+'/'+overview+'/'+img);
    }

    render() {
        var finalData = this.props.data
        var name = finalData.title? finalData.title: finalData.name
        return (
            <div>
                <table key={finalData.id}> 
                    <tbody onClick={() => {this.handleDetailsPage(finalData.id,name, finalData.overview, finalData.poster_src)}}>
                    <tr>
                        <td>
                        <img alt="poster" src={finalData.poster_src} />
                        </td>
                        <td>
                            {name}
                        <p>
                            {finalData.overview}
                        </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(Row);