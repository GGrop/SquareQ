import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from  'react-router-dom'
import '../Auth.css'
import { useAuth } from '../../../../context/authContext';
import { swal } from '../../../swal/swal';

function Login() {
    const {login}=useAuth()
    const navigate = useNavigate()
    const validationMessages = {
        email: {
            format: '*Formato de email incorrecto',
            required: '*El campo Email es obligatorio',
        },
        password:{
            required: '*El campo contraseña es obligatorio',
        }
    }
    const SignupSchema = Yup.object().shape({
        email:Yup.string()
        .email(validationMessages.email.format)
        .required(validationMessages.email.required),
        password:Yup.string()
        .required(validationMessages.password.required),
    });
    return (
        <Formik
        initialValues={{
            email:'',
            password:'',
        }}
        onSubmit={async (values)=>{
            try{
                await login(values.email, values.password)
                navigate("/")
            }
            catch(error){
                swal("errorLogin")
            }
            
        }}
        validationSchema={SignupSchema}
    >
        <Form className='auth animacion1'>
            <div>
                <div>
                    <label>Email:</label>
                    <Field 
                        type="email"
                        name="email"
                    />
                </div>
                    <ErrorMessage  name="email">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                <div>
                    <label htmlFor="">Contraseña:</label>
                    <Field 
                        type="password"
                        name="password"
                    />
                </div>
                <ErrorMessage  name="password">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
            </div>
                <button type="submit">Submit</button>
        </Form>
    </Formik>
        // <form className='auth animacion1' action="/login" method="POST">
        //     <div>
        //         <div>
        //             <label>Username:</label>
        //             <input
        //                 type="text"
        //                 name="username"
        //             />
        //         </div>
        //         <div>
        //             <label>Password:</label>
        //             <input
        //                 type="password"
        //                 name="password"
        //             />
        //         </div>
        //     </div>
        //         <button type="submit">LOG IN</button>
        // </form>
    )
}

export default Login