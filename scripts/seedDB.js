const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||"heroku_pp964t26:alnkda4dng4sg103g053p2hdjt@ds341825.mlab.com:41825/heroku_pp964t26"
  //"mongodb://localhost/airbnb"
);

const alojamientoSeed = [
  {
    title: "Villa completa", 
    precio: 500,
    ciudad: "Paris",
    evaluaciones: [4,4,5],
    description: "Excelente lugar cerca del lago",
    genero: "familia",
    image:"https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Campestre", 
    precio: 800,
    ciudad: "Tokio",
    evaluaciones: [4,4,5],
    description: "Villa",
    genero: "trabajo",
    image:"https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Citadina", 
    precio: 600,
    ciudad: "Londres",
    evaluaciones: [1,4,5],
    description: "dddddd",
    genero: "trabajo",
    image:"https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large",
    verificado: 1,
  },{
    title: "Hawain", 
    precio: 500,
    ciudad: "Los Ángeles",
    evaluaciones: [4,3,5],
    description: "ddd",
    genero: "trabajo",
    image:"https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large",
    verificado: 1,
  },{
    title: "Museo", 
    precio: 500,
    ciudad: "Barcelona",
    evaluaciones: [5,4,5],
    description: "efef",
    genero: "familia",
    image:"https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large",
    verificado: 0,
  },{
    title: "Cosmopolita", 
    precio: 900,
    ciudad: "Nueva York",
    evaluaciones: [3,4,5],
    description: "fff",
    genero: "",
    image:"https://a0.muscache.com/im/pictures/2767347c-00af-47aa-acca-c8430fcc3c17.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Clásico", 
    precio: 600,
    ciudad: "Delhi",
    evaluaciones: [3,4,5],
    description: "fff",
    genero: "",
    image:"https://a0.muscache.com/im/pictures/f665efd9-66fe-4752-ba6d-fa33c09b7510.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Kioto", 
    precio: 850,
    ciudad: "Kioto",
    evaluaciones: [3,4,5],
    description: "fff",
    genero: "",
    image:"https://a0.muscache.com/im/pictures/f17896e4-2c59-4cf9-8d43-0446e1612f62.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Chengedú", 
    precio: 860,
    ciudad: "Chengedú",
    evaluaciones: [3,4,5],
    description: "fff",
    genero: "",
    image:"https://a0.muscache.com/im/pictures/34af0f02-9566-4e25-b813-24693ac71921.jpg?aki_policy=large",
    verificado: 0,
  },
  {
    title: "Pekín", 
    precio: 460,
    ciudad: "Pekín",
    evaluaciones: [3,4,5],
    description: "fff",
    genero: "",
    image:"https://a0.muscache.com/im/pictures/71c84666-c574-4ca1-9842-41eda056abdc.jpg?aki_policy=large",
    verificado: 0,
  }
];


const estanciasSeed = [
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "KATSUSHIKA",
    pais: "Tokio",
    description: "Don. J de APT, 2 Habitaciones + Wi-Fi Portátil",
    image:"https://a0.muscache.com/im/pictures/61566443/79e8ff67_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 200
  },
  {
    title: "CASA ENTERA", 
    ciudad: "KATSUSHIKA",
    pais: "Tokio",
    description: "Casa de Pino, 2 Dormitorios, Wi-Fi PORTÁTIL GRATIS",
    image:"https://a0.muscache.com/im/pictures/97555979/877f8f00_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 120
  },
  {
    title: "CASA ENTERA", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Stunning home in central Tokyo",
    image:"https://a0.muscache.com/im/pictures/45604883/54451b1c_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "HABITACIÓN PRIVADA", 
    ciudad: "SHIBUYA-KU",
    pais: "Tokio",
    description: "Spacious! Shibuya House w/Garden",
    image:"https://a0.muscache.com/im/pictures/89281220/ed6e8824_original.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 131
  }, 
  {
    title: "DEPARTAMETO ENTERO", 
    ciudad: "SHIBUYA-KU",
    pais: "Tokio",
    description: "Confort and near Shinjuku",
    image:"https://a0.muscache.com/im/pictures/48d97e17-8a7a-4e11-92b2-80512484f52b.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 110
  },   
  {
    title: "CASA ENTERA", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Monocromatic house with free parking",
    image:"https://a0.muscache.com/im/pictures/f539b3dd-2210-49a8-9b00-ca134975379f.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "TOSHIMA",
    pais: "Tokio",
    description: "Garden full of sakuras house",
    image:"https://a0.muscache.com/im/pictures/57587161/587b1ae7_original.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 145
  },  
  {
    title: "CASA ENTERA", 
    ciudad: "KUMIO",
    pais: "Tokio",
    description: "Quiet and near downtown",
    image:"https://a0.muscache.com/im/pictures/1a8deeab-c771-4f74-b06e-3d8b6fbb37a5.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "CASA ENTERA", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Small house in Paris Center",
    image:"https://a0.muscache.com/im/pictures/6480365/4d89fd9c_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  }, 
  {
    title: "HABITACIÓN PRIVADA", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Cozy room in Paris Center",
    image:"https://a0.muscache.com/im/pictures/0f00efba-b376-4d24-ab1e-797746135dc0.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 210
  }, 
  {
    title: "LOFT ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Little house in Paris",
    image:"https://a0.muscache.com/im/pictures/174db9b0-52f1-4611-a49e-50c160b80534.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 230
  }, 
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Apartment in Rue des",
    image:"https://a0.muscache.com/im/pictures/43609328/d17d1407_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 140
  }, 
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Amazing house high",
    image:"https://a0.muscache.com/im/pictures/58727027/d90e9d2c_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 130
  }, 
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "A paris opera loft",
    image:"https://a0.muscache.com/im/pictures/67537156/b7f999b7_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 440
  }, 
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "We will allways have Paris",
    image:"https://a0.muscache.com/im/pictures/2641611b-dada-49e2-a768-037d4025c052.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },
  {
    title: "DEPARTAMENTO ENTERO", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Studio in the heart of Paris",
    image:"https://a0.muscache.com/im/pictures/9395166/6f8df0c2_original.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 123
  },
];



