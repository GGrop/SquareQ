import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from  'react-router-dom'
import { useAuth } from '../../../../context/authContext';
import { SwalErrors } from '../../../SwalErrors/SwalErrors';
import '../Auth.css'

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
                SwalErrors("errorLogin")
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
    )
}

export default Login