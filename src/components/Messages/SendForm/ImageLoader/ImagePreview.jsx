import React from 'react'

const ImagePreview = (props) => {

    return (
        <>
            <img src={props.previewImg} alt='preview' />
            <button onClick={() => {props.removeImageAC(true)}}>Удалить</button>
        </>
    )
}

export default ImagePreview