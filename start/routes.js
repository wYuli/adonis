'use strict'

import { get } from 'http';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//User routes
Route.get('/users', 'UserController.index').as('users')
Route.post("/users", "UserController.store")
Route.get('/users/:id', 'UserController.edit')
Route.postg("/users-save/:id", "UserController.save")
Route.get("/users/delete/:id", "UserController.destroy")

