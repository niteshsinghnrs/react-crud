import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../State_Managment/actionCreator";

function LoginPage(props) {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [loginValidationMsg, setloginValidationMsg] = useState();
  const dispatch = useDispatch();

  const { userPersonalDetails } = useSelector((state) => ({
    userPersonalDetails: state.mainReducer.userDetails,
  }));

  const inputHandeler = (e) => {
    setloginValidationMsg();
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (userDetails.userName && userDetails.password) {
      if (
        userPersonalDetails[0]?.name === userDetails.userName &&
        userPersonalDetails[0]?.birth_year === userDetails.password
      ) {
        // props.history.push("/SearchPage")
        props.updateFlag(false);
      } else {
        setloginValidationMsg("User name and Password not found");
      }
    }
  }, [userPersonalDetails]);

  const validateUser = (e) => {
    e.preventDefault();
    if (!userDetails.userName || !userDetails.password) {
      setloginValidationMsg("User name and Password is mandatory");
    } else {
      dispatch(actionCreator.getUserCredentials(userDetails.userName));
    }
  };
  return (
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input
                  type="text"
                  id="userName"
                  value={userDetails.userName}
                  onChange={(e) => inputHandeler(e)}
                  className="form-control"
                  placeholder="Email address"
                  autoComplete="nope"
                  required
                  autoFocus
                />
                <label htmlFor="userName">User Name</label>
              </div>

              <div className="form-label-group">
                <input
                  type="password"
                  id="password"
                  value={userDetails.password}
                  onChange={(e) => inputHandeler(e)}
                  className="form-control"
                  placeholder="Password"
                  autoComplete="nope"
                  required
                />
                <label htmlFor="password">Password</label>
                <span className="error-login">{loginValidationMsg}</span>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember password
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block text-uppercase"
                onClick={validateUser}
                type="submit"
              >
                Sign in
              </button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
