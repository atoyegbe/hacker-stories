import React from "react";
import Button from './Button'


const largeColumn = {
    widrh: '40%',
}

const midColumn = {
    width: '30%',
}

const smallColumn = {
    width: '10%',
}

const Table = ( { list, onDismiss} ) => {
    return (
    <div className="table">
    {list.hits.map( item => 
        <div key={item.objectID} className="table-row"> 
        <span style={{ width: '40px' }}> 
            <a href={item.url}> {item.title} </a>
        </span>
        <span style={ largeColumn }>{item.author}</span>
        <span style={ midColumn }>{item.num_comments}</span>
        <span stylee={ smallColumn }>{item.points}</span>
        <span>
            <Button className="button-inline"> Dismiss</Button>
        </span>
        </div>
    )}
    </div>
    )
}

export default Table;