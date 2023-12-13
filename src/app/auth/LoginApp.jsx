import Input from "../component/Input";
import React, {useState} from "react";
import axios from "axios";
import {ports} from "../../utils/ports";
import {inject, observer} from "mobx-react";
import {useNavigate} from "react-router-dom";


function LoginApp(props){

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [read,setRead] = useState(false);

    const {userStore} = props;
    const navigate = useNavigate();

    const handleLogin =  () => {
        if (!read) {
            console.log('请阅读用户手册');
            return;
        }

        if (email.length === 0) {
            setEmailError('请输入邮箱');
            if (pwd.length === 0)
                setPwdError('请输入密码');

            return;
        }

         axios.post(`${ports}/user/login`, {
            name: email,
            password: pwd,
        }).then(res => {
            const {data} = res;

            console.log(data)

            if (typeof (data) === 'string') {
                if (data === '密码错误')
                    setPwdError(data);
                else
                    setEmailError(data);

                return;
            }

            // 登录成功
            userStore.setUser(data);
        }).then(res => navigate('/'))
    }

    return(
        <div className='max-w-xl mx-auto relative bg-transparent z-30'>


            <h1 className="mb-6 text-4xl text-gray-900 font-bold pl-2">Login to your account</h1>

            <h2 className='pl-2 max-w-sm mb-12 font-thin text-md'>
                你需要假装同意下方的用户手册，虽然我并没有提供用户手册，但是你需要假装阅读它，不然将不会通过验证=v=.
            </h2>

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

            <div className='flex justify-between -mt-4'>
                <div className='text-sm ml-2'>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                value={read}
                                onChange={e => {setRead(e.target.checked)}}
                                id="comments"
                                aria-describedby="comments-description"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                我已经阅读<span style={{color: '#0e5385'}}>《用户手册》</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <a className='text-sm'>忘记密码?</a>
                </div>
            </div>

            <button className='px-8 py-3 text-white w-full ml-2 mt-12' style={{backgroundColor: 'rgb(128, 0 , 128)', borderRadius: '8px'}}
                    onClick={handleLogin}
            >登录</button>
            <button className="px-8 py-2 border rounded ml-2 mt-4 w-full" style={{borderRadius: '8px'}} onClick={() => navigate('/auth/register')}>注册</button>

        </div>
    )
}

export default inject('userStore')(observer(LoginApp));
