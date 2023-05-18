import { Box, Container, Flex, Image, Center, Text, Heading , Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAddressBook, faPhone, faEnvelope, faLocationDot, faMagnifyingGlass, faLink, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { Teacher } from "./database";
import { RevealWrapper, RevealList } from 'next-reveal'


const teacherIcon = <FontAwesomeIcon icon={faPersonChalkboard} />

export default function Teachers() {
    return (
        <>
            <Box py='60px'  bgColor='teal.300'>
                <Container maxWidth={1400}>
                    <Box>
                        <Center>
                            <Heading pb='30px' color='white' fontSize='5xl'>{teacherIcon} Introducing Top Instructors</Heading>
                            
                        </Center>
                    </Box>
                    <Box>
                        <Flex flexDir='row' gap='20px' ml='20px' placeContent='center'>
                            {Teacher.map((ins) => (
                                <RevealList origin="bottom" interval={60} delay={400} duration={500} distance="100px" reset={true} >
                                <Box key={ins.id} textAlign='center' p='20px' boxShadow='dark-lg' borderRadius='20px' bgColor='white' >
                                    <Center >
                                        <Image borderRadius='full' maxW='150px' src={ins.src} />
                                    </Center>
                                    <Heading textAlign='center' size='md'  pt='15px'>{ins.Name}</Heading>

                                </Box>
                                </RevealList>
                            ))}
                        </Flex>
                    </Box>
                </Container>
            </Box>


        </>
    )
}
