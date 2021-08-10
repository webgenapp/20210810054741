import React from 'react'
import { useParams } from 'react-router-dom'
import client from '../api'
import { useQuery } from 'react-query'
import { Icecream } from '../types'

function DetailIcecream() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<Icecream>(['icecreams', id], () =>
    client.get(`/api/v1/icecreams/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const icecream = data as Icecream

  return (
    <div>
      <label>{icecream.flavour}</label>
      <br />

      <label>{icecream.quantity}</label>
      <br />
    </div>
  )
}

export default DetailIcecream
