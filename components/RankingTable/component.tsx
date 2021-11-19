import React from "react";
import { TableProps } from "./props";

export function RankingTable<AvoidShadowedGenericdata>({
  columns,
  data,
}: TableProps<AvoidShadowedGenericdata>) {
  return (
    <table className="table table-dark table-striped">
      <thead className="mb-4">
        {columns.map((c, i) => (
          <th key={i} scope="col" style={{ color: "white" }}>
            <div className="tw-mb-4 d-flex justify-content-center align-items-center">
              {c}
            </div>
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} style={{ color: "white" }}>
            {columns.map((c, i) => {
              const val = row[c];
              if (typeof val === "string" && val.startsWith("http")) {
                return (
                  <th key={i} style={{ color: "white" }}>
                    <div className="d-flex align-items-center justify-content-center">
                      <img alt="flag" src={val} width="30" height="17" />
                    </div>
                  </th>
                );
              }

              return (
                <th key={i} style={{ color: "white" }}>
                  {c === "Country" ? (
                    <div className="d-flex align-items-center justify-content-center">
                      {row[c]}
                    </div>
                  ) : c === "Description" ? (
                    <div className="d-flex align-items-center justify-content-start">
                      {row[c]}
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-end">
                      {row[c]}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
