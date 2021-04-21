
const Study = (props) =>{

        const {title, year, subject, school, id} = props.education

        return (
           <div> 
               <input name='title' type="text" placeholder='Title' value={title} onChange={props.onChange}/>
               <input name='year' type="text" placeholder='Year/s' value={year} onChange={props.onChange}/>
               <input name='subject' type="text" placeholder='Subject' value={subject} onChange={props.onChange}/>
               <input name='school' type="text" placeholder='School' value={school} onChange={props.onChange}/>
               <input name={id} type="submit" value='Delete' className={"deletStyle"} onClick={props.delete}/>

           </div>
        )
    
}

export default Study
