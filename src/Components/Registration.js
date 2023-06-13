import { useEffect, useState } from "react";

function Registration() {
    const [registration , setRegistration] = useState({
        username : "",
        email : "",
        phone : "",
        password : ""

    }); 

    const [record , setRecord] = useState([]);
    const [formerrors, setFormErrors] = useState({});
    const [submit , setIsSubmit]= useState(false);


    function handleInput(e){
     const name = e.target.name;
     const value = e.target.value;
     setRegistration({...registration , [name] : value});
    // console.log(registration);
    }

    function handleSubmit (e){
        e.preventDefault();
        const newRecord = {...registration , id : new Date().getTime().toString()}

        setRecord([...record, newRecord]);

        setRegistration({username:"" , email:"", phone:"", password:""});
        setFormErrors(validate(registration));
        setIsSubmit(true);
    }

    useEffect(() =>{
    if(Object.keys(formerrors).length == 0 &&  submit){
       console.log(registration);
    }
    }, [formerrors]);
    function validate (values){
        const error = {};
        const regx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!values.username){
            error.username = "username is required";
        }
        if(!values.email){
            error.email = "email is required";
        }
        if(!values.phone){
            error.phone = "phone is required";
        }
        if(!values.password){
            error.password = "password is required";
        }


    }
    return (
        <>
            <form action="" className="container" onClick={handleSubmit}>
                <div className="row border border-primary m-2">
                    <h1 className="d-flex justify-content-sm-center mb-3">Registration form</h1>
                    <div className=" row d-flex justify-content-sm-center mb-3">
                        <label htmlFor="username" className=" font-weight-bold m-2  col-md-2">FullName:</label>
                        <input type="text" value={registration.username} onChange={handleInput} className="ml-20 col-md-4" name="username" id="username" />
                
                    </div>
                    <p >{formerrors.username}</p>
                   

                    <div className="row d-flex justify-content-sm-center mb-3">
                        <label htmlFor="email" className=" font-weight-bold col-md-2 m-2">Email:</label>
                        <input type="text" value={registration.email} onChange={handleInput} className="ml-20 col-md-4" name="email" id="email" />
                    </div>
                    <p>{formerrors.email}</p>


                    <div className=" row d-flex justify-content-sm-center mb-3">
                        <label htmlFor="phone" className=" font-weight-bold col-md-2 m-2">Phone:</label>
                        <input type="text" value={registration.phone} onChange={handleInput} className="ml-20 col-md-4" name="phone" id="phone" />
                    </div>
                    <p>{formerrors.phone}</p>


                    <div className="row d-flex justify-content-sm-center mb-3">
                        <label htmlFor="password" className=" font-weight-bold col-md-2 m-2">Password:</label>
                        <input type="text" value={registration.password} onChange={handleInput} className="ml-20 col-md-4" name="password" id="password" />
                    </div>
                    <p>{formerrors.password}</p>

                    <div className="d-flex justify-content-sm-center mb-3">
                    <button  type="submit" className="d-flex justify-content-sm-center btn btn-primary" >Registration</button>
                    </div>
                </div>
               {
                record.map((currEle) => {
                    return(
                        <div className="bg-light d-flex"  >
                            <p className="col-md-3">{currEle.username}</p>
                            <p className="col-md-3">{currEle.email}</p>
                            <p className="col-md-3">{currEle.phone}</p>
                            <p className="col-md-3">{currEle.password}</p>
                        </div>
                    );
                })
               }
            </form>
        </>

    );
}
export default Registration;