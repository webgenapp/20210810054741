import client from '../api'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Icecream, IcecreamError } from '../types'
import IcecreamForm from './IcecreamForm'
import { useHistory } from 'react-router-dom'

function CreateIcecream() {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createIcecream = useMutation<Icecream, IcecreamError, Icecream>(
    (values) => {
      return client.post('/api/v1/icecreams', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('icecreams')
      },
    }
  )

  const handleSubmit = (
    values: Icecream,
    { setSubmitting }: FormikHelpers<Icecream>
  ) => {
    createIcecream.mutate(values)
    setSubmitting?.(false)
    history.push('/icecreams')
  }

  return <IcecreamForm onSubmit={handleSubmit} />
}

export default CreateIcecream
