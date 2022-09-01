import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <div className="rootmain border-top-wide border-primary d-flex flex-column theme-light">
            <div className='page page-center'>

                <div className='container-tight py-4'>
                    <div className='text-center mb-4'>
                        <a href="#" className='navbar-brand navbar-brand-autodark'>
                            <img src={require('./images/swt-logo.png')} className='img-fluid' width={90} />
                        </a>
                    </div>

                    <Form className='card card-md'>
                        <div className='card-body'>
                            <h3 className='card-title text-center mb-4'>Login to your account</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password <Link className='form-label-description' to='/forgotpassword'>I forgot password</Link>
                                </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me on this device" />
                            </Form.Group>
                           
                                <Link className='w-100 btn btn-primary' to='/dashboard'>Submit</Link>
                           
                        </div>

                    </Form>
                </div>

            </div>
        </div>
    );
}

export default Login;
