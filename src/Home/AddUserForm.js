import { useEffect, useState } from "react";
import ModalComponent from "../GenericComponent/Modal";
const AddUserForm = (props) => {
  const [userDetails, setuserDetails] = useState({});
  const inputHandler = (e) => {
    let key = e.target.id;
    let value = e.target.value;
    if (props.addUpdateFlag) {
      setuserDetails({
        ...userDetails,
        id: props.usersData.length
          ? props.usersData[props.usersData.length - 1].id + 1
          : 1,
        [key]: value,
      });
    } else {
      setuserDetails({
        ...userDetails,
        [key]: value,
      });
    }
  };

  useEffect(() => {
    if (!props.addUpdateFlag) {
      setuserDetails({ ...props.usersData });
    }
  }, []);

  const userInputForm = () => {
    return (
      <>
        <form>
          <div className="form-group input-group-sm row">
            <label htmlFor="inputEmail" className="col-md-2 col-form-label">
              Name :
            </label>
            <div className="col-md-3">
              <input
                type="text"
                id="name"
                className="form-control"
                value={userDetails.name}
                onChange={inputHandler}
              />
            </div>
            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Mid Name :
            </label>
            <div className="col-md-3">
              <input
                id="midName"
                className="form-control"
                type="text"
                onChange={inputHandler}
                value={userDetails.midName}
              />
            </div>
          </div>
          <div className="form-group input-group-sm row">
            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Last Name :
            </label>
            <div className="col-md-3">
              <input
                id="lastName"
                type="text"
                className="form-control"
                onChange={inputHandler}
                value={userDetails.lastName}
              />
            </div>

            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Mobile No :
            </label>
            <div className="col-md-3">
              <input
                id="mobNumber"
                type="text"
                maxLength="10"
                onChange={inputHandler}
                className="form-control"
                value={userDetails.mobNumber}
              />
            </div>
          </div>
          <div className="form-group input-group-sm row">
            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Gender :
            </label>
            <div className="col-md-3">
              <input
                type="radio"
                id="gender"
                onChange={inputHandler}
                name="Female"
                value="Female"
                checked={userDetails.gender === "Female"}
              />
              <span htmlFor="Female" className="px-2">
                Female
              </span>
              <input
                type="radio"
                id="gender"
                name="Male"
                onChange={inputHandler}
                value="Male"
                checked={userDetails.gender === "Male"}
              />
              <span htmlFor="Female" className="px-2">
                Male
              </span>
            </div>
            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Status :
            </label>

            <div className="col-md-3">
              <select
                name="status"
                id="status"
                onChange={inputHandler}
                className="form-control"
                value={userDetails.status}
              >
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="form-group input-group-sm row">
            <label htmlFor="inputPassword" className="col-md-2 col-form-label">
              Email :
            </label>

            <div className="col-md-3">
              <input
                type="text"
                id="email"
                value={userDetails.email}
                className="form-control"
                onChange={inputHandler}
              />
            </div>
          </div>
        </form>
      </>
    );
  };
  return (
    <>
      <ModalComponent
        show={props.modalFlag}
        onHide={() => props.addUserModal()}
        modalcontain={userInputForm()}
        modalTitle={
          props.addUpdateFlag ? "Add User details" : "Update User details"
        }
        addUpdateFlag={props.addUpdateFlag}
        addUpdateHandler={() => props.addUpdateHandler(userDetails)}
      />
    </>
  );
};

export default AddUserForm;
