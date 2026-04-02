import { useEffect } from "react";
import { api } from "./services/api";

function App() {
  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <h1>Travel Guide App</h1>;
}

export default App;