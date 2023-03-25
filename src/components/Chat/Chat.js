import { Badge, Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Message from "../Message/Message";

export default function Chat() {
    const [unviewedMessageCount,setUnviewedMessageCount]=useState(0);
  const [height, setHeight] = useState(window.innerHeight - 205);
  const [isOnBottom,setIsOnBottom]=useState(false);
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

  return (
    <Container maxW="600px" pb="20px">
      <Box
        bg="white"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height={height}
      >

      
       <Message message={myMessage} isYou={false}></Message>
       <Message message={myMessage} isYou={true}></Message>
       <Message message={myMessage} isYou={false}></Message>
       <Message message={myMessage} isYou={false}></Message>
       <Message message={myMessage} isYou={true}></Message>
       <Message message={myMessage} isYou={false}></Message>
       <Message message={myMessage} isYou={false}></Message>
       <Message message={myMessage} isYou={true}></Message>
  

        {!isOnBottom && (
          <div
            style={{
              position: "sticky",
              bottom: 8,
              // right: 0,
              float: "right",
              cursor: "pointer",
            }}
          >
            {unviewedMessageCount > 0 ? (
              <Badge
                ml="1"
                fontSize="0.8em"
                colorScheme="green"
                display="flex"
                borderRadius="7px"
                padding="3px 5px"
                alignItems="center"
              >
                {unviewedMessageCount}
                <BsChevronDoubleDown style={{ marginLeft: "3px" }} />
              </Badge>
            ) : (
              <BsChevronDoubleDown style={{ marginLeft: "3px" }} />
            )}
          </div>
        )}
      </Box>
    </Container>
  );
}