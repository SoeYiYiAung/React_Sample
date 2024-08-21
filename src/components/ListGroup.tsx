// import { Fragment } from "react";
function ListGroup(){
    const items=[
        'Korea',
        'Thailand',
        'Singapore',
        'Japan',
        'United State'
    ]

    if (items.length == 0)
        return (
            <>
                <h1>List</h1><p>No item found!</p>
            </>
        );

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {    
                    items.map( item => <li>{item}</li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;