import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSolar from '../public/images/works/solarapplogo.png'
import thumbByteCoin from '../public/images/works/bytecoinlogo.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbTodoey from '../public/images/works/todoeylogo.png'
import thumbEcoUmbra from '../public/images/works/EcoUmbraLogo.png'
import thumbDatamining from '../public/images/works/datamining.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="todoey" thumbnail={thumbTodoey} title="Todoey">
            An app that helps you organize tasks with categories, priorities, 
            and reminders on iOS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bytecoin"
            title="ByteCoin"
            thumbnail={thumbByteCoin}
          >
            Live Bitcoin Rates in Any Currency
            Available in appstore
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="solarar" title="Solar AR Educational App" thumbnail={thumbSolar}>
            An app that brings the solar system to life through interactive AR.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="ecoumbra" thumbnail={thumbEcoUmbra} title="EcoUmbra">
          A solar-powered smart umbrella offering public USB charging and lighting 
          for sustainable urban spaces.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="adultmortalityrates"
            thumbnail={thumbDatamining}
            title="Data Mining Project"
          >
            Analysing Changes in Adult Mortality Rates, 2019-2021
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
