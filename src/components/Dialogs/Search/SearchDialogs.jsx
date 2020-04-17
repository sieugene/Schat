import React from 'react'
import Search from 'antd/lib/input/Search'
import { Col } from 'antd'

const SearchDialogs = (props) => {
    return (
        <Col span={24}>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: '100%' }} />
        </Col>
    )
}

export default SearchDialogs