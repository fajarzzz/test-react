import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Component } from 'react';

class FormContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleUserName(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            name: value
        });
    }

    handleUserEmail(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            email: value
        });
    }

    handleUserMessage(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            message: value
        });
    }

    render() {
        return (
            <div className='container text-start'>
                <div className='row'>
                    <div className='offset-md-3 col-md-6'>
                        <Form>
                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={(event) => this.handleUserName(event)} required/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.handleUserEmail(event)} required/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Message"
                                    className="mb-3"
                                >
                                    <Form.Control as="textarea" placeholder="Leave message" value={this.state.message} onChange={(event) => this.handleUserMessage(event)} required/>
                                </FloatingLabel>
                            </Form.Group>

                            <Button style={{ backgroundColor: '#4983A9', borderRadius: 0, display: 'block', width: '100%' }} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormContact;