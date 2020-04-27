import React, { useState } from 'react';
import './SendFormMessages.scss'
import { Input, Col, Row } from 'antd';
import { SmileOutlined, SendOutlined } from '@ant-design/icons';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import { sendMessageTC, sendAudioMessageTC, sendImageMessageTC, setImagePreviewUrlAC, setAudioMessageAC, setImageFileAC, removeImageAC } from './../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import ImageUpload from './ImageLoader/ImageLoader';
import ImagePreview from './ImageLoader/ImagePreview';
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
                            <TextArea placeholder="Начните писать сообщение..."
                                autoSize={{ minRows: 2, maxRows: 4 }}
                                onChange={handleChange} value={typingValue} />
                        }
                        <div className="img__preview">
                            {props.previewImg && <ImagePreview previewImg={props.previewImg}
                                removeImageAC={props.removeImageAC}
                            />}
                        </div>
                    </div>
                </Col>
                {props.audioRecording ? '' :
                    <div className="sendMethods">
                        <div className="sendMethods-items">
                            <ImageUpload
                                sendImageMessageTC={props.sendImageMessageTC}
                                dialogId={props.match.params.roomId}
                                myId={props.myId}
                                setImagePreviewUrlAC={props.setImagePreviewUrlAC}
                                setImageFileAC={props.setImageFileAC}
                                removeImage={props.removeImage}
                                removeImageAC={props.removeImageAC}
                            />
                            <SmileOutlined style={{ fontSize: '20px' }} />
                        </div>
                    </div>
                }
                <Col span={props.audioRecording ? 24 : 2}>
                    {props.previewImg ?
                        <div className="sendButton">
                            <SendOutlined style={{ fontSize: '20px', color: 'red' }}
                                onClick={() => {
                                    props.sendImageMessageTC(
                                        props.imgFile,
                                        props.myId,
                                        props.match.params.roomId
                                    )
                                }}
                            />
                        </div>
                        :
                        typingValue.length >= 1 ?
                            <div className="sendButton">
                                <SendOutlined style={{ fontSize: '20px' }}
                                    onClick={sendingMessage}
                                />
                            </div>
                            :
                            <AudioRecorder
                                sendAudioMessageTC={props.sendAudioMessageTC}
                                dialogId={props.match.params.roomId}
                                myId={props.myId}
                                setAudioMessageAC={props.setAudioMessageAC}
                                audioRecording={props.audioRecording}
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
        imgFile: state.sendMessages.imgFile,
        removeImage: state.sendMessages.removeImage
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
        setImageFileAC,
        removeImageAC
    }))(SendFormMessages)