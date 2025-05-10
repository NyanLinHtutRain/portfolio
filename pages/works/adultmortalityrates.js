import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="adultmortalityrates">
    <Container>
      <Title>
      Data Mining Project <Badge>2024</Badge>
      </Title>
      <P>Analysing Changes in Adult Mortality Rates, 2019-2021</P>
      <P>
        Exploring Adult Mortality Rates (2019-2021) using advanced data mining techniques 📊, our study aimed 
        to enhance global health insurance segmentation and risk assessment. Employing k-means clustering and 
        multiple classification methods 🔍, we uncovered significant patterns across demographic and economic 
        factors to optimize insurance strategies. This project highlights the potential of data-driven insights 
        in the health insurance industry 🌍, paving the way for tailored solutions that cater to diverse global needs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Weka/Figma</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>mySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Report pdf</Meta>
          <Link href="https://drive.google.com/file/d/1blo8GQ6zlq3VZjyLoP5PiZgrGZ7xO3MH/view?usp=sharing">
          DATA MINING PROJECT REPORT{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation slides</Meta>
          <Link href="https://docs.google.com/presentation/d/19PutsSaRLF71-ht4D0idAf2r9DIe3AOe/edit?usp=drive_link&ouid=112135986014243349898&rtpof=true&sd=true">
            powerpoint slides{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/datamining.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/clustering.png" alt="mode.tokyo" />
      <WorkImage src="/images/works/classification.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
