import React, { useState } from 'react';
import './RenderBoon.css';
import { Boon, GodNameFromUrl } from '../../ts/types';
import { ServerUrl } from '../../serverURL';
import BoonPopOver from '../boonPopOver/BoonPopOver';
import LineBoons from '../lineBoons/LineBoons';
import { formatName } from '../../services/formatName';
import { godNameFromUrl } from '../../services/godNameFromUrl';

interface BoonProps {
  boon: Boon;
}

const RenderBoon: React.FC<BoonProps> = ({ boon }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null);
  const [showLines, setShowLines] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const god = godNameFromUrl(window.location.pathname);

  return (
    <div className={`boon ${formatName(boon.name)}`}>
      <img 
        aria-describedby={id}
        className="boonImage" 
        src={`${ServerUrl}/${god}Boons/${formatName(boon.name)}.png`} 
        alt='boon'
        onClick={handleClick}
        onMouseEnter={() => setShowLines(true)}
        onMouseLeave={() => setShowLines(false)}
      />
      <BoonPopOver boon={boon} id={id} open={open} anchorEl={anchorEl} handleClose={handleClose}/>
      {showLines && (
        <LineBoons boonData={boon} god={god}/>
      )}
    </div>
  );
}

export default RenderBoon;
