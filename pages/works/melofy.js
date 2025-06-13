import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Melofy AI Playlist Generator">
    <Container>
      <Title>
        Melofy <Badge>2025</Badge>
      </Title>
      <P>
        Melofy is an intelligent web application that empowers users to
        effortlessly create personalized Spotify playlists based on their mood,
        vibe, desired duration, and musical taste. Leveraging AI (OpenAI
        GPT-3.5) and seamless Spotify integration, Melofy transforms textual
        prompts into curated listening experiences.
      </P>
      <UnorderedList my={4}>
        <ListItem>AI-powered playlist generation from natural language prompts.</ListItem>
        <ListItem>Specify mood, vibe, duration, and musical taste (sample artists/songs).</ListItem>
        <ListItem>Accurate song matching with Spotify&apos;s extensive track library.</ListItem>
        <ListItem>Automatic creation and saving of playlists directly to the user&apos;s Spotify account.</ListItem>
        <ListItem>User authentication using NextAuth.js (Google Sign-In).</ListItem>
        <ListItem>Serverless backend architecture using AWS Lambda, API Gateway, and DynamoDB.</ListItem>
        <ListItem>Responsive design built with Next.js, TypeScript, and Tailwind CSS.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Live App</Meta>
          <Link href="https://melofyapp.com" isExternal>
            melofyapp.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Desktop & Mobile Responsive)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js, React, TypeScript, Tailwind CSS, NextAuth.js, Node.js,
            AWS Lambda, API Gateway, DynamoDB, OpenAI API, Spotify API
          </span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/NyanLinHtutRain/melofy-web" isExternal>
            github.com/NyanLinHtutRain/melofy-web <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* --- Logo Banner Image --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Branding
      </Heading>
      <Box mb={6} textAlign="center">
        <WorkImage src="/images/works/melofy/melofy_logo_banner.png" alt="Melofy Logo Banner" />
        <Text fontSize="sm" mt={2}>Melofy Logo & Banner</Text>
      </Box>

      {/* --- Home Screen & Core Feature --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Core Experience
      </Heading>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_home_screen.png" alt="Melofy Home Screen" />
        <Text fontSize="sm" mt={2} textAlign="center">Home Screen & AI Playlist Input</Text>
      </Box>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_prompt_input.png" alt="Melofy Prompt Input Details" />
        <Text fontSize="sm" mt={2} textAlign="center">Detailed Prompt Input (Mood, Duration, Taste)</Text>
      </Box>

      {/* --- Key Actions/Buttons --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Key Interactions
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={6}>
        <Box>
          <WorkImage src="/images/works/melofy/melofy_generate_button.png" alt="Generate Playlist Button" />
          <Text fontSize="sm" mt={2} textAlign="center">AI Generation & Spotify Sync Buttons</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/melofy/melofy_view_public_playlist.png" alt="View on Public Playlist" />
          <Text fontSize="sm" mt={2} textAlign="center">Viewing AI-Generated Playlist Preview</Text>
        </Box>
      </SimpleGrid>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_export_to_spotify.png" alt="Export to Spotify (User Authenticated)" />
        <Text fontSize="sm" mt={2} textAlign="center">Export to Spotify (Requires User Sign-In & Spotify Auth)</Text>
      </Box>

      {/* --- User Authentication & Profile --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        User Management
      </Heading>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_profile_signed_in.png" alt="Melofy User Profile (Signed In)" />
        <Text fontSize="sm" mt={2} textAlign="center">User Profile Page (Post Sign-In)</Text>
      </Box>

      {/* --- Informational & Support Pages --- */}
      <Heading as="h3" fontSize={20} my={6} variant="section-title">
        Support & Information
      </Heading>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_about_page.png" alt="Melofy About Page" />
        <Text fontSize="sm" mt={2} textAlign="center">About Melofy Page</Text>
      </Box>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_contact_page.png" alt="Melofy Contact & Subscription" />
        <Text fontSize="sm" mt={2} textAlign="center">Contact Form & Subscription Section</Text>
      </Box>
      <Box mb={6}>
        <WorkImage src="/images/works/melofy/melofy_footer.png" alt="Melofy Footer" />
        <Text fontSize="sm" mt={2} textAlign="center">Website Footer with Navigation</Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
