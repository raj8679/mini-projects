import { Button, Center, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';

function App() {
  const[dashboard,setdashboard] = useState(true)
  return (
    <>
    <Center>
    <Text as={'b'} fontSize={'2xl'} >ADMIN DASHBOARD</Text>
    </Center>
    <Center mt='20px' >
    <Button w={'250px'} backgroundColor={dashboard?'blue.400':'blue.100'} color={dashboard?'white':'black'} onClick={()=>setdashboard(true)}>DASHBOARD</Button>
    <Button w={'250px'} backgroundColor={!dashboard ? 'blue.400' : 'blue.100' } color={!dashboard?'white':'black'} onClick={()=>setdashboard(false)}>STATS</Button>
    </Center>

    {dashboard ?
     <Dashboard />
     :
     <Stats />
     }
    
    </>
  );
}

export default App;
