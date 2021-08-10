import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Coffee } from '../types'

type CreateProps = {
  coffee?: Coffee
  onSubmit: (values: Coffee, helpers: FormikHelpers<Coffee>) => void
}

function CoffeeForm({ coffee, onSubmit }: CreateProps) {
  const initialValues: Coffee = {
    flavour: coffee ? coffee.flavour : '',
    surname: coffee ? coffee.surname : '',
    type: coffee ? coffee.type : '',
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

          <Field type='text' name='surname' placeholder='Surname' />

          <Field type='text' name='type' placeholder='Type' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CoffeeForm
