import {
  Container,
  Badge,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        The four painters <Badge>2015</Badge>
      </Title>
      <P>
        A video work generated with deep learning, imitating famous four
        painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, neural-style, Caffe, NodeJS</span>
        </ListItem>
      </List>
      <AspectRatio ratio={16 / 9} maxW="720px" mx="auto" my={6} borderRadius="lg" overflow="hidden" boxShadow="lg">
        <iframe
          src="https://drive.google.com/file/d/11n33iWR-_AdvWSqjpstyu-e3VMzCrpnO/preview"
          allowFullScreen
          style={{
            border: 'none'
          }}
        />
      </AspectRatio>
      <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      />
      <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
