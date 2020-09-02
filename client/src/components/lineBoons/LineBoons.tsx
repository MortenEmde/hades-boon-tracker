/* eslint-disable react/no-array-index-key */
import React from 'react';
import LineTo from 'react-lineto';
import { Boon, GodNameFromUrl } from '../../ts/types';
import GodColor from './GodColor';
import { formatName } from '../../services/helperFunctions';

interface LineBoonsProps {
  boonData: Boon
  god: GodNameFromUrl;
}

const DrawLines = (boon: Boon, god: GodNameFromUrl) => {
  if (boon.prerequisites[0] === 'None') {
    return;
  }
  const lineColor = GodColor(god);
  return boon.prerequisites.map((prereq, index) => <LineTo key={index} from={formatName(prereq)} to={formatName(boon.name)} delay={1} fromAnchor="bottom" toAnchor="top" borderColor={lineColor} borderWidth={5} />);
};

const DrawDuoLines = (boon: Boon) => {
  if (boon.prerequisitesDuo === undefined) {
    return;
  }
  return boon.prerequisitesDuo.map((prereq, index) => <LineTo key={index} from={formatName(prereq)} to={formatName(boon.name)} delay={1} fromAnchor="bottom" toAnchor="top" borderColor="white" borderWidth={5} />);
};

const LineBoons = ({ boonData, god }: LineBoonsProps) => (
  <div>
    {DrawLines(boonData, god)}
    {DrawDuoLines(boonData)}
  </div>
);

export default LineBoons;
