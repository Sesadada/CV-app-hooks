import React from 'react'

const MainInfo = (props) => {

        const {name, lastName, phone, email, address, comments} = props.info
        
        return (
            <div>                    
            <input name='name' type="text" placeholder='Name' 
            value={name} onChange={props.update}/>
            <input name='lastName' type="text" placeholder='Lastname' 
            value={lastName} onChange={props.update}/>
               <div className='textArea'>
                   <textarea placeholder='Introduce Yourself' name='comments' 
                   value={comments} onChange={props.update}>
                   </textarea>
               </div>

                   <input name='phone' type="text" placeholder='Phone Number' 
                   value={phone} onChange={props.update}/>
                   <input name='email' type="text" placeholder='Email' 
                   value={email} onChange={props.update}/>
                   <input style={{width: '40vw'}} name='address' type="text" placeholder='Address' 
                   value={address} onChange={props.update}/>
            </div>
        )
    
}

export default MainInfo
