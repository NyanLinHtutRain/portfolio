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
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
    
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

        </SimpleGrid> 
      </Section>

      
    </Container>
  </Layout>
)

export default Certificates
export { getServerSideProps } from '../components/chakra'
