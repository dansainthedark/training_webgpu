import { useState, useEffect } from "react";
import "./App.css";
import { callComputeShader } from "./utils";

const App = () => {
  const [result, setResult] = useState<Float32Array | undefined>();

  useEffect(() => {
    callComputeShader().then((result) => setResult(result));
  }, []);

  return (
    <div className="card">
      <div>{result?.join()}</div>
    </div>
  );
};

export default App;
