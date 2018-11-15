
import React from 'react';
import PropTypes from 'prop-types';

import SPELLS from 'common/SPELLS';

class ThunderFocusTeaVizualizationHelper extends React.PureComponent {
  static propTypes = {
    castsTftViv: PropTypes.number.isRequired,
    castsTftRem: PropTypes.number.isRequired,
    castsTftEnm: PropTypes.number.isRequired,
    castsTftRsk: PropTypes.number.isRequired,
    castsUnderTft: PropTypes.number.isRequired,
  };

  chart(items) {
    return (
      <DoughnutChart
        data={{
          datasets: [{
            data: items.map(item => item.value),
            backgroundColor: items.map(item => item.color),
            borderColor: '#666',
            borderWidth: 1.5,
          }],
          labels: items.map(item => item.label),
        }}
        options={{
          legend: {
            display: false,
          },
          tooltips: {
            bodyFontSize: 8,
          },
          cutoutPercentage: 45,
          animation: false,
          responsive: false,
        }}
        width={CHART_SIZE}
        height={CHART_SIZE}
      />
    );
  }
    
  // tftCastRatioChart
  render() {
    const items = [
      {
        color: '#00b159',
        label: 'Vivify',
        spellId: SPELLS.VIVIFY.id,
        value: this.props.castsTftViv,
      },
      {
        color: '#00aedb',
        label: 'Renewing Mist',
        spellId: SPELLS.RENEWING_MIST.id,
        value: this.props.castsTftRem,
      },
      {
        color: '#f37735',
        label: 'Enveloping Mists',
        spellId: SPELLS.ENVELOPING_MIST.id,
        value: this.props.castsTftEnm,
      },
      {
        color: '#ffc425',
        label: 'Rising Sun Kick',
        spellId: SPELLS.RISING_SUN_KICK.id,
        value: this.props.castsTftRsk,
      },
    ];

    return (
      <div className="flex">
        <div className="flex-sub" style={{ paddingRight: 12 }}>
          {this.chart(items)}
        </div>
        <div className="flex-main" style={{ fontSize: '80%', paddingTop: 3 }}>
          {this.legend(items, this.props.castsUnderTft)}
        </div>
      </div>
    );
  }
}