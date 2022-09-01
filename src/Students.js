import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

function Students() {
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
                                <h2 className="page-title">Students</h2>
                            </Col>
                        </Row>
                    </div>
                    {/* End Page Header */}
                    <div className='py-3'>
                        <div className='card mb-3 mb-lg-5 '>
                            {/* Header */}
                            <div className='card-header'>
                                <Row className="row justify-content-between align-items-center flex-grow-1">
                                    <Col className='col-md mb-2 md-mb-0'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="card-title fw-bold mb-0">Users</div>
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


                </Container>

                <Footer />
            </div>
        </div>
    )
}

export default Students;