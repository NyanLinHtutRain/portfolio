import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Box,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="bytecoin">
    <Container>
      <Title>
        bytecoin <Badge>2025</Badge>
      </Title>
      <P>
        ByteCoin is a sleek mobile app that delivers real-time Bitcoin exchange rates 
        in any currency within seconds, ensuring users stay updated with live crypto 
        value anytime, anywhere.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift, CoreML, Xcode</span>
        </ListItem>
      </List>

      <SimpleGrid columns={[1, 2]} gap={4} mb={6}>
        <AspectRatio ratio={9 / 16} w="100%">
          <iframe
            src="https://drive.google.com/file/d/1uCpnCowAIGPKO2isbxnGln6WkQMwUyQG/preview"
            allowFullScreen
            style={{
              borderRadius: '12px',
              boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
              border: 'none'
            }}
          />
        </AspectRatio>

        <Box borderRadius="12px" overflow="hidden" boxShadow="md">
          <WorkImage
            src="/images/works/homescreen.png"
            alt="walknote home screen"
          />
        </Box>
      </SimpleGrid>

      <WorkImage src="/images/works/coinmanager.png" alt="bytecoin" />
      <WorkImage src="/images/works/mainstoryboard.png" alt="bytecoin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
