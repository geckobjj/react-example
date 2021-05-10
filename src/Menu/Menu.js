import React from 'react';

const menu = (props) => {
    return (
        <div>
            <button onClick={props.addAtoms}>More Atoms</button>
            <button onClick={props.subtractAtoms}>Less Atoms</button>
        </div>
    )
}

export default menu;