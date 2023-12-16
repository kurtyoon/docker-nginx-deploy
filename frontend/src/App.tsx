import {useRoutes} from "react-router-dom";
import {routes} from "./routes.tsx";
import "./App.css"

const App = () => {
  const elem = useRoutes(routes);

  return <>{elem}</>;
};

export default App;