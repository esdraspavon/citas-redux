import React, { Component } from "react";
import PropTypes from "prop-types";

class Date extends Component {
  deleteDate = () => {
    this.props.deleteDate(this.props.info.id);
  };

  render() {
    const { name, own, date, time, symptom } = this.props.info;
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
          <button onClick={this.deleteDate} className="btn btn-danger">
            Borrar &times;
          </button>
        </div>
      </div>
    );
  }
}

Date.propTypes = {
  info: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    own: PropTypes.string.isRequired,
    symptom: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  deleteDate: PropTypes.func.isRequired
};

export default Date;
