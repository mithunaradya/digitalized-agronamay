import './signup.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);



  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/userlogs',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/userlogs',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  function validateForm() {
    const password = form.password;
    const confirmPassword =form.cpassword;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }else{
      
    }
  }

  return (
    
    <div className='inputfield'>
      <form onSubmit={handleSubmit}>
        <label>firstname</label>
        <input type="text" name="fname"  onChange={handleForm}/><br/>

        <label>lastname</label>
        <input type="text" name="lname" onChange={handleForm}/><br/>

        <label>mobile</label>
        <input type="tel" name="mobile" onChange={handleForm}/><br/>

        <label>e-mail</label>
        <input type="email" name="email"  onChange={handleForm}/><br/>

        <label>password</label>
        <input type="password" name="password"  onChange={handleForm}/><br/>

        <label>Confirm password</label>
        <input type="password" name="cpassword"  onChange={handleForm}/><br/>
       
        <input type="submit" onClick={validateForm}/>
        Already Signup<Link to="/">Click here to login</Link>
      </form>
      <div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
        </ul>
      </div>
    </div>
  )
}

  export default Signup;