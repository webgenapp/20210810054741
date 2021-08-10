import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Icecream } from '../types'

type CreateProps = {
  icecream?: Icecream
  onSubmit: (values: Icecream, helpers: FormikHelpers<Icecream>) => void
}

function IcecreamForm({ icecream, onSubmit }: CreateProps) {
  const initialValues: Icecream = {
    flavour: icecream ? icecream.flavour : '',
    quantity: icecream ? icecream.quantity : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='flavour' placeholder='Flavour' />

          <Field type='text' name='quantity' placeholder='Quantity' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default IcecreamForm
