import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forgetpassword() {
    return (
        <div className="rootmain border-top-wide border-primary d-flex flex-column theme-light">
            <div className='page page-center'>

                <div className='container-tight py-4'>
                
                    <Form className='card card-md'>
                        <div className='card-body'>
                            <h3 className='card-title text-center mb-4'>Forgot password</h3>
                            <p className='text-muted mb-4'>Enter your email address and your password will be reset and emailed to you.</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                            Send me new password
                            </Button>
                        </div>

                    </Form>
                </div>

            </div>
        </div>
    );
}

export default Forgetpassword;
