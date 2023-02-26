import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Form.css"

const AdminRegister = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");


    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email };
        if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8080/admin", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/adminlogin');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="form_main_container">
                <form className="formcont" onSubmit={handlesubmit}>
                    <h1>Admin Registration</h1>
                    ____________________________________

                    <br />
                    <br />

                    <label>User Name <span className="errmsg">*</span></label>
                    <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                    <label>Password <span className="errmsg">*</span></label>
                    <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                    <label>Full Name <span className="errmsg">*</span></label>
                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                    <label>Email <span className="errmsg">*</span></label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                  


                    <div className="card_footer">
                        <button type="submit" className="btn btn-primary">Register</button>
               <br />
                        <Link to={'/adminlogin'} className="link-btn">Already have an account? sign In here!</Link>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default AdminRegister;