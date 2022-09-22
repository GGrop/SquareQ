import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from  'react-router-dom'

import { SwalErrors } from '../../../SwalErrors/SwalErrors';
import { useAuth } from '../../../../context/authContext';
import '../Auth.css'


function Register() {

    const validationMessages = {
        username: {
            required: '*El campo usuario es obligatorio',
            fieldLength: '*El campo nombre debe tener entre 5 y 20 caracteres',
            format: '*El campo debe contener al menos un numero'
        },
        email: {
            required: '*El campo Email es obligatorio',
            format: '*Formato de email incorrecto'
        },
        password:{
            required: '*El campo contraseña es obligatorio',
            fieldLength: '*El campo constraseña debe tener entre 6 y 16 caracteres',
            format: '*El campo contraseña debe contener una mayuscula, una minuscula y un numero'
        },
        gender:{
            required: '*El campo genero es obligatorio',
        }
    }
    const SignupSchema = Yup.object().shape({
        username:Yup.string()
        .matches(/[a-zA-Z](?=.*[0-9])/,validationMessages.username.format)
        .min(6,validationMessages.username.fieldLength)
        .max(20,validationMessages.username.fieldLength)
        .required(validationMessages.username.required),
        email:Yup.string()
        .email(validationMessages.email.format)
        .required(validationMessages.email.required),
        password:Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,validationMessages.password.format)
        .min(6,validationMessages.password.fieldLength)
        .max(16,validationMessages.password.fieldLength)
        .required(validationMessages.password.required),
        gender:Yup.string()
        .required(validationMessages.gender.required)
    });

    const {addUser,upToFirebase}=useAuth()
    const navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={{
                    username:'',
                    email:'',
                    password:'',
                    gender:''
                }}
                onSubmit={async (values)=>{
                    try{
                        const userCod= await addUser(values.email,values.password,values.username,values.gender)
                        await upToFirebase(userCod.user.uid,userCod.user.email,values.gender,values.username)
                        navigate("/")
                    } catch(error){
                        SwalErrors("errorRegister")
                    }
                }}
                validationSchema={SignupSchema}
                >
                <Form className='auth animacion1'>
                    <div>
                        <div>
                            <label>Usuario:</label>
                            <Field 
                                type="text"
                                name="username"
                                />
                        </div>
                        <ErrorMessage  name="username">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
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
                        <div className='radioContainer'>
                            <label>Hombre
                            <Field
                                type="radio"
                                name="gender"
                                value="men"
                                />
                            </label>
                            <label>Mujer
                            <Field
                                type="radio"
                                name="gender"
                                value="women"
                                />
                            </label>
                            <label>Otro
                            <Field
                                type="radio"
                                name="gender"
                                value="women"
                                />
                            </label>
                        </div>
                        <ErrorMessage  name="gender">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                    </div>
                        <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
        )
}
export default Register
