import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
const Messages = () => {
  const {messages,loading} = useGetMessages();
  const lastMessageRef = useRef();
  
  //to scroll down the chat when a new message is added automatically
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>  
    
  {/* overflow will helpif the messages overflow then help in scrolling */}
  {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
  {}
  {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
  {!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
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