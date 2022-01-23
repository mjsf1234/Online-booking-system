import "./Table.css";
import { React, useState } from "react";
import { Table } from "reactstrap";

const DisplayTable = ({ bookingData, onDelete }) => {
  const [dates, setDates] = useState("");
  console.log(bookingData);
  // converting the ISO date string to simple date
  const getDate = (value) => {
    let dates = " ";
    const date = new Date(value);
    // const month = date.getMonth() + 1;
    // const day = date.getDate();
    // const hours = date.getHours();
    // dates = dates + hours + " on " + day + "/" + month;
    dates =
      date.toGMTString().slice(17, 22) +
      "  on " +
      date.toGMTString().slice(5, 12);
    return dates;
  };
  return (
    <div className="table-main">
      <h2>Bookings Details</h2>

      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Booked SLots</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  {e.bookedSlots.map((d, i) => {
                    return <p key={i}>{getDate(d)}</p>;
                  })}
                </td>

                <th>
                  <button
                    onClick={() => {
                      onDelete(e.id);
                    }}
                  >
                    delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
          {bookingData.map((e) => {
            return (
              <tr key={e.id}>
                <th>{e.name}</th>
                <th>{e.email}</th>
                <th>{e.bookedSlots}</th>

                <th>
                  <button
                    onClick={() => {
                      Ondelete(e.id);
                    }}
                  >
                    delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};
export default DisplayTable;
