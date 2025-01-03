import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);
  function ClickHandler() {
    if (count >= 10) setCount(0);
    else {
      setCount(count + 1);
    }
  }

  function ClickHandlerDec() {
    if (count <= 0) setCount(0);
    else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <p>You clicked button {count} times. </p>
      <button onClick={ClickHandler}>Increase</button>
      <button onClick={ClickHandlerDec}>Decrese</button>
    </>
  );
}

export default Counter;
