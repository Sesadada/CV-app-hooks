import React from 'react'

const CvStudy =(props)=> {
   
        const {title, subject, year, school} = props.studies

        return (
            <div>
            <div className="firstLine">
           <p style={{fontWeight: "bold"}}>{title}</p>
           <p>{year}</p>
           
           </div>
           <div className="secondLine">
           <p>{subject}</p>
           <p>{school}</p>
           </div>
            </div>
        )
    
}

export default CvStudy
