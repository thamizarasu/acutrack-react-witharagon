import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Button, Table } from "reactstrap";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

function Vehicles(props) {
  function renderHeader() {
    const noVehiclesMessage =
      props.vehicles.length === 0 ? <p>No vehicles found.</p> : null;

    return (
      <>
        <h1>Vehicles</h1> <Link to="/vehicle">Add Vehicle</Link>
        {noVehiclesMessage}
      </>
    );
  }

  if (props.isLoading) return <Loading />;

  return (
    <>
      {renderHeader()}
      {props.vehicles.length > 0 && (
        <Table bordered>
          <thead>
            <tr>
              <th />
              <th>Make</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            {props.vehicles.map(vehicle => (
              <tr key={vehicle.id}>
                <td>
                  {/* <button color="primary" onClick={() => props.onDeleteClick(vehicle.id)}>
                    Delete
                  </button> */}
                  <Button color="danger" size="sm" type="button" onClick={() => props.onDeleteClick(vehicle.id)}>
                  Delete
                  </Button>
                </td>
                <td>
                  <Link to={`/vehicle/${vehicle.id}`}>{vehicle.make}</Link>
                </td>
                <td>
                  <Link to={`vehicle/${vehicle.id}`}>{vehicle.model}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

Vehicles.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired
};

export default Vehicles;
