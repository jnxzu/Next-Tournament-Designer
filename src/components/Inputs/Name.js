import React from "react";
import { useForm } from "react-hook-form";
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import { setTournamentName } from "../../store/actions/generalActions";

export default function Name({ nextInput }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const mySubmit = ({ tournamentName }) => {
    dispatch(setTournamentName(tournamentName));
    nextInput();
  };

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <FadeIn delay={250} transitionDuration={250}>
        <input
          className="name-input"
          name="tournamentName"
          placeholder="Tournament Name"
          maxLength={25}
          ref={register({ required: true, maxLength: 25, minLength: 3 })}
        ></input>
        <div className="input-info">
          <span className="errors">
            {errors.tournamentName && "name invalid"}
          </span>
          <span className="instruction">press ENTER to submit</span>
        </div>
      </FadeIn>
    </form>
  );
}
