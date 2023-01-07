import React from 'react'
export default function DisplayUserData() {
  const getdata = JSON.parse(localStorage.getItem('data'))
  return (<>
    {getdata && <div><h5>Username : {getdata.name}</h5></div>}
    {getdata && <div><h5>Email : {getdata.email}</h5></div>}
    {getdata && <div><h5>Password : {getdata.password}</h5></div>}

  </>
  )
}
