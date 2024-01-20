import { Button } from '@/components'
import Container from '@/components/Container'

const App = () => (
  <Container hasBackground>
    <Button variant="primary">Submit</Button>
    <Button variant="secondary">Cancel</Button>
    <Button isSmall>Close</Button>
  </Container>
)

export default App
