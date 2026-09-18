import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Text
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const H = ({ children }) => (
  <Text as="span" color="#E53E3E" fontWeight="semibold">
    {children}
  </Text>
)

const Work = () => (
  <Layout title="HostFlow AI">
    <Container>
      <Title>
        HostFlow AI <Badge>2026</Badge>
      </Title>
      <P>
        HostFlow AI is an{' '}
        <H>AI-powered guest concierge platform for hotels and short-term
        rentals</H>
        . Guests scan a QR code in their room and instantly chat with a warm,
        5-star digital concierge that answers property questions, recommends
        nearby places, and quietly alerts the host the moment something goes
        wrong, all without the host lifting a finger. Every property has its
        own knowledge base, branding, and quick-question menu, managed from a
        single admin dashboard.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Instant answers to property questions, WiFi, AC guides, house rules,
          and a custom guidebook, with support for image-based visual
          instructions.
        </ListItem>
        <ListItem>
          Real-time nearby recommendations (food, coffee, pharmacies, hospitals)
          ranked by distance or quality via the Google Places API.
        </ListItem>
        <ListItem>
          Automatic emergency escalation: leaks, lockouts, or outages fire an
          instant severity-tagged <H>Telegram alert</H> to the host.
        </ListItem>
        <ListItem>
          <H>Multi-agent AI pipeline</H> built on Google&apos;s Agent
          Development Kit (ADK) with <H>Gemini 2.5 Flash</H>, orchestrating
          specialist sub-agents.
        </ListItem>
        <ListItem>
          Per-property branding, dynamic FAQ menus, and QR code generation from
          the admin portal.
        </ListItem>
        <ListItem>
          Serverless, containerized backend on <H>Google Cloud Run</H> with
          secrets managed in GCP Secret Manager.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Live App</Meta>
          <Link href="https://aihostflow.com" isExternal>
            aihostflow.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Full-stack &amp; AI Engineer (end-to-end)</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Guest mobile + Host admin dashboard)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, TypeScript, Tailwind CSS, Supabase (PostgreSQL),
            Python, FastAPI, Google ADK, Gemini 2.5 Flash, Google Places API,
            Telegram Bot API, Docker, Google Cloud Run, Vercel
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={4}>
        Source Code
      </Heading>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Landing</Meta>
          <Link href="https://github.com/NyanLinHtutRain/HostFlowAi" isExternal>
            github.com/NyanLinHtutRain/HostFlowAi <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Guest &amp; Admin</Meta>
          <Link
            href="https://github.com/NyanLinHtutRain/guest-concierge"
            isExternal
          >
            github.com/NyanLinHtutRain/guest-concierge{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>AI Agent</Meta>
          <Link
            href="https://github.com/NyanLinHtutRain/hostflow-agent"
            isExternal
          >
            github.com/NyanLinHtutRain/hostflow-agent{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* --- Branding --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Branding
      </Heading>
      <Box mb={6} textAlign="center">
        <WorkImage src="/images/works/hostflowai.png" alt="HostFlow AI Logo" />
        <Text fontSize="sm" mt={2}>
          HostFlow AI Logo &amp; Wordmark
        </Text>
      </Box>

      {/* --- Product --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        The Product
      </Heading>
      <Box mb={6}>
        <WorkImage
          src="/images/works/hostflowpage.png"
          alt="HostFlow AI landing page with live chat demo"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          Landing page &amp; live concierge demo, answering a guest with
          image-based instructions
        </Text>
      </Box>

      {/* --- Architecture --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Architecture
      </Heading>
      <P>
        HostFlow AI is built as three cooperating services. A marketing landing
        page (Next.js on Vercel) drives sign-ups, a guest-facing chat and host
        admin portal (Next.js + Supabase on Vercel) manages properties and
        serves the concierge UI, and a Python AI agent backend (FastAPI on
        Google Cloud Run) runs the intelligence.
      </P>
      <P>
        When a guest sends a message, the web app posts the room&apos;s context
        and the message to the agent backend. There, a <H>Google ADK
        multi-agent pipeline</H> takes over: a root orchestrator agent
        (<H>Gemini 2.5 Flash</H>) reads the property knowledge base and
        decides how to respond. It delegates local recommendations to a
        specialist Places agent backed by the Google Places API, and routes
        anything urgent to an Escalation agent that fires a severity-tagged{' '}
        <H>Telegram alert</H> straight to the host. Property data lives in
        Supabase (PostgreSQL), and the backend is Dockerized with CI/CD via
        Cloud Build, deployed to the asia-southeast1 region with API keys
        held in GCP Secret Manager.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Landing site</strong> — Next.js, Tailwind, Framer Motion;
          multi-language marketing page on Vercel.
        </ListItem>
        <ListItem>
          <strong>Guest &amp; Admin app</strong> — Next.js + Supabase; QR-based
          guest chat with per-property branding, plus a host dashboard to manage
          rooms, WiFi, rules, and FAQs.
        </ListItem>
        <ListItem>
          <strong>AI Agent backend</strong> — FastAPI + Google ADK on Cloud Run;
          a root concierge agent orchestrating Places and Escalation sub-agents.
        </ListItem>
      </UnorderedList>

      <Box my={6}>
        <WorkImage
          src="/images/works/hostflow-architecture.jpg"
          alt="HostFlow AI system architecture diagram"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          System architecture: Next.js web app → FastAPI + ADK Root Agent →
          Telegram Alert &amp; Places Search tools, wired to Telegram, Google
          Maps, Supabase, and Gemini
        </Text>
      </Box>
      <Box mb={6}>
        <WorkImage
          src="/images/works/agentcloudrun.png"
          alt="Google ADK agent runtime diagram"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          ADK agent runtime: the Runner&apos;s event loop drives agent execution
          across the model and tools, with session &amp; memory services
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
