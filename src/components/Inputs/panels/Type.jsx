import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { useDispatch } from 'react-redux';
import { setTournamentType } from '../../../store/actions/generalActions';
import { TournamentTypeValues } from '../../../store/actions/actionValues';

export default function Type({ nextInput }) {
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch(setTournamentType(type));
    nextInput();
  };

  return (
    <FadeIn delay={250} transitionDuration={250} className="type-selection">
      <button type="button" onClick={() => handleClick(TournamentTypeValues.LEAGUE)}>
        league
      </button>
      <button type="button" onClick={() => handleClick(TournamentTypeValues.CUP)}>
        cup
      </button>
    </FadeIn>
  );
}

Type.propTypes = {
  nextInput: PropTypes.func.isRequired,
};
