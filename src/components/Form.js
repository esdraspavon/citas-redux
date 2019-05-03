import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { addDate } from "../actions/datesActions";
import { showError } from "../actions/errorAction";

class Form extends Component {
  //refs
  nameRef = React.createRef();
  ownRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  symptomRef = React.createRef();
  componentWillMount() {
    this.props.showError(false);
  }

  makeNewDate = e => {
    e.preventDefault();

    const name = this.nameRef.current.value,
      own = this.ownRef.current.value,
      date = this.dateRef.current.value,
      time = this.timeRef.current.value,
      symptom = this.symptomRef.current.value;

    if (
      name === "" ||
      own === "" ||
      date === "" ||
      time === "" ||
      symptom === ""
    ) {
      this.props.showError(true);
    } else {
      const newDate = {
        id: uuid(),
        name,
        own,
        date,
        time,
        symptom
      };

      //Se envia el objeto para actualizar el state
      this.props.addDate(newDate);
      //Reiniciar el formulario
      e.currentTarget.reset();
      //Elimina el error
      this.props.showError(false);
    }
  };
  render() {
    const error = this.props.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
          <form onSubmit={this.makeNewDate}>
            <div className="form-group row">
              <label className="col-sm-12 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-12 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.nameRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-12 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-12 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  ref={this.ownRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-12 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-12 col-lg-4  mb-4 mb-lg-0">
                <input
                  type="date"
                  className="form-control"
                  ref={this.dateRef}
                />
              </div>

              <label className="col-sm-12 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-12 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  ref={this.timeRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-12 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-12 col-lg-10">
                <textarea className="form-control" ref={this.symptomRef} />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-6">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
          {error ? (
            <div className="alert alert-danger text-center">
              Todos los campos son obligatorios
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  addDate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dates: state.dates.dates,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { addDate, showError }
)(Form);
