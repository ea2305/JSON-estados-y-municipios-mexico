'use strict'
/**
 * Dataset generator
 * @author Elihu A. Cruz
 * @version 1.0.0
 */

const fs = require('fs')

// Carga de datos para creación de JSON con estados y municipios integrados integrado
const estados = JSON.parse(fs.readFileSync('./mexico_estados.json','utf8'))
const municipios = JSON.parse(fs.readFileSync('./mexico_municipios.json','utf8'))

// get cities
estados.forEach(estado => {
  estado.municipios = municipios.filter(municipio => (municipio.estado_id === estado.id)? municipio : null)
})

const mexico = { estados }

// write new dataset
fs.writeFile('./dataset/mexico.json', JSON.stringify(mexico), function(err) {
    if(err) {
      return console.log(err)
    }
    console.log('Integración finalizada 📔')
})
