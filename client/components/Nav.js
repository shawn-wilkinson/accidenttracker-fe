/* eslint-disable max-len, jsx-a11y/href-no-hash */

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#"><i className="fa fa-check-square fa-fw" /> Accident Tracker</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav" />
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><i className="fa fa-home fa-fw" /> Home</Link></li>
          <li><Link to="/clients"><i className="fa fa-users fa-fw" />  Clients</Link></li>
          <li><Link to="/cars"><i className="fa fa-car fa-fw" /> Cars</Link></li>
          <li><Link to="/claim"><i className="fa fa-folder-open-o fa-fw" />  Add Claim</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
