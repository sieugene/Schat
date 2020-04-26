import React, { useState } from 'react'
import './ImageLoader.scss'
import { FileImageOutlined } from '@ant-design/icons';
const ImageUpload = (props) => {
  const [file, setFile] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle uploading-', file);
    props.sendImageMessageTC(file, props.myId, props.dialogId);
    props.setImagePreviewUrlAC(null);
    props.setImageFileAC(null);
  }

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      props.setImageFileAC(file);
      setFile(file);
      setImagePreviewUrl(reader.result)
      props.setImagePreviewUrlAC(reader.result);
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="inputImageComponent">
      <FileImageOutlined style={{ fontSize: '20px' }} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)} />
      </form>
    </div>
  )
}
export default ImageUpload