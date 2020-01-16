const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router();

/**
	* Métodos HTTP: GET , POST , PUT, DELETE
	*
	* Tipos de parametros:
	* Query Params: request.query (Filtros, ordenação, paginação, ...)
	* Route Params: request.params (Identificar um recurso na alteração ou remoção)
	* Body: 
*/

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search()', SearchController.index);

module.exports = routes;