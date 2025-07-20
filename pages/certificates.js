import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCloudPractitioner from '../public/images/contents/cloudpractitioner.jpg'
import thumbAiPractitioner from '../public/images/contents/aipractitioner.jpg'
import thumbSolutionArchitect from '../public/images/contents/solutionarchitect.jpg'
import thumbHackerRank from '../public/images/contents/hackerrank.jpg'
import thumbUdemySwift from '../public/images/contents/CertificateUdemySwift_APPdevlopmentNYANLINHTUT.jpg'
import thumbMdp1stPrize from '../public/images/contents/MDP_1stprize_certificate.jpeg'
import thumbLangGraph from '../public/images/contents/DeeplearningAI.png'
import thumbLangChain from '../public/images/contents/DeeplearningAI.png'
import thumbJPMorgan from '../public/images/contents/jpmorgan_work_simulation.jpg'
import thumbGrabFin from '../public/images/contents/grabfin_marketing_simulation.png'
import thumbTestamur from '../public/images/contents/testamur.jpg'






const Certificates = () => (
  <Layout title="Certificates">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certifications & Awards
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title=""
            thumbnail={thumbCloudPractitioner}
            href="https://www.credly.com/badges/18b46b4f-4667-49b1-85ed-44ed14ba4e67/public_url"
          />
          <GridItem
            title=""
            thumbnail={thumbAiPractitioner}
            href="https://www.credly.com/badges/e8646d1e-c1e5-47ef-a413-f6146582db99/public_url"
          />
          <GridItem
            title=""
            thumbnail={thumbSolutionArchitect}
            href="https://www.credly.com/badges/2d6ae320-81df-41f1-9541-f7bd003e7aac/public_url"
          />
          <GridItem
            title="AI Agents in LangGraph – DeepLearning.AI"
            thumbnail={thumbLangGraph}
            href="https://learn.deeplearning.ai/accomplishments/50255d84-26c4-43c7-b186-49f9a59cf01a?usp=sharing"
          />
          <GridItem
            title="LangChain for LLM Application Development – DeepLearning.AI"
            thumbnail={thumbLangChain}
            href="https://learn.deeplearning.ai/accomplishments/b0f829c0-063a-4e16-aea9-4fcf9435da77?usp=sharing"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="JPMorgan Chase Software Engineering – Work Simulation Project"
            thumbnail={thumbJPMorgan}
            href="https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm"
          />
          <GridItem
            title="GrabFin – On-Demand Marketing Strategy Simulation"
            thumbnail={thumbGrabFin}
            href="https://www.talentgeist.com/worksimulationprogram"
          />
          <GridItem
            title="Software Engineer Intern Certificate"
            thumbnail={thumbHackerRank}
            href="https://www.hackerrank.com/certificates/b2f198b57f61"
          />
          <GridItem
            title="iOS & Swift - The Complete iOS App Development Bootcamp"
            thumbnail={thumbUdemySwift}
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-c4d3cf8d-f30b-4aa5-a314-8fbd177d2575.jpg"
          />
          <GridItem
            title="First Prize - Multidisciplinary project event JCU"
            thumbnail={thumbMdp1stPrize}
            href="/images/contents/MDP_1stprize_certificate.jpeg"
          />
          <GridItem
            title="Graduate Bachelor in Information Technology – Testamur"
            thumbnail={thumbTestamur}
            href="/images/contents/testamur.jpg"
          />
        </SimpleGrid> 
      </Section>

      
    </Container>
  </Layout>
)

export default Certificates
export { getServerSideProps } from '../components/chakra'
