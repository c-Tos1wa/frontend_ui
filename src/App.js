import SideBar from './sidebar';
import First from './SignUp/first';
import Second from './SignUp/second';
import Third from './SignUp/third';
import Example from './singleClient';

function App() {
  return (
    <>
      <SideBar children='Clientes'>
        <Example />
      </SideBar>
     
      
      
    </>
  );
}

export default App;
