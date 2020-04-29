import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import editorStyles from 'draft-js-emoji-plugin/lib/plugin.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];


export default class TextAreaCustom extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        editorState: createEditorStateWithText(this.props.typingValue),
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
        console.log('test', editorState.getCurrentContent().getPlainText('\u0001'))
        this.props.setValue(editorState.getCurrentContent().getPlainText('\u0001'));
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
            <div>
                <div className={editorStyles.editor} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />
                    <EmojiSuggestions />
                </div>
                <div className={editorStyles.options}>
                    <EmojiSelect />
                </div>
            </div>
        );
    }
}