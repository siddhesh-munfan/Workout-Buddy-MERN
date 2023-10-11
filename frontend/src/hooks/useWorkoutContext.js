import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext);
    
    if (!context) {
        throw Error('context must be used in provider tree component');
    }

  return context;
}

