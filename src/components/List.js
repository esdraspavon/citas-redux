import React, { Component } from "react";
import Date from "./Date";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import { getDates } from "../actions/datesActions";

class List extends Component {
  state = {};
  render() {
    const dates = this.props.dates;
    const message =
      dates.length === 0 ? "No hay citas" : "Administra tus citas aqui";

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{message}</h2>
          <div className="lista-citas">
            {this.props.dates.map(date => (
              <Date
                key={date.id}
                info={date}
                deleteDate={this.props.deleteDate}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  dates: PropTypes.array.isRequired,
  deleteDate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dates: state.dates.dates
});

export default connect(
  mapStateToProps,
  { getDates }
)(List);
