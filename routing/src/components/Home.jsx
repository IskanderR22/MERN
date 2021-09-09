import React from 'react'
import {Link} from 'react-router-dom'
const Home = (props) => {
    return (
        <fieldset>
            <legend>Home.jsx</legend>
            <h1>Home!</h1>
            <Link to="/form">Go to the form!</Link>
        </fieldset>
    )
}

export default Home
