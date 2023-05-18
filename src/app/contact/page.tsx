"use client"

import { Box, Button, Center, Container, Image, SimpleGrid, Text, Flex, Heading, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool, faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink, faQuestionCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { RevealWrapper, RevealList } from 'next-reveal'


const Phone = <FontAwesomeIcon icon={faPhone} />
const Email = <FontAwesomeIcon icon={faEnvelope} />
const Location = <FontAwesomeIcon icon={faLocationDot} />



export default function page() {
    return (
        <>


            <Box bgImage='/bgContact.jpg' bgSize='cover' bgAttachment='fixed'>
                <Container maxWidth={1400} >
                    <SimpleGrid >
                        <Center>
                            <Box py='200px' ml='500px' >
                                <RevealWrapper origin="bottom" delay={500} duration={500} distance="200px" reset={true} >
                                    <Text fontSize='9xl' as='b' color='white'> Contact us</Text>
                                </RevealWrapper>
                            </Box>
                        </Center>
                    </SimpleGrid>
                </Container>
            </Box>




            <Box>
                <Container maxWidth={1400} bgColor='white'>
                    <SimpleGrid templateColumns='repeat(2 , 1fr)'>
                        <Center>
                            <Box>
                                <Center>
                                    <RevealWrapper origin="left" delay={500} duration={500} distance="700px" reset={true}>
                                        <Image src="/contact.png" alt="Metaverse" maxW='550px' float='right' pt='-10px' />
                                    </RevealWrapper>
                                </Center>
                            </Box>
                        </Center>

                        <Box py='50px' float='right' pr='140px' >
                            <RevealList origin="right" interval={60} delay={500} duration={500} distance="700px" reset={true} >
                                <Text fontSize='6xl' as='b' color='Black' >{Phone} Contact Details</Text>

                                <Box pl='120px' pt='50px'>
                                    <Text pt='20px' fontSize='2xl'>{Phone} +92 308 2220203</Text>
                                    <Text pt='20px' fontSize='2xl'>{Email} abcdefgh@gmail.com</Text>
                                    <Text pt='20px' fontSize='2xl'>{Location} Karachi , Sindh , Pakistan</Text>
                                </Box>
                            </RevealList>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

        </>
    )
}
