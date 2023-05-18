
import { Box, Button, Center, Container, Image, SimpleGrid, Text, Flex, Heading, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool, faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink, faQuestionCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { coreCards, specCard } from "./database"
import Link from "next/link";
import { RevealWrapper, RevealList } from 'next-reveal'

const SyllabusIcon = <FontAwesomeIcon icon={faBook} />
const Course = <FontAwesomeIcon icon={faSchool} />
const Search = <FontAwesomeIcon icon={faMagnifyingGlass} />


export default function Syllabus() {
    return (
        <>

            <Box bgImage='/bgSyllabus.jpg' bgSize='cover' bgAttachment='fixed'>
                <Container maxWidth={1400} >
                    <SimpleGrid >
                        <Center>
                            <Box py='150px' ml='100px' px='10px'>
                                <RevealWrapper origin="bottom" delay={500} duration={500} distance="200px" reset={true} >
                                    <Text fontSize='9xl' as='b' color='yellow'>{SyllabusIcon} Syllabus</Text>
                                </RevealWrapper>
                            </Box>
                        </Center>
                    </SimpleGrid>
                </Container>
            </Box>


            <Box>
                <Container maxWidth={1400} bgColor='white'>
                    <SimpleGrid templateColumns='repeat(2 , 1fr)'>
                        <Box py='50px' float='right' pr='140px' >
                            <RevealList origin="left" interval={60} delay={500} duration={500} distance="700px" reset={true} >
                                <Text fontSize='5xl' as='b' color='black' >{SyllabusIcon} Course Syllabus</Text>
                                <Text color='black' pl='60px' pt='30px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</Text>

                            </RevealList>
                        </Box>
                        <Center>
                            <Box>
                                <Center>
                                    <RevealWrapper origin="right" delay={500} duration={500} distance="700px" reset={true}>
                                        <Image src="/books.png" alt="Metaverse" maxW='550px' float='right' pt='-10px' />
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
                    <Box pt='50px'>
                        <Center>
                            <Heading size='3xl'>{Course} Common Course For All</Heading>

                        </Center>

                        <Center>
                            <Text color='black' pl='60px' pt='30px' >Every participant of the program will start by completing the following three core courses:</Text>
                        </Center>

                        <Center>
                            <Flex mt='10px' gap='20px' py='70px'>

                                {coreCards.map((elem: any) => (

                                    <RevealWrapper origin="bottom" delay={400} duration={500} distance="150px" reset={true}>
                                        <Box textAlign='center' px='25px' py='35px' boxShadow='dark-lg' borderRadius='20px' width='405px'  key={elem.id}>
                                            <Heading>{elem.heading}</Heading>
                                            <Divider orientation='horizontal' borderColor='teal' />
                                            <Text pt='10px' >{elem.text}</Text>
                                        </Box>
                                    </RevealWrapper>
                                ))}

                            </Flex>
                        </Center>
                    </Box>
                </Container>
            </Box>


            <Box>
                <Container maxWidth={1400}>
                    <Divider orientation='horizontal' borderColor='teal' />
                    <Box pt='70px' pb='20px'>
                        <Center>
                            <Heading size='3xl'>{Search} Specializations</Heading>
                        </Center>
                        <Center>
                            <Text color='black' pl='60px' pt='30px' >After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
                        </Center>
                    </Box>
                </Container>
            </Box>


            <Box>
                <Container maxW={1400}  >
                    {specCard.map((elem: any) => (
                        <Box pt='40px' key={elem.id} pb='70px'>
                            <Center flexDir='column' mt='10px'>
                                <Heading size='xl'>{elem.heading1}</Heading>
                                <Divider orientation='horizontal' borderColor='black' maxW='900px' pt='10px'/>
                                <Text fontWeight='medium' color='white' mt='20px' textAlign='center' px='130px'>{elem.text1}</Text>
                            </Center>
                            <Center>
                                <Flex mt='10px' gap='20px'>

                                    <RevealWrapper origin="left" delay={400} duration={500} distance="400px" reset={true}>
                                        <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' height='230px' >
                                            <Heading>{elem.heading2}</Heading>
                                            <Text fontWeight='medium' pt='5px'>{elem.text2}</Text>
                                        </Box>
                                    </RevealWrapper>

                                    <RevealWrapper origin="right" delay={400} duration={500} distance="400px" reset={true}>
                                        <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' height='230px'>
                                            <Heading>{elem.heading3}</Heading>
                                            <Text fontWeight='medium' pt='5px'>{elem.text3}</Text>
                                        </Box>
                                    </RevealWrapper>
                                </Flex>
                            </Center>
                        </Box>
                    ))}


                </Container>
            </Box>
        </>
    )
}
