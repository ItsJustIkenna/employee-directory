import React from "react";
import TableInfo from "../TableInfo/TableInfo";

const Table = ({ headings, sort, filteredEmp }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  key={name}
                  style={{ width }}
                  onClick={() => sort(name.toLowerCase())}
                >
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <TableInfo employee={filteredEmp} />
      </table>
    </div>
  );
};

export default Table;
