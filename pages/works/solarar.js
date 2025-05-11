import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Box,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AR Solar Explorer">
    <Container>
      <Title>
        AR Solar Explorer <Badge>2024</Badge>
      </Title>
      <P>
        An educational AR app that brings the solar system to life by letting users interact with 3D planetary models in real time.
        Designed to enhance curiosity and understanding of space through immersive learning, powered by ARKit on iOS.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/id8lab/scrum-project-tr3-2024-cp3405-tr3-2024-scrum-team-a5" target="_blank">
            github.com/scrum-team-a5 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS (ARKit + Xcode)</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Unity, Xcode, ARKit, Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Design Board</Meta>
          <Link href="https://www.figma.com/board/jNPstDf8zL6iwv1DlMxO4a/Group-A5?node-id=0-1&t=6dltSRj4voCPaRfQ-1" target="_blank">
            View on Figma <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Box my={6}>
        <WorkImage src="/images/works/solarapplogo.png" alt="AR" />
        <Text fontSize="sm" mt={2}>App Logo</Text>
      </Box>

      <SimpleGrid columns={2} gap={4}>
        <Box>
          <WorkImage src="/images/works/ARinteraction.png" alt="AR Interaction" />
          <Text fontSize="sm" mt={2}>Planet Interaction in AR</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/distancefeature.png" alt="Distance Feature" />
          <Text fontSize="sm" mt={2}>Planet Distance Feature</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/interactivequiz.png" alt="Interactive Quiz" />
          <Text fontSize="sm" mt={2}>Interactive Quiz Screen</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/feedback.png" alt="Feedback Screen" />
          <Text fontSize="sm" mt={2}>Correct or Wrong</Text>
        </Box>
      </SimpleGrid>

      <Box my={6}>
        <WorkImage src="/images/works/storyboardAR.png" alt="Storyboard" />
        <Text fontSize="sm" mt={2}>Storyboard Overview</Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
