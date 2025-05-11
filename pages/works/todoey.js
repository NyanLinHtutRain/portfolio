import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Text
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Todoey">
    <Container>
      <Title>
        Todoey <Badge>2025</Badge>
      </Title>
      <P>
        Todoey is a task management app designed to help users efficiently organize their daily tasks and activities.
        Users can create, manage, categorize, and prioritize tasks with features like reminders, Core Data storage,
        and an intuitive interface built for iOS.
      </P>
      <UnorderedList my={4}>
        <ListItem>Create and manage tasks easily</ListItem>
        <ListItem>Organize tasks by categories</ListItem>
        <ListItem>Set reminders and prioritize tasks</ListItem>
        <ListItem>Mark completed tasks and reorder them</ListItem>
        <ListItem>Persistent storage using Core Data</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift, Core Data, MVC Architecture</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/NyanLinHtutRain/TickTick">
            github.com/NyanLinHtutRain/TickTick <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box mb={6} textAlign="center">
        <WorkImage src="/images/works/todoeylogo.png" alt="Todoey Logo" />
        <Text fontSize="sm" mt={2}>App Logo</Text>
      </Box>

      <SimpleGrid columns={2} gap={4}>
        <Box>
          <WorkImage src="/images/works/home_screen.jpeg" alt="Todoey Home Screen" />
          <Text fontSize="sm" mt={2}>Home Screen</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/add_button.jpeg" alt="Add Task" />
          <Text fontSize="sm" mt={2}>Add Button</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/task_list_screen.jpeg" alt="Task List" />
          <Text fontSize="sm" mt={2}>Task List Screen</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/search_button.jpeg" alt="Search" />
          <Text fontSize="sm" mt={2}>Search Button</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/tick_finished_tasks.jpeg" alt="Tick Tasks" />
          <Text fontSize="sm" mt={2}>Tick Finished Tasks</Text>
        </Box>
        <Box>
          <WorkImage src="/images/works/swipe_delete.jpeg" alt="Swipe to Delete" />
          <Text fontSize="sm" mt={2}>Swipe to Delete</Text>
        </Box>
      </SimpleGrid>

      <Box my={6}>
        <WorkImage src="/images/works/MVC.jpeg" alt="MVC Architecture" />
        <Text fontSize="sm" mt={2}>MVC Architecture</Text>
      </Box>
      <Box my={6}>
        <WorkImage src="/images/works/datamodel_overview.jpeg" alt="Data Model Overview" />
        <Text fontSize="sm" mt={2}>Core Data Model Overview</Text>
      </Box>
      <Box my={6}>
        <WorkImage src="/images/works/figma_wireframe.png" alt="Figma Wireframe" />
        <Text fontSize="sm" mt={2}>Figma Wireframe</Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
