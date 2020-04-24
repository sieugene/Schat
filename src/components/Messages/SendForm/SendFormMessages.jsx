import React, { useState } from 'react';
import './SendFormMessages.scss'
import { Input, Col, Row } from 'antd';
import { FileImageOutlined, SmileOutlined, SendOutlined } from '@ant-design/icons';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import { sendMessageTC, sendAudioMessageTC } from './../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
const { TextArea } = Input;

const SendFormMessages = (props) => {
    const [typingValue, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const sendingMessage = () => {
        const message = {
            body: typingValue,
            createdAt: new Date(),
            uid: props.myId,
            messageType: 'text'
        }
        props.sendMessageTC(message, props.match.params.roomId);
        setValue('');
    }
    return (
        <Col span={24}>
            <Row>
                <Col span={22}>
                    <TextArea
                        placeholder="Начните писать сообщение..."
                        autoSize={{ minRows: 2, maxRows: 4 }}
                        onChange={handleChange} value={typingValue}
                    />
                </Col>
                <div className="sendMethods">
                    <div className="sendMethods-items">
                        <FileImageOutlined style={{ fontSize: '20px' }} />

                        <SmileOutlined style={{ fontSize: '20px' }} />
                    </div>
                </div>
                <Col>
                    {typingValue.length >= 1 ?
                        <SendOutlined style={{ fontSize: '20px' }}
                            onClick={sendingMessage}
                        />
                        :
                        <AudioRecorder style={{ fontSize: '20px' }} 
                        addTestFile={props.sendAudioMessageTC}
                        dialogId={props.match.params.roomId}
                        myId={props.myId}
                        //заменить слово addTestFile на sendAudioMessageTC
                        />
                    }

                </Col>
            </Row>
        </Col>
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        sendMessageTC,
        sendAudioMessageTC
    }))(SendFormMessages)