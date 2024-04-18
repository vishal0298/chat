import { Router } from 'express';
import { signIn, signOut } from '../controllers/auth.controller.js';

const routes = new Router();

// Add routes
routes.post('/signup', signIn);
routes.post('/signin', signIn);
routes.post('/signout', signOut);

export default routes;
