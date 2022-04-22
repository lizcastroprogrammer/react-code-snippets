import { React, useState } from 'react';
import { useForm } from './useForm';

export const SignUp = () => {
    const [values, handleChange]   = useForm({year:'', name:'', email:'', password:'', checkbox:false});
    const [errors, setError] = useState({nameError:'', emailError:'', passwordError:''});
    
    function validate() {
        if(!values.name) {
            setError({...errors, nameError: 'bad'});
        } else {
            setError({...errors, nameError: ''});
        }
    }

    function handle(){
        validate();
    }
  

    return (
        <>
        <div>Name</div>
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <div style={{color: 'red'}}>{errors.nameError}</div>
        <div>Email</div>
        <input type="text" name="email" value={values.email} onChange={handleChange}/>
        <div style={{color: 'red'}}>{errors.emailError}</div>
        <div>Password</div>
        <input type="text" name="password" value={values.password} onChange={handleChange}/>
        <div style={{color: 'red'}}>{errors.passwordError}</div><br/>  
        <button onClick={handle}>Submit</button>    
        </>
    );
}