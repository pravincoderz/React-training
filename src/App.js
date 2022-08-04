import Form from './component/Form/Form'
import BasicOne from './component/Basic/BasicOne'
import BasicTwo from './component/Basic/BasicTwo'
import Lifecycle from './component/Lifecycle'
import Lifecyclefun from './component/Lifecyclefun'
import Twoway from './component/Twoway'
import ConditonRend from './component/ConditionRend'
import Register from './component/Users/Register'

import Login from './component/Users/Login'

import './App.css';


function App() {

  return (
    <div className='container'>
      {/* <Form /> */}
      {/* <BasicOne name="Pravin">
        <p>This is sample content</p>
      </BasicOne>
      <BasicOne name="Murali" />
      <BasicOne name="Sharme" />
      <BasicTwo /> */}
      {/* <Lifecycle />
      <Lifecyclefun /> */}
      {/* <Twoway />
      <ConditonRend agePerson="2"/> */}
      
      <Login />
    </div>
  );
}

export default App;
