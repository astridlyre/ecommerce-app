import { useEffect, useState } from 'react'
import axios from 'axios'

export const useField = (type, initial = '') => {
  const [value, setValue] = useState(initial)

  const onChange = event => setValue(event.target.value)

  const clear = () => setValue('')

  return [
    {
      value,
      type,
      onChange,
    },
    clear,
  ]
}

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
      .catch(e => setError(e.message))
  })

  return {
    data,
    loading: data ? false : true,
    error,
  }
}
