/* eslint-disable react/no-string-refs, react/prop-types, max-len, jsx-a11y/href-no-hash */

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  // const page = (props.page * 1) || 0;
  // const prev = page <= 0 ? 0 : page - 1;
  // const next = page + 1;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th />
            <th />
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {props.cars.map((c, i) => (
            <tr key={i}>
              <td><i data-id={c.id} className="fa fa-trash" /></td>
              <td>
                <i data-id={c.id} className="fa fa-pencil" />
              </td>
              <td>{c.id}</td>
              <td>{c.make}</td>
              <td>{c.model}</td>
              <td>{c.year}</td>
              <td>{c.color}</td>
              <td>{c.client.name}</td>
            </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
