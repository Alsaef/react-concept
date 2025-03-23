import React from 'react';
import Banner from './Banner';
import FAq from './FAq';
import Student from './Student';

const App = () => {

  const me =[{
    roll:1,
    name:"jerin",
    dep:'ecomomics'
  }]




  const students=[
{
  name:'ratul',
  class:'6',
  age:12
},
{
  name:'jerin',
  class:'7',
  age:14
},
{
  name:'emon',
  class:'5',
  age:11
}

  ]
  return (
    <div>
      <h2>app</h2>
      <Banner me={me}></Banner>
      <FAq me={me}></FAq>

      <Student students={students}></Student>
    </div>
  );
};

export default App;