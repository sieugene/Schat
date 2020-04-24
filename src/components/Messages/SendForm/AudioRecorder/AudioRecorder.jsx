import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser"
import { PauseCircleOutlined, AudioOutlined, SendOutlined } from "@ant-design/icons";
import './AduioRecorder.scss'
import { Row, Col } from 'antd';
import Audio from './../../ChatBody/Message/MessageType/Audio';



export default class AudioRecorder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    componentDidMount() {
    }

    controlAudio(status) {
        this.setState({
            status
        })
    }

    changeScheme(e) {
        this.setState({
            audioType: e.target.value
        })
    }

    render() {
        const { status, audioSrc, audioType } = this.state;
        const audioProps = {
            audioType,
            // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
            status,
            backgroundColor: 'rgba(255, 0, 0, 1)',
            audioSrc,
            timeslice: 1000,
            startCallback: (e) => {
                console.log("succ start", e)
            },
            pauseCallback: (e) => {
                console.log("succ pause", e)
            },
            stopCallback: (e) => {
                this.setState({
                    audioSrc: window.URL.createObjectURL(e)
                })
                console.log("succ stop", e)
                //sending audio file
                this.props.addTestFile(e);
                //thunk server
                this.controlAudio("");
            },
            onRecordCallback: (e) => {
                console.log("recording", e)
            },
            errorCallback: (err) => {
                console.log("error", err)
            }
        }
        const statusPaused = status === "recording";
        const statusRecording = status === "" || status === "paused";
        const statusForGraph = status === "recording" || status === "paused";
        const toggleGraph = statusForGraph ? 'showGraph' : 'hideGraph';
        return (
            <div>
                <Row>
                    <Col span="4">
                        {statusRecording &&
                            <AudioOutlined onClick={() => this.controlAudio("recording")}
                                style={{ fontSize: '24px', color: '#08c' }}
                            />
                        }
                        {statusPaused &&
                            <PauseCircleOutlined style={{ fontSize: '24px', color: '#08c' }}
                                onClick={() => this.controlAudio("paused")}
                            />
                        }
                    </Col>
                    <Col span="12">
                        <div className={toggleGraph}>
                            <AudioAnalyser {...audioProps} />
                        </div>
                    </Col>
                    <Col span="4" offset="4">
                        {status === "recording" &&
                            <SendOutlined style={{ fontSize: '24px', color: '#08c' }}
                                onClick={() => this.controlAudio("inactive")} />
                        }
                    </Col>
                </Row>
                {this.state.audioSrc &&
                    <div className='messagebody'>
                        <Audio srcAudio={this.state.audioSrc} />
                    </div>
                }
                {/* <select name="" id="" onChange={(e) => this.changeScheme(e)} value={audioType}>
                    <option value="audio/webm">audio/webm（default）</option>
                    <option value="audio/wav">audio/wav</option>
                    <option value="audio/mp3">audio/mp3</option>
                </select> */}
            </div>
        );
    }
}
