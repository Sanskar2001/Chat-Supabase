import { Badge, Box, Container,IconButton, Text, Textarea,Input,Stack,Button} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown,BsSend, BsSendFill} from "react-icons/bs";
import AllMessages from "../Message/AllMessages";
import { supabase } from "../Supabase/Config";
import { useStateValue } from "../ContextApi/StateProvider"
import scrollArea from "react-scrollbar"
import './Chat.css'
export default function Chat() {
    const [unviewedMessageCount,setUnviewedMessageCount]=useState(0);
  const [height, setHeight] = useState(window.innerHeight - 205);

  const [isOnBottom,setIsOnBottom]=useState(false);
  const ref=useRef(null)
  const [userMessage,setUserMessage]=useState("");
  const [ {username,messageId} ,dispatch] =
  useStateValue();
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight - 205);
    });
  }, []);

  const myMessage={
    username:"sanskaratrey12@gmail.com",
    is_authenticated:true,
    text:"Hello",
    timestamp:"2023-03-25 13:30:00+00"
  }
  
  const sendMessage=()=>{
    ref.current.value="";
    console.log("btn clicked");
    const { data,error } = supabase
    .from('Chat-Messages')
    .insert({ userEmail: username,messageContent: userMessage }).then((data)=>{
      console.log(data);
    })


  }

  return (
    <Container maxW="600px" pb="20px" marginLeft={"30%"}>
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height={height}
      >

        <scrollArea>
      <AllMessages></AllMessages>
      </scrollArea>
     
      </Box>

     <div class="container">
      <div class="container__item">
        <form class="form" autoComplete="off">
        <Stack  direction="row" width="max-content">
            <input
              name="message"
              placeholder="Enter a message"
              width="500px"
              bg="white"
              ref={ref}
              class="form__field"
              border="none"
              fontSize={"large"}
             
              autoFocus
              onChange={e => {setUserMessage(e.target.value)
              } }
            />
            <Button
              // variant="outline"
              colorScheme="teal"
              aria-label="Send"
              fontSize="20px"
              class="btn btn--primary btn--inside uppercase"
              rightIcon={<BsSendFill />}

              onClick={sendMessage}
                          
              
            />
       </Stack>
        </form>
        <div class="container__item container__item--bottom">
		<p>Type your message & chat in realtime😊 </p>
	</div>
      </div>
      </div>
    </Container>
  );
}