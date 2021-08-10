import React from 'react'
import { useParams } from 'react-router-dom'
import client from '../api'
import { useQuery } from 'react-query'
import { Fruit } from '../types'

function DetailFruit() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<Fruit>(['fruits', id], () =>
    client.get(`/api/v1/fruits/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const fruit = data as Fruit

  return (
    <div>
      <label>{fruit.amount}</label>
      <br />

      <label>{fruit.sugar}</label>
      <br />

      <label>{fruit.fresh}</label>
      <br />
    </div>
  )
}

export default DetailFruit
