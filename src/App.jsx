import { useState } from "react";
import Comment from "./component/Comment"

const insertNode=(comments,input,cmtId)=>{
  if(comments.id === cmtId)
  {
    comments.item.push({
      id:Math.random(),
      date:new Date().toDateString(),
      data:input,
      item:[]
    })

    return comments;
  }

  let latest = comments.item.map((obj)=>{
    return insertNode(obj,input,cmtId)
  })

  return {...comments,item:latest}
}
let comment=
{
  id:1,
  item:[
    {
      id:3,
      date:new Date('March 20 2023'),
      data:"this is first",
      item:[]
    },
    {
      id:4,
      date:new Date('January 20 2044'),
      data:"this is second",
      item:[]
    }
  ]
};

//just added some raw date with random dates to see the sorting function works properly or not.

const sortComments =()=>{
  comment.item.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
})

}
  
const App = () => {
      const handleInsert = (input,cmtId) => {
      // console.log(input);
      const finalStructure = insertNode(comments,input,cmtId)
      setComments(finalStructure)
      sortComments()
  }
  
  const [comments,setComments] = useState(comment)
  // console.log(comments);
  return (
    <div className="App">
         <Comment comment={comments} handleInsert={handleInsert}/>     
    </div>
  );
};

export default App;