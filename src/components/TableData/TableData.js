import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SearchBox from "../SearchBox/SearchBox";
import Table from "../Table/Table";

const TableData = () => {
  const [employee, setEmployee] = useState({
    employees: [{}],
    filteredEmployees: [{}],
    order: "descend",
    headings: [
      { name: "Image", width: "15%", order: "descend" },
      { name: "Name", width: "15%", order: "descend" },
      { name: "Phone", width: "15%", order: "descend" },
      { name: "Email", width: "15%", order: "descend" },
      { name: "DOB", width: "15%", order: "descend" },
    ],
  });

  useEffect(() => {
    API.getEmp().then((data) => {
      setEmployee({
        ...employee,
        employees: data.data.results,
        filteredEmployees: data.data.results,
      });
    });
  }, []);

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    let filteredEmp = employee.employees.filter((emp) => {
      let empName =
        emp.name.first.toLowerCase() + " " + emp.name.last.toLowerCase();
      if (empName.indexOf(searchValue.toLowerCase()) !== -1) {
        return emp;
      }
    });

    setEmployee({
      ...employee,
      filteredEmployees: filteredEmp,
    });
  };

  const sort = (heading) => {
    if (employee.order === "descend") {
      setEmployee({
        ...employee,
        order: "ascend",
      });
    } else {
      setEmployee({
        ...employee,
        order: "descend",
      });
    }

    const compare = (a, b) => {
      if (employee.order === "descend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      }
    };

    const sortedEmployees = employee.filteredEmployees.sort(compare);
    setEmployee({
      ...employee,
      filteredEmployees: sortedEmployees,
    });
  };

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      <div>
        <Table
          headings={employee.headings}
          sort={sort}
          filteredEmp={employee.filteredEmployees}
        />
      </div>
    </>
  );
};

export default TableData;
