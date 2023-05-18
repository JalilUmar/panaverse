import { Box, Button, Center, Container, Image, SimpleGrid, Text, Flex, Heading, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSchool, faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink, faQuestionCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { topCourse } from "./database"
import Link from "next/link";
import { RevealWrapper, RevealList } from 'next-reveal'
import svgs from '@/app/styles/svgs.module.css'


const Syllabus = <FontAwesomeIcon icon={faBook} />
const Course = <FontAwesomeIcon icon={faSchool} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />
const Question = <FontAwesomeIcon icon={faQuestionCircle} />

export default function Banner() {
  return (
    <>
      <Box bgImage='/bg3.jpg' bgSize='cover' bgAttachment='fixed'>
        <Container maxWidth={1400} >
          <SimpleGrid templateColumns='repeat(2 , 1fr)'>
            <Center>


              <Box py='100px' ml='30px' px='10px'>
                <RevealList origin="left" interval={60} delay={500} duration={500} distance="700px" reset={true} >
                  <Text fontSize='5xl' as='b' color='white'  >Getting Ready for the Next Generation and Future of the Internet</Text>
                  <Text color='white' pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                  <Link href='https://www.panaverse.co/' target="main">
                    <Button colorScheme="teal" mt='20px' size='md' >Learn More</Button>
                  </Link>
                </RevealList>

              </Box>

            </Center>
            <Box>
              <Center>
                <RevealWrapper origin="right" delay={500} duration={500} distance="700px" reset={true} >
                  <Image src="/chm1.png" alt="Metaverse" maxW='900px' float='right' py='70px' mr='-100px' />
                </RevealWrapper>
              </Center>
            </Box>
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
                    <Image src="/Study.png" alt="Metaverse" maxW='550px' float='right' pt='-10px' />
                  </RevealWrapper>
                </Center>
              </Box>
            </Center>

            <Box py='50px' float='right' pr='140px' >
              <RevealList origin="right" interval={60} delay={500} duration={500} distance="700px" reset={true} >
                <Text fontSize='5xl' as='b' color='black' >{Syllabus} Program Of Studies</Text>
                <Text color='black' pl='60px' pt='30px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                <Link href='/syllabus'>
                  <Button colorScheme="teal" ml='60px' mt='30px' size='md' >Learn More</Button>
                </Link>
              </RevealList>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>


      <Box>
        <Container maxWidth={1400}>
          <Divider orientation='horizontal' borderColor='teal' />
          <Box pt='50px'>
            <Center>
              <Heading size='3xl'>{Course} Latest Courses</Heading>
            </Center>
            <Center>
              <Flex mt='10px' gap='20px' py='70px'>

                {topCourse.map((elem: any) => (

                  <RevealWrapper origin="bottom" delay={400} duration={500} distance="150px" reset={true}>
                    <Link href={elem.url} target="main">
                      <Box textAlign='center' p='25px' boxShadow='dark-lg' borderRadius='20px' width='405px' key={elem.id}>
                        <Heading>{elem.heading}</Heading>
                        <Divider orientation='horizontal' borderColor='teal' />
                        <Text pt='10px' >{elem.text}</Text>
                      </Box>
                    </Link>
                  </RevealWrapper>
                ))}

              </Flex>
            </Center>
            <Center>
              <Link href='/syllabus'>
                <Button colorScheme="teal" mt='-55px' size='md' >More info {ArrowRight}</Button>
              </Link>
            </Center>
          </Box>
        </Container>
      </Box>


      <Box>
        <Container maxWidth={1400} bgColor='white'>
          <Divider orientation='horizontal' borderColor='teal' />
          <SimpleGrid templateColumns='repeat(2 , 1fr)'>
            <RevealWrapper origin="left" delay={500} duration={500} distance="500px" reset={true}>
              <Box pt='150px' float='right'  >
                <Text fontSize='5xl' as='b' color='black' >{Question} What Is Panaverse DAO?</Text>
                <Divider orientation='horizontal' borderColor='teal' />
                <Text color='black' pl='60px' pt='30px' pr='100px'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                <Link href='https://www.panaverse.co/' target="main">
                  <Button colorScheme="teal" ml='60px' mt='30px' size='md' >Read More</Button>
                </Link>
              </Box>
            </RevealWrapper>
            <Center>
              <Box>
                <Center>
                  <RevealWrapper origin="right" delay={500} duration={500} distance="600px" reset={true}>
                    <Image src="/chm2.png" alt="Metaverse" maxW='550px' float='right' pt='-10px' />
                  </RevealWrapper>
                </Center>
              </Box>
            </Center>
          </SimpleGrid>
        </Container>
      </Box>

    </>
  )
}
