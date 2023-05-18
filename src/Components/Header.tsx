"use client";

import { Box, Button, Center, SimpleGrid , Container, Flex, Image, Spacer, Divider, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHouse, faBook, faAddressCard, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const dropDown = <FontAwesomeIcon icon={faCaretDown} />
const Home = <FontAwesomeIcon icon={faHouse} />
const Syllabus = <FontAwesomeIcon icon={faBook} />
const About = <FontAwesomeIcon icon={faAddressCard} />
const Contact = <FontAwesomeIcon icon={faAddressBook} />

const Header = () => {
  return (
    <>
      <Box bgColor="teal" height="70px">
        <Container maxWidth='1400px'>
          <Flex>

            <Box mx='10px'>
              <Link href="/">
                <Image src="/panaverse-logo1.webp" alt="Panaverse" maxWidth='90px' pt='8px' ></Image>
              </Link>
            </Box>

            <Spacer />

            <Flex py='18px' gap={10} >
              <Link href='/' >
                <Text color="white">
                  {Home} Home
                </Text>
              </Link>
              <Divider orientation='vertical' />
              <Link href='/syllabus' >
                <Text color="white" >
                  {Syllabus} Syllabus
                </Text>
              </Link>
              <Divider orientation='vertical' />

              <Menu>
                <MenuButton >
                  <Text color="white" fontSize='xl'>
                    Available Programs {dropDown}
                  </Text>

                </MenuButton>
                <MenuList bgColor='teal'>
                  <Link href="https://www.panaverse.co/" target="main"><MenuItem >Web 3.0 and Metaverse</MenuItem></Link>
                  <Link href="https://www.piaic.org/artificial-inteligence" target="main"><MenuItem >Artificial Intelligence</MenuItem></Link>
                  <Link href="https://www.piaic.org/block-chain" target="main"><MenuItem >Blockchain</MenuItem></Link>
                  <Link href="https://www.piaic.org/cloud-native" target="main"><MenuItem >Cloud Native Computing</MenuItem></Link>
                  <Link href="https://www.piaic.org/iot" target="main"><MenuItem >Internet of Things</MenuItem></Link>
                </MenuList>
              </Menu>
              <Divider orientation='vertical' />
              <Link href='/about' >
                <Text color="white" >
                  {About} About
                </Text>
              </Link>
              <Divider orientation='vertical' />
              <Link href='/contact' >
                <Text color="white" >
                  {Contact} Contacts
                </Text>
              </Link>
            </Flex>

            <Spacer />

            <Box >
              <Link href='https://portal.piaic.org/signup' target="main">
                <Button bgColor='white' color="teal" float='right' my='13px' >Apply Now</Button>
              </Link>
            </Box>

          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
