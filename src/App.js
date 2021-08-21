import SideBar from './sidebar';
import NewUser from './signUp';

function App() {
  return (
  
      <SideBar children='Cadastro'>
        <NewUser number='1' />
        <NewUser number='2' />
        <NewUser number='3' />
      </SideBar>
     
      
      

  );
}

export default App;
