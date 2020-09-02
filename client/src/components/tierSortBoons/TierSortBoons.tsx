import React from 'react';
import './TierSortBoons.css';
import { Boon } from '../../ts/types';
import RenderBoon from '../renderBoon/RenderBoon';

interface TierSortBoonsProps {
  boonsData: Array<Boon>
}

const tierOneDivider = (boons: Array<Boon>) => boons.map(boon => ((boon.tier === '1' || boon.tier === 'Curse') ? <RenderBoon key={boon.name} boon={boon} /> : null));

const tierTwoDivider = (boons: Array<Boon>) => boons.map(boon => ((boon.tier === '2') ? <RenderBoon key={boon.name} boon={boon} /> : null));

const tierThreeDivider = (boons: Array<Boon>) => boons.map(boon => ((boon.tier === '3') ? <RenderBoon key={boon.name} boon={boon} /> : null));

const TierSortBoons = ({ boonsData }: TierSortBoonsProps) => (
  <>
    <div className="tier1Boons">
      {tierOneDivider(boonsData)}
    </div>
    <div className="tier2Boons">
      {tierTwoDivider(boonsData)}
    </div>
    <div className="tier3Boons">
      {tierThreeDivider(boonsData)}
    </div>
  </>
);

export default TierSortBoons;
