import React from 'react';
import SPELLS from 'common/SPELLS/index';

import SpellLink from 'common/SpellLink';
import SpellIcon from 'common/SpellIcon';
import { formatPercentage } from 'common/format';
import ActivityIndicator from 'interface/common/ActivityIndicator';

import EncounterStats from 'interface/report/Results/EncounterStats.js';
import ThunderFocusTea from 'parser/monk/mistweaver/modules/spells/ThunderFocusTea.js';

const LEVEL_15_TALENT_ROW_INDEX = 0;

class MistweaverEncounterStats extends EncounterStats {
  static dependencies = {
    encounterStats: EncounterStats,
    // thunderFocusTea: ThunderFocusTea,
  };

  constructor(...args) {
    this.thunderFocusTea = new ThunderFocusTea()
  }


  render() {
    console.log("alex1", this.thunderFocusTea.castsTftRsk);
    return null;
  }
}

export default MistweaverEncounterStats;
