import * as React from "react";
import {
   ChakraProvider,
   Box,
   Text,
   VStack,
   Grid,
   theme,
   Image,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export const App = () => (
   <ChakraProvider theme={theme}>
      <Box
         textAlign="center"
         fontSize="xl"
         bgGradient="linear(to-br, yellow.200, pink.300)"
      >
         <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
               <Logo h="50vmin" pointerEvents="none" />
               <Box width="50%">
                  <Image
                     src={process.env.PUBLIC_URL + "/images/LS-1.jpeg"}
                     alt="lactation station desk"
                  />
               </Box>
               <Text>Website Coming Soon</Text>
            </VStack>
         </Grid>
      </Box>
   </ChakraProvider>
);
