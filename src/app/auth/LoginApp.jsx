import Input from "../component/Input";
import {useState} from "react";


function LoginApp(){

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdError, setPwdError] = useState('');

    return(
        <div>

            <Input
                type='email'
                value={email}
                setValue={e => setEmail(e.target.value)}
                error={emailError}
                placeholder={"you@example.com"}
                label='邮箱'
            />

            <Input
                type='password'
                value={pwd}
                setValue={e => setPwd(e.target.value)}
                error={pwdError}
                label='密码'
            />

            <button>submit</button>
            <button>register</button>
            <a>forget</a>

        </div>
    )
}

export default LoginApp;
