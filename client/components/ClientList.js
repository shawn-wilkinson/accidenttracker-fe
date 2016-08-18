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
            <th>Name</th>
            <th>Monthly Payment</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.clients.map((c, i) => (
            <tr key={c.id}>
              <td><i data-id={c.id} className="fa fa-trash" /></td>
              <td>
                <i data-id={c.id} className="fa fa-pencil" />
              </td>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.payment}</td>
              <td>{c.age}</td>
              <td>{c.gender}</td>
            </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
