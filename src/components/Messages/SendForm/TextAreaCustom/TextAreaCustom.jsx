import React from 'react'
import { Emoji } from 'emoji-mart';
import { MultiLineParser } from 'text-emoji-parser';
import './TextAreaCustom.scss'


const TextAreaCustom = (props) => {
    let ParsedNode = MultiLineParser(props.typingValue,
        {
            SplitLinesTag: 'p',
            Rule: /(?:\:[^\:]+\:(?:\:skin-tone-(?:\d)\:)?)/gi
        },
        (EmojiTextMatchingRule, ruleNumber) => {
            return <Emoji emoji={EmojiTextMatchingRule} size={16} />
        });

    return (
        <>
            <div contentEditable={true} className='textAreaCustom'>
                {ParsedNode}
            </div>
        </>
    )
}

export default TextAreaCustom
