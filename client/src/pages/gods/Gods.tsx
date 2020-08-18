import React from 'react';
import './Gods.css';
import RenderGod from '../../components/renderGod/RenderGod';
import useGodsService from '../../services/useGodsService';

const Gods: React.FC = () => {
  const service = useGodsService();

  return (
    <div className="containerGods">
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.gods.map(god => 
          <RenderGod key={god.name} god={god}/>
        )}
      {service.status === 'error' && (
        <div>Error, the backend has been bested by the Titans.</div>
      )}
    </div>
  );
};

export default Gods;
