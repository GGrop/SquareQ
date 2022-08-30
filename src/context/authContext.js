import {createContext,useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from "firebase/auth";
import { auth, db } from '../firebase/config';
import { collection, addDoc, doc,setDoc,getDoc } from "firebase/firestore"; 
const context =createContext()


export const useAuth=()=>{
    const contextHook=useContext(context);
    return contextHook
}


export const AuthProvider=({children})=>{

    const [user, setUser] = useState(null);
    const [newUser,setNewUser]=useState(null)

    const CambioSession=()=>{
    //     onAuthStateChanged(auth, (usuarioFirebase)=>{
            console.log("entre a cambio de session")
    //         if(usuarioFirebase){
    //             console.log("ya hay usuarioFirebase")
    //             setUser({
    //                 uid:usuarioFirebase.uid,
    //                 email:usuarioFirebase.email
    //             })
    //             nuevoUsuario()
    //         }else{
    //             console.log("NO hay usuarioFirebase")
    //             setUser(null)
    //         }
    //     })
    }

    const addUser=  (email,password,username,gender)=>{
        const userCreated= createUserWithEmailAndPassword(auth,email,password)
        return userCreated;
    }

    async function upToFirebase(uid,email,gender,username){
        const docRef=doc(db,`users/${uid}`)
        const consulta = await getDoc(docRef);
        if(consulta.exists()){
            const infoDocu= consulta.data();
            console.log("estoy aca")
            return infoDocu
        }else{
            setDoc(docRef,{uid,username, email,gender})
            const consulta= getDoc(docRef);
            const infoDocu= consulta.data();
            console.log("no xd estoy aca")
            return infoDocu
        }
    }
    
    const login=(email,password)=>signInWithEmailAndPassword(auth,email,password);
    
    const logout=()=>signOut(auth)

    return(   
    <context.Provider value={{addUser,user,login,logout,upToFirebase,CambioSession}}>
        {children}
    </context.Provider>
    )
}