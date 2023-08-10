import imageMecanica from ".././assets/mecanicaPexels.jpg";
import imagePintura from ".././assets/pinturaPexels.jpg";
import imageElectrico from ".././assets/electricoPexels.jpg";
import imageTapiceria from ".././assets/tapiceriaPexels.jpg";
const serviciosMecanica = [
  {
    id: 1,
    image: imageMecanica,
    nombre: "Mecanica",
    servicios: [
      "Diagnostico por scanner",
      "Limpieza de inyectores",
      "Afinacion a motores",
      "Correcion y prevencion de suspension",
      "Correcion y prevencion de frenos",
      "Embragues",
      "Ajuste de motor",
      "Auxilios viales",
      "Servicios en general",
      "Entrega a recepcion o a domicilio",
    ],
    recomendado: true,
  },
  {
    id: 2,
    image: imagePintura,
    nombre: "Pintura",
    servicios: [
      "Presupuesto gratis",
      "Servicio de pintado por pieza o por unidad completa",
      "Pulido y encerado a faros, rines, cromos,cristales",
      "Lavado de vestiduras, alfombras, cielos",
      "Pintado de interiores",
      "Pintado a partes plasticas",
      "Pintado a contenedores",
      "Pintado a tanques con pintura epopsica",
      "Igualamos cualquier color",
    ],
    recomendado: true,
  },
  {
    id: 3,
    image: imageElectrico,
    nombre: "Electrico",
    servicios: [
      "Reparacion a alternadores",
      "Reparacion de marchas",
      "Reparacion de quemacocos",
      "Reparacion de cables en general",
      "Cambio de focos",
      "Cambio de terminales",
      "Cambio de soquets",
      "Cambio de plafones",
      "Carga de baterias",
    ],
    recomendado: true,
  },
  {
    id: 4,
    image: imageTapiceria,
    nombre: "Tapiceria",
    servicios: [
      "Cambio de alfombras",
      "Tapizado a vestiduras en piel, tactopiel o tela",
      "Tapizado a asientos con piel, tactopiel o tela",
      "Tapizado a toldos",
      "Tapizado a sombreras",
      "Tapizado a tableros",
      "Tapizado a sillones",
    ],
    recomendado: true,
  },
];

export default serviciosMecanica;
