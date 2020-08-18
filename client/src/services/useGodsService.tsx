import { useEffect, useState } from 'react';
import { Gods, Service } from '../ts/types';
import { ServerUrl } from '../serverURL';

const useGodsService = () => {
  const [gods, setGods] = useState<Service<Gods>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`${ServerUrl}/gods`)
      .then(res => res.json())
      .then(res => setGods({ status: 'loaded', payload: res }))
      .catch(error => setGods({ status: 'error', error }));
  }, []);

  return gods
}

export default useGodsService;