"use client"

import { Box, Button, Center, Container, Image, SimpleGrid, Text, Flex, Heading, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool, faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink, faQuestionCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { RevealWrapper, RevealList } from 'next-reveal'


const Search = <FontAwesomeIcon icon={faMagnifyingGlass} />
const Question = <FontAwesomeIcon icon={faQuestionCircle} />
const Book = <FontAwesomeIcon icon={faBook} />

export default function page() {
    return (
        <>



            <Box bgImage='/bgAbout.jpg' bgSize='cover' bgAttachment='fixed'>
                <Container maxWidth={1400} >
                    <SimpleGrid templateColumns='repeat(2 , 1fr)' >
                        <Center>
                            <Box py='100px' ml='100px' px='10px'>
                                <RevealWrapper origin="bottom" delay={500} duration={500} distance="200px" reset={true} >
                                    <Text fontSize='7xl' as='b' color='white'>About Panaverse</Text>
                                </RevealWrapper>
                            </Box>
                        </Center>

                        <Center>
                            <Box py='100px' px='10px'>
                                <RevealWrapper origin="bottom" delay={500} duration={500} distance="200px" reset={true} >
                                    <Image src="Panaverse-logo.png" alt="Panaverse" maxW='500px' />
                                </RevealWrapper>
                            </Box>
                        </Center>
                    </SimpleGrid>
                </Container>
            </Box>



            <Box>
                <Container maxWidth={1400}>
                    <Divider orientation='horizontal' borderColor='teal' />
                    <Box pt='70px'>
                        <Center>
                            <Heading size='4xl'>{Question} Panaverse DAO</Heading>

                        </Center>

                        <Center>
                            <Text color='black' pl='60px' py='50px' fontSize='lg' >The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                        </Center>

                    </Box>
                </Container>
            </Box>

            <Box>
                <Container maxWidth={1400} bgColor='white'>
                    <Divider orientation='horizontal' borderColor='teal' />
                    <SimpleGrid templateColumns='repeat(2 , 1fr)'>
                        <Box py='80px' float='right' pr='140px' >
                            <RevealList origin="left" interval={60} delay={500} duration={500} distance="700px" reset={true} >
                                <Text fontSize='5xl' as='b' color='black' >Earn While You Learn </Text>
                                <Text fontSize='lg' as='b' color='teal' pt='20px' >The Program in a Nutshell: Earn While You Learn</Text>
                                <Text color='black' pl='60px' pt='30px'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</Text>

                            </RevealList>
                        </Box>
                        <Center>
                            <Box>
                                <Center>
                                    <RevealWrapper origin="right" delay={500} duration={500} distance="700px" reset={true}>
                                        <Image src="/Panaverse-logo.png" alt="Metaverse" maxW='450px' float='right' pt='-10px' />
                                    </RevealWrapper>
                                </Center>
                            </Box>
                        </Center>
                    </SimpleGrid>
                </Container>
            </Box>


            <Box>
                <Container maxWidth={1400}>
                    <Divider orientation='horizontal' borderColor='teal' />
                    <Box pt='70px'>
                        <Center>
                            <Heading size='4xl'>{Book} Program Of Studies</Heading>

                        </Center>

                        <Center>
                            <Text color='black' px='190px' py='50px' fontSize='lg' >This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
                        </Center>

                    </Box>
                </Container>
            </Box>




            <Box>
                <Container maxWidth={1400}>
                    <Divider orientation='horizontal' borderColor='teal' />
                    <Box pt='70px'>
                        <Center>
                            <Heading size='3xl'>Outcome for Participants of the Program</Heading>

                        </Center>

                        <Center>
                            <Text color='black' px='190px' py='50px' fontSize='lg' >The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</Text>
                        </Center>

                    </Box>
                </Container>
            </Box>

        </>
    )
}
