import SPELLS from 'common/SPELLS';

export default function isAtonement(event) {
  return [SPELLS.ATONEMENT_HEAL_NON_CRIT.id, SPELLS.ATONEMENT_HEAL_CRIT.id].indexOf(event.ability.guid) !== -1;
}