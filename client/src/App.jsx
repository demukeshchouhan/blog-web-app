import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetch(`${import.meta.env.VITE_API_URL}/hello-app`);
      const response = await data.json();
      setHello(response.message);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + React +{" "}
        <span
          style={{
            color: "#0070f3",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          {hello}
        </span>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more!!
      </p>
    </>
  );
}

export default App;
