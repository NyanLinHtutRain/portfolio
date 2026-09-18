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
  <Layout title="Wise Boys">
    <Container>
      <Title>
        Wise Boys <Badge>2026</Badge>
      </Title>
      <P>
        Wise Boys is a well-loved, <H>award-winning 100% plant-based burger
        joint</H> in Auckland, New Zealand, with stores in Grey Lynn and
        Commercial Bay (and a food truck) that has drawn press coverage and
        even celebrity visits. I worked with them as their lead engineer on
        an end-to-end, full-stack engagement: migrating their website off
        legacy hosting onto a modern React architecture, re-securing their
        domain and infrastructure on <H>AWS</H>, automating their content, and
        designing a native customer loyalty app to turn their digital menu
        into an owned customer ecosystem.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Full rebuild and migration of wiseboys.nz to Next.js (App Router,
          SSR) with a custom Tailwind design system matching their brand.
        </ListItem>
        <ListItem>
          Re-hosted on <H>AWS Amplify</H> with CI/CD auto-deploys, and moved
          DNS to <H>Cloudflare</H> for global CDN, DDoS protection, WAF, and
          fresh SSL.
        </ListItem>
        <ListItem>
          Automated the previously-manual Instagram feed with a live Behold.so
          integration, plus Mailchimp newsletter signups and Resend-powered
          franchise enquiry emails.
        </ListItem>
        <ListItem>
          Integrated the Tabin online-ordering platform and a Google Maps store
          locator across two locations.
        </ListItem>
        <ListItem>
          Designed a Phase 2 <H>native loyalty app</H> (iOS + Android) on a
          serverless AWS architecture with built-in fraud prevention.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Live Site</Meta>
          <Link href="https://wiseboys.nz" isExternal>
            wiseboys.nz <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Lead Engineer (end-to-end full-stack &amp; infrastructure)</span>
        </ListItem>
        <ListItem>
          <Meta>Client</Meta>
          <span>Wise Boys, Auckland, New Zealand</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (live) + native mobile app (in design)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, Tailwind CSS, AWS Amplify, Cloudflare, Vitest,
            Behold.so, Mailchimp, Resend, Tabin, Google Maps
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <span>Private client repository</span>
        </ListItem>
      </List>

      {/* --- Branding --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Branding
      </Heading>
      <Box mb={6} textAlign="center">
        <WorkImage src="/images/works/wiseboys.png" alt="Wise Boys Logo" />
        <Text fontSize="sm" mt={2}>
          Wise Boys Logo
        </Text>
      </Box>

      {/* --- The Website --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        The Website
      </Heading>
      <Box mb={6}>
        <WorkImage
          src="/images/works/wiseboyspage1.png"
          alt="Wise Boys website page"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          Wise Boys Page
        </Text>
      </Box>
      <Box mb={6}>
        <WorkImage
          src="/images/works/wiseboyspage2.png"
          alt="Wise Boys website page"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          Wise Boys Page
        </Text>
      </Box>
      <Box mb={6}>
        <WorkImage
          src="/images/works/wiseboystabinpage.png"
          alt="Wise Boys Tabin online ordering page"
        />
        <Text fontSize="sm" mt={2} textAlign="center">
          Tabin Online Ordering Integration
        </Text>
      </Box>

      {/* --- Phase 1 --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Phase 1 — Website &amp; Infrastructure
      </Heading>
      <P>
        The core of Phase 1 was moving Wise Boys off their legacy hosting and
        onto a fast, low-maintenance modern stack. I rebuilt the site in Next.js
        16 (App Router) with server-side rendering and a custom Tailwind design
        system built around their brand tokens, then deployed it to AWS Amplify
        in the Sydney region (ap-southeast-2) with automatic deploys on every
        push to the main branch.
      </P>
      <P>
        I moved the wiseboys.nz domain to <H>Cloudflare</H>, which now fronts
        the site with a global CDN, enterprise-grade DDoS mitigation, a Web
        Application Firewall, and freshly issued SSL certificates with
        automatic HTTP → HTTPS redirects. Repointing DNS to the new AWS
        servers cleanly severed the old developer&apos;s hosting so their
        legacy billing could be shut down.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Live Instagram feed</strong> — automated via Behold.so.
          Because Cloudflare&apos;s WAF challenges server-to-server calls, I
          fetch the feed directly client-side, so new posts appear with no
          manual updates and no code changes.
        </ListItem>
        <ListItem>
          <strong>Newsletter</strong> — Mailchimp Marketing API integration
          behind a server API route for email signups.
        </ListItem>
        <ListItem>
          <strong>Franchise enquiries</strong> — routed as transactional emails
          through Resend.
        </ListItem>
        <ListItem>
          <strong>Online ordering</strong> — the Tabin ordering platform
          embedded so payments and fulfilment stay with Tabin.
        </ListItem>
        <ListItem>
          <strong>Store locator</strong> — Google Maps embed covering both the
          Grey Lynn and Commercial Bay locations.
        </ListItem>
        <ListItem>
          <strong>Quality &amp; security</strong> — Vitest + React Testing
          Library with property-based tests (fast-check); all secrets kept in
          Amplify environment variables, never in source.
        </ListItem>
      </UnorderedList>

      {/* --- Phase 2 --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Phase 2 — Customer Loyalty App
      </Heading>
      <P>
        Building on that foundation, I architected a native customer loyalty
        app for iOS and Android (<H>React Native / Expo</H>) with a
        spend-based, tiered rewards program. The backend is a fully
        serverless AWS design: <H>AWS Cognito</H> handles SMS-OTP
        authentication, <H>DynamoDB</H> stores users, transactions, points
        and rewards, and Lambda functions behind API Gateway run the loyalty
        engine, rewards service, and admin API. An event-driven messaging
        layer (SQS queues + EventBridge) processes points and reward events,
        while SNS push notifications and SES email receipts keep customers in
        the loop. CloudFront and AWS WAF sit at the edge, and CloudWatch
        handles monitoring and alarms.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          Points are only awarded after Tabin POS confirms payment (via webhook
          handler), and refunds automatically reverse the points.
        </ListItem>
        <ListItem>
          <H>Fraud prevention</H> baked in from day one: one-phone-one-account
          with device fingerprinting, an immutable &quot;birthday lock,&quot;
          and a strict 15-minute countdown on activated rewards to stop
          screenshot sharing.
        </ListItem>
        <ListItem>
          A staff-facing validation screen redeems reward codes with a live
          countdown and single-use enforcement.
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
