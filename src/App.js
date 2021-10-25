import { useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [revertedData, setRevertedData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/data", { message: value }).then((response) => {
      const result = response.data;
      const value = result.data;
      setRevertedData(value);
    });
  };

  return (
    <div style={{ padding: "4rem" }}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Enter your string message:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {revertedData && <div>{revertedData}</div>}
    </div>
  );
};

export default App;
