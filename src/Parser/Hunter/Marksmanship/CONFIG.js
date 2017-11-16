import React from 'react';

import SPECS from 'common/SPECS';

import SPEC_ANALYSIS_COMPLETENESS from 'common/SPEC_ANALYSIS_COMPLETENESS';

import CombatLogParser from './CombatLogParser';
import CHANGELOG from './CHANGELOG';
import PutroAvatar from './Images/putro-avatar.png';

export default {
  spec: SPECS.MARKSMANSHIP_HUNTER,
  maintainer: '@Putro & @Leapis',
  maintainerAvatar: PutroAvatar,

  description: (
    <div>
      Hey, we've been hard at work to make this analyzer as good as we can. We hope that the suggestions and statistics will be helpful in improving your overall performance. Try and focus on improving only a few things at a time, until those become ingrained in your muscle memory so as to not be concentrating on many different things. <br /><br />

      If you want to learn more about Marksmanship Hunters, join the Hunter community on the Trueshot Lodge discord: <a href="https://discordapp.com/invite/trueshot" target="_blank" rel="noopener noreferrer">https://discordapp.com/invite/trueshot</a>. The <kbd>#Marksmanship</kbd> channel has a lot of helpful people, and if you post your logs in <kbd>#log-reviews</kbd>, you can expect to get some good pointers for improvement from the community. The best guide available currently is the guide on <a href="https://www.icy-veins.com/wow/marksmanship-hunter-pve-dps-guide">Icy-veins</a>. It is maintained by Azortharion, one of the best hunters in the world, and it is constantly fact-checked by community-members, and improved upon on an almost weekly basis.
    </div>
  ),
  // When changing this please make a PR with ONLY this value changed, we will do a review of your analysis to find out of it is complete enough.
  completeness: SPEC_ANALYSIS_COMPLETENESS.GOOD,
  //Link to GitHub issue
  specDiscussionUrl: 'https://github.com/WoWAnalyzer/WoWAnalyzer/milestone/4',

  // Don't change these:
  changelog: CHANGELOG,
  parser: CombatLogParser,
  // used for generating a GitHub link directly to your spec:
  path: __dirname,
};
