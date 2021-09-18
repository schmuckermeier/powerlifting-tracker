import React, {useEffect, useState} from 'react';
import {SetDto} from "@getstrong/dtos";
import SetInputForm from "../../../../libs/ui/src/lib/set-input-form/set-input-form";
import axios from "axios";

const exerciseNames = ['Squat', 'Bench', 'Deadlift', 'Shoulder Press']

const App = () => {
  const [sets, setSets] = useState<SetDto[]>([]);

  useEffect(() => {
    axios.get<SetDto[]>('/api/sets')
      .then(res => res.data)
      .then(sets => sets.sort((a, b) => a.setNumber - b.setNumber))
      .then(setSets);
  }, []);

  useEffect(() => {
    const emptySet = sets.find(set => !set.weight && !set.reps);
    if (!emptySet) {
      let lastSetNumber = sets.length ? sets[sets.length - 1].setNumber : -1;
      setSets([...sets, {setNumber: ++lastSetNumber}])
    }
  }, [sets]);

  const updateSet = (updatedSet: SetDto) => {
    axios.put('/api/updateSet', updatedSet)
      .then(res => res.data)
      .then((sets: SetDto[]) => {
        setSets(sets);
      });
  }

  const onSetChange = (updatedSet: SetDto) => {
    const set = {
      ...updatedSet,
      reps: updatedSet?.reps === 0 ? undefined : updatedSet.reps,
      weight: updatedSet?.weight === 0 ? undefined : updatedSet.weight
    }
    updateSet(set);
  }

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <h1 data-testid={'title'}>Powerlifting Tracker</h1>
      </div>
      <form>

        <div className="form-group row mb-5">
          <label htmlFor="exerciseSelect" className="col-sm-2 col-form-label">Exercise</label>
          <div className="col-sm-10">
            <select className="form-control form-control-lg col-sm-10" id="exerciseSelect">
              {exerciseNames.map(name => <option key={name}>{name}</option>)}
            </select>
          </div>
        </div>

        {sets.map((set) =>
          <div key={set.setNumber} className="form-group row mb-5" data-testid={"set-number-" + set.setNumber}>
            <SetInputForm {...set} updateSet={onSetChange}/>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
