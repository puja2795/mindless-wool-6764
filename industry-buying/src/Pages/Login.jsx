import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Form.css'

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("https://plum-quail-tam.cyclic.app/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div>
            <div className="form_main_container">
                <form onSubmit={ProceedLogin} className="formcont">
                        <h2>User Login</h2>
                        _____________________________________
                        <label>User Name <span className="errmsg">*</span></label>
                        <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                        <div className="card_footer">
                            <button type="submit" className="loginbtn">Login</button>
                 <br />
                            <Link className="link-btn" to={'/register'}>New User Register here!</Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Login;