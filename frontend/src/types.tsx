export type Coffee = {
  id?: number

  flavour: string

  surname: string

  type: string
}

export type Fruit = {
  id?: number

  amount: string

  sugar: string

  fresh: string
}

export type Icecream = {
  id?: number

  flavour: string

  quantity: string
}

export type User = {
  id?: number

  username: string

  passwordHash: string
}

export type CoffeeError = any

export type FruitError = any

export type IcecreamError = any

export type UserError = any

export type LoginValues = {
  username: string
  password: string
}

export type RegisterValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
