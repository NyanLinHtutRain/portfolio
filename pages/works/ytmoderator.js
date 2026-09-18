import {
  Box,
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const trustedChannels = [
  { src: '/images/works/trusted-zyzy.jpg', name: 'caster ZyZy', subs: '834K subs' },
  { src: '/images/works/trusted-bztv.jpg', name: 'BZTV', subs: '459K subs' },
  { src: '/images/works/trusted-bokyar.jpg', name: 'Bo Kyar Channel', subs: '557K subs' },
  { src: '/images/works/trusted-unitedshow.jpg', name: 'The United Show', subs: '421K subs' }
]

const H = ({ children }) => (
  <Text as="span" color="#E53E3E" fontWeight="semibold">
    {children}
  </Text>
)

const Work = () => (
  <Layout title="YouTube Moderator Agent">
    <Container>
      <Title>
        Moderator Agent <Badge>2026</Badge>
      </Title>
      <P>
        Moderator Agent is a multi-tenant, real-time{' '}
        <H>AI moderation system for YouTube live chat</H>. It watches a live
        stream&apos;s chat as messages come in, classifies each one with an
        LLM, and automatically deletes or times out anything that breaks the
        rules, hate speech, harassment, toxicity, or spam, within
        milliseconds, with no human moderator on standby. It&apos;s currently
        running in <H>production</H> for live streamers and their moderation
        teams, handling real chat traffic at scale.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Real-time classification of every chat message via an LLM
          (Gemini/OpenAI), returning a structured decision: violation type,
          suggested action, confidence score, and reasoning.
        </ListItem>
        <ListItem>
          Automatic enforcement actions, message deletion for spam/toxicity/
          harassment, and timeouts for repeated or severe hate speech, applied
          directly through the <H>YouTube Live Chat API</H>.
        </ListItem>
        <ListItem>
          Multi-tenant by design, each streamer/channel is isolated and
          processed independently, with chat events partitioned and ordered
          per tenant.
        </ListItem>
        <ListItem>
          Every decision is persisted to a full audit log (message, author,
          action taken, violation type, confidence, and reasoning) for
          transparency and dispute review.
        </ListItem>
        <ListItem>
          A local deterministic heuristic fallback keeps the pipeline running
          even if the LLM call fails or times out, so moderation never goes
          silent.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Status</Meta>
          <span>
            Live in production, in daily use by real YouTube streaming
            channels and their moderation teams
          </span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Backend &amp; AI Engineer (end-to-end)</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Backend service (YouTube Live Chat integration)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Java 21, Spring Boot, <H>Apache Kafka</H> (KRaft), PostgreSQL,
            Docker, Gemini / OpenAI, YouTube Live Chat API
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <span>Private repository</span>
        </ListItem>
      </List>

      {/* --- Branding --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Branding
      </Heading>
      <Box mb={6} textAlign="center">
        <WorkImage
          src="/images/works/ytmoderator.png"
          alt="Moderator Agent Logo"
        />
        <Text fontSize="sm" mt={2}>
          Moderator Agent Logo &amp; Wordmark
        </Text>
      </Box>

      {/* --- Architecture --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Architecture
      </Heading>
      <P>
        Moderator Agent is built as an event-driven pipeline on{' '}
        <H>Apache Kafka</H> so that chat ingestion, moderation, and
        enforcement are fully decoupled and can scale independently. Every
        chat message is produced onto a{' '}
        <strong>raw-chat-events</strong> topic, keyed by tenant ID, so a
        single channel&apos;s messages stay strictly ordered on one partition
        while different channels are processed in parallel and isolated from
        each other.
      </P>
      <P>
        A moderation consumer picks up each raw event and calls an{' '}
        <H>LLM</H> (Gemini or OpenAI, configurable) with a strict system
        prompt and a JSON schema response, asking it to classify the message
        as a violation type (toxicity, harassment, hate speech, spam, or
        none) with a suggested action, a confidence score, and a short
        reasoning string. If a violation is found, the decision is
        republished onto a{' '}
        <strong>mod-actions</strong> topic, again keyed by tenant. A second
        consumer picks up that action, executes it against the{' '}
        <H>YouTube Live Chat API</H> (deleting the message, and issuing a
        timeout for repeated or severe hate speech/harassment), and writes a
        full audit record to <H>PostgreSQL</H>, capturing the message,
        author, action taken, violation type, confidence score, and reasoning
        for later review.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Ingestion</strong> — chat events land on a tenant-keyed Kafka
          topic, keeping per-channel ordering while scaling horizontally across
          channels.
        </ListItem>
        <ListItem>
          <strong>Moderation</strong> — an LLM client enforces a structured
          JSON schema on every response, with a deterministic keyword-based
          heuristic as an automatic fallback if the LLM call fails or times
          out.
        </ListItem>
        <ListItem>
          <strong>Enforcement</strong> — a second Kafka consumer executes the
          decision against the YouTube Live Chat API and writes an immutable
          audit log to PostgreSQL for every action taken.
        </ListItem>
        <ListItem>
          <strong>Deployment</strong> — packaged as a Spring Boot service with
          Kafka and PostgreSQL running alongside it in Docker, so the whole
          pipeline ships as a single reproducible unit.
        </ListItem>
      </UnorderedList>

      <P>
        Moderator Agent runs in production today, actively used by several
        successful Myanmar streamers and YouTubers with{' '}
        <H>
          hundreds of thousands of subscribers, including caster ZyZy, BZTV,
          Bo Kyar Channel, and The United Show
        </H>
        , moderating their live chat in real time during active streams.
      </P>

      {/* --- Trusted By --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Trusted By
      </Heading>
      <SimpleGrid columns={[2, 2, 4]} gap={6} mb={6}>
        {trustedChannels.map(channel => (
          <Box key={channel.name} textAlign="center">
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
                src={channel.src}
                alt={`${channel.name} YouTube channel logo`}
                width={96}
                height={96}
              />
            </Box>
            <Text fontSize="sm" mt={2} fontWeight="medium">
              {channel.name}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {channel.subs}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
