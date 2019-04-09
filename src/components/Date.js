import React, { Component } from "react";
class Date extends Component {
  render() {
    const { name, own, date, time, symptom, id } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{name}</h3>
          <div className="card-text">
            <span>Nombre del dueno: </span>
            {own}
          </div>
          <div className="card-text">
            <span>Fecha: </span>
            {date}
          </div>
          <div className="card-text">
            <span>Hora: </span>
            {time}
          </div>
          <div className="card-text">
            <span>Sintomas: </span>
            {symptom}
          </div>
        </div>
      </div>
    );
  }
}

export default Date;
