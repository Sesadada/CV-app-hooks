import React, {useState, useEffect} from 'react'
import Work from './Work'
import Study from './Study'
import MainInfo from './MainInfo'
import ImageUp from './ImageUp'

const Form = (props) => {
    const [state, setState] = useState(
        {
            pic: '',
            name: '',
            lastName: '',
            comments: '',
            address: '',
            email: '',
            phone: '',
            interests: '',
            jobs: [{
                id: 1,
                company: '',
                year: '',
                role: '',
                city: ''
            }],
            education: [{
                id: 1,
                title: '',
                year: '',
                subject: '',
                school: ''
            }]
        })

    const {getData} = props

    const handleChange = (e) => {
      setState({...state,
          [e.target.name]: e.target.value,
      })
    }


    const updateState = (e, id, list) => {   
        const elementsIndex = state[list].findIndex(obj => obj.id === id )
        let newArray = [...state[list]]
        newArray[elementsIndex] = {...newArray[elementsIndex], [e.target.name]: e.target.value}
        setState({...state,
            [list]: newArray,
            });  
            console.log(state) 
    }


    const addInfo = (e, list, bp) => {
        e.preventDefault()
        let n;
        if(state[list][state[list].length -1]){
        n = (state[list][state[list].length -1].id) + 1}
        else {n = 1}
        const final = {...bp, id: n}
        setState({...state, [list]: [...state[list], final
    ]});
    
    }

    const cancelInfo = (e, list) => {
        e.preventDefault()
        const actualId = parseInt(e.target.name)
        const final = state[list].filter(obj => obj.id !== actualId)
        setState({...state,[list]: final,
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.getData(state);
    }  

    const getPic = (childData) =>{
        setState({...state, pic: childData})
        if(state.pic !== ''){
            getData(state)
        }
      }
    
  const callBack = React.useRef()
  callBack.current = getData
   
    useEffect(() => {
        callBack.current(state)
     }, [state, callBack]);

    const {jobs, education} = state

    const bluePrint = [
            {
                id: 1,
                company: '',
                year: '',
                role: '',
                city: ''
            },
            {
                id: 1,
                title: '',
                year: '',
                subject: '',
                school: ''
            }
        ]
        

    return (
            <form onSubmit={handleSubmit}>
               <div className='mainInfo'>
                 <MainInfo 
                 info= {state} 
                 update={handleChange}/> 
               </div>
               <div className="imgBtn">
               <ImageUp 
               getPic={getPic}/>
               </div>
               <div className="jobs">
                 <label>{jobs.length === 1? 'Your Actual Job':'Your Jobs'}</label>
                 {
                  jobs.map(job => 
                  <Work 
                  key={job.id} 
                  delete={(e) => cancelInfo(e, "jobs")} 
                  info={job} 
                  onChange={(e) => updateState(e, job.id, "jobs")}/>)
                 }
                 <button className="addStyle" 
                 onClick={(e) => addInfo(e, "jobs", bluePrint[0])}
                 >Add Job</button>
               </div>

               <div className="education">
               <label>Your studies</label>
               {
                  education.map(edu => 
                  <Study 
                  key={edu.id} 
                  delete={(e) => cancelInfo(e, "education")} 
                  education={edu} 
                  onChange={(e) => updateState(e, edu.id, "education")}/>)
                 }
                 <button 
                 className="addStyle" 
                 onClick={(e) => addInfo(e, "education", bluePrint[1])}
                 >Add Education</button>

               </div>
               <div className="interests">

               </div>
               <div className='textArea'>
                   <textarea 
                   placeholder='Your interests' 
                   name='interests' 
                   value={state.interests} 
                   onChange={handleChange}>
                   </textarea>
               </div>



            </form>
        )
    }


export default Form

/*
               <div className="imgBtn">
               <ImageUp 
               getPic={getPic}/>
               </div>
               <div className="jobs">
                 <label>{jobs.length === 1? 'Your Actual Job':'Your Jobs'}</label>
                 {
                  jobs.map(job => 
                  <Work 
                  key={job.id} 
                  delete={(e) => cancelInfo(e, "jobs")} 
                  info={job} 
                  onChange={(e) => updateState(e, job.id, "jobs")}/>)
                 }
                 <button className="addStyle" 
                 onClick={(e) => addInfo(e, "jobs", bluePrint[0])}
                 >Add Job</button>
               </div>

               <div className="education">
               <label>Your studies</label>
               {
                  education.map(edu => 
                  <Study 
                  key={edu.id} 
                  delete={(e) => cancelInfo(e, "education")} 
                  education={edu} 
                  onChange={(e) => updateState(e, edu.id, "education")}/>)
                 }
                 <button 
                 className="addStyle" 
                 onClick={(e) => addInfo(e, "education", bluePrint[1])}
                 >Add Education</button>

               </div>
               <div className="interests">

               </div>
               <div className='textArea'>
                   <textarea 
                   placeholder='Your interests' 
                   name='interests' 
                   value={state.interests} 
                   onChange={handleChange}>
                   </textarea>
               </div>

*/