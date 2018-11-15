import React from 'react';
import Analyzer from 'parser/core/Analyzer';
import MistweaverEncounterStats from 'parser/monk/mistweaver/modules/features/MistweaverEncounterStats';

// TODO: Refactor this module
class MistweaverEncounterPanel extends Analyzer {
  render() {
    return (
      <MistweaverEncounterStats currentBoss={this.owner.fight.boss} difficulty={this.owner.fight.difficulty} spec={this.selectedCombatant._combatantInfo.specID} />
    );
  }
}

export default MistweaverEncounterPanel;