const experienciasSeed = [
  {
    title: "EXCURSIÓN GUIADA", 
    ciudad: "KATSUSHIKA",
    pais: "Tokio",
    description: "Scenic Tokio scape night",
    image:"https://a0.muscache.com/im/pictures/13d1cec3-1890-4384-94b2-d62b83ed31bf.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },
  {
    title: "SESIÓN FOTOGRÁFICA", 
    ciudad: "KATSUSHIKA",
    pais: "Tokio",
    description: "Modelo por un día en DTLA",
    image:"https://a0.muscache.com/im/pictures/019e9d16-873a-4531-b69d-0f216e328c0a.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 120
  },
  {
    title: "PASEO EN BARCO", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Whale Watching",
    image:"https://a0.muscache.com/im/pictures/f5ef2481-eaca-44f3-a6ba-43d3cde904d4.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "SESIÓN FOTOGRÁFICA", 
    ciudad: "Takemasi",
    pais: "Tokio",
    description: "Take your instagrammable photos in Tokio",
    image:"https://a0.muscache.com/im/pictures/dc049c5e-1500-4fde-bb96-c07048f5c33f.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 131
  }, 
  {
    title: "EXCURSIÓN GUIADA", 
    ciudad: "SHIBUYA-KU",
    pais: "Tokio",
    description: "Tokio cinema sign walk",
    image:"https://a0.muscache.com/im/pictures/6d736a1a-c92e-4f13-b9c5-fbd0a0d16ccd.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 110
  },   
  {
    title: "CONCIERTO ÍNTIMO", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Live jazz",
    image:"https://a0.muscache.com/im/pictures/24254b54-f70d-4eb2-9bdf-7f3b7631931f.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "EXCURSIÓN GUIADA", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Hiking Tour",
    image:"https://a0.muscache.com/im/pictures/d42ef266-f2f3-417f-b533-d42f1b3fcedd.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "CLASES DE ARTE", 
    ciudad: "MINATO",
    pais: "Tokio",
    description: "Joyful experience!",
    image:"https://a0.muscache.com/im/pictures/41d2e70f-12b1-4b05-85a6-13c9af963a49.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "TALLER", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Descubra la historia del tabaco y ron",
    image:"https://a0.muscache.com/im/pictures/751b2726-d656-4f38-8778-61a6120cde9b.jpg?aki_policy=large",
    superhost: 0,
    valoraciones: 14
  },  
  {
    title: "DE BAR EN BAR", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Booze i up the parisian way",
    image:"https://a0.muscache.com/im/pictures/14fadbc7-0fb5-40f1-a5c9-7bf24cb9f210.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 24
  },  
  {
    title: "SESIÓN FOTOGRÁFICA", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Best casual pictures",
    image:"https://a0.muscache.com/im/pictures/e32b6720-728b-4353-8f70-64056f0faba3.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 55
  },  
  {
    title: "PASEO CULTURAL", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Vive como una Parisina",
    image:"https://a0.muscache.com/im/pictures/f57d1cd2-5e2f-4ee4-bb61-ce247de50f6b.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 22
  },  
  {
    title: "TALLER", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Atelier sac en cuir",
    image:"https://a0.muscache.com/im/pictures/0dba6700-2147-4619-84eb-6053c21fa146.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 35
  },  
  {
    title: "RUTA HISTÓRICA", 
    ciudad: "Paris",
    pais: "Francia",
    description: "Paris' Best Kept Secrets Tour",
    image:"https://a0.muscache.com/im/pictures/571e0e7b-6867-4c44-bd91-776a5d698fae.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 30
  },  
  {
    title: "SESIÓN FOTOGRÁFICA", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Photographer",
    image:"https://a0.muscache.com/im/pictures/538a4f23-678c-43a5-a2fa-ccde057a17bb.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 240
  },  
  {
    title: "PASEO CULTURAL", 
    ciudad: "PARIS",
    pais: "Francia",
    description: "Paseo en mi barrio",
    image:"https://a0.muscache.com/im/pictures/3a5e23b0-9551-476f-9bea-d989b2def61a.jpg?aki_policy=large",
    superhost: 1,
    valoraciones: 20
  },  
  
];

db.Alojamiento
  .remove({}) 
  .then(() => db.Estancia.remove({}))
  .then(() => db.Experiencia.remove({}))
  .then(() => db.Alojamiento.collection.insertMany(alojamientoSeed))
  .then(() => db.Estancia.collection.insertMany(estanciasSeed))
  .then(() => db.Experiencia.collection.insertMany(experienciasSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Estancia
//   .remove({}) 
//   .then(() => db.Estancia.collection.insertMany(estanciasSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
