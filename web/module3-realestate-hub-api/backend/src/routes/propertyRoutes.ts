// =============================================================================
// RUTAS DE PROPIEDADES - Module 3: RealEstate Hub API
// =============================================================================
// Define las rutas (endpoints) de la API de propiedades.
//
// ## Diseño RESTful
// Seguimos convenciones REST para los endpoints:
// - GET /api/properties - Listar todas
// - GET /api/properties/:id - Obtener una
// - POST /api/properties - Crear nueva
// - PUT /api/properties/:id - Actualizar
// - DELETE /api/properties/:id - Eliminar
//
// ## Express Router
// Usamos Router() para modularizar las rutas.
// Cada recurso (properties, users, etc.) tendría su propio archivo.
// =============================================================================

import { Router } from 'express';
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  //parte2
  getPropertyStats,
} from '../controllers/propertyController.js';

const router = Router();

// =============================================================================
// RUTAS CRUD
// =============================================================================

/**
 * GET /api/properties
 * Lista todas las propiedades con filtros opcionales.
 *
 * Query params:
 * - search: Búsqueda por texto
 * - propertyType: Filtro por tipo de propiedad
 * - operationType: Filtro por tipo de operación
 * - minPrice, maxPrice: Rango de precios
 * - minBedrooms: Habitaciones mínimas
 * - city: Filtro por ciudad
 */
router.get('/', (req, res) => {
  void getAllProperties(req, res);
});

/**
 * GET /api/properties/:id
 * Obtiene una propiedad específica por su ID.
 */
//parte2 modifique id por stats
router.get('/stats', (req, res) => {
  void getPropertyStats(req, res);
});


/**
 * POST /api/properties
 * Crea una nueva propiedad.
 *
 * Body: CreatePropertyInput
 */
router.post('/', (req, res) => {
  void createProperty(req, res);
});

/**
 * PUT /api/properties/:id
 * Actualiza una propiedad existente.
 *
 * Body: Partial<CreatePropertyInput>
 */
router.put('/:id', (req, res) => {
  void updateProperty(req, res);
});

router.get('/', (req, res) => {
  void getAllProperties(req, res);
});

router.get('/:id', (req, res) => {
  void getPropertyById(req, res);
});

/**
 * DELETE /api/properties/:id
 * Elimina una propiedad.
 */
router.delete('/:id', (req, res) => {
  void deleteProperty(req, res);
});

export default router;
