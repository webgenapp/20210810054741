import React, { useEffect } from 'react'

import CreateCoffee from './coffees/CreateCoffee'
import ListCoffee from './coffees/ListCoffee'
import DetailCoffee from './coffees/DetailCoffee'
import UpdateCoffee from './coffees/UpdateCoffee'

import CreateFruit from './fruits/CreateFruit'
import ListFruit from './fruits/ListFruit'
import DetailFruit from './fruits/DetailFruit'
import UpdateFruit from './fruits/UpdateFruit'

import CreateIcecream from './icecreams/CreateIcecream'
import ListIcecream from './icecreams/ListIcecream'
import DetailIcecream from './icecreams/DetailIcecream'
import UpdateIcecream from './icecreams/UpdateIcecream'

import CreateUser from './users/CreateUser'
import ListUser from './users/ListUser'
import DetailUser from './users/DetailUser'
import UpdateUser from './users/UpdateUser'

import LoginForm from './auth/LoginForm'
import RegisterForm from './auth/RegisterForm'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

import { useQuery } from 'react-query'

import client, { fetchCSRFToken, hasCSRFToken } from './api'

function App() {
  const { data: user } = useQuery('user', () => client.get('/auth/me'), {
    retry: false,
  })

  useEffect(() => {
    if (!hasCSRFToken()) fetchCSRFToken()
  }, [])

  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/coffees'>Coffees</Link>
            <br />
            <Link to='/coffees/create'>Create a Coffee</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/fruits'>Fruits</Link>
            <br />
            <Link to='/fruits/create'>Create a Fruit</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/icecreams'>Icecreams</Link>
            <br />
            <Link to='/icecreams/create'>Create a Icecream</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/users'>Users</Link>
            <br />
            <Link to='/users/create'>Create a User</Link>
            <br />
          </li>
        </ul>
      </nav>
      <main>
        <Route path='/coffees'>
          <h1>Coffees</h1>
        </Route>

        <Route path='/fruits'>
          <h1>Fruits</h1>
        </Route>

        <Route path='/icecreams'>
          <h1>Icecreams</h1>
        </Route>

        <Route path='/users'>
          <h1>Users</h1>
        </Route>

        <Switch>
          {/* Coffee routes */}
          <Route path='/coffees/create' component={CreateCoffee} />
          <Route path='/coffees/update/:id' component={UpdateCoffee} />
          <Route path='/coffees/detail/:id' component={DetailCoffee} />
          <Route path='/coffees' component={ListCoffee} />,{/* Fruit routes */}
          <Route path='/fruits/create' component={CreateFruit} />
          <Route path='/fruits/update/:id' component={UpdateFruit} />
          <Route path='/fruits/detail/:id' component={DetailFruit} />
          <Route path='/fruits' component={ListFruit} />,{/* Icecream routes */}
          <Route path='/icecreams/create' component={CreateIcecream} />
          <Route path='/icecreams/update/:id' component={UpdateIcecream} />
          <Route path='/icecreams/detail/:id' component={DetailIcecream} />
          <Route path='/icecreams' component={ListIcecream} />,
          {/* User routes */}
          <Route path='/users/create' component={CreateUser} />
          <Route path='/users/update/:id' component={UpdateUser} />
          <Route path='/users/detail/:id' component={DetailUser} />
          <Route path='/users' component={ListUser} />
          {/* auth routes */}
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
