import React, { useState } from 'react'
import '../styles.css'

const Comment = ({comment,handleInsert}) => {
 const [input, setInput] = useState('');   
 const [show,setShow] = useState(false);


 
//  var array = [{id: 1, date:new Date('March 25 2021')}, {id: 2, date:new Date('January 25 2020')}];

//  array.sort(function(a,b){
//    return (a.date) - (b.date);
//  });

//  array.map((a)=>{
//       console.log(a);
// //  })
// const d = new Date().toDateString();
// console.log(d);

 const onAddComment=()=>{
    handleInsert(input,comment.id)
      setInput('')
      setShow(false)
 }
 const handleNew=()=>{
    setShow(true)
 }
 return (
    <div>
        {comment.id==1?(
            <div className='input-box'>
               <input className='input' value={input} onChange={(e)=>setInput(e.target.value)}/>
               <button className='comment'  onClick={onAddComment}>comment</button>
            </div>
        ):(
            <div className='comment-box'>
                <div className='message'>{comment.data}</div>
                {/* {console.log(comment.date)} */}
                <div className='reply' onClick={handleNew}>reply</div>
            </div>
            
        )
        }
        <div style={{paddingLeft:25}}>
            {
                show && (
                    <div>
                        <input className='input' onChange={(e)=>setInput(e.target.value)}/>
                        <button className='comment' onClick={onAddComment}>reply</button>
                        <button className='comment' onClick={()=>setShow(false)}>cancel</button>
                    </div>
                )
            }
        
            {
                comment?.item?.map((cmt)=>(
                
                    <Comment key={cmt.id} comment={cmt} handleInsert={handleInsert}/>
                ))
            }
        </div>
    </div>
  )
}

export default Comment