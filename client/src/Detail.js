import React from 'react';
import { Table, Divider, Tag } from 'antd';

export default class index extends React.Component{
    render() {
        const columns = [
            {
                title: 'To',
                dataIndex: 'to',
                key: 'to',
                render: text => <a>{text}</a>,
            },
            {
                title: 'From',
                dataIndex: 'from',
                key: 'from',
            },
            {
                title: 'Value',
                dataIndex: 'value',
                key: 'value',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                to:'t03',
                from:'t1b2xspaeux2ywqfo4tbauriyi2gsonjo5b52zi5a',
                name: 'John Brown',
                age: 32,
                value: '0.00003019898',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                to:'t03',
                from:'t1b2xspaeux2ywqfo4tbauriyi2gsonjo5b52zi5a',
                name: 'Jim Green',
                age: 42,
                value: '0.00003019898',
                tags: ['loser'],
            },
            {
                key: '3',
                to:'t03',
                from:'t1b2xspaeux2ywqfo4tbauriyi2gsonjo5b52zi5a',
                name: 'Joe Black',
                age: 32,
                value: '0.00003019898',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}
