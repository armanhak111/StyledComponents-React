import './App.css';
import styled from 'styled-components'
import Title from './Components/Title';
import Flex from './Components/Flex';
import Console from './Components/Console';
import Button from './Components/Button';

const AppWrapper = styled.div`
width:100%;
min-height:100vh;
padding:2rem;
background:black;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title>Console cmd for React Styled Components 2021</Title>
      </Flex>
      <Flex direction='column' margin ={'10px 0px'}>
        <Console/>
        <Button outlined  color={'green'}  align='flex-end'>Add Code</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
