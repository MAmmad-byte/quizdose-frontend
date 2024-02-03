import { Box, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Box
        bg={"#ffb40930"}
        backdropFilter="auto"
        backdropBlur="5px"
        position={"absolute"}
        width={"100%"}
        height={"calc(100vh - 30px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="#38a169"
          color="#244743"
          size="xl"
        />
      </Box>
  )
}
