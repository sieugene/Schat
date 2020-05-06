import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import './ImagePreview.scss'
const ImagePreview = (props) => {

    return (
        <div className='previewImg'>
            <img src={props.previewImg} alt='preview' />
            <div className="closeButton">
            <CloseOutlined onClick={() => {props.removeImageAC(true)}}/>
            </div>
        </div>
    )
}

export default ImagePreview