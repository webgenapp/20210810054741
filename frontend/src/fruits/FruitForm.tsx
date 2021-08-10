import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Fruit } from '../types'

type CreateProps = {
  fruit?: Fruit
  onSubmit: (values: Fruit, helpers: FormikHelpers<Fruit>) => void
}

function FruitForm({ fruit, onSubmit }: CreateProps) {
  const initialValues: Fruit = {
    amount: fruit ? fruit.amount : '',
    sugar: fruit ? fruit.sugar : '',
    fresh: fruit ? fruit.fresh : '',
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
          <Field type='text' name='amount' placeholder='Amount' />

          <Field type='text' name='sugar' placeholder='Sugar' />

          <Field type='text' name='fresh' placeholder='Fresh' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FruitForm
