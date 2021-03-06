import React from 'react';

import TalentStatisticBox from 'interface/others/TalentStatisticBox';
import STATISTIC_ORDER from 'interface/others/STATISTIC_ORDER';
import ItemDamageDone from 'interface/others/ItemDamageDone';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import Analyzer from 'parser/core/Analyzer';
import GarroteSnapshot from '../features/GarroteSnapshot';

class Subterfuge extends Analyzer {
  static dependencies = {
    garroteSnapshot: GarroteSnapshot,
  };


  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.SUBTERFUGE_TALENT.id);
  }

  get bonusDamage() {
    return this.garroteSnapshot.bonusDamage;
  }

  statistic() {
    return (
      <TalentStatisticBox
        position={STATISTIC_ORDER.OPTIONAL(2)}
        icon={<SpellIcon id={SPELLS.SUBTERFUGE_TALENT.id} />}
        value={<ItemDamageDone amount={this.bonusDamage} />}
        label="Subterfuge"
      />
    );
  }

}

export default Subterfuge;