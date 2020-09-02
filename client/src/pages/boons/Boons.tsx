import React from 'react';
import './Boons.css';
import useBoonsService from '../../services/useBoonsService';
import TierSortBoons from '../../components/tierSortBoons/TierSortBoons';
import { godNameFromUrl } from '../../services/helperFunctions';

const Boons: React.FC = () => {
  const service = useBoonsService(godNameFromUrl(window.location.pathname));

  return (
    <div className="containerBoons">
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded'
        && <TierSortBoons boonsData={service.payload.boons} />}
      {service.status === 'error' && (
        <div>Error, the backend has been bested by the Titans.</div>
      )}
    </div>
  );
};

export default Boons;
