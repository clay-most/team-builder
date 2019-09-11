import React from "react" 

const Member= props =>{
    return(
        <div>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
            <p>{props.role}</p>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default Member