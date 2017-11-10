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
  [SPELLS.ATONEMENT_HEAL_NON_CRIT.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.ATONEMENT_HEAL_CRIT.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.POWER_WORD_SHIELD.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.POWER_WORD_RADIANCE.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.HALO_TALENT.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.PLEA.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.SHADOW_MEND.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
  [SPELLS.SHARE_IN_THE_LIGHT.ID]: {
    int: true,
    crit: true,
    hasteHpm:true,
    hasteHpct: true,
    mastery: true,
    vers: true,
  },
};

export const getSpellInfo = id => {
  return DISC_HEAL_INFO[id] || DEFAULT_INFO;
};
