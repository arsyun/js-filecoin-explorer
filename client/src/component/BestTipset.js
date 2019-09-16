import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

export default class index extends React.Component{
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Card>
                        <Statistic title="BEST TIPSET" value={'#222217'} />
                        <Statistic
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<Icon type="arrow-down" />}
                            suffix="%"
                        />
                    </Card>
                </Col>
            </Row>
        );
    }
}
