module.exports = {
  questions: [
    {
      name: 's',
      title: 'Tu primera mascota',
      options: [,
        {
          label: 'SI',
          value: 'adecuado para propietarios primerizos',
        },
        {
          label: 'NO',
          value: [
            'necesita un propietario con algo de experiencia',
            'necesita un dueño con experiencia'
          ]
        }
      ]
    },
    {
      name: 'size',
      title: '¿como es la casa donde vives?',
      options: [
        {
          label: 'Casa pequeña o Apartamento',
          value: ['very_small', 'small']
        },
        {
            label: 'Casa con terraza',
            value: ['small', 'medium']
        },
        {
          label: 'Casa con jardín',
          value: ['big', 'very_big']
        }
      ]
    },
    {
      name: 'second',
      title: '¿Qué te gusta hacer en tu tiempo libre?',
      options: [
        {
          label: 'Me encanta el deporte y las actividades al aire liobre.',
          value: [
            'disfruta del entrenamiento',
            'necesita mucho ejercicio',
            'un gran perro deportivo'
          ]
        },
        {
          label: 'Disfrutar tranquilo en casa.',
          value: [
            'bueno con las personas',
            'gran compañero'
          ]
        },
        {
          label: 'Disfrutar en compañia de mi familia',
          value: [
            'un gran perro para una familia',
            'gran compañero',
            'dócil con los niños'
          ]
        }
      ]
    },
    {
      name: 'third',
      title: '¿Con quién compartes tu hogar?',
      options: [
        {
          label: 'Vivo solo/a',
          value: [
            'es posible que no se lleve bien con los niños',
            'gran compañero',
            'un gran perro guardián'
          ]
        },
        {
          label: 'Con mi pareja o familia',
          value: [
            'necesita mucha interacción con el hombre.',
            'gran compañero',
            'un gran perro guardián'
          ]
        }
      ]
    },
    {
      name: 'fourth',
      title: '¿Por qué te gustaría tener un perro?',
      options: [
        {
          label: 'Compañia',
          value: [
            'es posible que no se lleve bien con los niños',
            'gran compañero',
            'les gusta mucho que los acicalen.'
          ]
        },
        {
          label: 'Proteja mi casa',
          value: [
            'un gran perro guardián'
          ]
        },
        {
          label: 'Para entrenar o salir a pasear',
          value: [
            'requiere mucho entrenamiento',
            'necesita un entrenamiento moderado'
          ]
        }
      ]
    }
  ]
}