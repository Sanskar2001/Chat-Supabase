import { Alert, Box, Button, Spinner } from "@chakra-ui/react";
import Message from "./Message";
import { useStateValue } from "../ContextApi/StateProvider"
import { supabase } from "../Supabase/Config";
import { useEffect } from "react";

export default function AllMessages() {
  const [ {username,messages,error,loadingInitial,routeHash,isOnBottom,newIncomingMessageTrigger,messageId} ,dispatch] =
    useStateValue();

    let mySubscription=null;
     function  fetchMessages()
     {
        
            const { data, error } = supabase
              .from("Chat-Messages")
              .select().then((data)=>{
                console.log(data.data);

                dispatch({
                    type:"SET_MESSAGES",
                    messages:data.data
                
                });

              });
        
              
        }

        function getMessagesAndSubscribe(){
            dispatch({
                type:"SET_ERROR",
                error:""
            
            });
            if (!mySubscription) {
              fetchMessages();

            supabase
            .channel('any')
            .on('postgres_changes', { event: '*', schema: '*' }, payload => {
             console.log('Change received!', payload)
             handleNewMessage(payload)
            })
            .subscribe()

            }
          };

     useEffect(()=>{
        console.log("Loading...")
        fetchMessages();
     },[newIncomingMessageTrigger])

     useEffect(()=>{
        console.log("Loading...")
        fetchMessages();
        getMessagesAndSubscribe();
     },[])

     const handleNewMessage = (payload) => {
        dispatch({
            type:"SET_INCOMING_MESSAGE_TRIGGER",
            newIncomingMessageTrigger:payload.new
        
        });
        fetchMessages();
        
        //* needed to trigger react state because I need access to the username state
        
      };



    
  const reversed = [...messages].reverse();
  if (loadingInitial)
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );
  if (error)
    return (
      <Alert status="error" mt="20px">
        {error}
        <Button
          ml="5px"
        //   onClick={getMessagesAndSubscribe}
          colorScheme="red"
          variant="link"
        >
          try to reconnect
        </Button>
      </Alert>
    );

  if (!messages.length)
    return (
      <Box as="h3" textAlign="center">
        No messages 😞
      </Box>
    );

    console.log("username "+username);
  return reversed.map((message) => {
    const isYou = message.userEmail === username;
    
    return <Message key={message.id} message={message} isYou={isYou} />;
  });

// console.log(messages);
// return (
//     <>
//     <h1>Hello</h1>
//     </>
// )
    
}