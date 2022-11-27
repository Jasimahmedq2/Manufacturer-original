import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://manufacturer-myself.up.railway.app/service')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return [services, setServices]
}
export default useServices;