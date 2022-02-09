import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/countSlice";
import { Button } from "semantic-ui-react";

const CounterComp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterSlice.count);

  const increaseHandler = () => {
    dispatch(counterActions.increment());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>Current counter is = {counter}</h1>
      <Button onClick={increaseHandler} primary={true}>
        Increment
      </Button>
      <Button onClick={decreaseHandler} secondary>
        Decrement
      </Button>
    </div>
  );
};

export default CounterComp;
