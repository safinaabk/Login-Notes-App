import { useState } from "react";

function useInput(defaultValue = "") {
  const [nilai, setNilai] = useState(defaultValue);

  const valueHandler = (event) => {
    setNilai(event.target.value);
  };

  return [nilai, valueHandler];
}

export default useInput;
