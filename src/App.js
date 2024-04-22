import { AppWrapper } from "./App.style.js";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/";
import Menu from "./MenuAside";
function App() {
  return (
    <AppWrapper>
      <div className="menu">
        <Menu />
      </div>
      <div className="main">{useRoutes(routes)}</div>
    </AppWrapper>
  );
}

export default App;
