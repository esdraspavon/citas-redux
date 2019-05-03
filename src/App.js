import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

//Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
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
              <List />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
