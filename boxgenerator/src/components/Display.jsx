import React from 'react'

const Display = (props) => {

    const {allBoxes} = props; // Decontrsucted


    return (
        <fieldset>
            <legend>Display Boxes</legend>
            <div className="d-flex justify-content-around flex-wrap" style = {{gap: 5}}>
                {
                    allBoxes.map( (box, index) => {
                        return (
                            <div style={{width: "100px", height: "100px", background:`${box.color}`}} key ={index}>
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display
