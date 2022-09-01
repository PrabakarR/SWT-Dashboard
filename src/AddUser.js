import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import { useState } from 'react';


function AddUser() {

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (

        <div className='page'>
            <NavMenu />
            <Header />

            <div className='page-wrapper'>
                <Container fluid>
                    {/* Start Page Header */}
                    <div className='page-header d-print-none'>
                        <Row className='g-2 align-items-center'>
                            <Col>
                                <div className='page-pretitle'>Users</div>
                                <h2 className="page-title">Add User</h2>
                            </Col>
                        </Row>
                    </div>
                    {/* End Page Header */}

                    <div className='py-3'>
                        <Row className='g-2 justify-content-center'>

                            <Col className='col-lg-10 mb-4'>
                                <Card className='card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='fw-bold mb-3'>Add Student Information:</Card.Title>
                                        <Card.Text>
                                            <Form>
                                                <Row >
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>First Name</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="text" placeholder="Enter first name" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Last Name</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="email" placeholder="Enter last name" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Email address</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="email" placeholder="Enter email" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>DOB</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="date" placeholder="Enter DOB" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Age</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="tel" placeholder="Enter age" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Gender</Form.Label>
                                                            <div className='col'>
                                                                <Form.Select >
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                    <option>Others</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Display Name</Form.Label>
                                                            <div className='col'>
                                                                <Form.Control type="email" placeholder="Enter display Name" />
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>BloodGroup</Form.Label>
                                                            <div className='col'>
                                                                <Form.Select >
                                                                    <option>O+</option>
                                                                    <option>A+</option>
                                                                    <option>Others</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='col-lg-10 mb-4'>
                                <Card className='card-md card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='fw-bold mb-3'>Modals</Card.Title>
                                        <Button variant="primary" onClick={() => setSmShow(true)} >
                                            Success modal
                                        </Button>

                                        <Button variant="primary" onClick={() => setLgShow(true)}>
                                            Failure modal
                                        </Button>


                                        <Modal className='modal-sm'
                                             show={smShow}
                                             onHide={() => setSmShow(false)}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <div className='modal-status bg-success'></div>
                                            <Modal.Header closeButton>
                                            </Modal.Header>

                                            <Modal.Body className='text-center py-4'>
                                                <div className='vg-icon'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='mb-2 text-green' width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M9 12l2 2l4 -4"></path></svg>
                                                </div>
                                                <h3>Payment succedeed</h3>
                                                <div class="text-muted">Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.</div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <div className='w-100'>
                                                    <Row className='g-2'>
                                                        <Col>
                                                            <Button variant="secondary" className='w-100' >
                                                                Close
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="success" className='w-100'>Understood</Button>
                                                        </Col>
                                                    </Row>
                                                </div>


                                            </Modal.Footer>
                                        </Modal>

                                        <Modal className='modal-sm'
                                            show={lgShow}
                                            onHide={() => setLgShow(false)}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <div className='modal-status bg-danger'></div>
                                            <Modal.Header closeButton>
                                            </Modal.Header>

                                            <Modal.Body className='text-center py-4'>
                                                <div className='vg-icon'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='mb-2 text-danger' width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9v2m0 4v.01"></path><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path></svg>
                                                </div>
                                                <h3>Are you sure?</h3>
                                                <div class="text-muted">Do you really want to remove 84 files? What you've done cannot be undone.</div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <div className='w-100'>
                                                    <Row className='g-2'>
                                                        <Col>
                                                            <Button variant="secondary" className='w-100' >
                                                                Close
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="danger" className='w-100'>Understood</Button>
                                                        </Col>
                                                    </Row>
                                                </div>


                                            </Modal.Footer>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </div>

                </Container>

                <Footer />
            </div>
        </div>
    )
}

export default AddUser;