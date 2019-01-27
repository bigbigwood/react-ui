import React, {Component} from 'react';
import { Form, Row, Col, Input, Button, Divider } from 'antd';

class NewSimpleCRForm extends Component {

    render() {
        return (
            <div className="simple-form">
                <Row gutter ={24}>
                    <Col span={12}>
                        <Form.Item label="Source CR Number"> <Input/></Form.Item>
                        <Form.Item label="Schedule Date"> <Input/></Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Template"> <Input/></Form.Item>
                        <Form.Item label="Verification Date"> <Input/></Form.Item>
                    </Col>
                </Row>
                <Row gutter ={24}> <Col> <Form.Item label="Summary"> <Input/></Form.Item> </Col> </Row>
                <Row gutter ={24}> <Col>
                    <Form.Item label="Description">
                        <textarea rows={8} className="description-textarea"/>
                    </Form.Item> </Col></Row>

                <Divider />

                <div style={{textAlign: 'center'}}>
                    <Button type="primary" size="large" >Submit</Button>
                </div>
            </div>
        );
    }
}

export default NewSimpleCRForm;