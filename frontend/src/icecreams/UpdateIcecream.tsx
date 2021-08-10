import client from '../api'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import IcecreamForm from './IcecreamForm'
import { Icecream } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

function UpdateIcecream() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<Icecream>(['icecreams', id], () =>
    client.get(`/api/v1/icecreams/${id}`).then((response) => response.data)
  )

  const updateIcecream = useMutation<Icecream, any, Icecream>(
    (values: Icecream) =>
      client
        .put(`/api/v1/icecreams/${id}`, values)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('icecreams')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const icecream = data as Icecream
  return (
    <IcecreamForm
      icecream={icecream}
      onSubmit={(values, { setSubmitting }) => {
        updateIcecream.mutate(values)
        setSubmitting?.(false)
        history.push('/icecreams')
      }}
    />
  )
}

export default UpdateIcecream
