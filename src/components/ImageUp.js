import React, {useState, useEffect} from 'react'

const ImageUp = (props) => {

const [state, setState] = useState({
    newImage: localStorage.getItem('recent-image') || ''
  })



const fileSelectedHandler = (e) => {
  const temp = e.target.files[0]
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    localStorage.setItem("recent-image", reader.result)
    fileUploadHandler(reader.result)
    setState({
      newImage: reader.result    }) 
  })
  reader.readAsDataURL(temp)
  
}


const fileUploadHandler = (img) => {
  if(img){
    props.getPic(img)
  } else {
  let recentImageUrl;
  if(state.newImage === ""){
  recentImageUrl = localStorage.getItem("recent-image")}
  else {
    recentImageUrl = state.newImage
  }
  setState({
    newImage: recentImageUrl
  }) 
}
}

const cancelPic = () => {
  localStorage.removeItem("recent-image")
  setState({
    newImage: '',
  })
}
const {getPic} = props
const callBack = React.useRef()
callBack.current = getPic
 
  useEffect(() => {
      callBack.current(state.newImage)
   }, [state.newImage, callBack]);


    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
      hiddenFileInput.current.click();
    }; 

    return (
      <>


    <input style={{display: 'none'}} type='file' onChange={fileSelectedHandler} ref={hiddenFileInput}/>
    <button onClick={handleClick}>Pick Photo</button>

    <button onClick={cancelPic}>Delet Pic</button>
    </>
     );

    }
export default ImageUp


