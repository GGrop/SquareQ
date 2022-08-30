import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Top10 from '../../Top10/Top10'
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { SkipArrow } from '../../SkipArrow/SkipArrow'
import './HighScoreTableStyles.css'


const cuentas=[
    {id:1,user:'pepito',score:32,top:''},
    {id:2,user:'josesito',score:50,top:''},
    {id:3,user:'marquitos',score:21,top:''},
    {id:4,user:'tito',score:9,top:''},
    {id:5,user:'pelusa',score:49,top:''},
    {id:6,user:'pepe',score:5,top:''},
    {id:7,user:'nico',score:12,top:''},
    {id:8,user:'fede',score:37,top:''},
    {id:9,user:'pato',score:16,top:''},
    {id:10,user:'toto',score:20,top:''},
    {id:11,user:'tete',score:21,top:''},
    {id:12,user:'facundito',score:48,top:''},
    {id:13,user:'pelusa',score:36,top:''},
    {id:14,user:'mongo',score:33,top:''},
    {id:15,user:'sql',score:50,top:''},
]

function HighScoresTable() {

    // CON ESTO TRAIGO 1 DATA 
    // const [first, setfirst] = useState('')
    // useEffect(()=>{
    //   const db=getFirestore()
    //   const queryDb=doc(db,'users','ZBmqTC4uHAlH6yQ45azN')
    //   getDoc(queryDb)
    //   .then(resp=>setfirst({id: resp.id, ...resp.data()} ))
    // },[])
    // console.log(first)

    const [userList, setUserList] = useState('')
    const db=getFirestore()
    const queryCollection=collection(db, 'users')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getDocs(queryCollection)
        .then(resp=>setUserList(resp.docs.map(user=>({id: user.id, ...user.data()} ) )))
        .finally(()=> setLoading(true))
    },[])

    console.log(userList)
    if(loading)
    userList.sort((a,b)=>{
        return b.score-a.score;
    })


    return (
        <div className='tableBoxing'>
            <NavLink to='/Menu' >
                <SkipArrow/>
            </NavLink>
            <div>
            <h2>HighScores!</h2>
            <table id='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                { loading?(
                    <tr>
                    {userList.map((cuenta, index)=>
                        <Top10
                            index={index}
                            key={cuenta.id}
                            userName={cuenta.userName}
                            highScore={cuenta.highScore}
                            />
                            )}
                    </tr>
                    ):(
                        <div>

                        </div>
                    )
                }
                <tr>
                    <td>01</td>
                    <td>Lani</td>
                    <td>Ovendale</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Israel</td>
                    <td>Tassell</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Eveleen</td>
                    <td>Mercer</td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>Conn</td>
                    <td>Whitley</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>Cherye</td>
                    <td>Smitheram</td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>Bunnie</td>
                    <td>Sked</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Helaine</td>
                    <td>Crother</td>
                </tr>
            </tbody>
            </table>
</div>
        </div>
        
    )
}

export default HighScoresTable

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const style = {
    //   table: {
        //     borderCollapse: 'collapse'
        //   },
        //   tableCell: {
            //     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm(props) {
//   const [firstName,setFirstName]=useState('')
//   const [lastName,setLastName]=useState('')
//   const [phone,setPhone]=useState('')

//   const ChangefirstName=(e)=>{
//       setFirstName(e.target.value);
//       // console.log(firstName)
//   }
//   const ChangelastName=(e)=>{
//       setLastName(e.target.value);
//       // console.log(lastName)
//   }
//   const ChangePhone=(e)=>{
//       setPhone(e.target.value);
//       // console.log(phone)

//   }
//   const transferValue=(e)=>{
//     e.preventDefault();
//     const val={firstName,lastName,phone}
//     // console.log(val)
//     props.func(val);
//     clear();
//   }
//     const clear=()=>{
//       setFirstName('')
//       setLastName('')
//       setPhone('')
//     }

//   return (
//     <form style={style.form.container}>
//       <label>First name:</label>
//       <br />
//       <input 
//         style={style.form.inputs}
//         className='userFirstname'
//         name='userFirstname' 
//         type='text'
//         value={firstName}
//         onChange={ChangefirstName}
//       />
//       <br/>
//       <label>Last name:</label>
//       <br />
//       <input 
//         style={style.form.inputs}
//         className='userLastname'
//         name='userLastname' 
//         type='text'
//         value={lastName}
//         onChange={ChangelastName}
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userPhone' 
//         name='userPhone' 
//         type='number'
//         value={phone}
//         onChange={ChangePhone}
//       />
//       <br/>
//       <input 
//         style={style.form.submitBtn} 
//         className='submitButton'
//         type='submit' 
//         value='Add User' 
//         onClick={transferValue}
//       />
//     </form>
//   )
// }

// function InformationTable({userData}) {

//   console.log(userData)
//   userData.sort((a,b)=>{
//       return a.lastName -b.lastName
//     })
//   const table=userData.map((data)=>{        
//     return(
//       <tr>
//         <td>{data.firstName}</td>
//         <td>{data.lastName}</td>
//         <td>{data.phone}</td>
//       </tr>
//     );
//   });

//   return (
//     <table style={style.table} className='informationTable'>
//       <thead> 
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//           <th style={style.tableCell}>Phone</th>
//         </tr>
//       </thead>
//       <tbody>
//       {table}
//       </tbody>
//     </table>
//   );
// }

// function Application(props) {
//   const[userData,setUserData]=useState([])

//   const addData=(data)=>{
//     const updateData=[...userData]
//     updateData.push(data)
//     setUserData(updateData)
//   }
//   return (
//     <section>
//       <PhoneBookForm func={addData}/>
//       <InformationTable userData={userData}/>
//     </section>
//   );
// }

// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );