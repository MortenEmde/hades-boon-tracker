import React from 'react';
import { Link } from 'react-router-dom';
import { God } from '../../ts/types';

interface GodProps {
  god: God;
}

const RenderGod: React.FC<GodProps> = ({ god }) => {
  return (
    <div className="God">
      <Link to={`/${god.name.toLowerCase()}boons`}>
        <img src={god.symbol} alt='god-symbol'/>
      </Link>
    </div>
  );
}

export default RenderGod;
