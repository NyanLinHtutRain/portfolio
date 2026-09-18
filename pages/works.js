import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, GridItem } from '../components/grid-item'

// eslint-disable-next-line no-unused-vars -- kept for hidden Solar AR card, see below
import thumbSolar from '../public/images/works/solarapplogo.png'
// eslint-disable-next-line no-unused-vars -- kept for hidden ByteCoin card, see below
import thumbByteCoin from '../public/images/works/bytecoinlogo.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// eslint-disable-next-line no-unused-vars -- kept for hidden Todoey card, see below
import thumbTodoey from '../public/images/works/todoeylogo.png'
import thumbEcoUmbra from '../public/images/works/EcoUmbraLogo.png'
import thumbDatamining from '../public/images/works/datamining.png'
import thumbMelofy from '../public/images/works/thumbMelofy.png' // Melofy thumbnail
import thumbHostFlow from '../public/images/works/hostflowai.png'
import thumbWiseBoys from '../public/images/works/wiseboys.png'
import thumbYtModerator from '../public/images/works/ytmoderator.png'
import thumbYouTube from '../public/images/links/youtube.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="ytmoderator"
            thumbnail={thumbYtModerator}
            title="Moderator Agent"
          >
            Real-time AI moderation for YouTube live chat, running in
            production on channels with hundreds of thousands of subscribers.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="wiseboys"
            thumbnail={thumbWiseBoys}
            title="Wise Boys"
          >
            End-to-end website migration & AWS/Cloudflare infrastructure for a
            famous Auckland vegan burger brand, plus a loyalty app design.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="hostflowai"
            thumbnail={thumbHostFlow}
            title="HostFlow AI"
          >
            AI guest concierge for hotels & short-term rentals, powered by a
            multi-agent pipeline on Google ADK & Gemini.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="melofy" thumbnail={thumbMelofy} title="Melofy">
            AI-powered smart playlist generator for Spotify based on your mood & taste.
          </WorkGridItem>
        </Section>

        <Section>
          <GridItem
            href="https://www.youtube.com/@raininthekitchen/videos"
            title="Rain in the kitchen"
            thumbnail={thumbYouTube}
            isExternal
          >
            My YouTube channel (Cooking contents)
          </GridItem>
        </Section>

        {/* Hidden from the works list per request — pages/assets kept intact, not deleted.
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
            Live Bitcoin Rates in Any Currency. Available in appstore.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="solarar" title="Solar AR Educational App" thumbnail={thumbSolar}>
            An app that brings the solar system to life through interactive AR.
          </WorkGridItem>
        </Section>
        */}
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
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'