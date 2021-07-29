import { useEffect, useState } from 'react'

const useCarProviders = () => {
  const [nroItems, setNroItems] = useState(0)
  const [providers, setProviders] = useState([])

  useEffect(() => {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/mercedes?format=json'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProviders(data.Results)
        setNroItems(data.Count)
      })
  }, [])

  const getProvider = (name) => {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${name}?format=json`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNroItems(data.Count)
        setProviders(data.Results)
      })
  }

  return { data: providers, nroItems, getProvider }
}

export default useCarProviders
