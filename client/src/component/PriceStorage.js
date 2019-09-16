import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

export default class index extends React.Component{
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Card>
                        <Statistic title="Avg. Price of Storage" value={'0.00111GB/Mo'} />
                        <Statistic
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="arrow-up" />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
