import { useState } from "react";
import "./Login.css";

function Login() {

    // const[userErr , setUserErr] = useState(false);
    // const submitHandler = (e) =>{
    // e.preventDefault();
    // }

    // const userHandler = (e) =>{
    //   const item = e.target.value;
    //   if(item > 4){
    //     setUserErr(true);
    //   } else{
    //     setUserErr(false);
    //   }
    // }

    const[username , setUsername] = useState("");
    const[password , setPassword] = useState("");

     const handleSubmit = (e) =>{
        e.preventDefault();
     }
    return (
        <>
            <div className="container">
           
                <h1 className="d-flex justify-content-sm-center mb-3">Login</h1>
                <form className="row loginBox " onSubmit={handleSubmit}>
                    <div className="form-group">       
                        <label htmlFor="formGroupExampleInput" className="m-2">UserName</label>
                        <input type="text" id="username" className="form-control" name="username" placeholder="Enter USername.."
                        value={username} onChange={(e) => setUsername(e.target.value)} />  
                        <span>Invalid data</span>         
                     </div>
                   
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2" className="m-2">Password</label>
                        <input type="password" id="password" name="password" className="form-control" placeholder="Enter password.."
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group ">
                    <button className="btn btn-primary m-3" type="submit">Login</button>
                    </div>
                    
                    
                </form>

            </div>
        </>
    );
}
export default Login;