import React from 'react'
import { useParams } from 'react-router-dom'
const Result = (props) => {
    
    // useParams()
    const {variableName1, variableName2} = useParams(); // This is not a from props, it's coming from the useParams and the route


    return (
        <fieldset>
            <legend>Result.jsx</legend>
            <h1>Name:{variableName1}</h1>
            <h1>comment: {variableName2}</h1>
        </fieldset>
    )
}

export default Result
