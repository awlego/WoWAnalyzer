import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import DamageDone from 'Parser/Core/Modules/DamageDone';

import ColdHeart from 'Parser/DeathKnight/Shared/Items/ColdHeart';
import Tier20_2p from './Modules/Items/Tier20_2p';

import CastEfficiency from './Modules/Features/CastEfficiency';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';
import VirulentPlagueUptime from './Modules/Features/VirulentPlagueUptime';
import FesteringStrike from './Modules/Features/FesteringStrike';

import RunicPowerDetails from './Modules/RunicPower/RunicPowerDetails';
import RunicPowerTracker from './Modules/RunicPower/RunicPowerTracker';

import DarkArbiter from './Modules/Talents/DarkArbiter';
import UnholyFrenzy from './Modules/Talents/UnholyFrenzy';

import ScourgeOfWorlds from './Modules/Traits/ScourgeOfWorlds';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Core
    damageDone: [DamageDone, { showStatistic: true }],

    // Features
    castEfficiency: CastEfficiency,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownThroughputTracker: CooldownThroughputTracker,
    virulentPlagueUptime: VirulentPlagueUptime, 
    festeringStrike: FesteringStrike,

    // RunicPower
    runicPowerTracker: RunicPowerTracker,
    runicPowerDetails: RunicPowerDetails,

    // talents
    darkArbiter: DarkArbiter,
    unholyFrenzy: UnholyFrenzy,

    // items
    coldHeart: ColdHeart,
    tier20_2p: Tier20_2p,

    // traits
    scourgeOfWorlds: ScourgeOfWorlds,
  };
}

export default CombatLogParser;
	