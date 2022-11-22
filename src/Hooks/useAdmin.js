import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [adminLoading, setAdminLoading] = useState(true)
  const email = user?.email

  
 useEffect(() => {
  const LoadData = async() => {
    const {data} = await axios.get(`https://manufacturer-myself.up.railway.app/admin/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    console.log("data here", data)
    setAdmin(data.admin)
    setAdminLoading(false)
  } 
  LoadData()
 },[user])
 return [admin, adminLoading]

}
export default useAdmin