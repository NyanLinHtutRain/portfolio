import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbMelofy from '../public/images/works/thumbMelofy.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Cloud engineer | Ai &amp; Full stack Dev based in Singapore!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nyan Lin Htut
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Cloud Enthusiast )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/person1.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nyan Lin Htut is a software engineer and cloud computing enthusiast based in Singapore with a passion for building practical, real-world digital solutions. With hands-on experience in both frontend and backend development, he specializes in using cloud platforms like AWS to develop scalable applications. He holds multiple AWS certifications and is currently building Melofy, an AI-powered web app that generates personalized Spotify playlists using OpenAI and AWS services. He also developed Todoey, a lightweight and elegant to-do list app for iOS.

          Previously, Nyan worked as a Software Engineer at Speed Bird Co. Ltd, where he developed backend tools and internal systems for network infrastructure support. He continues to explore AI, cloud technologies, and full-stack development to deliver impactful and efficient software solutions.


        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Myanmar (မြန်မာ)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed Diploma of Education in Computer Software Engineering at ACE Inspiration, Myanmar.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Graduated from James Cook University Singapore, with Bachelor of Information Technology.
        </BioSection>
        <BioSection>
          <BioYear>2020 – 2022</BioYear>
          Worked at Speed Bird Co. Ltd as a Software Engineer (Intern → Full-Time)
        </BioSection>
        <BioSection>
          <BioYear>2025 – Present</BioYear>
          Operations Team Member at Google Developers Group Singapore
        </BioSection>
        <BioSection>
          <BioYear>2025 – Present</BioYear>
          Assistant Director – Education (Tech) at Asia AI Association
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Cloud, Data, AI, Vlogging, Team work, Music, Coding
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NyanLinHtutRain" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @NyanLinHtutRain
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nyanlinhtut0606/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Nyan Lin Htut (linkedin)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/htutsy.rain/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @htutsy.rain
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={4}>
          <GridItem
            href="https://www.youtube.com/@raininthekitchen/videos"
            title="Rain in the kitchen"
            thumbnail={thumbYouTube}
            isExternal
          >
            My YouTube channel (Cooking contents)
          </GridItem>
          <GridItem
            href="https://melofyapp.com"
            title="Melofy"
            thumbnail={thumbMelofy}
            isExternal
          >
            AI-powered smart playlist generator for Spotify.
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <Paragraph>
          Feel free to reach out to me via email or phone. I&apos;m currently based in Singapore.
        </Paragraph>
        <List spacing={2} mt={3}>
          <ListItem>
            <strong>Email:</strong>{' '}
            <Link href="mailto:nyanlinhtut662003@gmail.com" color="teal.500">
              nyanlinhtut662003@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <strong>Phone:</strong>{' '}
            <Link href="tel:+6585952772" color="teal.500">
              +65 8595 2772
            </Link>
          </ListItem>
          <ListItem>
            <strong>Location:</strong> Singapore
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
