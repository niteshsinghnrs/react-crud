import "./App.css";
import { useState } from "react";

import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./Home/HomePage";
import Navigation from "./Home/Navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

function App() {
  const [loginFlag, setLoginFlag] = useState(true);

  const updateLoginFlag = (flag) => {
    setLoginFlag(flag);
  };
  return (
    <div className="App">
      {loginFlag ? (
        <LoginPage updateFlag={updateLoginFlag}></LoginPage>
      ) : (
        <div className="container-fluid px-0">
          <Navigation />

          <HomePage />
        </div>
      )}
    </div>
  );
}

export default App;
