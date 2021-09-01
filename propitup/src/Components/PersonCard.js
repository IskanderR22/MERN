

import React, {Component} from 'react';


class PersonCard extends Component {

    render(){
        return (
            <div id = "outline">
                <p class = "header">{this.props.header}</p>
                <p> Age: {this.props.age}</p>
                <p> Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;