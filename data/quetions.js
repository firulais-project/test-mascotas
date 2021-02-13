module.exports = {
  quetions: [
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
          values: [
            'es posible que no se lleve bien con los niños',
            'gran compañero',
            'un gran perro guardián'
          ]
        },
        {
          label: 'Con mi pareja o familia',
          values: [
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
          values: [
            'es posible que no se lleve bien con los niños',
            'gran compañero',
            'les gusta mucho que los acicalen.'
          ]
        },
        {
          label: 'Proteja mi casa',
          values: [
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
    // {
    //   name: 'othe',
    //   title: 'Cuantas horas estas fuera de casa',
    //   options: [
    //     { label: 'Menos de 5 horas' },
    //     { label: 'Mas de 5 horas' },
    //   ]
    // },
    // {
    //   name: 'sadsad',
    //   title: '¿Qué te gusta hacer en tu tiempo libre?',
    //   options: [
    //     { label: 'Soy hogareño y disfruto de la tranquilidad' },
    //     { label: 'Me gusta disfrutar de la comprañia de mi familia' },
    //     { label: 'Me encanta el deporte y las actividades al aire libre' }
    //   ]
    // },
    // {
    //   name: 'sadqdwsad',
    //   title: '¿Con quién compartes tu hogar?',
    //   options: [
    //     { label: 'Con mi familia' },
    //     { label: 'Vivo solo/a' },
    //     { label: 'Con mi pareja' }
    //   ]
    // },
    // {
    //   name: 'qsdwwwqd',
    //   title: '¿Por qué te gustaría tener un perro?',
    //   options: [
    //     { label: 'Por la compañia' },
    //     { label: 'Para que proteja mi casa' },
    //     { label: 'Para entrenar con el' },
    //     { label: 'Para salir a pasear' }
    //   ]
    // },
    // {
    //   name: '213qsdwwwqd',
    //   title: '¿Cualidades de tu perro ideal?',
    //   options: [
    //     { label: 'Por la compañia' },
    //     { label: 'Para que proteja mi casa' },
    //     { label: 'Para entrenar con el' },
    //     { label: 'Para salir a pasear' }
    //   ]
    // }
  ]
}