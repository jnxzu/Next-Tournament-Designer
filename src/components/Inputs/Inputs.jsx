import React, { useState } from 'react';
import NewOrUpload from './panels/NewOrUpload';
import Name from './panels/Name';
import Type from './panels/Type';
import NumberOfTeams from './panels/NumberOfTeams';

import './inputs.scss';

export default function Inputs() {
  const [inputStage, setInputStage] = useState('numberOfTeams');

  // new/upload
  // new -> league/tournament
  // league -> # teams -> input teams -> points? -> round robin -> sorting rules
  // tournament -> # teams(even) -> groups? -> seeding? -> input teams -> points? -> round robin -> sorting rules -> byes -> for each stage needed stage rules (two legged, etc)
  // upload -> OK

  function renderSwitch(val) {
    switch (val) {
      case 'name':
        return <Name nextInput={() => setInputStage('type')} />;
      case 'type':
        return <Type nextInput={() => setInputStage('numberOfTeams')} />;
      case 'numberOfTeams':
        return <NumberOfTeams nextInput={() => setInputStage('')} />;
      default:
        return <NewOrUpload nextInput={() => setInputStage('name')} />;
    }
  }

  return <div className="inputs">{renderSwitch(inputStage)}</div>;
}
