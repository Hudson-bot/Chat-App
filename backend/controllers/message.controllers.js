import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) =>{
   try{
    const {message} = req.body;//message from user as input
    const {id : receiverId} = req.params;//we get userid from params
    const senderId = req.user._id;//we get sender id


    let conversation=  await Conversation.findOne({
      participants: {$all: [senderId, receiverId]},
    })

    //if there is no conversation then we create one
    if(!conversation){
      conversation = await Conversation.create({
         participants: [senderId, receiverId],//converstaion is created
      })
    }

    //new message is created
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if(newMessage){
      conversation.messages.push(newMessage._id);
    }



    //SOCKET IO FUNCTIONality for realtime


    //this 2 lines will not run in parallel
   //  await conversation.save();
   //  await newMessage.save();


   //this will run in parallel
   await Promise.all([conversation.save(),newMessage.save()]);

    //message is sent as a response
    res.status(201).json(newMessage);
    
   }catch(error){
    console.log("Error in sendMessage controller: ",error.message)
    res.status(500).json({error:"Internal server error"});
   }
    
};

//will return the messages of the conversation in an array
export const getMessages = async (req, res) => {
   try {
      
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;
      const conversation = await Conversation.findOne({
         participants:{$all: [senderId,userToChatId]}
      }).populate("messages"); //NOT MESSAGE BUT ACTUAL MESSAGES

      if(!conversation) return res.status(200).json([]);

      const messages = conversation.messages;

      res.status(200).json(conversation.messages);
   } catch (error) {
      console.log("Error in getMessages controller: ",error.message)
    res.status(500).json({error:"Internal server error"});
   }
};
