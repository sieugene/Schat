import React from 'react'
import { Col, Row, Avatar } from 'antd'
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { getNameInDialog } from './HelperDialog';

const DialogItem = (props) => {
    return (
        <Col span={24} className='dialog__item' key={props.id}>
            <NavLink to={'/chat/dialog/' + props.id} >
                <Row>
                    <Col>
                        <Avatar size={30} icon={<UserOutlined />} />
                    </Col>
                    <Col span={20}>
                        <h3 className='dialogs__username'>
                            <b>{getNameInDialog(
                                props.invited,
                                props.creator,
                                props.users,
                                props.myId
                            )}
                            </b>

                        </h3>
                        <p className='dialogs__pastmessage'>
                            {props.lastMessage ? props.lastMessage :
                                'нет сообщений'
                            }
                        </p>
                    </Col>
                </Row>
            </NavLink>
        </Col>
    )
}

export default DialogItem