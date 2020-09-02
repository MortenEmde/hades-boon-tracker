import React from 'react';
import { ServerUrl } from '../../serverURL';
import './Error404.css';

const Error404: React.FC<{}> = () => (
  <div className="containerError404">
    <h1>ERROR 404: PAGE NOT FOUND</h1>
    <h2>(try another url if you dare)</h2>
    <img
      className="error404Image"
      src={`${ServerUrl}/hades.png`}
      alt="404"
    />
  </div>
);

export default Error404;
