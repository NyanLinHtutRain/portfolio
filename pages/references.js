import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// Clean and renamed image imports
import thumbSpeedbird from '../public/images/contents/speedbird_reference.jpeg'
import thumbAgileReference from '../public/images/contents/agile_reference_michael_hansen.jpg'
import thumbAcademicReference from '../public/images/contents/academic_reference_latha.jpg'

const References = () => (
  <Layout title="Work References">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work & Academic References
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Industry Reference – Speed Bird Co. Ltd"
            thumbnail={thumbSpeedbird}
            href="/images/contents/speedbird_reference.jpeg"
          />
          <GridItem
            title="Agile Project Management – Michael Hansen"
            thumbnail={thumbAgileReference}
            href="/images/contents/agile_reference_michael_hansen.jpg"
          />
          <GridItem
            title="Academic Reference – Latha A (James Cook University)"
            thumbnail={thumbAcademicReference}
            href="/images/contents/academic_reference_latha.jpg"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default References
export { getServerSideProps } from '../components/chakra'
