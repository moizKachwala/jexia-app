import React, { Component } from 'react';
import { StudentEditPage } from './StudentEditPage';
import { Modal, Table, PageHeader } from 'react-bootstrap';
import { Button } from '../../common';
import moment from 'moment';
import {DATE_FORMAT} from '../../../store/constants/date';

const systemRoles = [
  { value: 'Admin', label: 'Admin Staff' },
  { value: 'Registrars', label: 'Registrars' },
];

class StudentPage extends Component {

  constructor() {
    super();

    this.state = {
      show: false,
      role: systemRoles[0].value,
    };

    this.renderTable = this.renderTable.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.renderRoleSelect = this.renderRoleSelect.bind(this);
  }

  componentDidMount() {
    const { actions: { studentList } } = this.props;
    studentList();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCallback() {
    this.handleClose();

    const { actions: { studentList } } = this.props;
    studentList();
  }

  selectStudent(student) {
    const { actions: { studentSelect } } = this.props;
    studentSelect(student);
    this.handleShow();
  }

  handleRoleChange(event) {
    this.setState({ role: event.target.value });
  }

  formatDateField(value) {
    return moment(value).format(DATE_FORMAT);
  }

  renderRows() {
    const { students } = this.props;
    return students && students.map((student) => (
      <tr key={student.ID}>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{this.formatDateField(student.dateOfBirth)}</td>
        <td><Button onClick={() => this.selectStudent(student)}>Edit</Button></td>
      </tr>
    ));
  }

  renderTable() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </Table>
    );
  }

  renderRoleSelect() {
    return (
      <div className="row">
        <div className="col-md-4 center">
          <label>Select Role</label>
          <select value={this.state.selectedRole} className="form-control" onChange={this.handleRoleChange}>
            {systemRoles.map((opt, i) => (
              <option key={`${opt}-${i}`} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  render() {
    const { role } = this.state;
    const hasEditRights = Boolean(role === "Registrars");
    return (
      <div className="studentpage">
        {this.renderRoleSelect()}
        <PageHeader>
          All Students
          <div className="pull-right">
            <Button theme="primary" onClick={this.handleShow}>
              Add New Student
            </Button>
          </div>
        </PageHeader>
        {this.renderTable()}
        <Modal
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Body>
            <StudentEditPage
              hasEditRights={hasEditRights}
              handleCancel={this.handleClose}
              handleCallback={this.handleCallback}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default StudentPage;