import React from 'react'
import HeaderDialogs from './Header/HeaderDialogs'
import SearchDialogs from './Search/SearchDialogs'
import { Row } from 'antd'
import ListDialogs from './ListDialogs/ListDialogs';

const Dialogs = (props) => {
    return (
        <>
            <Row justify="space-between">
                <HeaderDialogs />
            </Row>
            <Row>
                <SearchDialogs />
            </Row>
            <Row>
                <ListDialogs/>
            </Row>
        </>
    )
}

export default Dialogs