import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';

import { formatNumber } from 'common/format';

import Combatants from 'Parser/Core/Modules/Combatants';
import Analyzer from 'Parser/Core/Analyzer';

const DAMAGE_INCREASE_PER_STACK = 0.03;
const MAX_STACK = 50;

class AnundsSearedShackles extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  bonusDmg = 0;
  buffStacksSinceLastCast = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasWrists(ITEMS.ANUNDS_SEARED_SHACKLES.id);
  }

  on_byPlayer_damage(event){
    const spellID = event.ability.guid;
    if(spellID === SPELLS.VOID_BOLT.id){
      this.bonusDmg += event.amount - (event.amount / (1 + this.buffStacksSinceLastCast * DAMAGE_INCREASE_PER_STACK));
      this.buffStacksSinceLastCast = 0;
    }
  }

  on_byPlayer_applybuff(event){
    this.addStack(event);
  }

  on_byPlayer_applybuffstack(event){
    this.addStack(event);
  }

  addStack(event){
    const spellID = event.ability.guid;
    if(spellID === SPELLS.ANUNDS_SEARED_SHACKLES_BUFF.id && this.buffStacksSinceLastCast < MAX_STACK){
      this.buffStacksSinceLastCast += 1;
    }
  }

  item() {
    return {
      item: ITEMS.ANUNDS_SEARED_SHACKLES,
      result: `${formatNumber(this.bonusDmg)} damage - ${this.owner.formatItemDamageDone(this.bonusDmg)}`,
    };
  }
}

export default AnundsSearedShackles;
