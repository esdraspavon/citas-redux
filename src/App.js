import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

//Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
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
      <Provider store={store}>
        <div className="container">
          <Header title={"Administrador de pacientes de veterinaria"} />
          <div className="row">
            <div className="col-md-6">
              <Form />
            </div>
            <div className="col-md-6">
              <List deleteDate={this.deleteDate} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
