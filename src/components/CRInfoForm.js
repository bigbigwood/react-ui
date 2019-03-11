import React, {Component} from 'react';
import { Form, Row, Col, Input, Button, Icon, List } from 'antd';
import '../App.css';

class CRInfoForm extends Component {


    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
        ];


        return (
            <Form className="simple-form">
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="CR Number"> <Input/></Form.Item>
                        <Form.Item label="CR Type"> <Input/></Form.Item>
                        <Form.Item label="Risk"> <Input/></Form.Item>
                        <Form.Item label="Schedule Date"> <Input/></Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Status"> <Input/></Form.Item>
                        <Form.Item label="Owner"> <Input/></Form.Item>
                        <Form.Item label="Impact"> <Input/></Form.Item>
                        <Form.Item label="Close Date"> <Input/></Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Summary"> <Input/></Form.Item>
                        <Form.Item label="Description"> <textarea rows={8}
                                                                  className="description-textarea"/></Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={8}>
                        <h3>Approvers</h3>
                        <List bordered
                              dataSource={data}
                              renderItem={item => (<List.Item>{item}</List.Item>)}
                        /></Col>
                    <Col span={8}>
                        <h3>CIs</h3>
                        <List bordered
                              dataSource={data}
                              renderItem={item => (<List.Item>{item}</List.Item>)}
                        /></Col>
                    <Col span={8}>
                        <h3>PC Records</h3>
                        <List bordered
                              dataSource={data}
                              renderItem={item => (<List.Item>{item}</List.Item>)}
                        /></Col>
                </Row>
            </Form>
        );
    }
}

export default CRInfoForm;
