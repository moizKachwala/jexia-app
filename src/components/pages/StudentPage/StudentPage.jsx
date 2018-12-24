import React, { Component } from 'react';
import { StudentEditPage } from './StudentEditPage';
import { Modal, Button, OverlayTrigger, Table, PageHeader } from 'react-bootstrap';

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

    this.renderRows = this.renderRows.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
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

  renderRows() {
    const { students } = this.props;
    return students && students.map((student) => (
      <tr key={student.ID}>
        <td>{student.ID}</td>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.dateOfBirth}</td>
        <td><Button onClick={() => this.selectStudent(student)}>Edit</Button></td>
      </tr>
    ));
  }

  render() {
    const {role} = this.state;
    const hasEditRights = Boolean(role === "Registrars");
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
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
        <PageHeader>
          List Students
        </PageHeader>
        <Table striped bordered condensed hover>
          <tbody>
            {this.renderRows()}
          </tbody>
        </Table>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add Student
        </Button>

        <Modal 
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StudentEditPage 
              hasEditRights={hasEditRights} 
              handleCancel={this.handleClose} 
              handleCallback={this.handleCallback}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default StudentPage;