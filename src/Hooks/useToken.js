import { useEffect, useState } from "react";
const useToken = user => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const email = user?.user?.email;
    const currentEmail = {email: email}
    if(email){
      fetch(`https://dull-puce-basket-clam-sari.cyclic.app/user/login/${email}`, {
        method: 'PUT',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(currentEmail)
      })
      .then(res => res.json())
      .then(data => {
        console.log('new user data', data)
        
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken)
        setToken(accessToken)
      })

    }
  },[user])
  return [token]
}
export default useToken;