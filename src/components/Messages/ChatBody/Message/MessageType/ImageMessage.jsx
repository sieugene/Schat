import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';


const ImageMessage = (props) => {
    const [image, setImageLink] = useState(undefined);
 
    //Получение ссылки на аудио, так как ссылка через какое-то время
    //недействительна
    const firebase = useFirebase();
    if (props.image) {
        const storageRef = firebase.storage().ref()
        storageRef.child(props.image).getDownloadURL().then((resp) => {
            setImageLink(resp)
        })
    }
    if (!image) {
        return ''
    }
    return(
        <div className='imgItem'
            style={{ backgroundImage: `url(${image})` }}>
            <img src={image} alt='imageMessage' />
        </div>
    )
}

export default ImageMessage