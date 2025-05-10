import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="EcoUmbra">
    <Container>
      <Title>
        EcoUmbra <Badge>2025</Badge>
      </Title>
      <P>
      EcoUmbra is a solar-powered smart umbrella designed for public and 
      commercial outdoor spaces, providing renewable energy features like 
      USB charging and LED lighting to promote sustainability, convenience,
      and alignment with Singapore Smart Nation and Green Plan 2030 initiatives.
      </P>
      <P>
      As the Project Manager of EcoUmbra, I led a multidisciplinary team from concept 
      to final presentation by coordinating tasks, setting internal deadlines, and 
      ensuring smooth collaboration across diverse academic and cultural backgrounds. 
      I facilitated weekly meetings, resolved conflicts constructively, and maintained 
      project alignment with sustainability and Smart Nation goals. Our team's efforts were recognized 
      when we won 1st prize at the 34th JCU Convergence Conference Singapore (MDP event).
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Project Proposal</Meta>
          <span>
            <Link href="https://v3.pebblepad.com.au/spa/#/public/kc8xbGMgbn48HqxpxMss5zqnMy" target="_blank">
            https://v3.pebblepad.com.au/spa/#/public/kc8xbGMgbn48HqxpxMss5zqnMy <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
          Leadership & Coordination / Cross-Cultural Communication / Conflict Resolution / Project & Time Management /
          Collaboration & Teamwork / Strategic Problem Solving / Public Speaking & Pitching
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/EcoUmbraLogo.png" alt="EcoUmbra" />
      <WorkImage src="/images/works/poster.png" alt="EcoUmbra" />
      <WorkImage src="/images/works/businessmodelcanva.png" alt="EcoUmbra" />
      <WorkImage src="/images/works/prototype.png" alt="EcoUmbra" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
