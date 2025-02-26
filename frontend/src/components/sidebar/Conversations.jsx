import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const{loading, conversations}=useGetConversations();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {Array.isArray(conversations) ? conversations.map((conversation, idx) => (
    <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length - 1}
    />
)) : null}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

    </div>
  )
}
export default Conversations

//sTARTER CODE SNIPPET
//import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>

//     </div>
//   )
// }

// export default Conversations





