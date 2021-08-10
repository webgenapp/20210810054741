import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import client from '../api'
import { Icecream } from '../types'
import { useHistory } from 'react-router-dom'

type IcecreamPreviewProps = {
  icecream: Icecream
  handleEdit: (icecream: Icecream) => void
  handleDelete: (icecream: Icecream) => void
  handleDetail: (icecream: Icecream) => void
}

function IcecreamPreview({
  icecream,
  handleEdit,
  handleDelete,
  handleDetail,
}: IcecreamPreviewProps) {
  return (
    <>
      {icecream.flavour}
      <br />
      <button type='button' onClick={() => handleDetail(icecream)}>
        detail
      </button>
      <button type='button' onClick={() => handleEdit(icecream)}>
        edit
      </button>
      <button type='button' onClick={() => handleDelete(icecream)}>
        delete
      </button>
    </>
  )
}

function ListIcecreams() {
  const history = useHistory()
  const queryClient = useQueryClient() // eslint-disable-line no-unused-vars
  const icecreamsQuery = useQuery<Icecream[]>('icecreams', () => {
    return client
      .get('/api/v1/icecreams')
      .then((response) => response.data) as Promise<Icecream[]>
  })

  const deleteIcecream = useMutation<any, any, Partial<Icecream>>(
    ({ id }) => {
      return client.delete(`/api/v1/icecreams/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('icecreams')
      },
    }
  )

  const handleEdit = ({ id }: Icecream) => {
    history.push(`/icecreams/update/${id}`)
  }

  const handleDelete = ({ id }: Icecream) => {
    deleteIcecream.mutate({ id })
  }

  const handleDetail = ({ id }: Icecream) => {
    history.push(`/icecreams/detail/${id}`)
  }

  return (
    <>
      <p>{icecreamsQuery.data?.length} icecreams</p>
      <ul>
        {icecreamsQuery.data?.map((icecream) => (
          <li key={icecream.id}>
            <IcecreamPreview
              icecream={icecream}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleDetail={handleDetail}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListIcecreams
