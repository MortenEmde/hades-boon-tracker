import React from 'react';
import './BoonPopOver.css';
import Popover from '@material-ui/core/Popover';
import { Boon } from '../../ts/types';

interface BoonProps {
  boon: Boon;
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLImageElement | null;
  handleClose: () => void;
}

const BoonPopOver = ({
  boon, id, open, anchorEl, handleClose,
}: BoonProps) => {
  const boonPrereqRender = (prerequisites: Array<string>) => {
    if (prerequisites) {
      return (
        <div>
          And (Any of below boons):
          {prerequisites.map(duoreq => <p key={duoreq}>{duoreq}</p>)}
        </div>
      );
    }
    return false;
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <div className="popOverContainer">
        <p>
          Name:
          {boon.name}
        </p>
        <p>
          Slot:
          {boon.slot}
        </p>
        <p>
          Description:
          {boon.description}
        </p>
        {boon.effect !== undefined
          && (
          <p>
            Effect:
            {boon.effect}
          </p>
          )}
        {boon.rarity !== undefined
          && (
          <div>
            {boon.rarity.map(rarity => (
              <p key={rarity.type}>
                {rarity.type}
                :
                {' '}
                {rarity.number}
              </p>
            ))}
          </div>
          )}
        <p>
          Tier:
          {boon.tier}
        </p>
        {boon.notes[0] !== 'None'
          && (
          <div>
            Notes:
            {boon.notes.map(note => <p key={note}>{note}</p>)}
          </div>
          )}
        <div>
          Prerequisites (Any of below boons):
          {boon.prerequisites.map(prereq => <p key={prereq}>{prereq}</p>)}
        </div>
        {boonPrereqRender(boon.prerequisitesDuo)}
      </div>
    </Popover>
  );
};

export default BoonPopOver;
