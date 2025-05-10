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
import { ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
        Hello, I&apos;m an indie app developer based in Singapore!
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
        Nyan Lin Htut is a software engineer and cloud computing enthusiast based in Singapore, 
        with a strong passion for building practical and innovative digital solutions. With 
        experience in both frontend and backend development, he focuses on leveraging cloud platforms 
        like AWS to build scalable applications. He holds multiple AWS certifications and is currently 
        working on Melofy, an AI-powered app that creates personalized playlists from user prompts using 
        AWS services. He also built Todoey, a simple and elegant to-do list app. Previously, 
        he contributed to major smart city and e-governance projects in Myanmar, including Safe City 
        and E-Voting systems. He enjoys experimenting with AI, building apps with real-world impact, 
        and constantly sharpening his skills across cloud infrastructure, machine learning, and 
        software engineering best practices.
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
          2003 Born in Myanmar (မြန်မာ)
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Expected to graduate at July 12,2025 from James Cook University Singapore, 
          with Bachelor of Information Technology.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Speed Bird Co. Ltd as a Junior Network Helper
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>
          Working as a freelancer, building mobile apps, 
          exploring AI & cloud computing, and managing smart city tech projects.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, AI, Vlogging, Team work, Coding 
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

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@raininthekitchen/videos"
            title="Rain in the kitchen"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (Cooking contents)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
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
