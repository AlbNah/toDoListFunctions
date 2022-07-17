import './App.css';
import Card from './UI/Card/Card';
import Text from './Components/Text/Text';
import List from './Components/List/List';
import Listitem from './Components/Listitem/Listitem';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import { useState } from 'react';
import { useRef } from 'react';

const App = () => {

  const [users, setUsers] = useState([
    {name: `Albert`, surname: `Nahapetyan`, hobby: `js`, age: 16, id: 1},
    {name: `Narek`, surname: `Ghazaryan`, hobby: `frontend`, age: 32, id: 2},
    {name: `Ashot`, surname: `Saghatelyan`, hobby: `html/css/js`, age: 23, id: 3},
  ])
  const nameRef = useRef('')
  const surnameRef = useRef('')
  const ageRef = useRef('')
  const hobbyRef = useRef('')

  const [nextId, setNextId] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  const createUser = () => {
      if(
        nameRef.current.value.length >= 3 &&
        surnameRef.current.value.length >= 3 &&
        ageRef.current.value &&
        hobbyRef.current.value
      ) {
        setUsers(
        users.concat( {name: nameRef.current.value, surname: surnameRef.current.value, hobby: hobbyRef.current.value, age: ageRef.current.value, id: nextId}))
        setNextId(nextId + 1)
        nameRef.current.value = ``;
        surnameRef.current.value = ``;
        ageRef.current.value = ``;
        hobbyRef.current.value = ``;
      }
  }

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }


  return (
    <Card className="main">
      <Card className="sides">
        <Card>
      <Card className="div">
        <Text>Search user</Text> 
        <Input className="input" placeholder="search" onChange={changeSearchValue}/>
      </Card>
      <Card className="div">
        <Text>user name</Text> 
        <Input myRef={nameRef} className="input" placeholder="name" />
      </Card>
      <Card className="div"> 
        <Text>user surname</Text> 
        <Input myRef={surnameRef} className="input" placeholder="surname" />
      </Card>
      <Card className="div">
        <Text>user hobby</Text> 
        <Input myRef={hobbyRef} className="input" placeholder="hobby" />
      </Card>
      <Card className="div">
        <Text>user age</Text> 
        <Input myRef={ageRef} className="input" placeholder="age" />
        <Button className="button" onClick={createUser}>Create</Button>
      </Card>
      </Card>
      <Card > 
          <List className="list">
            {users.map(el => {
              return (
                <Listitem className="listitem" key={el.id}>
                 <Text className="text">{el.name}</Text> 
                 <Text className="text">{el.surname}</Text> 
                 <Text className="text">{el.hobby}</Text> 
                 <Text className="text">{el.age}</Text>
                 <Button className="button">delete</Button>
                </Listitem>
              )
            })}
          </List>
      </Card>
      </Card>
    </Card>
  )
}

export default App;
