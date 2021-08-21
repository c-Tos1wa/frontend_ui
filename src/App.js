import SideBar from './sidebar';
import First from './SignUp/first';
import Second from './SignUp/second';
import Third from './SignUp/third';
import SingleClient from './singleClient';

function App() {
  return (
    <>
      <SideBar children='Clientes'>
        <SingleClient name='Cristina' />
      </SideBar>
     
      
      
    </>
  );
}

export default App;
