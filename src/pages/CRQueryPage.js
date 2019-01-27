import React, {Component} from 'react';
import { Form, Row, Col, Input, Button, Divider } from 'antd';
import CRInfoForm from '../components/CRInfoForm';

class CRQueryPage extends Component {

    render() {

        return (
            <div>
                <Input.Search
                    placeholder="Input CR Number"
                    enterButton="Search"
                    size="large"
                    style={{ width: '45%' }}
                    onSearch={value => console.log(value)}
                />

                <Divider />

                <CRInfoForm/>

                <Divider />

                <Row>
                    <Col span={2} ><Button type="primary" size="large">Submit</Button></Col>
                    <Col span={2} ><Button type="primary" size="large">Approve</Button></Col>
                    <Col span={2} ><Button type="primary" size="large">Reject</Button></Col>
                    <Col span={2} ><Button type="primary" size="large">Close</Button></Col>
                </Row>
            </div>
        );
    }
}

export default CRQueryPage;