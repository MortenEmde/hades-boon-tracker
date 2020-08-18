import React from 'react';
import { Boon, GodNameFromUrl } from '../../ts/types';
import LineTo from 'react-lineto';
import { GodColor } from './GodColor'
import { formatName } from '../../services/formatName'

interface LineBoonsProps {
  boonData: Boon
  god: GodNameFromUrl;
}

const DrawLines = (boon: Boon, god: GodNameFromUrl) => {
  if (boon.prerequisites[0] === 'None') {
    return
  } 
  let lineColor = GodColor(god)
  return boon.prerequisites.map((prereq, index) =>
    <LineTo key={index} from={formatName(prereq)} to={formatName(boon.name)} delay={1} fromAnchor="bottom" toAnchor="top" borderColor={lineColor} borderWidth={5}/>
  )
}

const DrawDuoLines = (boon: Boon) => {
  if (boon.prerequisitesDuo === undefined) {
    return
  }
  return boon.prerequisitesDuo.map((prereq, index) =>
    <LineTo key={index} from={formatName(prereq)} to={formatName(boon.name)} delay={1} fromAnchor="bottom" toAnchor="top" borderColor="white" borderWidth={5}/>
  )
}

const LineBoons: React.FC<LineBoonsProps> = ({ boonData, god }) => {
  return (
    <div>
      {DrawLines(boonData, god)}
      {DrawDuoLines(boonData)}
    </div>
  );
};

export default LineBoons;
