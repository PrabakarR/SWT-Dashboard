import React from 'react';
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

function Organization() {
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
                                <h2 className="page-title">Organization</h2>
                            </Col>
                        </Row>
                    </div>
                    {/* End Page Header */}



                </Container>

                <Footer />
            </div>
        </div>
    )
}

export default Organization