import React, { Component } from 'react';
import { StudentCreatePage } from './StudentCreatePage';
import { Modal, Button, OverlayTrigger, Table, PageHeader } from 'react-bootstrap';

class StudentPage extends Component {

  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    const { actions: { studentList } } = this.props;
    studentList();
  }

  handleClose() {
    // const {actions: {studentReset}} = this.props;
    this.setState({ show: false });
    // studentReset();
  }

  handleShow() {
    this.setState({ show: true });
  }

  selectStudent(student) {
    const { actions: { studentSelect } } = this.props;
    studentSelect(student);
    this.handleShow();
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
    return (
      <div>
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StudentCreatePage handleCancel={this.handleClose} />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}

export default StudentPage;