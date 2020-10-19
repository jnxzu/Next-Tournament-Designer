import React from 'react';
import { useForm } from 'react-hook-form';
import FadeIn from 'react-fade-in';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setNumberOfTeams } from '../../../store/actions/teamsActions';

export default function NumberOfTeams({ nextInput }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const mySubmit = ({ numberOfTeams }) => {
    dispatch(setNumberOfTeams(numberOfTeams));
    nextInput();
  };

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <FadeIn delay={250} transitionDuration={250}>
        <input
          className="name-input"
          name="numberOfTeams"
          placeholder="8"
          type="number"
          min="4"
          max="64"
          ref={register({ required: true, min: 4, max: 64, validate: (v) => v % 2 === 0 })}
        />
        <div className="input-info">
          <span className="errors">{errors.numberOfTeams && 'number invalid'}</span>
          <span className="instruction">press ENTER to submit</span>
        </div>
      </FadeIn>
      <input type="submit" style={{ display: 'none' }} />
    </form>
  );
}

NumberOfTeams.propTypes = {
  nextInput: PropTypes.func.isRequired,
};
