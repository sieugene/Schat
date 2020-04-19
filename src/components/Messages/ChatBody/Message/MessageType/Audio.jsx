import React from 'react';
import ReactWaves from '@dschoon/react-waves';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import './Audio.scss'

export default class Audio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wavesurfer: null,
            playing: false,
            pos: 0,
        };
    }

    onLoading = ({ wavesurfer, originalArgs = [] }) => {
        this.setState({ loaded: originalArgs[0] === 100, wavesurfer });
    };

    onPosChange = (pos, wavesurfer) => {
        if (pos !== this.state.pos) {
            this.setState({ pos, wavesurfer });
        }
    };


    render() {

        if (!this.props.srcAudio) {
            return ''
        }
        return (
            <div className={'voicemessage container'}>
                <div className='play button'
                    onClick={() => { this.setState({ playing: !this.state.playing }) }}>
                    {!this.state.playing
                        ?
                        <PlayCircleOutlined style={{ fontSize: '24px' }} />
                        :
                        <PauseCircleOutlined style={{ fontSize: '24px' }} />}
                </div>
                <ReactWaves
                    audioFile={this.props.srcAudio}
                    options={{
                        barGap: 1,
                        barWidth: .8,
                        barHeight: 2,
                        cursorWidth: 1,
                        height: 30,
                        hideScrollbar: true,
                        progressColor: '#000000',
                        normalize: true,
                        responsive: true,
                        waveColor: '#FFFFFF',
                    }}
                    volume={1}
                    zoom={1}
                    pos={this.state.pos}
                    playing={this.state.playing}
                    onPosChange={this.onPosChange}
                    onLoading={this.onLoading}
                    timelineOptions={{
                        container: '#timeline',
                        height: 20,
                        notchPercentHeight: 90,
                        labelPadding: 5,
                        unlabeledNotchColor: '#c0c0c0',
                        primaryColor: '#000',
                        secondaryColor: '#c0c0c0',
                        primaryFontColor: '#000',
                        secondaryFontColor: '#000',
                        fontFamily: 'Arial',
                        fontSize: 10,
                        duration: null,
                        zoomDebounce: false,
                        offset: 0
                    }}
                />
                <div id='timeline' style={{ width: '0px', margin: '0 auto' }} />
            </div>
        )
    }
}