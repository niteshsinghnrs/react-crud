import React, { Component, Suspense } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import columns from "../Constant/HomeGridColumn.json";

const AddUserForm = React.lazy(() => import("../Home/AddUserForm"));
const selectRowProp = {
  mode: "checkbox",
  style: { background: "#f3a9a9" },
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      columns: columns.columns,
      showAddModal: false,
      showUpdateModal: false,
      updateRecordRow: {},
    };
  }

  showAddModal = () => {
    this.setState({
      showAddModal: !this.state.showAddModal,
    });
  };
  showUpdateModal = (rowData) => {
    this.setState({
      updateRecordRow: { ...rowData },
      showUpdateModal: !this.state.showUpdateModal,
    });
  };

  sumitUserDetails = (userDetails) => {
    let userData = [];
    userData.push({ ...userDetails });
    this.setState((preState) => ({
      usersData: [...preState.usersData, ...userData],
    }));
    this.showAddModal();
  };

  editBtn = (cell, row, rowIndex, formatExtraData) => {
    return (
      <button className="btn-primary" onClick={() => this.showUpdateModal(row)}>
        Edit
      </button>
    );
  };

  deleteBtn = (cell, row, rowIndex, formatExtraData) => {
    return (
      <button
        className="btn-danger"
        onClick={() => this.deleteRecord(rowIndex)}
      >
        Delete
      </button>
    );
  };

  updateUserDetails = (objUpdated) => {
    let index = [...this.state.usersData].findIndex(
      (x) => x.id === objUpdated.id
    );
    let usersData = [...this.state.usersData];
    usersData.splice(index, 1, objUpdated);
    this.setState({
      usersData: [...usersData],
      showUpdateModal: !this.state.showUpdateModal,
    });
  };
  deleteRecord = (index) => {
    let usersData = [...this.state.usersData];
    usersData.splice(index, 1);
    this.setState({
      usersData: [...usersData],
    });
  };
  componentDidMount() {
    let columnsData = this.state.columns;
    columnsData[0].formatter = this.editBtn;
    columnsData[1].formatter = this.deleteBtn;
    this.setState({
      columns: [...columnsData],
    });
  }

  render() {
    const paginationOption = {
      custom: false,
      totalSize: this.state.usersData.length,
      sizePerPage: 10,
    };
    return (
      <div className="container-fluid">
        <div className="card mt-2">
          <div className="card-body">
            <h4 className="card-title">User Details form</h4>
            <button
              type="submit"
              className="btn btn-primary mt-2 ml-auto"
              onClick={this.showAddModal}
            >
              Add User
            </button>
            <div className="row mt-3">
              <div className="col-md-12 col-sm-12" style={{ overflow: "auto" }}>
                <BootstrapTable
                  striped
                  hover
                  keyField="id"
                  rowClasses={"tableRow"}
                  data={this.state.usersData}
                  columns={this.state.columns}
                  filter={filterFactory()}
                  selectRow={selectRowProp}
                  pagination={paginationFactory(paginationOption)}
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.showAddModal ? (
          <Suspense fallback={<div>Loading...</div>}>
            <AddUserForm
              modalFlag={this.state.showAddModal}
              addUserModal={this.showAddModal}
              addUpdateHandler={this.sumitUserDetails}
              usersData={this.state.usersData}
              addUpdateFlag={true}
            />
          </Suspense>
        ) : (
          ""
        )}

        {this.state.showUpdateModal ? (
          <AddUserForm
            modalFlag={this.state.showUpdateModal}
            addUserModal={this.showUpdateModal}
            addUpdateHandler={this.updateUserDetails}
            addUpdateFlag={false}
            usersData={this.state.updateRecordRow}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default HomePage;
