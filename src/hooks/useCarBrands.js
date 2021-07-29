import { useEffect, useState } from 'react'

const useCarBrands = () => {
  const [listMarcas, setListMarcas] = useState([])

  useEffect(() => {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setListMarcas(data.Results.slice(0, 99)))
  }, [])

  return { listMarcas }
}

export default useCarBrands
