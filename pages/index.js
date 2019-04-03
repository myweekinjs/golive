/** @jsx jsx */
import { jsx } from "@emotion/core"
import { PageTitle, Container } from '../elements'
import Layout from '../components/Layout'
import Checklist from '../components/Checklist'

const checklists = [
  {
    headline: 'Performance',
    questions: ['Lighthouse', 'Code Splitting', 'Minification', 'Image Compression']
  },
  {
    headline: 'Browser Compatibility',
    questions: ['Latest Chrome', 'Latest Safari', 'Latest Firefox', 'ie11', 'Safari on iOS device', 'Chrome on Andriod device']
  },
  {
    headline: 'Content',
    questions: ['No more "lorem ipsum"', 'Spelling and Grammar Checked', '404 page']
  },
  {
    headline: 'Accessibility',
    questions: ['Image alt text', 'Contrast Checked', 'Lighthouse audit', 'Check tabbing order']
  },
  {
    headline: 'Server Configuration',
    questions: ['.htaccess config', 'robots.txt', 'gzip compression', 'Caching', 'CDN setup']
  },
]

const Index = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>Going live Checklist</PageTitle>
        { checklists.map((checlist, key) => <Checklist {...checlist} key={key} />) }
      </Container>
    </Layout>
  )
}

export default Index
