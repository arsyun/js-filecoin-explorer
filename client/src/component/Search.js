import React from 'react';
import { Input } from 'antd';

export default class index extends React.Component{
    render() {
        const { Search } = Input;
        return (
            <div>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </div>
        );
    }
}