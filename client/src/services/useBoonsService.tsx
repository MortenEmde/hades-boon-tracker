import { useEffect, useState } from 'react';
import { Boons, Service } from '../ts/types';
import { ServerUrl } from '../serverURL';

const useBoonsService = (god : string | undefined) => {
  const [boons, setBoons] = useState<Service<Boons>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`${ServerUrl}/${god}boons`)
      .then(res => res.json())
      .then(res => setBoons({ status: 'loaded', payload: res }))
      .catch(error => setBoons({ status: 'error', error }));
  }, [god]);

  return boons
}

export default useBoonsService;