/* =====================================================================
   ACTIVIDAD: EL ARTE ROMANO
   ---------------------------------------------------------------------
   Este archivo contiene TODO el contenido de la actividad.
   Puedes editarlo con cualquier editor de texto (o desde la web de GitHub).

   - "obras": las 13 obras del listado PAU. Con ellas la app crea sola
     las preguntas con imágenes (¿qué obra es?, ¿de qué etapa?, etc.).
   - "preguntas": preguntas de texto. Para añadir una, copia un bloque
     { ... }, pégalo debajo y cambia el texto. Fíjate en las comas.

   Temas posibles de una pregunta: "estilo", "etapas", "contexto".
   "esquema" (opcional) muestra un dibujo al corregir:
   "templo", "teatro", "coliseo", "domus", "basilica", "ciudad" o "estilos".
   ===================================================================== */

window.ACTIVIDADES = window.ACTIVIDADES || {};

window.ACTIVIDADES["arte-romano"] = {
  titulo: "El arte romano",
  subtitulo: "Historia del Arte · 2.º Bachillerato · PAU",
  carpetaImagenes: "img/romano/",
  portada: "coliseo",

  descModos: {
    etapas: "Etruscos, República, Imperio, paleocristiano",
    estilo: "Arcos, bóvedas, retrato, relieve…",
    contexto: "Roma, romanización, propaganda…"
  },

  periodos: [
    "Época de Augusto",
    "Dinastía Flavia",
    "Trajano y Adriano",
    "Época de Marco Aurelio",
    "Bajo Imperio"
  ],
  periodosBasicos: [
    "Época de Augusto",
    "Dinastía Flavia",
    "Trajano y Adriano",
    "Época de Marco Aurelio",
    "Bajo Imperio"
  ],

  autoresExtra: ["Apolodoro de Damasco", "Vitruvio", "Agripa"],

  esquemas: {
    templo:   { img: "img/esquemas-romano/templo.jpg",   pie: "Templo griego y templo romano en planta." },
    teatro:   { img: "img/esquemas-romano/teatro.jpg",   pie: "Teatro y anfiteatro romanos en planta." },
    coliseo:  { img: "img/esquemas-romano/coliseo.jpg",  pie: "La fachada del Coliseo: superposición de órdenes." },
    domus:    { img: "img/esquemas-romano/domus.jpg",    pie: "La domus, casa unifamiliar romana." },
    basilica: { img: "img/esquemas-romano/basilica.jpg", pie: "Basílica romana y basílica paleocristiana." },
    ciudad:   { img: "img/esquemas-romano/ciudad.jpg",   pie: "Esquema de la ciudad romana de nueva planta." },
    estilos:  { img: "img/esquemas-romano/estilos.jpg",  pie: "Los cuatro estilos de la pintura pompeyana." }
  },

  obras: [
    {
      id: "maison-carree", nombre: "Maison Carrée de Nîmes", tipo: "arquitectura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 16 a.C. (fecha discutida)", periodo: "Época de Augusto", lugar: "Nîmes (Francia)",
      rasgo: "Templo sobre podio, hexástilo y pseudoperíptero, de orden corintio",
      clave: "El templo romano «de manual»: podio, una sola fachada y columnas adosadas.",
      img: "maison-carree.jpg",
      foto: { autor: "Krzysztof Golik", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Maison_Carree_in_Nimes_(16).jpg" }
    },
    {
      id: "panteon", nombre: "Panteón de Roma", tipo: "arquitectura",
      autor: "Arquitecto no conocido con seguridad (encargo de Adriano)", autorCorto: null,
      fecha: "h. 118-125 d.C.", periodo: "Trajano y Adriano", lugar: "Campo de Marte, Roma",
      rasgo: "Rotonda cubierta por una cúpula de hormigón con casetones y óculo",
      clave: "Un cielo de hormigón: la mayor cúpula de la Antigüedad.",
      img: "panteon.jpg",
      foto: { autor: "Julian Lupyan", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Fa%C3%A7ade_of_the_Pantheon,_Rome,_Italy.jpg" }
    },
    {
      id: "teatro-merida", nombre: "Teatro de Mérida", tipo: "arquitectura",
      autor: "Desconocido (promovido por Agripa)", autorCorto: null,
      fecha: "h. 16-15 a.C.", periodo: "Época de Augusto", lugar: "Mérida (Badajoz)",
      rasgo: "Cávea y orchestra semicirculares, con scaenae frons de dos pisos de columnas",
      clave: "El teatro romano: semicircular y cerrado por un monumental frente escénico.",
      img: "teatro-merida.jpg",
      foto: { autor: "Lmbuga (Luis Miguel Bugallo Sánchez)", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Teatro_romano_de_M%C3%A9rida._Espa%C3%B1a.jpg" }
    },
    {
      id: "coliseo", nombre: "Coliseo de Roma", tipo: "arquitectura",
      autor: "Desconocido (encargo de Vespasiano y Tito)", autorCorto: null,
      fecha: "70-80 d.C.", periodo: "Dinastía Flavia", lugar: "Junto al Foro Romano, Roma",
      rasgo: "Planta elíptica y fachada de cuatro pisos con superposición de órdenes",
      clave: "Arcos que sostienen, columnas que decoran: el gran escenario del «pan y circo».",
      img: "coliseo.jpg",
      foto: { autor: "Nicholas Hartmann", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Rome_Colosseum_exterior_2.jpg" }
    },
    {
      id: "basilica-majencio", nombre: "Basílica de Majencio y Constantino", tipo: "arquitectura",
      autor: "Desconocido (encargo de Majencio y Constantino)", autorCorto: null,
      fecha: "308-312 d.C.", periodo: "Bajo Imperio", lugar: "Foro Romano, Roma",
      rasgo: "Tres naves con enormes bóvedas de cañón de hormigón y casetones",
      clave: "El hormigón al servicio de un espacio gigantesco: el modelo de la iglesia cristiana.",
      img: "basilica-majencio.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Basilica_Maxentius_Constantine_Rome.jpg" }
    },
    {
      id: "puente-alcantara", nombre: "Puente de Alcántara", tipo: "arquitectura",
      autor: "Cayo Julio Lácer (según una inscripción)", autorCorto: "Cayo Julio Lácer",
      fecha: "103-104 d.C.", periodo: "Trajano y Adriano", lugar: "Alcántara (Cáceres)",
      rasgo: "Seis arcos de medio punto de sillares de granito, con un arco honorífico central",
      clave: "Ingeniería y propaganda: el arco de medio punto salvando el Tajo.",
      img: "puente-alcantara.jpg",
      foto: { autor: "Alonso de Mendoza", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:El_puente_de_Alc%C3%A1ntara,_C%C3%A1ceres.jpg" }
    },
    {
      id: "acueducto-segovia", nombre: "Acueducto de Segovia", tipo: "arquitectura",
      autor: "Desconocido", autorCorto: null,
      fecha: "Finales s. I - inicios s. II d.C.", periodo: "Trajano y Adriano", lugar: "Segovia",
      rasgo: "Arcos de sillares de granito sin argamasa, en dos pisos en su parte más alta",
      clave: "Granito sin argamasa: la ingeniería romana al servicio de la ciudad.",
      img: "acueducto-segovia.jpg",
      foto: { autor: "Bernard Gagnon", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Aqueduct_of_Segovia_08.jpg" }
    },
    {
      id: "arco-tito", nombre: "Arco de Tito", tipo: "arquitectura",
      autor: "Desconocido (encargo de Domiciano)", autorCorto: null,
      fecha: "h. 81 d.C.", periodo: "Dinastía Flavia", lugar: "Vía Sacra, Roma",
      rasgo: "Un solo vano, columnas adosadas de capitel compuesto y ático con inscripción",
      clave: "Un arco que convierte la victoria militar en gloria eterna.",
      img: "arco-tito.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Arch_Titus,_Forum_Romanum,_Rome,_Italy.jpg" }
    },
    {
      id: "columna-trajano", nombre: "Columna de Trajano", tipo: "arquitectura",
      autor: "Desconocido", autorCorto: null,
      fecha: "113 d.C.", periodo: "Trajano y Adriano", lugar: "Foro de Trajano, Roma",
      rasgo: "Columna historiada con un friso helicoidal que da 23 vueltas al fuste",
      clave: "Un cómic de piedra que enrolla las victorias de Trajano.",
      img: "columna-trajano.jpg",
      foto: { autor: "Carlos Teixidor Cadenas", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Columna_de_Trajano_(Colonna_Traiana)._Roma,_Italia.jpg" }
    },
    {
      id: "augusto-prima-porta", nombre: "Augusto de Prima Porta", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "Inicios s. I d.C.", periodo: "Época de Augusto", lugar: "Museos Vaticanos",
      rasgo: "Retrato toracato con contrapposto y gesto de arenga, idealizado al modo clásico",
      clave: "El emperador ideal: cuerpo de atleta griego al servicio de la propaganda.",
      img: "augusto-prima-porta.jpg",
      foto: { autor: "Till Niermann", licencia: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Statue-Augustus.jpg" }
    },
    {
      id: "marco-aurelio", nombre: "Estatua ecuestre de Marco Aurelio", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 176 d.C.", periodo: "Época de Marco Aurelio", lugar: "Museos Capitolinos, Roma",
      rasgo: "Bronce ecuestre: emperador sin armas con el brazo extendido y caballo en movimiento",
      clave: "La única gran estatua ecuestre romana que se ha conservado: el modelo del Renacimiento.",
      img: "marco-aurelio.jpg",
      foto: { autor: "Nicholas Hartmann", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Rome_Capitoline_Marcus_Aurelius_statue_original.jpg" }
    },
    {
      id: "relieve-arco-tito", nombre: "Relieve del Arco de Tito: el botín de Jerusalén", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 81 d.C.", periodo: "Dinastía Flavia", lugar: "Interior del Arco de Tito, Vía Sacra, Roma",
      rasgo: "Procesión en diagonal que combina altorrelieve y bajorrelieve para dar profundidad",
      clave: "El relieve histórico romano: un hecho real contado con movimiento y profundidad.",
      img: "relieve-arco-tito.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Arch_Titus,_relief_Jerusalem_treasure,_Forum_Romanum,_Rome,_Italy.jpg" }
    },
    {
      id: "relieve-columna-trajano", nombre: "Relieve de la Columna de Trajano", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "113 d.C.", periodo: "Trajano y Adriano", lugar: "Fuste de la columna, Foro de Trajano, Roma",
      rasgo: "Narración continua en bajorrelieve poco profundo, con perspectiva a vista de pájaro",
      clave: "La guerra contada como un documental: el mejor ejemplo de relieve histórico.",
      img: "relieve-columna-trajano.jpg",
      foto: { autor: "Larry from Charlottetown", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Detail_from_Trajan%27s_Column_(6065462098).jpg" }
    }
  ],

  preguntas: [

    /* ============ CONTEXTO HISTÓRICO ============ */
    {
      tema: "contexto", nivel: "basico",
      texto: "¿En qué año se fundó Roma, según la tradición?",
      correcta: "753 a.C.",
      incorrectas: ["509 a.C.", "31 a.C.", "476 d.C."],
      explicacion: "Según la leyenda de Rómulo y Remo, sabinos y latinos fundaron Roma en el 753 a.C."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿En qué orden se sucedieron las formas de gobierno de Roma?",
      correcta: "Monarquía, República e Imperio",
      incorrectas: ["República, Monarquía e Imperio", "Imperio, República y Monarquía", "Monarquía, Imperio y República"],
      explicacion: "Monarquía (753-509 a.C.), República (509-31 a.C.) e Imperio (31 a.C.-476 d.C.)."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿A qué ciudad venció Roma en las Guerras Púnicas?",
      correcta: "Cartago",
      incorrectas: ["Atenas", "Alejandría", "Jerusalén"],
      explicacion: "Durante la República, Roma venció a Cartago y se hizo con el dominio del Mediterráneo."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿En qué año terminó el Imperio romano de Occidente?",
      correcta: "476 d.C.",
      incorrectas: ["313 d.C.", "380 d.C.", "79 d.C."],
      explicacion: "En el 476 Odoacro, rey de los hérulos, depuso a Rómulo Augústulo."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "Frente a la belleza ideal de los griegos, ¿qué buscaban sobre todo los romanos?",
      correcta: "La utilidad y la eficacia",
      incorrectas: ["La pureza espiritual", "La sencillez y la pobreza", "La imitación exacta de Egipto"],
      explicacion: "El arte romano sirve para organizar un imperio enorme y para mostrar el poder de Roma."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué era el foro de una ciudad romana?",
      correcta: "La plaza pública con los edificios más importantes",
      incorrectas: ["El barrio de las casas de los ricos", "El edificio de las carreras de cuadrigas", "La muralla que rodeaba la ciudad"],
      explicacion: "El foro reunía templos, basílica y curia. Es el equivalente al ágora griega.",
      esquema: "ciudad"
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué dos pueblos influyeron más en el arte romano?",
      correcta: "Los etruscos y los griegos",
      incorrectas: ["Los egipcios y los persas", "Los íberos y los celtas", "Los fenicios y los cartagineses"],
      explicacion: "Roma recibió la influencia cultural de los etruscos y de los griegos."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Para qué se levantaban los arcos de triunfo?",
      correcta: "Para recordar las victorias del Imperio",
      incorrectas: ["Para llevar agua a las ciudades", "Para sostener los puentes", "Para dar culto a los dioses de la casa"],
      explicacion: "Arcos y columnas conmemorativas son propaganda: recuerdan victorias y glorifican al emperador."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Para qué servían los acueductos?",
      correcta: "Para llevar agua a las ciudades",
      incorrectas: ["Para defender las fronteras", "Para celebrar carreras", "Para cruzar los ríos a pie"],
      explicacion: "Traían el agua desde ríos y fuentes de montaña para fuentes, termas y casas."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué volcán sepultó Pompeya y Herculano en el 79 d.C.?",
      correcta: "El Vesubio",
      incorrectas: ["El Etna", "El Teide", "El Estrómboli"],
      explicacion: "Gracias a la erupción se ha conservado casi toda la pintura romana que conocemos."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué significa la política de «pan y circo»?",
      correcta: "Ganar el favor del pueblo con espectáculos gratuitos",
      incorrectas: ["Cobrar impuestos por entrar en el circo", "Prohibir los espectáculos durante las guerras", "Repartir tierras entre los soldados"],
      explicacion: "El emperador ofrecía espectáculos gratuitos, como los del Coliseo, y ganaba el apoyo del pueblo."
    },

    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué fue la romanización a través del urbanismo?",
      correcta: "Hacer que las ciudades de todo el Imperio se parecieran",
      incorrectas: ["Trasladar a toda la población a Roma", "Destruir las ciudades conquistadas", "Prohibir construir fuera de Italia"],
      explicacion: "El urbanismo y la arquitectura fueron los instrumentos más importantes de la romanización."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿De dónde copiaron los romanos el plano en cuadrícula de sus ciudades?",
      correcta: "De los campamentos militares",
      incorrectas: ["De las tumbas etruscas", "De los palacios persas", "De las acrópolis griegas"],
      explicacion: "La ciudad de nueva planta usa un plano ortogonal copiado de los campamentos militares.",
      esquema: "ciudad"
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Cómo se llamaban las dos calles principales de la ciudad romana?",
      correcta: "Cardo y decumanus",
      incorrectas: ["Atrio y peristilo", "Cávea y orchestra", "Pronaos y cella"],
      explicacion: "El cardo va de norte a sur y el decumanus de este a oeste. En su cruce está el foro.",
      esquema: "ciudad"
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Cuál era la principal calzada de Hispania?",
      correcta: "La Vía Augusta",
      incorrectas: ["La Vía Sacra", "La Vía Apia", "La Vía Trajana"],
      explicacion: "La Vía Augusta unía Roma, Tarragona y Cádiz."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Quiénes fueron los tres últimos reyes de Roma?",
      correcta: "Reyes etruscos",
      incorrectas: ["Reyes griegos", "Reyes cartagineses", "Reyes sabinos elegidos por el Senado"],
      explicacion: "La Monarquía duró del 753 al 509 a.C. y sus tres últimos reyes fueron etruscos."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué estableció el Edicto de Milán del 313?",
      correcta: "La libertad religiosa para los cristianos",
      incorrectas: ["El cristianismo como religión oficial", "La división del Imperio en provincias", "El fin de la República"],
      explicacion: "Lo promulgó Constantino. La oficialidad del cristianismo llegó con el Edicto de Tesalónica."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué función tenía la basílica romana?",
      correcta: "Justicia, comercio y actos públicos",
      incorrectas: ["Culto a los dioses de la familia", "Carreras y pruebas atléticas", "Baños públicos y ejercicio"],
      explicacion: "Era un edificio civil. Más tarde sirvió de modelo a la iglesia cristiana.",
      esquema: "basilica"
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Por qué las familias nobles romanas guardaban máscaras de cera?",
      correcta: "Para recordar a sus antepasados difuntos",
      incorrectas: ["Para usarlas en el teatro", "Para protegerse en las batallas", "Para ofrecerlas a los dioses etruscos"],
      explicacion: "Esa costumbre explica el realismo del retrato: se quería recordar a la persona concreta."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿A quién estaba dedicada la Maison Carrée, según la inscripción reconstruida?",
      correcta: "A Cayo y Lucio César, nietos de Augusto",
      incorrectas: ["A Júpiter, Juno y Minerva", "A todos los dioses", "A Trajano tras la conquista de la Dacia"],
      explicacion: "Era un templo de culto imperial y un símbolo del poder de Roma en una ciudad de provincias."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué imagen de sí mismo transmite Augusto en la estatua de Prima Porta?",
      correcta: "Líder militar, de origen divino y portador de la paz",
      incorrectas: ["Filósofo retirado de la vida pública", "Sacerdote de los dioses etruscos", "Ciudadano corriente, con sus arrugas y defectos"],
      explicacion: "Es propaganda política: general que arenga a las tropas, descendiente de Venus y garante de la Pax Augusta."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué conquista conmemora la Columna de Trajano?",
      correcta: "La de la Dacia, la actual Rumanía",
      incorrectas: ["La de Jerusalén", "La de Cartago", "La de Britania"],
      explicacion: "Narra las guerras de la Dacia (101-106 d.C.) y también sirvió de tumba al emperador."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué victoria recuerda sobre todo el Arco de Tito?",
      correcta: "La toma de Jerusalén en el 70 d.C.",
      incorrectas: ["La victoria sobre Cartago", "La conquista de la Dacia", "La batalla del Puente Milvio"],
      explicacion: "Conmemora las victorias de Tito y lo diviniza: propaganda en piedra."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "Además de comunicar territorios, ¿qué otra función tenía el Puente de Alcántara?",
      correcta: "Propaganda: la técnica romana vence a la naturaleza",
      incorrectas: ["Llevar agua a Mérida", "Servir de tumba a Trajano", "Acoger juegos y carreras"],
      explicacion: "Unía calzadas para el ejército, el comercio y las minas, y exhibía el poder imperial."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "En teatros y anfiteatros, ¿qué reflejaba la distribución de los asientos?",
      correcta: "La jerarquía social",
      incorrectas: ["El orden de llegada", "La edad de los espectadores", "El barrio de procedencia"],
      explicacion: "Los asientos se repartían según la clase social."
    },

    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué edicto hizo del cristianismo la religión oficial del Imperio en el 380?",
      correcta: "El Edicto de Tesalónica, de Teodosio",
      incorrectas: ["El Edicto de Milán, de Constantino", "El Edicto de Roma, de Trajano", "El Edicto de Tesalónica, de Constantino"],
      explicacion: "Teodosio lo promulgó el 27 de febrero del 380."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Quién depuso a Rómulo Augústulo en el 476?",
      correcta: "Odoacro, rey de los hérulos",
      incorrectas: ["Teodosio, emperador de Oriente", "Majencio, rival de Constantino", "Atila, rey de los hunos"],
      explicacion: "Ese hecho marca el fin del Imperio romano de Occidente."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Cuál fue el foro más complejo y grandioso de Roma?",
      correcta: "El Foro de Trajano",
      incorrectas: ["El Foro de Augusto", "El Foro de Vespasiano", "El Foro de Constantino"],
      explicacion: "Se construyó en Roma entre el 107 y el 112 d.C."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Por qué no se fundió la estatua ecuestre de Marco Aurelio en la Edad Media?",
      correcta: "Se creyó que representaba a Constantino",
      incorrectas: ["Estuvo enterrada hasta el Renacimiento", "Se creyó que representaba a san Pedro", "Estaba hecha de un mármol sin valor"],
      explicacion: "Pasó por una imagen del emperador cristiano. Hoy el original está en los Museos Capitolinos."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Quién colocó la estatua de Marco Aurelio en la plaza del Capitolio en 1538?",
      correcta: "Miguel Ángel",
      incorrectas: ["Donatello", "Brunelleschi", "Bernini"],
      explicacion: "Hoy en la plaza hay una copia; el original se conserva dentro del museo."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Por qué se ha conservado tan bien el Panteón?",
      correcta: "Porque desde el s. VII es una iglesia",
      incorrectas: ["Porque quedó enterrado por un volcán", "Porque fue la tumba de Adriano", "Porque se reconstruyó en el s. XIX"],
      explicacion: "Es la iglesia de Santa María de los Mártires desde el siglo VII."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿De quién es el nombre que aparece en la inscripción de la fachada del Panteón?",
      correcta: "De Agripa",
      incorrectas: ["De Adriano", "De Augusto", "De Trajano"],
      explicacion: "Adriano lo reconstruyó tras un incendio y mantuvo la inscripción del templo anterior, el de Agripa."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué recuerda el Cupido sobre un delfín del Augusto de Prima Porta?",
      correcta: "Que su familia descendía de Venus",
      incorrectas: ["Su victoria naval en Accio", "Que había nacido junto al mar", "Su dominio sobre Egipto"],
      explicacion: "La familia de Augusto se decía descendiente de Venus a través de Eneas."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué escena principal aparece en la coraza del Augusto de Prima Porta?",
      correcta: "La devolución de los estandartes por los partos",
      incorrectas: ["La rendición de los dacios", "El triunfo sobre Jerusalén", "La fundación de Roma"],
      explicacion: "Los partos devolvieron los estandartes romanos en el 20 a.C."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Dónde se halló en 1863 el Augusto de Prima Porta?",
      correcta: "En la villa de Livia, esposa de Augusto",
      incorrectas: ["En el Foro de Augusto", "En la Villa Adriana de Tívoli", "En el Mausoleo de Augusto"],
      explicacion: "De ahí su nombre: la villa de Livia estaba en Prima Porta."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿De qué provincia romana era capital Mérida (Augusta Emerita)?",
      correcta: "Lusitania",
      incorrectas: ["Bética", "Tarraconense", "Dacia"],
      explicacion: "El teatro mostraba el poder de Roma en la capital de la provincia de Lusitania."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Quién levantó el Arco de Tito?",
      correcta: "Domiciano, hermano de Tito",
      incorrectas: ["El propio Tito, en vida", "Vespasiano, padre de Tito", "Trajano, sucesor de Tito"],
      explicacion: "Domiciano lo levantó tras la muerte de su hermano para conmemorar sus victorias."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿En qué batalla venció Constantino a Majencio en el 312?",
      correcta: "En la del Puente Milvio",
      incorrectas: ["En la de Accio", "En la de Zama", "En la de Adrianópolis"],
      explicacion: "Tras vencerle, Constantino terminó y modificó la basílica que había empezado Majencio."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Hasta cuándo funcionó el Acueducto de Segovia?",
      correcta: "Hasta 1973",
      incorrectas: ["Hasta el 476", "Hasta 1492", "Hasta 1812"],
      explicacion: "Traía agua desde el manantial de la Fuenfría, a unos 17 km."
    },

    /* ============ RASGOS DE ESTILO ============ */
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué elementos definen la gran novedad de la arquitectura romana?",
      correcta: "El arco, la bóveda y el hormigón",
      incorrectas: ["La columna y el dintel de madera", "El arco apuntado y la vidriera", "El adobe y los techos planos"],
      explicacion: "Combinarlos permite cubrir espacios enormes."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es el opus caementicium?",
      correcta: "El «hormigón» romano",
      incorrectas: ["Un tipo de mosaico", "Una clase de mármol", "Un estilo de pintura"],
      explicacion: "Mezcla de piedras pequeñas, grava, arena, cal y agua, barata y rápida de construir."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué planta tiene un anfiteatro como el Coliseo?",
      correcta: "Elíptica",
      incorrectas: ["Semicircular", "Cuadrada", "De cruz latina"],
      explicacion: "Es como dos teatros unidos.",
      esquema: "teatro"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué planta tiene el teatro romano?",
      correcta: "Semicircular",
      incorrectas: ["Elíptica", "Rectangular", "Circular completa"],
      explicacion: "Tanto la cávea como la orchestra son semicirculares.",
      esquema: "teatro"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué eran las termas?",
      correcta: "Baños públicos",
      incorrectas: ["Tumbas familiares", "Mercados cubiertos", "Cuarteles militares"],
      explicacion: "Tenían piscinas de agua caliente, tibia y fría, y eran también lugar de reunión y ejercicio."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Para qué servía el circo romano?",
      correcta: "Para carreras de cuadrigas",
      incorrectas: ["Para representar obras de teatro", "Para juzgar a los ciudadanos", "Para dar culto al emperador"],
      explicacion: "Era una pista alargada para carreras y pruebas atléticas, como el Circo Máximo de Roma."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Cuáles son los dos géneros propios de la escultura romana?",
      correcta: "El retrato y el relieve histórico",
      incorrectas: ["El kouros y la kore", "El icono y el retablo", "El tímpano y la metopa"],
      explicacion: "Roma admira a Grecia y la copia, pero crea estos dos géneros."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué rasgo predomina en el retrato romano?",
      correcta: "El realismo",
      incorrectas: ["La abstracción", "La sonrisa arcaica", "El tamaño según la importancia"],
      explicacion: "Los romanos querían recordar a la persona concreta, con sus arrugas y defectos."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Por dónde entra la luz en el interior del Panteón?",
      correcta: "Por el óculo de la cúpula",
      incorrectas: ["Por grandes vidrieras", "Por ventanas en los muros", "Por una galería de arcos"],
      explicacion: "El óculo, de 9 m, es la única fuente de luz."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Cómo se llaman las piezas pequeñas de un mosaico?",
      correcta: "Teselas",
      incorrectas: ["Sillares", "Casetones", "Dovelas"],
      explicacion: "Son piezas de pasta de vidrio, esmalte o mármol."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué era la domus?",
      correcta: "La casa unifamiliar de las familias ricas",
      incorrectas: ["Un bloque de pisos de alquiler", "El palacio del Senado", "Un edificio para las carreras"],
      explicacion: "Se organizaba alrededor del atrio y del peristilo.",
      esquema: "domus"
    },

    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es el orden compuesto?",
      correcta: "Un orden romano con volutas jónicas y acantos corintios",
      incorrectas: ["Un orden etrusco con columna lisa", "Un orden griego sin basa", "Un orden romano con triglifos y metopas"],
      explicacion: "Es una creación romana que mezcla las volutas del jónico y las hojas de acanto del corintio."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo es el orden toscano?",
      correcta: "Columna lisa y friso sin decorar",
      incorrectas: ["Fuste acanalado y capitel de volutas", "Capitel de hojas de acanto", "Columna en forma de figura femenina"],
      explicacion: "Es una invención etrusca que Roma adoptó."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es la superposición de órdenes?",
      correcta: "Colocar los órdenes en pisos, del más robusto al más ligero",
      incorrectas: ["Mezclar todos los órdenes en una misma columna", "Sustituir las columnas por estatuas", "Colocar los órdenes del más ligero al más robusto"],
      explicacion: "Se usa en edificios de varios pisos. El gran ejemplo es el Coliseo.",
      esquema: "coliseo"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué aporta el modelo etrusco al templo romano?",
      correcta: "El podio y una sola fachada principal",
      incorrectas: ["La planta rectangular y la cella", "Las columnas de hojas de acanto", "La cúpula con óculo"],
      explicacion: "Del griego toma la planta rectangular, la división en pronaos y cella y las columnas.",
      esquema: "templo"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué significa que un templo sea pseudoperíptero?",
      correcta: "Tiene columnas adosadas al muro en laterales y parte trasera",
      incorrectas: ["Tiene una doble fila de columnas alrededor", "No tiene ninguna columna", "Tiene planta circular y cúpula"],
      explicacion: "La Maison Carrée es el ejemplo: pórtico profundo delante y columnas adosadas a la cella.",
      esquema: "templo"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es la scaenae frons?",
      correcta: "El frente escénico monumental del teatro",
      incorrectas: ["El graderío del teatro", "El túnel bajo la arena", "El toldo que daba sombra"],
      explicacion: "En Mérida es un gran frente de dos pisos de columnas corintias, con estatuas.",
      esquema: "teatro"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "Gracias a las bóvedas, ¿qué podían hacer los romanos con sus teatros?",
      correcta: "Construirlos en terreno llano",
      incorrectas: ["Cubrirlos con una cúpula", "Hacerlos de planta elíptica", "Prescindir del graderío"],
      explicacion: "Podían construirse en llano, aunque muchos siguieron aprovechando las laderas, como el de Sagunto."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "En las termas, ¿qué era el caldarium?",
      correcta: "La sala de agua caliente",
      incorrectas: ["La sala de agua fría", "La sala de agua tibia", "El patio para hacer ejercicio"],
      explicacion: "Caldarium: caliente. Tepidarium: tibia. Frigidarium: fría."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué eran las naumaquias?",
      correcta: "Batallas navales como espectáculo",
      incorrectas: ["Luchas con animales", "Carreras de cuadrigas", "Representaciones de comedias"],
      explicacion: "Las luchas con animales se llamaban venationes."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo era la basílica romana?",
      correcta: "Rectangular, de tres naves y con ábside al fondo",
      incorrectas: ["Circular y cubierta con una cúpula", "Elíptica y con graderíos", "Cuadrada, con un patio central"],
      explicacion: "Será el modelo de la iglesia cristiana.",
      esquema: "basilica"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué tipo de columna conmemorativa lleva proas de barco en el fuste?",
      correcta: "La rostral",
      incorrectas: ["La historiada", "La toscana", "La adosada"],
      explicacion: "Recuerda victorias navales. La historiada lleva relieves con gestas militares."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Para qué sirven los casetones de una bóveda o cúpula?",
      correcta: "Para aligerar su peso",
      incorrectas: ["Para dejar entrar la luz", "Para recoger el agua de lluvia", "Para sujetar los andamios"],
      explicacion: "El Panteón y la Basílica de Majencio los emplean."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "En la domus, ¿qué era el impluvium?",
      correcta: "El estanque del atrio que recogía la lluvia",
      incorrectas: ["El patio con jardín y columnas", "El comedor de la casa", "La sala de los antepasados"],
      explicacion: "La domus se organizaba alrededor del atrio, con el impluvium, y del peristilo.",
      esquema: "domus"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo se representa a un emperador en un retrato toracato?",
      correcta: "Con coraza, como militar",
      incorrectas: ["Con toga, como magistrado", "A caballo", "Solo el busto"],
      explicacion: "Togado es con toga. El Augusto de Prima Porta es un toracato."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué modelo griego sigue el cuerpo del Augusto de Prima Porta?",
      correcta: "El Doríforo de Policleto",
      incorrectas: ["El Discóbolo de Mirón", "El Hermes de Praxíteles", "El Kouros de Anavysos"],
      explicacion: "Toma su contrapposto y sus proporciones: idealización clásica."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué caracteriza al relieve histórico romano?",
      correcta: "Narra hechos reales con realismo y fin propagandístico",
      incorrectas: ["Representa solo escenas mitológicas", "Evita mostrar personajes reconocibles", "Se limita a decoración vegetal"],
      explicacion: "Muestra guerras, triunfos y ceremonias, y exhibe la grandeza del Imperio."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo se sostienen los sillares del Acueducto de Segovia?",
      correcta: "Por su peso y el equilibrio de los arcos, sin argamasa",
      incorrectas: ["Con abundante argamasa de cal", "Con grapas de bronce visibles", "Con un núcleo de hormigón"],
      explicacion: "Son sillares de granito colocados sin argamasa."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Con qué técnica se pintaban las paredes romanas desde el s. I a.C.?",
      correcta: "Al fresco",
      incorrectas: ["Al óleo", "Con acuarela", "Con vidrio fundido"],
      explicacion: "También se conservan pinturas sobre madera, al temple y a la encáustica."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué técnica de mosaico usa teselas diminutas para parecer una pintura?",
      correcta: "Opus vermiculatum",
      incorrectas: ["Opus sectile", "Opus tessellatum", "Opus caementicium"],
      explicacion: "El opus sectile usa placas de mármol recortadas; el tessellatum, teselas regulares."
    },

    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cuántas columnas tiene la fachada de la Maison Carrée?",
      correcta: "Seis: es hexástila",
      incorrectas: ["Cuatro: es tetrástila", "Ocho: es octástila", "Diez: es decástila"],
      explicacion: "Es hexástila, pseudoperíptera y de orden corintio."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué relación hay entre la altura y el diámetro del Panteón?",
      correcta: "Son iguales, unos 43 m",
      incorrectas: ["La altura es el doble que el diámetro", "El diámetro es el doble que la altura", "Son iguales, unos 9 m"],
      explicacion: "Por eso dentro cabría una esfera perfecta."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué es el hipogeo del Coliseo?",
      correcta: "Los túneles bajo la arena",
      incorrectas: ["El toldo que cubría la cávea", "El piso superior de la fachada", "La tribuna del emperador"],
      explicacion: "Era para fieras y gladiadores, y lo añadió Domiciano."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Para qué servían las ménsulas del ático del Coliseo?",
      correcta: "Para sujetar el velarium, un gran toldo",
      incorrectas: ["Para sostener las estatuas de los emperadores", "Para recoger el agua de lluvia", "Para sujetar el telón del escenario"],
      explicacion: "El ático tiene pilastras y ménsulas para el velarium."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿De dónde viene el nombre de Coliseo?",
      correcta: "Del Coloso de Nerón que había al lado",
      incorrectas: ["De su enorme altura", "De un arquitecto llamado Coliseo", "De la colina sobre la que se levanta"],
      explicacion: "Su nombre antiguo es Anfiteatro Flavio, por la dinastía Flavia."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué parte se conserva de la Basílica de Majencio y Constantino?",
      correcta: "La nave norte, con tres bóvedas de cañón",
      incorrectas: ["La nave central, con bóvedas de arista", "El ábside y su media cúpula", "La cúpula central con óculo"],
      explicacion: "La nave central estaba cubierta con bóvedas de arista; aún se ve el arranque de sus arcos."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cómo son las dimensiones del friso de la Columna de Trajano?",
      correcta: "Unos 200 m en 23 vueltas al fuste",
      incorrectas: ["Unos 30 m en 3 vueltas al fuste", "Unos 100 m en 10 vueltas al fuste", "Unos 500 m en 50 vueltas al fuste"],
      explicacion: "Narra las guerras dacias con más de un centenar de escenas."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Por qué el relieve de la Columna de Trajano es poco profundo?",
      correcta: "Para no alterar la silueta de la columna",
      incorrectas: ["Porque el mármol era muy blando", "Porque iba a cubrirse con estuco", "Por falta de tiempo para tallarlo"],
      explicacion: "Es un bajorrelieve de narración continua, como un rollo de papiro."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué objeto destaca en el relieve del botín de Jerusalén del Arco de Tito?",
      correcta: "El candelabro de siete brazos",
      incorrectas: ["El águila imperial", "Los estandartes partos", "La cuadriga de Tito"],
      explicacion: "Los soldados llevan la menorá y las trompetas sagradas. La cuadriga está en el relieve de enfrente."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué representa la bóveda del vano del Arco de Tito?",
      correcta: "La apoteosis de Tito, llevado al cielo por un águila",
      incorrectas: ["La toma de Jerusalén", "Las guerras contra la Dacia", "El nacimiento de Rómulo y Remo"],
      explicacion: "El arco no solo conmemora el triunfo: también diviniza al emperador."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cómo se llama el canal por el que corre el agua en lo alto del acueducto?",
      correcta: "Specus",
      incorrectas: ["Impluvium", "Velarium", "Decumanus"],
      explicacion: "Tiene una ligera pendiente para que el agua baje sola."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cuántos arcos tiene el Puente de Alcántara y sobre cuántos pilares?",
      correcta: "Seis arcos sobre cinco pilares",
      incorrectas: ["Cinco arcos sobre seis pilares", "Tres arcos sobre dos pilares", "Ocho arcos sobre siete pilares"],
      explicacion: "Son arcos de medio punto de distinta altura, con tajamares en los pilares."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué gesto hace Marco Aurelio en su estatua ecuestre?",
      correcta: "Extiende el brazo, sin armas, en señal de saludo o clemencia",
      incorrectas: ["Blande una espada hacia el enemigo", "Sujeta un estandarte con las dos manos", "Lleva una corona de laurel en la mano"],
      explicacion: "Se le exalta como gobernante sabio y pacificador."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué obra pompeyana es una copia de una pintura griega en mosaico?",
      correcta: "La batalla de Isos, de la Casa del Fauno",
      incorrectas: ["Los misterios, de la Villa de los Misterios", "El Buen Pastor, de Santa Priscila", "El banquete, de la Tumba de los Leopardos"],
      explicacion: "Mide 5 × 2,70 m y destaca por sus escorzos, su movimiento y sus rostros expresivos."
    },

    /* ============ ETAPAS ============ */
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué arte es el antecedente directo del arte romano en Italia?",
      correcta: "El arte etrusco",
      incorrectas: ["El arte egipcio", "El arte bizantino", "El arte persa"],
      explicacion: "Los etruscos introdujeron en Europa el arco y la bóveda."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿En qué zona de la actual Italia vivían los etruscos?",
      correcta: "En la Toscana",
      incorrectas: ["En Sicilia", "En Lombardía", "En Calabria"],
      explicacion: "Su origen no se conoce con certeza; la tradición los hace venir de Asia Menor."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué dominaba todo el arte etrusco?",
      correcta: "La religión y los ritos funerarios",
      incorrectas: ["Las carreras y los espectáculos", "La propaganda del emperador", "El comercio con Cartago"],
      explicacion: "Por eso lo mejor conservado son las tumbas y sus pinturas."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Cuál fue la época de esplendor del arte romano?",
      correcta: "La imperial",
      incorrectas: ["La monárquica", "La republicana", "La etrusca"],
      explicacion: "Es la etapa de las grandes obras públicas, el retrato imperial y el relieve histórico."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Cómo son las formas del arte romano en el Bajo Imperio?",
      correcta: "Rígidas y solemnes",
      incorrectas: ["Dinámicas y sonrientes", "Idealizadas al modo griego", "Muy detallistas y naturales"],
      explicacion: "El retrato se vuelve esquemático, con ojos grandes, y anuncia el arte bizantino."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué edificio romano copió el cristianismo para sus iglesias?",
      correcta: "La basílica",
      incorrectas: ["El anfiteatro", "El circo", "Las termas"],
      explicacion: "Era amplia y nunca se había usado para otros cultos.",
      esquema: "basilica"
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué influencias tuvo más fuerza en el arte de la República?",
      correcta: "La griega y la etrusca",
      incorrectas: ["La bizantina y la persa", "La egipcia y la celta", "La cristiana y la islámica"],
      explicacion: "Un arte «propiamente romano» no aparece hasta el s. II a.C."
    },

    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cómo era el retrato de la época republicana?",
      correcta: "De un realismo muy marcado",
      incorrectas: ["Idealizado al modo clásico", "Esquemático y de ojos grandes", "Sin rasgos individuales"],
      explicacion: "Está influido por el retrato funerario etrusco y el realismo helenístico."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cómo cambia el retrato imperial en el Alto Imperio?",
      correcta: "Se idealiza al modo del clasicismo griego",
      incorrectas: ["Se vuelve rígido y esquemático", "Desaparece en favor del relieve", "Se limita a máscaras de cera"],
      explicacion: "Es un arte de propaganda. El Augusto de Prima Porta es el gran ejemplo."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué retrato tardío anuncia ya el arte bizantino?",
      correcta: "La cabeza colosal de Constantino",
      incorrectas: ["La Estatua Barberini", "El busto de Vespasiano", "El Augusto de Prima Porta"],
      explicacion: "Es del s. IV: formas simplificadas, ojos grandes, solemnidad y rigidez."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cuántas cellas tenía normalmente el templo etrusco?",
      correcta: "Tres, para tres dioses",
      incorrectas: ["Una, para un solo dios", "Cuatro, una por fachada", "Ninguna, porque era abierto"],
      explicacion: "Lo conocemos por Vitruvio: planta casi cuadrada, podio alto y pórtico profundo."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cómo aparecen los difuntos en los sarcófagos etruscos?",
      correcta: "Recostados, en actitud cotidiana y relajada",
      incorrectas: ["De pie y con coraza militar", "Montados a caballo", "Arrodillados ante los dioses"],
      explicacion: "Un ejemplo es el Sarcófago de los esposos de Cerveteri."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué representan las pinturas de las tumbas etruscas?",
      correcta: "La vida que el difunto disfrutará en el más allá",
      incorrectas: ["Las victorias del emperador", "Las guerras contra Cartago", "Escenas del Antiguo Testamento"],
      explicacion: "Banquetes, música, baile, caza y pesca, como en las tumbas de Tarquinia."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Desde cuándo se habla de arte tardorromano?",
      correcta: "Desde finales del s. III d.C.",
      incorrectas: ["Desde finales del s. I a.C.", "Desde inicios del s. II d.C.", "Desde finales del s. VI d.C."],
      explicacion: "Forma parte de la etapa imperial y convive con el primer arte cristiano."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué imita el primer estilo pompeyano o de incrustación?",
      correcta: "Placas de mármol y columnas",
      incorrectas: ["Arquitecturas fantásticas e imposibles", "Paisajes vistos por una ventana", "Cortinas, telones y máscaras"],
      explicacion: "Está muy influido por Grecia.",
      esquema: "estilos"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué estilo pompeyano parece abrir la pared al exterior?",
      correcta: "El segundo o arquitectónico",
      incorrectas: ["El primero o de incrustación", "El tercero u ornamental", "El cuarto o ilusionista"],
      explicacion: "Pinta arquitecturas con efecto ilusionista, como en la Villa de los Misterios.",
      esquema: "estilos"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué tipo de cubierta suele tener la basílica paleocristiana?",
      correcta: "De madera, a dos aguas",
      incorrectas: ["Bóveda de cañón de hormigón", "Cúpula con óculo", "Bóveda de crucería"],
      explicacion: "Sustituye a las bóvedas de la basílica romana.",
      esquema: "basilica"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿A quién representa la imagen paleocristiana del Buen Pastor?",
      correcta: "A Cristo",
      incorrectas: ["A Constantino", "A san Pedro", "A Rómulo"],
      explicacion: "Se inspira en el moscóforo griego: tema pagano con sentido cristiano."
    },

    {
      tema: "etapas", nivel: "extremo",
      texto: "¿En qué material está hecho el Apolo de Veyes?",
      correcta: "Terracota",
      incorrectas: ["Mármol", "Bronce", "Granito"],
      explicacion: "La escultura etrusca es sobre todo funeraria, en bronce y terracota."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Por qué autor conocemos cómo eran los templos etruscos?",
      correcta: "Por Vitruvio",
      incorrectas: ["Por Plinio el Viejo", "Por Pausanias", "Por Tito Livio"],
      explicacion: "Solo se conserva la base de piedra: el resto era de madera y ladrillo."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué parte de la basílica paleocristiana era para los catecúmenos?",
      correcta: "El nártex",
      incorrectas: ["El ábside", "El transepto", "La nave central"],
      explicacion: "Los catecúmenos eran quienes aún no estaban bautizados."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Dónde nacen las imágenes paleocristianas?",
      correcta: "En las catacumbas",
      incorrectas: ["En los anfiteatros", "En las termas", "En los foros imperiales"],
      explicacion: "Un ejemplo son las catacumbas de Santa Priscila."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué planta suelen tener baptisterios, mausoleos y martyria?",
      correcta: "Circular",
      incorrectas: ["Basilical de cinco naves", "Elíptica", "Rectangular con podio"],
      explicacion: "Por ejemplo, Santa Constanza en Roma o Centcelles en Tarragona."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Cómo son los mosaicos paleocristianos del s. V?",
      correcta: "Con fondos planos y perspectiva jerárquica",
      incorrectas: ["Muy naturalistas y con paisajes profundos", "Con escenas mitológicas de banquetes", "Solo con motivos geométricos"],
      explicacion: "Los rostros no se individualizan y anuncian el arte bizantino."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué relieve usa alto, medio y bajo relieve para dar perspectiva?",
      correcta: "El del Arco de Septimio Severo",
      incorrectas: ["El de la Columna de Trajano", "El del Ara Pacis", "El de la Columna de Marco Aurelio"],
      explicacion: "El relieve histórico combina distintos grados de resalte para crear profundidad."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué hecho marca el inicio del cuarto estilo pompeyano?",
      correcta: "El terremoto del 62 d.C.",
      incorrectas: ["La erupción del 79 d.C.", "La muerte de Augusto", "El Edicto de Milán"],
      explicacion: "Recupera arquitecturas más complejas, con efectos teatrales como cortinas y máscaras.",
      esquema: "estilos"
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Cómo es la pared en el tercer estilo pompeyano?",
      correcta: "Plana, con arquitecturas finas y pequeños cuadros",
      incorrectas: ["Imita placas de mármol", "Parece abrirse a grandes paisajes", "Se cubre de teselas de vidrio"],
      explicacion: "Es de finales del s. I a.C., en época de Augusto. Sus perspectivas son imposibles.",
      esquema: "estilos"
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué es lo más importante de la escultura paleocristiana?",
      correcta: "Los sarcófagos, como el de Junio Basso",
      incorrectas: ["Los retratos ecuestres en bronce", "Las estatuas de atletas", "Los relieves de las columnas historiadas"],
      explicacion: "Junio Basso murió en el 359."
    }
  ]
};
