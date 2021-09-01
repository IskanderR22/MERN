

import React, {Component} from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    // Methods 
    increaseAge = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render(){
        return (
            <div id = "outline">
                <p class = "header">{this.props.header}</p>
                <p> Age: {this.state.age}</p>
                <p> Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>increase {this.props.header}'s age +1</button>
            </div>
        );
    }
}

export default PersonCard;