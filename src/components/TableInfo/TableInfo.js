import React from "react";

const TableInfo = ({ employee }) => {
  return (
    <tbody>
      {employee[0] != undefined && employee[0].name != undefined ? (
        employee.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image">
                <img src={picture.medium} />
              </td>
              <td data-th="Name">
                {name.first} {name.last}
              </td>
              <td data-th="Phone">{phone}</td>
              <td data-th="Email">
                <a href={email}>{email}</a>
              </td>
              <td data-th="DOB">{dob.date}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default TableInfo;
