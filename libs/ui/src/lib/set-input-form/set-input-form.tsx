import './set-input-form.module.scss';
import React, {ChangeEvent, FC} from "react";
import {SetDto} from "@getstrong/dtos";

export interface SetInputFormProps {
  updateSet: (set: SetDto) => void,
  setNumber: number,
  weight?: number,
  reps?: number,
}

export const SetInputForm: FC<SetInputFormProps> = ({updateSet, setNumber, weight, reps}) => {

  const updateWeight = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateSet({setNumber: setNumber, weight: Number(value), reps})
  }

  const updateReps = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateSet({setNumber: setNumber, weight, reps: Number(value)})
  }

  return (
    <>
      <label htmlFor="weight" className="col-2 col-form-label">Weight</label>
      <div className="col-4">
        <input value={weight} type="number" className="form-control" id="weight"
               onChange={updateWeight} data-testid="weight-input"
        />
      </div>

      <label htmlFor="reps" className="col-2 col-form-label">Reps</label>
      <div className="col-4">
        <input value={reps} type="number" className="form-control" id="reps"
               onChange={updateReps} data-testid="reps-input"
        />
      </div>
    </>
  );
}

export default SetInputForm;
