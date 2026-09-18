import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nyan Lin Htut's homepage" />
        <meta name="author" content="Nyan Lin Htut" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Nyan Lin Htut" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@htutsy.rain" />
        <meta name="twitter:creator" content="@htutsy.rain" />
        <meta name="twitter:image" content="https://nyanlinhtut.com/card.png" />
        <meta property="og:site_name" content="Nyan Lin Htut" />
        <meta name="og:title" content="Nyan Lin Htut" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nyanlinhtut.com/card.png" />
        <title>Nyan Lin Htut - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
