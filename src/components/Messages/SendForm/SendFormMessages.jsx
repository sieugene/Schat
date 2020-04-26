import React, { useState } from 'react';
import './SendFormMessages.scss'
import { Input, Col, Row } from 'antd';
import { FileImageOutlined, SmileOutlined, SendOutlined } from '@ant-design/icons';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import { sendMessageTC, sendAudioMessageTC, sendImageMessageTC, setImagePreviewUrlAC, setAudioMessageAC, setImageFileAC } from './../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import ImageUpload from './ImageLoader/ImageLoader';
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
                    <div contentEditable={false} >
                        {props.audioRecording ? '' :
                            <>
                                <TextArea
                                    placeholder="Начните писать сообщение..."
                                    autoSize={{ minRows: 2, maxRows: 4 }}
                                    onChange={handleChange} value={typingValue} />
                            </>
                        }
                        <div className="img__preview">
                            {props.previewImg && <img src={props.previewImg} />}
                        </div>
                    </div>
                </Col>
                <div className="sendMethods">
                    <div className="sendMethods-items">
                        <ImageUpload
                            sendImageMessageTC={props.sendImageMessageTC}
                            dialogId={props.match.params.roomId}
                            myId={props.myId}
                            setImagePreviewUrlAC={props.setImagePreviewUrlAC}
                            setImageFileAC={props.setImageFileAC}
                        />
                        <SmileOutlined style={{ fontSize: '20px' }} />
                    </div>
                </div>
                <Col>
                    {props.previewImg ?
                        <SendOutlined style={{ fontSize: '20px', color: 'red' }}
                            onClick={() => {
                                props.sendImageMessageTC(
                                    props.imgFile,
                                    props.myId,
                                    props.match.params.roomId
                                )
                            }}
                        />

                        :
                        typingValue.length >= 1 ?
                            <SendOutlined style={{ fontSize: '20px' }}
                                onClick={sendingMessage}
                            />
                            :
                            <AudioRecorder style={{ fontSize: '20px' }}
                                addTestFile={props.sendAudioMessageTC}
                                dialogId={props.match.params.roomId}
                                myId={props.myId}
                                setAudioMessageAC={props.setAudioMessageAC}
                                audioRecording={props.audioRecording}
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
        myId: state.firebase.auth.uid,
        previewImg: state.sendMessages.previewImg,
        audioRecording: state.sendMessages.audioRecording,
        imgFile: state.sendMessages.imgFile
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        sendMessageTC,
        sendAudioMessageTC,
        sendImageMessageTC,
        setImagePreviewUrlAC,
        setAudioMessageAC,
        setImageFileAC
    }))(SendFormMessages)