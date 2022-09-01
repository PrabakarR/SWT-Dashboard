import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
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

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

function Dashboard() {
    const tableData = {
        columns,
        data
    };
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
                                <div className='page-pretitle'>Overview</div>
                                <h2 className='page-title'>DashBoard</h2>
                            </Col>
                            {/* <Col className='col-12 col-md-auto ms-auto d-print-none'>
                                <Link to="/add-user">
                                    <Button variant="primary" >
                                        Add User
                                    </Button>
                                </Link>

                            </Col> */}
                        </Row>
                    </div>
                    {/* End Page Header */}

                    {/* Start Status */}
                    <div className='page-body'>
                        <Row >
                            <Col sm={6} lg={3} className='mb-3 mb-lg-5'>
                                <Card className='card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='subheader'>Total Users</Card.Title>
                                        <Card.Text>
                                            <div className='h3 mb-3 fw-bold'>24</div>
                                            <span className='badge bg-soft-success text-success'>
                                                <Icon.GraphUp /> 12.5%
                                            </span>
                                            <span className='text-body ms-1'>from 22</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6} lg={3} className='mb-3 mb-lg-5'>
                                <Card className='card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='subheader'>ACTIVE MEMBERS</Card.Title>
                                        <Card.Text>
                                            <div className='h3 mb-3 fw-bold'>12</div>
                                            <span className='badge bg-soft-success text-success'>
                                                <Icon.GraphUp /> 1.2%
                                            </span>
                                            <span className='text-body ms-1'>from 11</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6} lg={3} className='mb-3 mb-lg-5'>
                                <Card className='card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='subheader'>NEW/RETURNING</Card.Title>
                                        <Card.Text>
                                            <div className='h3 mb-3 fw-bold'>56%</div>
                                            <span className='badge bg-soft-danger text-danger'>
                                                <Icon.GraphUp /> 2.8%
                                            </span>
                                            <span className='text-body ms-1'>from 48.7</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6} lg={3} className='mb-3 mb-lg-5'>
                                <Card className='card-hover-shadow'>
                                    <Card.Body>
                                        <Card.Title className='subheader'>New Clients</Card.Title>
                                        <Card.Text>
                                            <div className='h3 mb-3 fw-bold'>6,782</div>
                                            <span className='badge bg-soft-secondary text-success'>
                                                <Icon.GraphUp /> 0%
                                            </span>
                                            <span className='text-body ms-1'>from 70</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* End Status */}

                        <div className='py-3'>
                            <div className='card mb-3 mb-lg-5 '>
                                {/* Header */}
                                <div className='card-header'>
                                    <Row className="row justify-content-between align-items-center flex-grow-1">
                                        <Col className='col-md mb-2 md-mb-0'>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="card-title fw-bold mb-0">All Users</div>
                                            </div>
                                        </Col>
                                        {/* End Col */}
                                        <Col className='col-12 col-md-auto ms-auto d-print-none'>
                                            <Link to="/add-user">
                                                <Button variant="primary" >
                                                    Add User
                                                </Button>
                                            </Link>

                                        </Col>
                                    </Row>
                                    {/* End Row */}
                                </div>
                                <div className='taablist'>
                                    <DataTableExtensions {...tableData}>
                                        <DataTable
                                            columns={columns}
                                            data={data}
                                            noHeader
                                            defaultSortField="id"
                                            defaultSortAsc={false}
                                            pagination
                                        />
                                    </DataTableExtensions>
                                </div>
                            </div>
                        </div>

                    </div>

                </Container>

                <Footer />
            </div>



        </div>
    )
}

export default Dashboard;