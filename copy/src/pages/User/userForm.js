import React,{useState} from 'react'
import { Form } from 'react-router-dom'

function UserForm({handlesubmit,error}) {

 
  const intialstate={
    Firstname:"",
    Lastname:"",
    dob:"",
    Gender:"",
    phone:"",
    Email:"",
    password:"",
    confirmpassword:"",

  };

  const [userenterdata,setuserenterdata]=useState(intialstate);

  function getentervalue(event) {
   setuserenterdata({
    ...userenterdata,[event.target.name]:event.target.value,
   });
    
  }

  function submit() {
    handlesubmit(userenterdata);
    
  }


  return (
    <div className='card rounded-0 col-7 mx-auto mt-5'>

     <div className='card-body '>
     {
        error &&<div className="alert alert-danger">{error}</div>
      }

     <Form className='row ' onSubmit={submit}>
      
     <div className='col-12 col-sm-6'>

     <label htmlFor="firstname" class="form-label">FirstName</label>
     <input 
     type="text" 
      class="form-control" 
      id="firstname"
      name="firstname"
      onChange={getentervalue}
      />
     </div>
     <div className='col-12 col-sm-6'>

    <label htmlFor="laststname" class="form-label">LastName</label>
    <input 
    type="text" 
     class="form-control" 
    id="lasttname"
   name="lasttname"
   onChange={getentervalue}
    />
  </div>
  <div className='col-12 col-sm-6'>

<label htmlFor="dob" class="form-label">Date OF Birth</label>
<input 
type="date" 
 class="form-control" 
id="dob"
name="dob"
onChange={getentervalue}
/>
</div>
<div className='col-12 col-sm-6'>

<label htmlFor="Phone" class="form-label">Phone</label>
<input 
type="number" 
 class="form-control" 
id="phone"
name="phone"
onChange={getentervalue}
/>
</div>
<div className='col-12 col-sm-6'>

<label for="gender" class="form-label">Gender</label>
<select class="form-select" aria-label="Default select example">
  <option selected value="">---Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
</div>
<div className='col-12 col-sm-6'>

<label htmlFor="Email" class="form-label">Email</label>
<input 
type="email" 
 class="form-control" 
id="email"
name="email"
onChange={getentervalue}
/>
</div>
<div className='col-12 col-sm-6'>

<label htmlFor="password" class="form-label">PassWord</label>
<input 
type="password" 
 class="form-control" 
id="password"
name="password"
onChange={getentervalue}
/>
</div>
<div className='col-12 col-sm-6'>

<label htmlFor="confirmpassword" class="form-label">Confirm Password</label>
<input 
type="password" 
 class="form-control" 
id="confirmpassword"
name="confirmpassword"
onChange={getentervalue}
/>
</div>
<div className='col-12'>
  <div className='d-grid col-6 mx-auto gap-1 mt-3'>
    <button type='sumbit' className='btn btn-warning'>Submit</button>
    <button type='reset' className='btn btn-danger'>Reset</button>
  </div>

</div>
 </Form>
   </div>

    </div>
   

  );
}

export default UserForm;