
let toursA = [
    {
        id: 1,
        slug: "Mexico",
        nombreTour: "Juan Tours",
        operador: "Juan",
        tipoDeTour: "Tour por la playa",
        descripcion: "Podras conocer unas playas hermosas que se encuentran en Mexico",
        img: 'https://cdn.kiwicollection.com/media/property/PR010957/xl/010957-Andaz%20Mayakoba%20Resrot%20Riviera%20MayaAndaz-Mayakoba-View-Sky%20copy.jpg?cb=1546630821',
        pais: "Mexico",
        zonaLlegada: "Yucatan",
        zonaSalida: "Ciudad de Mexico",
        escalas: ['ciudad de Mexico', 'Yucatan'],
        acomodacionIncluida: true,
        transporteIncluido: true,
        edadMinima: 18,
        requisitos: {
                seguroDeViaje: true
            },
        duracionTour: 20,
        opiniones: null,
        calificacion: null,
        precioUSD: 1500,
        fechasDisponibles: {
            2019: [
                {
                    id: "2019-Yucatan-001",
                    fechaInicio: "1 de Diciembre",
                    fechaFin: "21 de Diciembre",
                    asientosDisponibles: 15,
                    asientosReservados: 4,
                    precioRealUSD: 1500
                },
                {
                    id: "2019-Yucatan-002",
                    fechaInicio: "2 de Diciembre",
                    fechaFin: "22 de Diciembre",
                    asientosDisponibles: 15,
                    asientosReservados: 6,
                    precioRealUSD: 1500
                },
                {
                    id: "2019-Yucatan-003",
                    fechaInicio: "3 de Diciembre",
                    fechaFin: "23 de Diciembre",
                    asientosDisponibles: 15,
                    asientosReservados: 0,
                    precioRealUSD: 1500
                }
            ]
        }
    }
];
let toursB = [
    {
        id: 2,
        slug: "Mexico",
        nombreTour: "Vamonos todos!",
        operador: "Todos amigos",
        tipoDeTour: "Llevar a un acompanante",
        descripcion: "Este tour es esta disenado para ir con un acompanante, conocer los mejores lugares de Colombia",
        img: 'https://www.eltiempo.com/files/article_multimedia/uploads/2018/01/31/5a724c5ee37c0.jpeg',
        pais: "Mexico",
        zonaLlegada: "Colombia",
        zonaSalida: "Aeuropuerto internacional 'Benito Juarez'",
        escalas: ['Ciudad de Mexico', 'Chile', 'Colombia'],
        acomodacionIncluida: true,
        transporteIncluido: true,
        edadMinima: 21,
        requisitos: {
                seguroDeViaje: true
            },
        duracionTour: 15,
        opiniones: null,
        calificacion: null,
        precioUSD: 5500,
        fechasDisponibles: {
            2019: [
                {
                    id: "2019-Colombia-001",
                    fechaInicio: "1 de Junio",
                    fechaFin: "16 de Junio",
                    asientosDisponibles: 16,
                    asientosReservados: 14,
                    precioRealUSD: 5500
                },
                {
                    id: "2019-Colombia-002",
                    fechaInicio: "2 de Junio",
                    fechaFin: "17 de Junio",
                    asientosDisponibles: 16,
                    asientosReservados: 6,
                    precioRealUSD: 5500
                },
                {
                    id: "2019-Colombia-003",
                    fechaInicio: "3 de Junio",
                    fechaFin: "18 de Junio",
                    asientosDisponibles: 16,
                    asientosReservados: 10,
                    precioRealUSD: 5500
                }
            ]
        }
    }
];
let toursC = [ 
    {
        id: 3,
        slug: "Mexico",
        nombreTour: "Listo para la playa?",
        operador: "Ernesto",
        tipoDeTour: "Es hora de relajarse",
        descripcion: "Ya es hora de relajarnos un rato, dejar a un lado la escuela o el trabajo",
        img: 'https://tipsparatuviaje.com/wp-content/uploads/2018/10/la-paz-baja-california-sur.jpg',
        pais: "Mexico",
        zonaLlegada: "La paz",
        zonaSalida: "Ciudad de Mexico",
        escalas: ['ciudad de Mexico', 'Baja California sur, La paz'],
        acomodacionIncluida: true,
        transporteIncluido: true,
        edadMinima: 18,
        requisitos: {
                seguroDeViaje: true
            },
        duracionTour: 10,
        opiniones: null,
        calificacion: null,
        precioUSD: 1200,
        fechasDisponibles: {
            2019: [
                {
                    id: "2019-La paz-001",
                    fechaInicio: "15 de Diciembre",
                    fechaFin: "25 de Diciembre",
                    asientosDisponibles: 15,
                    asientosReservados: 10,
                    precioRealUSD: 1200
                },
                {
                    id: "2019-La paz-002",
                    fechaInicio: "15 de Enero",
                    fechaFin: "25 de Enero",
                    asientosDisponibles: 15,
                    asientosReservados: 8,
                    precioRealUSD: 1200
                },
                {
                    id: "2019-La paz-003",
                    fechaInicio: "15 de Febrero",
                    fechaFin: "25 de Febrero",
                    asientosDisponibles: 15,
                    asientosReservados: 4,
                    precioRealUSD: 1200
                }
            ]
        }
    }
];

//funtions
const serchTours = (ToursArray) => {

}