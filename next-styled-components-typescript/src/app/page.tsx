import React from 'react'
import { Button } from '@/components/Button'
import Container from '@/components/Container'

const App = () => (
  <Container $hasBackground>
    <Button $variant="primary">Submit</Button>
    <Button $variant="secondary">Cancel</Button>
    <Button $isSmall>Close</Button>
  </Container>
)

export default App
