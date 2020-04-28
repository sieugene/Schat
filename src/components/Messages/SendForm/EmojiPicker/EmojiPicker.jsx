import React, { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import './EmojiPicker.scss'
import { SmileOutlined } from '@ant-design/icons';

const EmojiPicker = (props) => {
    const [show, toggleShowPicker] = useState(false);

    const addEmoji = (e) => {
        let emoji = e.colons;
        props.setValue(props.typingValue + emoji)
    }
    return (
        <>
            <SmileOutlined style={{ fontSize: '20px' }}
                onClick={() => { toggleShowPicker(!show) }} />
            {show &&
                <Picker
                    onSelect={addEmoji} emojiTooltip={true} />
            }
        </>
    )
}

export default EmojiPicker
