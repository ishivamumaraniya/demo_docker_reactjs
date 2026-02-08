
import { Box, Container, Typography } from '@mui/material';
import './App.css';
import AddHabitForm from './Components/addHabbitForms';
import HabitList from './Components/Habit-list';
import useHabitStore from './Store/store';


function App() {

  const store = useHabitStore();
  console.log(store);

  return <Container >


    <Box>



      <Typography variant='h2' component="h1" gutterBottom align='center'>Shivam Habit Tracker</Typography>

      <AddHabitForm />

      <HabitList />

    </Box>


  </Container >

}

export default App
