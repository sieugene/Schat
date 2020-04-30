import React from 'react';
import './SendFormMessages.scss'
import { Col, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import { sendMessageTC, sendAudioMessageTC, sendImageMessageTC, setImagePreviewUrlAC, setAudioMessageAC, setImageFileAC, removeImageAC, submitTextMessageAC, setCurrentTextMessageAC } from './../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import ImagePreview from './ImageLoader/ImagePreview';
import TextAreaCustom from './TextAreaCustom/TextAreaCustom';


const SendFormMessages = (props) => {
    const typingValue = props.textMessage;
    const sendingMessage = () => {
        const message = {
            body: typingValue,
            createdAt: new Date(),
            uid: props.myId,
            messageType: 'text'
        }
        props.sendMessageTC(message, props.match.params.roomId);
        props.setCurrentTextMessageAC('')
    }
    return (
        <Col span={24}>
            <Row className='maxHeight__sendForm'>
                <Col span={22}>

                    {props.audioRecording ? '' :
                        <TextAreaCustom typingValue={typingValue}
                            setValue={props.setCurrentTextMessageAC}
                            sendImageMessageTC={props.sendImageMessageTC}
                            dialogId={props.match.params.roomId}
                            myId={props.myId}
                            setImagePreviewUrlAC={props.setImagePreviewUrlAC}
                            setImageFileAC={props.setImageFileAC}
                            removeImage={props.removeImage}
                            removeImageAC={props.removeImageAC}
                            submitTextMessage={props.submitTextMessage}
                        />
                    }
                    <div className="img__preview">
                        {props.previewImg && <ImagePreview previewImg={props.previewImg}
                            removeImageAC={props.removeImageAC}
                        />}
                    </div>
                </Col>
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
            <div className="customBottom"></div>
        </Col>
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        previewImg: state.sendMessages.previewImg,
        audioRecording: state.sendMessages.audioRecording,
        imgFile: state.sendMessages.imgFile,
        removeImage: state.sendMessages.removeImage,
        textMessage: state.sendMessages.textMessage,
        submitTextMessage: state.sendMessages.submitTextMessage
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
        removeImageAC,
        setCurrentTextMessageAC,
        submitTextMessageAC
    }))(SendFormMessages)