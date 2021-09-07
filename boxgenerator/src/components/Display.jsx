import React from 'react'

const Display = (props) => {

    const {allBoxes} = props; // Decontructing the array of boxes 


    return (
        <fieldset>
            <legend>Display Boxes</legend>
            <div className="d-flex justify-content-around flex-wrap" style = {{gap: 5}}>
                {
                    allBoxes.map( (box, index) => {
                        return (
                            <div key ={index} style={{width: "100px", height: "100px", background:`${box.color}`}} >
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display
