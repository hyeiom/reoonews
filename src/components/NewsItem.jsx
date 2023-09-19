import React from 'react'


export default function NewsItem(props) {

   
    return (
        <>
            <div className="card" style={{ width: "18rem" }} >
                <img src={props.imageUrl} className="card-img-top" alt="..." loading='lazy' />
                <div className="card-body">
                    
                    <h5 className="card-title" >{props.title==null ?  " " :   ((props.title.length > 30 )? props.title.substring(0,30) + "..." : props.title)} </h5>


                    <p className="card-text color-dark"> {props.description == null ?  " " : (props.description.length > 30 ? props.description.substring(0,30) + "..." : props.title)  }  </p>
                    <a href={props.url} className="btn btn-sm btn-primary">Read More</a>
                </div>

            </div>
        </>
    )
}
