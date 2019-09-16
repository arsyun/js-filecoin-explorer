import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

export default class index extends React.Component{
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Card>
                        <Statistic title="Network Storage Capacity" value={'1000000.PB'} />
                        <Statistic
                            value={0.98}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<Icon type="arrow-up" />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
