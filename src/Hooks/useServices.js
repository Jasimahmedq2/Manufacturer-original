import { useEffect, useState } from "react"

const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://dull-puce-basket-clam-sari.cyclic.app/tools/service')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return [services, setServices]
}
export default useServices;