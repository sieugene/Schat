import React from 'react'
import './ImageLoader.scss'
import { FileImageOutlined } from '@ant-design/icons';
const ImageUpload = (props) => {

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      debugger
      props.setImageFileAC(file);
      props.setImagePreviewUrlAC(reader.result);
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  if (props.removeImage) {
    props.setImageFileAC(null);
    props.setImagePreviewUrlAC(null);
    props.removeImageAC(false);
  }
  return (
    <div className="inputImageComponent">
      <FileImageOutlined style={{ fontSize: '20px' }} />
      <div className='fileInputButton'>
        <input className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)} />
      </div>


    </div>
  )
}
export default ImageUpload