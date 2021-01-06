import React, { useState } from 'react';
import ProfileNavbar from '../ProfileNav';
import ProfileSidebar from '../ProfileSidebar';
import {
  Container,
  Form,
  
} from './SigninElements';
import {
  ChakraProvider,
  Stack,
  Avatar,
  Input,
  Grid,
  Box,
  Badge,
  Image,
  Flex,
  Tag,
  Text,
  Button,
} from '@chakra-ui/react';
import Web3 from 'web3';




const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <Container>
    <ProfileSidebar isOpen={isOpen} toggle={toggle} />
    <ProfileNavbar toggle={toggle} />
      <Form>
      <ChakraProvider resetCSS>
    <Grid
      p={10}
      gap={6}
      templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      overflow="scroll"
      minHeight="min-height: 100vh"
    >
      <Stack
        justifyContent="center"
        alignItems="space-around"
        overflow="scroll"
      >
        <Box
          backgroundColor="whiteAlpha.000"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
          display="flex"
          justifyContent="center"
          flexDirection="column-reverse"
          alignItems="center"
          opacity={1}
          mb="15px"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt="25px"
          >
            <Avatar
              size="md"
              display="flex"
              justifyContent="center"
              flexDirection="row"
              src="https://www.flaticon.com/svg/static/icons/svg/813/813252.svg"
            />
            <Flex>
              <Badge
                variant="subtle"
                display="flex"
                justifyContent="center"
                colorScheme="blackAlpha"
                alignItems="center"
                mt={5}
                fontSize="sm"
              >
                Account #
              </Badge>
            </Flex>
          </Flex>
          <Flex justifyContent="center" mt={3}>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center">
              Deposit DAI and earn JFLD
            </Text>
          </Flex>
        </Box>
        <Flex alignItems="stretch" justifyContent="center" flexDirection={['column','column', 'row','row']}>
          <Box
            backgroundColor="white"
            boxShadow="sm"
            borderRadius="lg"
            pl={3}
            pr={3}
            pt={5}
            pb={5}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            width="100%"
          >
            <Image
              height="100px"
              width="100px"
              src="https://stand.cash/static/media/stand-cash-logo.e11a9ff3.svg"
            />
            <Box
              backgroundColor="white"
              boxShadow="sm"
              borderRadius="lg"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
              display="block"
              justifyContent="flex-start"
            >
              <Tag
                display="flex"
                justifyContent="center"
                mt={3}
                variant="subtle"
                colorScheme="teal"
                fontSize="lg"
              >
                Reward Balance
              </Tag>
              <Flex justifyContent="center" mt={3} >
                <Text fontSize="5xl">400 JFLD</Text>
              </Flex>
            </Box>
            <Button
              variant="solid"
              size="md"
              colorScheme="red"
              width="130px"
              height="50px"
              p={5}
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              Settle
            </Button>
          </Box>
          <Box
            backgroundColor="white"
            boxShadow="sm"
            borderRadius="lg"
            pl={3}
            pr={3}
            pt={5}
            pb={5}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            ml="15px"
            width="100%"
          >
            <Image
              height="100px"
              width="100px"
              fallbackSrc="https://stand.cash/static/media/DAI.17db7fc2.png"
            />
            <Box
              backgroundColor="white"
              boxShadow="sm"
              borderRadius="lg"
              pl={3}
              pr={3}
              pt={5}
              pb={5}
              display="block"
              justifyContent="flex-start"
            >
              <Tag
                display="flex"
                justifyContent="center"
                mt={3}
                variant="subtle"
                colorScheme="orange"
                fontSize="lg"
              >
                Amount Staked
              </Tag>
              <Flex justifyContent="center" mt={3}>
                <Text fontSize="5xl">1.4 DAI</Text>
              </Flex>
            </Box>
            <Button
              variant="solid"
              size="md"
              colorScheme="teal"
              width="150px"
              height="50px"
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
            >
              Approve DAI
            </Button>
          </Box>
        </Flex>
        <Flex justifyContent="center" mt="b">
          <Button
            variant="solid"
            size="md"
            colorScheme="red"
            mt="20px"
            width="230px"
            height="50px"
          >
            Settle & Withdraw
          </Button>
        </Flex>
      </Stack>
    </Grid>
  </ChakraProvider>
          </Form>
          
      </Container>
    </>
  );
};

export default SignIn;
