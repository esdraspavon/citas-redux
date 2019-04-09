import React, { Component } from "react";

class Form extends Component {
  //refs
  nameRef = React.createRef();
  ownRef = React.createRef();
  dateRef = React.createRef();
  timeRef = React.createRef();
  symptomRef = React.createRef();

  state = {};

  makeNewDate = e => {
    e.preventDefault();

    console.log(this.nameRef.current.value);
    console.log(this.ownRef.current.value);
    console.log(this.dateRef.current.value);
    console.log(this.timeRef.current.value);
    console.log(this.symptomRef.current.value);
    this.props.makeDate();
  };
  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
          <form onSubmit={this.makeNewDate}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.nameRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  ref={this.ownRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  type="date"
                  className="form-control"
                  ref={this.dateRef}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  ref={this.timeRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea className="form-control" ref={this.symptomRef} />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
