import {createContext,useContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from "firebase/auth";
import { auth, db } from '../firebase/config';
import {doc,setDoc,getDoc,updateDoc  } from "firebase/firestore"; 

const context =createContext()

export const useAuth=()=>{
    const contextHook=useContext(context);
    return contextHook
}


export const AuthProvider=({children})=>{

    const [lose,setLose]=useState(0)
    const [user, setUser] = useState(null);
    const [timer, setTimer] = useState(15);
    const [difficult, setDifficult] = useState(48);
    const[level,setLevel]=useState(1)
    const [winIndex, setwinIndex] = useState(1);
    const [index, setIndex] = useState(3);
    const [win,setWin]=useState(0)


    const randomNumberInRange=(min, max)=>{return Math.floor(Math.random()*(max - min + 1)) + min;}

    useEffect(()=>{
        onAuthStateChanged(auth, (usuarioFirebase)=>{ //ESTA FUNCION REVISA SI HAY CAMBIOS EN USER
            //SI HAY USUARIO FIREBASE
            if(usuarioFirebase){
                getData(usuarioFirebase.uid)
                //SETEAME CON EL ID TODO LO Q HAY EN STORE
                //NO HACE FALTA MANIPULAR TOKEN PORQUE EN ESTA FUNCION CADA VEZ Q LOGUEA O
                //DESLOGUEA CON E UID SE PIDE TODO Y SE SETEA EN USER
            }else{
                //SETEAME NULL
                setUser(null)
            }
        })
    },[])

    
    const levelUp =(level, difficult)=>{                //im using SquareCo like a aux var
        setwinIndex(randomNumberInRange(0, index));     //give a random value for index
        setLevel(level+1)                                 //set levelUP
        setDifficult(difficult-1)
        resetTime()
    }

    //clock
    const resetTime=()=>{
        setTimer(15)
    }
    const countdown=()=>{
        setTimer(timer =>timer-1)
    }
    //clock
    const youLose=()=>{
        setTimer(0)
        setLose(1)
        highscore()
    }
    const youWin=()=>{
        setTimer(0)
        highscore()
    }
    const highscore=()=>{
        if(level>user.highscore){
            const docRef=doc(db,`users/${user.uid}`)
            updateDoc(docRef,{highscore:level})
        }
        //cargar highscore a la base de datos
    }

    const reset=()=>{
        setLose(0)
        setWin(0)
        resetTime()
        setLevel(1)
        setwinIndex(randomNumberInRange(0, 3))
        setDifficult(49)
        getData(user.uid)
    }


    const getData=async (uid)=>{
        const docRef=doc(db,`users/${uid}`)
        const dataCod = await getDoc(docRef);
        if(dataCod.exists()){
            // setUser(dataCod.data()) PORQUE NO?
            setUser({
                uid:dataCod.data().uid,
                username:dataCod.data().username,
                highscore:dataCod.data().highscore,
                gender:dataCod.data().gender
            })
            return dataCod.data()
        }
    }

    const addUser=  (email,password,username,gender)=>{
        const userCreated= createUserWithEmailAndPassword(auth,email,password)
        return userCreated;
    }

    async function upToFirebase(uid,email,gender,username){
        const docRef=doc(db,`users/${uid}`)
            await setDoc(docRef,{uid,username, email,gender,highscore:0})
    }

    const login=(email,password)=>signInWithEmailAndPassword(auth,email,password);
    
    const logout=()=>{
        const singOut=signOut(auth)
        setUser()
        return singOut
    }

    return(   
    <context.Provider value={{
        addUser,user,login,logout,
        upToFirebase,getData,

        youLose,lose,resetTime,countdown,timer,youWin,win,setWin,
        
        level,randomNumberInRange,winIndex,index,levelUp,setIndex,difficult,reset,setTimer


        }}>
        {children}
    </context.Provider>
    )
}