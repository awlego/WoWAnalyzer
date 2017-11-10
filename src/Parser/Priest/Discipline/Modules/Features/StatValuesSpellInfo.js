import SPELLS from 'common/SPELLS';

/*
 * Fields:
 * int: spell scales with Intellect
 * crit: spell scales with (is able to or procced from) Critical Strike
 * hasteHpm: spell does more healing due to Haste, e.g. HoTs that gain more ticks
 * hasteHpct: spell can be cast more frequently due to Haste, basically any spell except for non haste scaling CDs
 * mastery: spell is boosted by Mastery
 * vers: spell scales with Versatility
 * multiplier: spell scales with whatever procs it, should be ignored for purpose of weights and for 'total healing' number
 * ignored: spell should be ignored for purpose of stat weights
 */

const DEFAULT_INFO = { // we assume unlisted spells scale with vers only (this will mostly be trinkets)
  int: false,
  crit: false,
  hasteHpm: false,
  hasteHpct: false,
  mastery: false,
  vers: true,
};

export const DISC_HEAL_INFO = {
  [SPELLS.ATONEMENT_HEAL_NON_CRIT.id]: {
    int: true,
    crit: true,
    hasteHpm: "maybe",
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.ATONEMENT_HEAL_CRIT.id]: {
    int: true,
    crit: true,
    hasteHpm: "maybe",
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.POWER_WORD_SHIELD.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.POWER_WORD_RADIANCE.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.PENANCE.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [208771]: { //(SPELLS.SMITE.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.HALO_TALENT.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.PLEA.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.SHADOW_MEND.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
  [SPELLS.SHARE_IN_THE_LIGHT.id]: {
    int: true,
    crit: true,
    hasteHpm: true,
    hasteHpct: true,
    mastery: false,
    vers: true,
  },
};

export const getSpellInfo = id => {
  return DISC_HEAL_INFO[id] || DEFAULT_INFO;
};
