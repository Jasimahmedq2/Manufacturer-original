import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://tools-manufacturer.onrender.com/service')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return [services, setServices]
}
export default useServices;