import React from 'react'

function Card(props) {
  return (
    <div className="col-md-4 " >
    <div className="row g-0 d-flex justify-content-around">
      <div className="col-md-5">
        <img src={props.img} className="img-fluid rounded-start " alt="..."/>
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.number}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card