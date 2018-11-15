import React from 'react';
import PropTypes from 'prop-types';

import { Doughnut as DoughnutChart } from 'react-chartjs-2';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import { formatPercentage } from 'common/format';

import Analyzer from 'parser/core/Analyzer';

import StatisticsListBox, { STATISTIC_ORDER } from 'interface/others/StatisticsListBox';

const debug = false;

const CHART_SIZE = 75;

class ThunderFocusTea extends Analyzer {

  legend(items, total) {
    const numItems = items.length;
    return items.map(({ color, label, tooltip, value, spellId }, index) => {
      label = tooltip ? (
        <dfn data-tip={tooltip}>{label}</dfn>
      ) : label;
      label = spellId ? (
        <SpellLink id={spellId}>{label}</SpellLink>
      ) : label;
      return (
        <div
          className="flex"
          style={{
            borderBottom: '3px solid rgba(255,255,255,0.1)',
            marginBottom: ((numItems - 1) === index) ? 0 : 5,
          }}
          key={index}
        >
          <div className="flex-sub">
            <div
              style={{
                display: 'inline-block',
                background: color,
                borderRadius: '50%',
                width: 16,
                height: 16,
                marginBottom: -3,
              }}
            />
          </div>
          <div className="flex-main" style={{ paddingLeft: 5 }}>
            {label}
          </div>
          <div className="flex-sub">
            <dfn data-tip={value}>
              {formatPercentage(value / total, 0)}%
            </dfn>
          </div>
        </div>
      );
    });
  }

  

  castsTftRsk = 0;
  castsTftViv = 0;
  castsTftEnm = 0;
  castsTftRem = 0;

  castsTft = 0;
  castsUnderTft = 0;

  castBufferTimestamp = null;
  ftActive = false;

  constructor(...args) {
    super(...args);
    this.ftActive = this.selectedCombatant.hasTalent(SPELLS.FOCUSED_THUNDER_TALENT.id);
  }

  on_toPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (SPELLS.THUNDER_FOCUS_TEA.id === spellId) {
      this.castsTft += 1;
    }
  }

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;

      // Implemented as a way to remove non-buffed REM or EF casts that occur at the same timestamp as the buffed Viv cast.
      // Need to think of cleaner solution
    if ((event.timestamp - this.castBufferTimestamp) < 25) {
      return;
    }

    if (this.selectedCombatant.hasBuff(SPELLS.THUNDER_FOCUS_TEA.id)) {
      if (SPELLS.VIVIFY.id === spellId && !event.classResources.cost) {
        this.castsUnderTft += 1;
        this.castsTftViv += 1;
        debug && console.log('Viv TFT Check ', event.timestamp);
        this.castBufferTimestamp = event.timestamp;
      }
      if (SPELLS.RISING_SUN_KICK.id === spellId) {
        this.castsUnderTft += 1;
        this.castsTftRsk += 1;
        debug && console.log('RSK TFT Check ', event.timestamp);
      }
      if (SPELLS.ENVELOPING_MIST.id === spellId) {
        this.castsUnderTft += 1;
        this.castsTftEnm += 1;
        debug && console.log('Enm TFT Check ', event.timestamp);
      }
      if (SPELLS.RENEWING_MIST.id === spellId) {
        this.castsUnderTft += 1;
        this.castsTftRem += 1;
        debug && console.log('REM TFT Check ', event.timestamp);
      }
    }
  }

  

  on_finished() {
    if (this.ftActive) {
      this.castsTft += this.castsTft;
    }
    if (debug) {
      console.log(`TFT Casts:${this.castsTft}`);
      console.log(`RSK Buffed:${this.castsTftRsk}`);
      console.log(`Enm Buffed:${this.castsTftEnm}`);
      console.log(`Viv Buffed:${this.castsTftViv}`);
      console.log(`REM Buffed:${this.castsTftRem}`);
    }
  }

  get incorrectTFTCasts() {
    return this.castsUnderTft - (this.castsTftViv + this.castsTftRem);
  }

  get suggestionThresholds() {
    return {
      actual: this.incorrectTFTCasts,
      isGreaterThan: {
        minor: 1,
        average: 1.5,
        major: 2,
      },
      style: 'number',
    };
  }


  suggestions(when) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) => {
          return suggest(
            <>
              You are currently using <SpellLink id={SPELLS.THUNDER_FOCUS_TEA.id} /> to buff spells other than <SpellLink id={SPELLS.VIVIFY.id} /> or <SpellLink id={SPELLS.RENEWING_MIST.id} />. It is advised to limit the number of spells buffed to only these two.
            </>
          )
            .icon(SPELLS.THUNDER_FOCUS_TEA.icon)
            .actual(`${this.incorrectTftCasts} incorrect casts with Thunder Focus Tea`)
            .recommended(`<${recommended} incorrect cast is recommended`);
        });
  }

  statistic() {
    return (
      <StatisticsListBox
        position={STATISTIC_ORDER.CORE(20)}
        title={<><SpellLink id={SPELLS.THUNDER_FOCUS_TEA.id}>Thunder Focus Tea</SpellLink> usage</>}
      >
        {this.tftCastRatioChart()}
      </StatisticsListBox>
    );
  }
}

export default ThunderFocusTea;
