import { Box, Container, Flex, Text, Heading, Image, Divider, SimpleGrid, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'


const About = <FontAwesomeIcon icon={faAddressCard} />
const Contact = <FontAwesomeIcon icon={faAddressBook} />
const Phone = <FontAwesomeIcon icon={faPhone} />
const Email = <FontAwesomeIcon icon={faEnvelope} />
const Location = <FontAwesomeIcon icon={faLocationDot} />
const Explore = <FontAwesomeIcon icon={faMagnifyingGlass} />
const Links = <FontAwesomeIcon icon={faLink} />


export default function Footer() {
  return (
    <>
      <Box bgColor='grey' height='400px'>
        <Container maxWidth={1400}>
          <SimpleGrid templateColumns='repeat(4 , 1fr)'>
            <Box>
              <Heading color='white' pt='30px' fontSize='3xl'>
                {About} About us
              </Heading>
              <Image src="/panaverse-logo1.webp" alt="Panaverse" pt='20px' />
              <Text pr='60px' py='20px' color='white' >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
              </Text>
            </Box>


            <Box ml='-30px'>
              <Heading color='white' pt='30px' fontSize='3xl'>
                {Explore} Explore
              </Heading>
              <Text pt='20px' pl='35px'>
                <Link href='/' >
                  <Text pt='5px' color="white">
                    Home
                  </Text>
                </Link>
                <Link href='/syllabus' >
                  <Text pt='5px' color="white" >
                    Syllabus
                  </Text>
                </Link>
                <Link href='/about' >
                  <Text pt='5px' color="white" >
                    About
                  </Text>
                </Link>
                <Link href='/contacts' >
                  <Text pt='5px' color="white" >
                    Contact us
                  </Text>
                </Link>
              </Text>

            </Box>


            <Box ml='-30px'>
              <Heading color='white' pt='30px' fontSize='3xl'>
                {Links} Social Media
              </Heading>
              <Text pt='20px' pl='35px'>
                <Link href='https://www.youtube.com/@panaverse' >
                  <Text pt='5px' color="white">
                    Youtube
                  </Text>
                </Link>
                <Link href='https://web.facebook.com/groups/piaic/?_rdc=1&_rdr' >
                  <Text pt='5px' color="white" >
                    Facebook
                  </Text>
                </Link>
                <Link href='https://twitter.com/Panaverse_edu' >
                  <Text pt='5px' color="white" >
                    Twitter
                  </Text>
                </Link>
                <Link href='https://www.linkedin.com/company/panaverse/' >
                  <Text pt='5px' color="white" >
                    Linkedin
                  </Text>
                </Link>
                <Link href='https://github.com/panaverse' >
                  <Text pt='5px' color="white" >
                    Github
                  </Text>
                </Link>
              </Text>

            </Box>

            <Box ml='-30px'>
              <Heading color='white' pt='30px' fontSize='3xl'>
                {Contact} Contacts
              </Heading>
              <Text color='white' pl='15px'>
                <Text pt='20px'>{Phone} +92 308 2220203</Text>
                <Text pt='20px'>{Email} abcdefgh@gmail.com</Text>
                <Text pt='20px'>{Location} Karachi , Sindh , Pakistan</Text>
              </Text>


            </Box>
          </SimpleGrid>



        </Container>
      </Box>

      <Box>
        <Container maxWidth={1400}>
          <Box py='10px' bgColor='white'>
            <Center>
              <Text>Designed by : Muhammad Jalil Umar</Text>
            </Center>
          </Box>

        </Container>
      </Box>
    </>
  )
}
