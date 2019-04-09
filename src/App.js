import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {
  state = {
    dates: []
  };

  componentDidMount() {
    const datesLS = localStorage.getItem("dates");
    if (datesLS) {
      this.setState({
        dates: JSON.parse(datesLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("dates", JSON.stringify(this.state.dates));
  }

  makeDate = newDate => {
    const dates = [...this.state.dates, newDate];
    this.setState({ dates });
  };

  deleteDate = id => {
    //Obtener copia del state
    const oldDates = [...this.state.dates];
    //borrar el state
    const dates = oldDates.filter(date => date.id !== id);
    //Actualizar el state
    this.setState({ dates });
  };

  render() {
    return (
      <div className="container">
        <Header title={"Administrador de pacientes de veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <Form makeDate={this.makeDate} />
          </div>
          <div className="col-md-6">
            <List dates={this.state.dates} deleteDate={this.deleteDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
