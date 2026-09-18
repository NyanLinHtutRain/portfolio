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
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYtModerator from '../public/images/works/ytmoderator.png'
import thumbWiseBoys from '../public/images/works/wiseboys.png'
import Image from 'next/image'

const trustedByLogos = [
  {
    src: '/images/works/wiseboys-badge.png',
    name: 'Wise Boys',
    subs: 'Vegan Burger Restaurant in Auckland'
  },
  {
    src: '/images/works/trusted-zyzy.jpg',
    name: 'caster ZyZy',
    subs: '834K subs'
  },
  { src: '/images/works/trusted-bztv.jpg', name: 'BZTV', subs: '459K subs' },
  {
    src: '/images/works/trusted-bokyar.jpg',
    name: 'Bo Kyar Channel',
    subs: '557K subs'
  },
  {
    src: '/images/works/trusted-unitedshow.jpg',
    name: 'The United Show',
    subs: '421K subs'
  }
]

const Home = () => {
  return (
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
          Hello, I&apos;m a Full-stack AI Software Engineer based in Auckland,
          New Zealand!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nyan Lin Htut
            </Heading>
            <p>Digital Craftsman ( Ai / Developer / Cloud Enthusiast )</p>
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
            Full-stack AI software engineer based in Auckland, New Zealand,
            having previously worked across Malaysia, Singapore, and Myanmar. A
            cloud and AI enthusiast focused on building scalable AI applications
            and production-grade AI agents. He has spoken at Google and AWS
            events and is an active tech speaker and community builder. A fun,
            easy-going team player who loves talking with people and solving
            problems.
          </Paragraph>
          <Paragraph>
            Day to day, he designs and ships end-to-end AI systems, from
            intelligent web apps to autonomous agents that streamline real-world
            workflows, pairing modern full-stack development with cloud
            platforms like AWS to deliver reliable, production-ready software.
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
            Completed Diploma of Education in Computer Software Engineering at
            ACE Inspiration, Myanmar.
          </BioSection>
          <BioSection>
            <BioYear>2020 – 2022</BioYear>
            Worked at Speed Bird Co. Ltd as a Software Engineer (Intern →
            Full-Time)
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>
            Graduated from James Cook University Singapore, with Bachelor of
            Information Technology.
          </BioSection>
          <BioSection>
            <BioYear>2025 – Present</BioYear>
            Operations Team Member at Google Developers Group Singapore
          </BioSection>
          <BioSection>
            <BioYear>2025 – Present</BioYear>
            Assistant Director – Education (Tech) at Asia AI Association
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>
            Worked at Axrail.ai, Kuala Lumpur, Malaysia as a Full-stack Engineer
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>
            Worked at H3VEA Technologies, Singapore as a Software Engineer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Cloud, Data, AI, Vlogging, SCRUM, Music, Coding</Paragraph>
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
              <Link
                href="https://www.linkedin.com/in/nyanlinhtut0606/"
                target="_blank"
              >
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
              <Link
                href="https://www.instagram.com/htutsy.rain/"
                target="_blank"
              >
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
            <WorkGridItem
              id="ytmoderator"
              thumbnail={thumbYtModerator}
              title="Moderator Agent"
            >
              Real-time AI moderation for YouTube live chat, running in
              production on channels with hundreds of thousands of subscribers.
            </WorkGridItem>
            <WorkGridItem
              id="wiseboys"
              thumbnail={thumbWiseBoys}
              title="Wise Boys"
            >
              End-to-end website migration & AWS/Cloudflare infrastructure for a
              famous Auckland vegan burger brand.
            </WorkGridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <Paragraph>
            Feel free to reach out to me via email or phone. I&apos;m currently
            based in Auckland, New Zealand.
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
              <Link href="tel:+64221043361" color="teal.500">
                +64 22 104 3361
              </Link>
            </ListItem>
            <ListItem>
              <strong>Location:</strong> Auckland, New Zealand
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Trusted By
          </Heading>
          <SimpleGrid columns={[2, 2, 4]} gap={6} mt={4}>
            {trustedByLogos.map(item => (
              <Box key={item.name} textAlign="center">
                <Box
                  w="96px"
                  h="96px"
                  mx="auto"
                  borderRadius="full"
                  overflow="hidden"
                  borderWidth={2}
                  borderColor="whiteAlpha.400"
                  boxShadow="md"
                >
                  <Image
                    src={item.src}
                    alt={`${item.name} logo`}
                    width={96}
                    height={96}
                  />
                </Box>
                <Text fontSize="sm" mt={2} fontWeight="medium">
                  {item.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {item.subs}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
