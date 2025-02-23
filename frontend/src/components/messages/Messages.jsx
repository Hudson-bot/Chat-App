import React from 'react'
import Message from './Message'
const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>  
  {/* overflow will helpif the messages overflow then help in scrolling */}
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </div>
  )
}

export default Messages


//Snippet
// import React from 'react'
// import Message from './Message'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>  
//   {/* overflow will helpif the messages overflow then help in scrolling */}
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     <Message/>
//     </div>
//   )
// }

// export default Messages