/* =====================================================================
   ACTIVIDAD: EL ARTE GRIEGO
   ---------------------------------------------------------------------
   Este archivo contiene TODO el contenido de la actividad.
   Puedes editarlo con cualquier editor de texto (o desde la web de GitHub).

   - "obras": las 14 obras del listado PAU. Con ellas la app crea sola
     las preguntas con imágenes (¿qué obra es?, ¿de qué etapa?, etc.).
   - "preguntas": preguntas de texto. Para añadir una, copia un bloque
     { ... }, pégalo debajo y cambia el texto. Fíjate en las comas.

   Temas posibles de una pregunta: "estilo", "etapas", "contexto".
   "esquema" (opcional) muestra un dibujo al corregir:
   "templo", "ordenes", "teatro" o "postura".
   ===================================================================== */

window.ACTIVIDADES = window.ACTIVIDADES || {};

window.ACTIVIDADES["arte-griego"] = {
  titulo: "El arte griego",
  subtitulo: "Historia del Arte · 2.º Bachillerato · PAU",
  carpetaImagenes: "img/griego/",

  periodos: [
    "Arcaico",
    "Estilo severo",
    "Clásico (s. V a.C.)",
    "Clásico (s. IV a.C.)",
    "Helenístico"
  ],

  esquemas: {
    templo:  { img: "img/esquemas/templo.jpg",  pie: "Partes de la fachada de un templo dórico." },
    ordenes: { img: "img/esquemas/ordenes.jpg", pie: "Los tres órdenes griegos: dórico, jónico y corintio." },
    teatro:  { img: "img/esquemas/teatro.jpg",  pie: "Planta de un teatro griego." },
    postura: { img: "img/esquemas/postura.jpg", pie: "Evolución de la postura: arcaico, contrapposto y curva praxiteliana." }
  },

  obras: [
    {
      id: "partenon", nombre: "Partenón", tipo: "arquitectura",
      autor: "Ictino y Calícrates (decoración de Fidias)", autorCorto: "Ictino y Calícrates",
      fecha: "447-432 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "Acrópolis de Atenas",
      rasgo: "Templo dórico, octástilo y períptero, con correcciones ópticas",
      clave: "Cumbre del clasicismo: perfección matemática al servicio de Atenea y de la gloria de Atenas.",
      img: "partenon.jpg",
      foto: { autor: "Steve Swayne", licencia: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg" }
    },
    {
      id: "cariatides", nombre: "Tribuna de las Cariátides del Erecteion", tipo: "arquitectura",
      autor: "Desconocido", autorCorto: null,
      fecha: "421-406 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "Acrópolis de Atenas",
      rasgo: "Figuras femeninas que sustituyen a las columnas y sostienen el entablamento",
      clave: "Arquitectura y escultura se funden: la columna se convierte en mujer.",
      img: "cariatides.jpg",
      foto: { autor: "Coolcaesar", licencia: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Porch_of_the_Caryatids,_Erechtheion,_Acropolis_of_Athens,_From_Southeast.jpg" }
    },
    {
      id: "atenea-nike", nombre: "Templo de Atenea Niké", tipo: "arquitectura",
      autor: "Calícrates", autorCorto: "Calícrates",
      fecha: "h. 425 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "Acrópolis de Atenas",
      rasgo: "Pequeño templo jónico, anfipróstilo y tetrástilo",
      clave: "Un pequeño templo jónico que celebra la victoria de Atenas.",
      img: "atenea-nike.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Temple_of_Athena_Nike_Acropolis_Athens_Greece.jpg" }
    },
    {
      id: "epidauro", nombre: "Teatro de Epidauro", tipo: "arquitectura",
      autor: "Atribuido a Policleto el Joven", autorCorto: null,
      fecha: "s. IV a.C.", periodo: "Clásico (s. IV a.C.)", lugar: "Epidauro (Peloponeso)",
      rasgo: "Graderío apoyado en la ladera, orchestra circular y acústica excepcional",
      clave: "Proporción y acústica perfecta al servicio del culto y de la educación del ciudadano.",
      img: "epidauro.jpg",
      foto: { autor: "Olecorre", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Theatre_of_Epidaurus_OLC.jpg" }
    },
    {
      id: "kouros", nombre: "Kouros de Anavysos (Kroisos)", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 530 a.C.", periodo: "Arcaico", lugar: "Museo Arqueológico Nacional de Atenas",
      rasgo: "Frontalidad, rigidez, pierna izquierda adelantada y sonrisa arcaica",
      clave: "Arcaico en la postura, pero con una anatomía cada vez más natural.",
      img: "kouros-anavysos.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Kouros_NAMA_3851_Athens_Greece.jpg" }
    },
    {
      id: "auriga", nombre: "Auriga de Delfos", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 475-470 a.C.", periodo: "Estilo severo", lugar: "Museo de Delfos",
      rasgo: "Bronce original con túnica de pliegues rectos, como las estrías de una columna",
      clave: "Un bronce original del estilo severo: serenidad y contención.",
      img: "auriga-delfos.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Aurige._Mus%C3%A9e_Delphes._Gr%C3%A8ce.png" }
    },
    {
      id: "discobolo", nombre: "Discóbolo", tipo: "escultura",
      autor: "Mirón", autorCorto: "Mirón",
      fecha: "h. 450 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "Copia romana · Museo Nacional Romano",
      rasgo: "Movimiento congelado en el instante de máxima tensión, con el rostro sereno",
      clave: "Movimiento congelado en un instante, con el rostro sereno del ideal clásico.",
      img: "discobolo.jpg",
      foto: { autor: "Livioandronico2013", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG" }
    },
    {
      id: "doriforo", nombre: "Doríforo", tipo: "escultura",
      autor: "Policleto", autorCorto: "Policleto",
      fecha: "h. 450-440 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "Copia romana · Museo Arqueológico de Nápoles",
      rasgo: "Canon de 7 cabezas y contrapposto",
      clave: "El canon hecho escultura: 7 cabezas, contrapposto y equilibrio perfecto.",
      img: "doriforo.jpg",
      foto: { autor: "Yair Haklai", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Doryphoros_from_Pompeii_(Naples).jpg" }
    },
    {
      id: "metopa", nombre: "Metopa del Partenón (lapita y centauro)", tipo: "escultura",
      autor: "Taller de Fidias", autorCorto: "Fidias",
      fecha: "h. 447-438 a.C.", periodo: "Clásico (s. V a.C.)", lugar: "British Museum (Londres)",
      rasgo: "Altorrelieve adaptado a un marco cuadrado: lucha entre un lapita y un centauro",
      clave: "Civilización frente a barbarie, encajada en el marco cuadrado de la metopa.",
      img: "metopa-partenon.jpg",
      foto: { autor: "Peter O'Connor", licencia: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:The_Parthenon_Sculptures_%E2%80%93_Centaur_and_Lapith_from_South_metope_XXVII,_British_Museum_(26851032360).jpg" }
    },
    {
      id: "hermes", nombre: "Hermes con Dioniso niño", tipo: "escultura",
      autor: "Praxíteles", autorCorto: "Praxíteles",
      fecha: "h. 340 a.C.", periodo: "Clásico (s. IV a.C.)", lugar: "Museo de Olimpia",
      rasgo: "Curva praxiteliana en S, piel muy pulida y un dios humanizado en escena familiar",
      clave: "Dioses humanizados: gracia, curva en S y suavidad de la piel.",
      img: "hermes-praxiteles.jpg",
      foto: { autor: "Carole Raddato", licencia: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Hermes_bearing_the_infant_Dionysus,_traditionally_attributed_to_Praxiteles_and_dated_to_the_4th_century_BC,_discovered_in_1877_in_the_ruins_of_the_Temple_of_Hera_at_Olympia,_Archaeological_Museum_of_Olympia_(16373294135).jpg" }
    },
    {
      id: "apoxiomeno", nombre: "Apoxiómeno", tipo: "escultura",
      autor: "Lisipo", autorCorto: "Lisipo",
      fecha: "h. 330-320 a.C.", periodo: "Clásico (s. IV a.C.)", lugar: "Copia romana · Museos Vaticanos",
      rasgo: "Canon de 8 cabezas y brazos que rompen el plano frontal (visión múltiple)",
      clave: "Canon de 8 cabezas: la escultura conquista el espacio.",
      img: "apoxiomeno.jpg",
      foto: { autor: "Marie-Lan Nguyen", licencia: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Apoxyomenos_Pio-Clementino_Inv1185.jpg" }
    },
    {
      id: "victoria", nombre: "Victoria de Samotracia", tipo: "escultura",
      autor: "Atribuida a Pitócrito de Rodas", autorCorto: null,
      fecha: "h. 190 a.C.", periodo: "Helenístico", lugar: "Museo del Louvre (París)",
      rasgo: "Alas abiertas y túnica agitada por el viento sobre la proa de un barco",
      clave: "Movimiento y viento en mármol: la teatralidad del helenismo.",
      img: "victoria-samotracia.jpg",
      foto: { autor: "Wilfredor", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Nike_of_Samothrace_from_Paris.jpg" }
    },
    {
      id: "venus", nombre: "Venus de Milo", tipo: "escultura",
      autor: "Desconocido", autorCorto: null,
      fecha: "h. 130-100 a.C.", periodo: "Helenístico", lugar: "Museo del Louvre (París)",
      rasgo: "Diosa semidesnuda que recupera la serenidad clásica en plena época helenística",
      clave: "Belleza serena del clasicismo en plena época helenística.",
      img: "venus-milo.jpg",
      foto: { autor: "Jastrow", licencia: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Venus_de_Milo_Louvre_Ma399_n4.jpg" }
    },
    {
      id: "pergamo", nombre: "Friso del Altar de Pérgamo (Atenea y Gea)", tipo: "escultura",
      autor: "Desconocido (encargo de Eumenes II)", autorCorto: null,
      fecha: "h. 180-160 a.C.", periodo: "Helenístico", lugar: "Pergamonmuseum (Berlín)",
      rasgo: "Gigantomaquia en altorrelieve, con cuerpos retorcidos en diagonal y pathos",
      clave: "Pathos y propaganda: la lucha de los dioses como victoria de Pérgamo.",
      img: "pergamo-atenea-gea.jpg",
      foto: { autor: "Miia Ranta", licencia: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Athena_and_Nike_fight_Alkyoneus,_Gaia_rises_up_from_the_ground_(5336871341).jpg" }
    }
  ],

  /* Autores que se usan como respuestas falsas en las preguntas de autoría */
  autoresExtra: ["Escopas", "Fidias", "Mnesicles"],

  preguntas: [

    /* ============ CONTEXTO HISTÓRICO ============ */
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Cómo estaba organizada políticamente la antigua Grecia?",
      correcta: "En polis: ciudades-estado independientes",
      incorrectas: ["En un reino unificado con capital en Atenas", "En un imperio gobernado por un faraón", "En provincias dependientes de Roma"],
      explicacion: "Grecia no era un país unido, sino un conjunto de ciudades-estado independientes (polis)."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Bajo qué gobernante vivió Atenas su máximo esplendor, en el siglo V a.C.?",
      correcta: "Pericles",
      incorrectas: ["Alejandro Magno", "Filipo II", "Eumenes II"],
      explicacion: "La Atenas de Pericles (461-429 a.C.) fue el momento de máximo esplendor. Pericles mandó reconstruir la Acrópolis."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué guerras enfrentaron a griegos y persas entre el 499 y el 479 a.C.?",
      correcta: "Las Guerras Médicas",
      incorrectas: ["Las Guerras del Peloponeso", "Las Guerras Púnicas", "La guerra de Troya"],
      explicacion: "En las Guerras Médicas los griegos vencieron a los persas. Esa victoria se celebra en la Acrópolis."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué fueron las Guerras del Peloponeso (431-404 a.C.)?",
      correcta: "Guerras entre las propias polis griegas, que las debilitaron",
      incorrectas: ["La invasión de Grecia por Roma", "La conquista de Persia por Alejandro", "La invasión de los dorios"],
      explicacion: "Las polis lucharon entre sí y se debilitaron. Después, el arte del s. IV se vuelve más humano e íntimo."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué ocurrió en la Acrópolis de Atenas en el año 480 a.C.?",
      correcta: "Los persas la destruyeron",
      incorrectas: ["Se terminó el Partenón", "Alejandro Magno la conquistó", "Se celebraron las primeras Olimpiadas"],
      explicacion: "En el 480 a.C. los persas destruyeron la Acrópolis. Tras vencerlos, Pericles la mandó reconstruir."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Con qué dinero se reconstruyó la Acrópolis en tiempos de Pericles?",
      correcta: "Con el tesoro de la Liga de Delos",
      incorrectas: ["Con el botín de Alejandro Magno", "Con los impuestos que pagaba a Roma", "Con donaciones de los reyes de Pérgamo"],
      explicacion: "La Liga de Delos era una alianza de ciudades dirigida por Atenas. Su tesoro se guardaba en el Partenón."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Quién dirigió las obras y la decoración escultórica de la Acrópolis?",
      correcta: "Fidias",
      incorrectas: ["Lisipo", "Mirón", "Praxíteles"],
      explicacion: "El escultor Fidias dirigió las obras. Suyas (o de su taller) son las metopas, el friso y los frontones del Partenón."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "La reconstrucción de la Acrópolis fue un proyecto…",
      correcta: "Religioso y político a la vez",
      incorrectas: ["Solo funerario", "Solo militar", "Privado de una familia rica"],
      explicacion: "Honraba a Atenea, protectora de la ciudad, y mostraba el poder de la Atenas democrática."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué hecho marca el comienzo del período helenístico?",
      correcta: "La muerte de Alejandro Magno (323 a.C.)",
      incorrectas: ["La victoria en las Guerras Médicas", "La caída de la civilización micénica", "La construcción del Partenón"],
      explicacion: "Al morir Alejandro, su imperio se dividió en reinos y aparecieron nuevos centros culturales."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Cuáles fueron los nuevos centros culturales de la época helenística?",
      correcta: "Pérgamo, Alejandría y Rodas",
      incorrectas: ["Atenas, Esparta y Corinto", "Roma, Cartago y Mérida", "Cnosos, Micenas y Tirinto"],
      explicacion: "Tras la muerte de Alejandro surgen reinos con nuevas capitales culturales: Pérgamo, Alejandría y Rodas."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué potencia acabó dominando el Mediterráneo y adoptó la cultura griega (31 a.C.)?",
      correcta: "Roma",
      incorrectas: ["Persia", "Egipto", "Macedonia"],
      explicacion: "Roma copió el arte griego y lo difundió. Muchas obras griegas las conocemos solo por copias romanas."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué reino unificó Grecia en el siglo IV a.C. y conquistó el Imperio persa?",
      correcta: "Macedonia",
      incorrectas: ["Esparta", "Egipto", "Pérgamo"],
      explicacion: "Filipo II y su hijo Alejandro Magno, reyes de Macedonia, unificaron Grecia y conquistaron Persia."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿De quién es la frase «El hombre es la medida de todas las cosas»?",
      correcta: "Protágoras",
      incorrectas: ["Pericles", "Policleto", "Vitruvio"],
      explicacion: "Esta idea de Protágoras resume el antropocentrismo griego: el ser humano como medida."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué significa que el arte griego es antropocéntrico?",
      correcta: "Que el ser humano es el centro y la medida: escala humana y figura humana",
      incorrectas: ["Que busca impresionar con obras gigantescas", "Que representa a los dioses con forma de animal", "Que solo representa a los reyes"],
      explicacion: "Los egipcios hacían obras enormes para impresionar. Los griegos toman al ser humano como medida."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué era la Magna Grecia?",
      correcta: "Las colonias griegas del sur de Italia y Sicilia",
      incorrectas: ["La costa de Asia Menor", "La isla de Creta", "El reino de Alejandro Magno"],
      explicacion: "Los griegos fundaron colonias por el Mediterráneo: la Magna Grecia (sur de Italia y Sicilia) o Empúries en Cataluña."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué colonia griega se fundó en la costa de Cataluña?",
      correcta: "Empúries",
      incorrectas: ["Tarraco", "Emerita Augusta", "Pérgamo"],
      explicacion: "Empúries (Ampurias) fue una colonia griega en la costa catalana."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Dónde se desarrolló la civilización minoica, antecedente del arte griego?",
      correcta: "En la isla de Creta",
      incorrectas: ["En Micenas", "En Atenas", "En Rodas"],
      explicacion: "La civilización minoica (h. 2600-1400 a.C.) se desarrolló en Creta. Su gran palacio es Cnosos."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué elemento micénico es el antecedente del templo griego?",
      correcta: "El mégaron, la sala principal del palacio",
      incorrectas: ["La Puerta de los Leones", "La tumba con falsa cúpula", "La muralla ciclópea"],
      explicacion: "El mégaron, sala principal del palacio micénico, es el antecedente de la planta del templo griego."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué era el ágora?",
      correcta: "La plaza pública, corazón de la vida democrática",
      incorrectas: ["La parte alta y fortificada de la ciudad", "El graderío del teatro", "La sala principal del templo"],
      explicacion: "En el ágora había asambleas, comercio, fiestas y juicios. Estaba rodeada de stoas (pórticos)."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué era la acrópolis de una ciudad griega?",
      correcta: "La parte más alta y fortificada, donde estaban los templos",
      incorrectas: ["La plaza del mercado", "El barrio de los artesanos", "El puerto de la ciudad"],
      explicacion: "La acrópolis es la parte alta de la ciudad. La de Atenas es la más famosa."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué tipo de plano creó Hipódamo de Mileto?",
      correcta: "Un plano ortogonal o en cuadrícula",
      incorrectas: ["Un plano radial, en forma de estrella", "Un plano irregular adaptado al terreno", "Un plano circular amurallado"],
      explicacion: "Reconstruyó Mileto (h. 475 a.C.) con calles rectas que se cruzan en ángulo recto. El orden refleja la igualdad entre ciudadanos."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Para qué servía el templo griego?",
      correcta: "Era la casa del dios: dentro guardaba su estatua",
      incorrectas: ["Era el lugar donde los fieles se reunían a rezar dentro", "Era la residencia del rey", "Era un edificio para asambleas políticas"],
      explicacion: "Los fieles no entraban. Por eso el interior es pequeño y lo importante es el exterior."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Dónde se hacían los sacrificios y ritos del culto?",
      correcta: "En un altar al aire libre, delante del templo",
      incorrectas: ["Dentro de la naos, junto a la estatua", "En el opistódomo", "En la orchestra del teatro"],
      explicacion: "Los ritos se celebraban fuera, en el altar exterior. El templo era la casa del dios."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿En el culto a qué dios nace el teatro griego?",
      correcta: "Dioniso",
      incorrectas: ["Atenea", "Asclepio", "Zeus"],
      explicacion: "El teatro nace en las fiestas de Dioniso. El de Epidauro estaba junto al santuario de Asclepio."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "Además de religiosa, ¿qué función tenía el teatro griego?",
      correcta: "Cívica y educativa: transmitía valores y unía a la comunidad",
      incorrectas: ["Militar: allí se entrenaban los soldados", "Funeraria: allí se enterraba a los héroes", "Comercial: era el mercado de la ciudad"],
      explicacion: "La tragedia enseñaba valores y la comedia criticaba a la sociedad. Reunía a toda la comunidad democrática."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué fiesta aparece representada en el friso del Partenón?",
      correcta: "La procesión de las Panateneas, en honor a Atenea",
      incorrectas: ["Las fiestas de Dioniso", "Los Juegos Olímpicos", "La boda de los lapitas"],
      explicacion: "El friso muestra la procesión de las Panateneas, con los ciudadanos junto a los dioses."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Qué representan las luchas míticas de las metopas del Partenón?",
      correcta: "El orden griego frente a la barbarie: una alusión a la victoria sobre los persas",
      incorrectas: ["Las guerras entre Atenas y Esparta", "La conquista de Persia por Alejandro", "La fundación de Roma"],
      explicacion: "Dioses contra gigantes, griegos contra amazonas, lapitas contra centauros y la guerra de Troya: civilización frente a barbarie."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué victoria política simboliza la gigantomaquia del Altar de Pérgamo?",
      correcta: "La de los reyes de Pérgamo sobre los gálatas",
      incorrectas: ["La de Atenas sobre los persas", "La de Roma sobre Cartago", "La de Esparta sobre Atenas"],
      explicacion: "El friso es propaganda: los dioses (el orden) vencen a los gigantes (el caos), como Pérgamo vence a los gálatas."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Por qué el Erecteion tiene una planta irregular?",
      correcta: "Reunía varios cultos y se adaptó al desnivel del terreno",
      incorrectas: ["Porque quedó sin terminar", "Porque lo reformaron los romanos", "Porque es de época arcaica"],
      explicacion: "Reunía cultos a Atenea, Poseidón y el rey Erecteo, en el lugar del mito fundacional de Atenas."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Por qué conocemos muchas esculturas griegas solo por copias romanas?",
      correcta: "Porque casi todos los grandes bronces originales se perdieron",
      incorrectas: ["Porque los griegos prohibían exponer los originales", "Porque los originales eran de madera", "Porque los griegos no firmaban sus obras"],
      explicacion: "El bronce se fundía para reutilizarlo. En el examen, indica siempre si una obra es original o copia."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Qué estilos posteriores tomaron el arte griego como modelo?",
      correcta: "El Renacimiento y el Neoclasicismo",
      incorrectas: ["El Románico y el Gótico", "El Barroco y el Rococó", "El Impresionismo y el Cubismo"],
      explicacion: "Los órdenes, el canon y el ideal de belleza griegos son la base del arte occidental."
    },
    {
      tema: "contexto",
      nivel: "basico",
      texto: "¿Cómo eran originalmente los templos y las estatuas griegas?",
      correcta: "Estaban pintados de colores",
      incorrectas: ["Eran siempre blancos", "Estaban cubiertos de oro", "Eran de madera sin pintar"],
      explicacion: "Hoy los vemos blancos porque la pintura se ha perdido. El Kouros de Anavysos aún conserva restos de color."
    },
    {
      tema: "contexto",
      nivel: "normal",
      texto: "¿Para qué servía la escultura en época helenística, además de su función religiosa?",
      correcta: "Como propaganda al servicio de los reyes",
      incorrectas: ["Para decorar las tumbas de los esclavos", "Solo como juguete para niños", "Como moneda de cambio"],
      explicacion: "El arte helenístico se pone al servicio de los reyes, como el Altar de Zeus en Pérgamo."
    },

    /* ============ ETAPAS ============ */
    {
      tema: "etapas",
      nivel: "basico",
      texto: "¿Cuál es el orden correcto de los períodos del arte griego?",
      correcta: "Arcaico → Clásico → Helenístico",
      incorrectas: ["Clásico → Arcaico → Helenístico", "Helenístico → Clásico → Arcaico", "Arcaico → Helenístico → Clásico"],
      explicacion: "Arcaico (s. VII-480 a.C.), Clásico (480-323 a.C.) y Helenístico (323-31 a.C.)."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué fechas abarca el período clásico?",
      correcta: "480 – 323 a.C.",
      incorrectas: ["s. VII – 480 a.C.", "323 – 31 a.C.", "1200 – 800 a.C."],
      explicacion: "Va desde el final de las Guerras Médicas hasta la muerte de Alejandro Magno."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué fechas abarca el período helenístico?",
      correcta: "323 – 31 a.C.",
      incorrectas: ["480 – 323 a.C.", "s. VII – 480 a.C.", "31 a.C. – 476 d.C."],
      explicacion: "Desde la muerte de Alejandro Magno hasta que Roma domina el Mediterráneo."
    },
    {
      tema: "etapas",
      nivel: "basico",
      texto: "Rigidez, frontalidad e influencia egipcia. ¿De qué período hablamos?",
      correcta: "Arcaico",
      incorrectas: ["Clásico", "Helenístico", "Estilo severo"],
      explicacion: "Las primeras esculturas grandes imitan a las egipcias: frontales, rígidas y simétricas.",
      esquema: "postura"
    },
    {
      tema: "etapas",
      nivel: "basico",
      texto: "Equilibrio, serenidad y belleza ideal. ¿De qué período hablamos?",
      correcta: "Clásico",
      incorrectas: ["Arcaico", "Helenístico", "Geométrico"],
      explicacion: "El clasicismo busca la belleza ideal: proporciones matemáticas, posturas naturales y rostros serenos (ethos)."
    },
    {
      tema: "etapas",
      nivel: "basico",
      texto: "Movimiento, dramatismo, emociones intensas y realismo. ¿De qué período hablamos?",
      correcta: "Helenístico",
      incorrectas: ["Clásico", "Arcaico", "Estilo severo"],
      explicacion: "En el helenismo se rompe el equilibrio clásico: composiciones abiertas, pathos y grupos escultóricos."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué es el estilo severo?",
      correcta: "La transición entre el arcaico y el clásico (h. 480-450 a.C.)",
      incorrectas: ["La última fase del helenismo", "El arte de Esparta", "El arte cretomicénico"],
      explicacion: "Desaparece la sonrisa arcaica y las figuras se vuelven serias y serenas. Ejemplo: el Auriga de Delfos."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué rasgo arcaico desaparece en el estilo severo?",
      correcta: "La sonrisa arcaica",
      incorrectas: ["El uso del mármol", "La figura humana", "El desnudo masculino"],
      explicacion: "En el estilo severo los rostros se vuelven serios. El Auriga de Delfos ya no sonríe."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Por qué es importante el Efebo de Critios (h. 480 a.C.)?",
      correcta: "Es la primera figura con contrapposto",
      incorrectas: ["Es el primer desnudo femenino", "Es el primer retrato de Alejandro", "Es el primer bronce conservado"],
      explicacion: "Marca la transición al clasicismo: el peso se apoya en una pierna y la figura parece viva.",
      esquema: "postura"
    },
    {
      tema: "etapas",
      nivel: "basico",
      texto: "¿Qué diferencia hay entre un kouros y una kore?",
      correcta: "El kouros es un joven desnudo; la kore, una joven vestida",
      incorrectas: ["El kouros es de bronce y la kore de mármol", "El kouros es clásico y la kore helenística", "El kouros es un dios y la kore una diosa"],
      explicacion: "Son los dos tipos de escultura arcaica. El kouros solía colocarse en tumbas o santuarios."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué cambia en la escultura del siglo IV a.C. respecto al siglo V?",
      correcta: "Se vuelve más humana: muestra sentimientos y aparece el desnudo femenino",
      incorrectas: ["Vuelve a la rigidez y la frontalidad", "Deja de representar la figura humana", "Abandona el mármol y solo usa madera"],
      explicacion: "Tras las guerras entre polis, los dioses parecen personas y las figuras expresan sentimientos."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Cuál fue el primer gran desnudo femenino de la escultura griega?",
      correcta: "La Afrodita de Cnido, de Praxíteles",
      incorrectas: ["La Venus de Milo", "La Victoria de Samotracia", "La Dama de Auxerre"],
      explicacion: "Praxíteles, en el s. IV a.C., realizó la Afrodita de Cnido."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué escultor del siglo IV expresa pasiones intensas (pathos), como en la Ménade danzante?",
      correcta: "Escopas",
      incorrectas: ["Policleto", "Mirón", "Fidias"],
      explicacion: "Escopas: ojos hundidos, boca entreabierta y movimiento violento. Anticipa el helenismo."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿A qué escuela helenística pertenece el Laocoonte y sus hijos?",
      correcta: "Rodas",
      incorrectas: ["Pérgamo", "Alejandría", "Atenas"],
      explicacion: "La escuela de Rodas hace grupos grandiosos y teatrales: Laocoonte y la Victoria de Samotracia."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué escuela helenística destaca por el realismo y los temas cotidianos?",
      correcta: "Alejandría",
      incorrectas: ["Pérgamo", "Rodas", "Esparta"],
      explicacion: "En Alejandría aparecen figuras de tipos populares y escenas de la vida diaria."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué obra helenística pertenece a la tendencia clasicista, que recupera la serenidad?",
      correcta: "Venus de Milo",
      incorrectas: ["Laocoonte y sus hijos", "Gálata moribundo", "Friso del Altar de Pérgamo"],
      explicacion: "En el helenismo conviven obras dramáticas con otras que recuperan el ideal clásico, como la Venus de Milo."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Cuál es el orden de las etapas de la cerámica griega?",
      correcta: "Geométrica → Figuras negras → Figuras rojas",
      incorrectas: ["Figuras rojas → Figuras negras → Geométrica", "Figuras negras → Geométrica → Figuras rojas", "Geométrica → Figuras rojas → Figuras negras"],
      explicacion: "Geométrica (ss. X-VIII), figuras negras (ss. VII-VI) y figuras rojas (desde h. 530 a.C.)."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "En la cerámica de figuras rojas…",
      correcta: "Se pinta de negro el fondo y las figuras quedan del color de la arcilla",
      incorrectas: ["Las figuras se pintan de negro sobre la arcilla", "Solo hay motivos geométricos", "Las figuras se pintan de rojo sobre fondo blanco"],
      explicacion: "Los detalles se pintan con pincel: más realismo, escorzos y emociones."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "En la cerámica de figuras negras, ¿cómo se hacen los detalles?",
      correcta: "Se rayan con un punzón",
      incorrectas: ["Se pintan con pincel fino", "Se pegan con pequeñas teselas", "Se tallan en relieve"],
      explicacion: "Las figuras se pintan en negro sobre la arcilla rojiza y los detalles se rayan con punzón."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿En qué época vive su esplendor el mosaico griego?",
      correcta: "En la época helenística",
      incorrectas: ["En la época arcaica", "En la época micénica", "En el siglo V a.C."],
      explicacion: "Del mosaico de guijarros se pasa al de teselas y al opus vermiculatum, que heredarán los romanos."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Desde cuándo se usa el orden corintio?",
      correcta: "Desde el siglo IV a.C.",
      incorrectas: ["Desde el siglo VII a.C.", "Desde el siglo VI a.C.", "Desde la época micénica"],
      explicacion: "Dórico (s. VII), jónico (s. VI) y corintio (s. IV a.C.).",
      esquema: "ordenes"
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué edificio del siglo IV fue una de las siete maravillas del mundo antiguo?",
      correcta: "El Mausoleo de Halicarnaso",
      incorrectas: ["El Partenón", "El teatro de Epidauro", "El Erecteion"],
      explicacion: "Construido h. 350 a.C., muestra la tendencia a edificios más grandes y espectaculares."
    },
    {
      tema: "etapas",
      nivel: "normal",
      texto: "¿Qué escultor fue el retratista de Alejandro Magno?",
      correcta: "Lisipo",
      incorrectas: ["Praxíteles", "Fidias", "Policleto"],
      explicacion: "Lisipo, autor del Apoxiómeno, creó un nuevo canon de 8 cabezas."
    },

    /* ============ CARACTERÍSTICAS DE ESTILO ============ */
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué es el sistema arquitrabado (o adintelado)?",
      correcta: "Columnas que sostienen vigas horizontales, sin arcos",
      incorrectas: ["Arcos y bóvedas que cubren grandes espacios", "Muros sin columnas ni vigas", "Cúpulas apoyadas sobre pilares"],
      explicacion: "Elementos verticales (columnas) sostienen elementos horizontales (arquitrabe). Predominan las líneas rectas.",
      esquema: "templo"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es la éntasis?",
      correcta: "Un ligero abombamiento del fuste para que la columna parezca recta",
      incorrectas: ["Las estrías verticales del fuste", "La moldura curva del capitel dórico", "El último escalón del templo"],
      explicacion: "Es la corrección óptica más importante. El fuste se abomba un poco en el centro."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Para qué servían las correcciones ópticas?",
      correcta: "Para que el edificio parezca perfectamente recto al ojo",
      incorrectas: ["Para que el templo resistiera los terremotos", "Para que entrara más luz en la naos", "Para ahorrar mármol"],
      explicacion: "Éntasis, suelo ligeramente curvo y columnas inclinadas hacia dentro: engañan al ojo."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Cómo se unían los sillares de mármol de un templo griego?",
      correcta: "Sin argamasa, con grapas de metal",
      incorrectas: ["Con cemento romano", "Con barro y paja", "Con clavos de madera"],
      explicacion: "Los bloques se colocan sin argamasa y se unen con grapas metálicas."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Qué se usaba como módulo para calcular las proporciones del templo?",
      correcta: "El radio de la columna",
      incorrectas: ["La altura de una persona", "El largo de la naos", "El número de escalones"],
      explicacion: "Todas las medidas se calculan a partir de un módulo, normalmente el radio de la columna."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué orden tiene el capitel con dos espirales (volutas)?",
      correcta: "Jónico",
      incorrectas: ["Dórico", "Corintio", "Toscano"],
      explicacion: "El capitel es la clave para distinguir los órdenes. Volutas = jónico.",
      esquema: "ordenes"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué orden tiene el capitel decorado con hojas de acanto?",
      correcta: "Corintio",
      incorrectas: ["Jónico", "Dórico", "Toscano"],
      explicacion: "El corintio es el más rico y decorado. Ejemplo: Monumento de Lisícrates (Atenas).",
      esquema: "ordenes"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué orden NO tiene basa?",
      correcta: "Dórico",
      incorrectas: ["Jónico", "Corintio", "Ninguno: todos tienen basa"],
      explicacion: "La columna dórica apoya directamente sobre el estilóbato.",
      esquema: "ordenes"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué orden alterna triglifos y metopas en el friso?",
      correcta: "Dórico",
      incorrectas: ["Jónico", "Corintio", "Todos los órdenes"],
      explicacion: "Los órdenes jónico y corintio tienen friso continuo, como una tira de cómic.",
      esquema: "ordenes"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué orden se describe como sobrio y fuerte («masculino»)?",
      correcta: "Dórico",
      incorrectas: ["Jónico", "Corintio", "Compuesto"],
      explicacion: "El dórico es robusto y sobrio (Partenón); el jónico, esbelto y elegante (Erecteion).",
      esquema: "ordenes"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué partes forman el entablamento?",
      correcta: "Arquitrabe, friso y cornisa",
      incorrectas: ["Basa, fuste y capitel", "Naos, pronaos y opistódomo", "Frontón, tímpano y acrótera"],
      explicacion: "El entablamento es todo lo que va sobre las columnas.",
      esquema: "templo"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué partes forman la columna?",
      correcta: "Basa, fuste y capitel",
      incorrectas: ["Arquitrabe, friso y cornisa", "Crepidoma, estilóbato y frontón", "Triglifo, metopa y ábaco"],
      explicacion: "Basa (el pie; el dórico no tiene), fuste (el cuerpo, con estrías) y capitel (la parte de arriba).",
      esquema: "templo"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es el estilóbato?",
      correcta: "El último escalón, donde se apoyan las columnas",
      incorrectas: ["La parte superior de la columna", "El triángulo de la fachada", "La sala trasera del templo"],
      explicacion: "La plataforma escalonada se llama crepidoma; su último escalón es el estilóbato.",
      esquema: "templo"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es el tímpano?",
      correcta: "El espacio interior del frontón, decorado con esculturas",
      incorrectas: ["La banda decorada sobre el arquitrabe", "La sala con la estatua del dios", "El vestíbulo de entrada"],
      explicacion: "El frontón es el triángulo de la fachada; su interior, el tímpano, se llena de esculturas.",
      esquema: "templo"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Cómo se llama la sala principal del templo, donde estaba la estatua del dios?",
      correcta: "Naos o cella",
      incorrectas: ["Pronaos", "Opistódomo", "Peristilo"],
      explicacion: "Pronaos es el vestíbulo; opistódomo, la sala o pórtico trasero; peristilo, la fila de columnas que lo rodea."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué significa que un templo es períptero?",
      correcta: "Que está rodeado por una fila de columnas",
      incorrectas: ["Que tiene 8 columnas en la fachada", "Que solo tiene columnas delante y detrás", "Que no tiene columnas"],
      explicacion: "El Partenón es períptero: rodeado de columnas (8 en las fachadas y 17 en los lados)."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "Un templo con 8 columnas en la fachada es…",
      correcta: "Octástilo",
      incorrectas: ["Tetrástilo", "Hexástilo", "Anfipróstilo"],
      explicacion: "Tetrástilo (4), hexástilo (6), octástilo (8). El Partenón es octástilo."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "Un templo con columnas solo en la fachada delantera y en la trasera es…",
      correcta: "Anfipróstilo",
      incorrectas: ["Períptero", "Octástilo", "Díptero"],
      explicacion: "Como el templo de Atenea Niké: cuatro columnas delante y cuatro detrás, ninguna en los lados."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "Un soporte con forma de hombre que sustituye a la columna se llama…",
      correcta: "Atlante",
      incorrectas: ["Cariátide", "Kouros", "Triglifo"],
      explicacion: "Si tiene forma de mujer es una cariátide (Erecteion); si tiene forma de hombre, un atlante."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Por qué se dice que el templo griego es una «arquitectura para ver desde fuera»?",
      correcta: "Porque los fieles no entraban y lo importante era el exterior",
      incorrectas: ["Porque no tenía techo", "Porque estaba siempre en ruinas", "Porque solo se veía desde el mar"],
      explicacion: "El templo se contempla casi como una escultura. El culto se hacía en el altar exterior."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "En un teatro griego, ¿cómo se llama el graderío para el público?",
      correcta: "Koilon (cávea)",
      incorrectas: ["Orchestra", "Skené", "Ágora"],
      explicacion: "Koilon (graderío), orchestra (espacio circular del coro) y skené (edificio del escenario).",
      esquema: "teatro"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "En un teatro griego, ¿qué era la orchestra?",
      correcta: "El espacio circular donde actuaba el coro",
      incorrectas: ["El graderío del público", "El edificio del escenario", "El foso de los músicos"],
      explicacion: "La orchestra es circular y está en el centro, delante de la skené.",
      esquema: "teatro"
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Cómo se construía el graderío de un teatro griego?",
      correcta: "Aprovechando la ladera de una colina",
      incorrectas: ["Sobre arcos y bóvedas", "Con madera, para desmontarlo", "Excavado bajo tierra"],
      explicacion: "Los griegos aprovechan la pendiente. Los romanos, en cambio, levantan el graderío sobre arcos y bóvedas.",
      esquema: "teatro"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es el canon en escultura?",
      correcta: "Un sistema de proporciones ideales que usa la cabeza como medida",
      incorrectas: ["La postura con una pierna relajada", "La técnica de pegar la ropa al cuerpo", "Un tipo de relieve muy saliente"],
      explicacion: "Policleto fijó un canon de 7 cabezas; Lisipo, uno de 8."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Cuántas cabezas mide el cuerpo en el canon de Policleto?",
      correcta: "7",
      incorrectas: ["8", "6", "9"],
      explicacion: "Policleto lo explicó en su tratado Kanon y lo aplicó en el Doríforo."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Cuántas cabezas mide el cuerpo en el canon de Lisipo?",
      correcta: "8",
      incorrectas: ["7", "6", "10"],
      explicacion: "Lisipo hace cuerpos más esbeltos y cabezas más pequeñas, como en el Apoxiómeno."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es el contrapposto?",
      correcta: "Una pierna soporta el peso y la otra se relaja; caderas y hombros se inclinan en sentidos opuestos",
      incorrectas: ["El cuerpo forma una S y se apoya en un tronco", "La figura está totalmente de frente y simétrica", "La ropa parece pegada al cuerpo"],
      explicacion: "Gracias al contrapposto la figura parece viva y natural. Lo perfecciona Policleto.",
      esquema: "postura"
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es la curva praxiteliana?",
      correcta: "Una postura en forma de S, con la figura apoyada en un soporte",
      incorrectas: ["El abombamiento del fuste de la columna", "La sonrisa de las esculturas arcaicas", "El arco que forma el cuerpo del Discóbolo"],
      explicacion: "Es del siglo IV (Praxíteles). No la uses para obras del siglo V como el Doríforo.",
      esquema: "postura"
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "Error frecuente: ¿qué concepto NO debes usar para describir el Doríforo?",
      correcta: "Curva praxiteliana",
      incorrectas: ["Contrapposto", "Canon de 7 cabezas", "Equilibrio cruzado"],
      explicacion: "El Doríforo es del siglo V: hablamos de contrapposto. La curva praxiteliana es del siglo IV.",
      esquema: "postura"
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué son los «paños mojados»?",
      correcta: "Ropa que parece pegada al cuerpo y deja ver la anatomía",
      incorrectas: ["Esculturas pintadas con colores al agua", "Relieves que se limpian con agua", "Mantos que caen rectos como columnas"],
      explicacion: "Es una técnica asociada a Fidias. También la vemos en las Cariátides y en la Victoria de Samotracia."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Con qué escultor se asocia la técnica de los paños mojados?",
      correcta: "Fidias",
      incorrectas: ["Mirón", "Lisipo", "Policleto"],
      explicacion: "Fidias dirigió la decoración del Partenón y representó a los dioses majestuosos y serenos."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué diferencia hay entre ethos y pathos?",
      correcta: "Ethos es serenidad y equilibrio; pathos, expresión de dolor y pasión",
      incorrectas: ["Ethos es pasión; pathos, serenidad", "Ethos es un tipo de columna; pathos, de capitel", "Ethos es el bronce; pathos, el mármol"],
      explicacion: "El clasicismo busca el ethos; el helenismo (y Escopas) expresa el pathos."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Qué es la sonrisa arcaica?",
      correcta: "Una sonrisa convencional, sin emoción real",
      incorrectas: ["Una expresión de dolor intenso", "La boca entreabierta de las figuras helenísticas", "La sonrisa de los retratos de Alejandro"],
      explicacion: "Es típica de kouroi y korai arcaicos. Desaparece en el estilo severo."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Qué es una escultura crisoelefantina?",
      correcta: "Una escultura hecha de oro y marfil",
      incorrectas: ["Una escultura de bronce dorado", "Una escultura pintada de muchos colores", "Una escultura de mármol pulido"],
      explicacion: "Así era la Atenea Partenos de Fidias, hoy perdida, que estaba dentro del Partenón."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es una escultura exenta?",
      correcta: "Una escultura de bulto redondo, que se puede rodear",
      incorrectas: ["Un relieve pegado a un muro", "Una escultura sin cabeza", "Una escultura libre de impuestos"],
      explicacion: "Se opone al relieve, que decoraba frontones, metopas y frisos."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es un altorrelieve?",
      correcta: "Un relieve que sobresale mucho del fondo (más de la mitad del volumen)",
      incorrectas: ["Un relieve situado en lo alto del edificio", "Un relieve casi plano", "Una escultura en lo alto de una columna"],
      explicacion: "Las metopas del Partenón y el friso de Pérgamo son altorrelieves."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué es un exvoto?",
      correcta: "Una ofrenda a los dioses para agradecer un favor",
      incorrectas: ["Una estatua funeraria", "Un retrato de un rey", "Una votación en la asamblea"],
      explicacion: "El Auriga de Delfos y la Victoria de Samotracia eran exvotos por victorias."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Qué es el hieratismo?",
      correcta: "Rigidez solemne, sin expresión",
      incorrectas: ["Movimiento violento y dramático", "Curva del cuerpo en forma de S", "Realismo en los rostros"],
      explicacion: "Es propio del arte arcaico, influido por Egipto."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué estudia sobre todo Mirón en sus esculturas?",
      correcta: "El movimiento: congela el instante de máximo esfuerzo",
      incorrectas: ["El reposo y las proporciones del canon", "La curva en S y la piel suave", "El dolor y la pasión en el rostro"],
      explicacion: "En el Discóbolo el cuerpo se mueve, pero el rostro sigue sereno."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué novedad espacial aporta Lisipo?",
      correcta: "Sus figuras rompen la frontalidad: hay que rodearlas para verlas",
      incorrectas: ["Vuelve a la frontalidad egipcia", "Solo hace relieves", "Coloca las figuras dentro de nichos"],
      explicacion: "Los brazos del Apoxiómeno se estiran hacia delante y crean profundidad (visión múltiple)."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Cuál de estos rasgos NO es propio de la escultura helenística?",
      correcta: "Frontalidad y sonrisa arcaica",
      incorrectas: ["Composiciones abiertas y en diagonal", "Expresión de pathos", "Grupos escultóricos y realismo"],
      explicacion: "Frontalidad y sonrisa arcaica son rasgos del período arcaico."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué temas nuevos aparecen con el realismo helenístico?",
      correcta: "El retrato, la vejez, la infancia y la vida cotidiana",
      incorrectas: ["Solo atletas jóvenes e idealizados", "Solo motivos geométricos", "Solo dioses en reposo"],
      explicacion: "El helenismo amplía los temas más allá del ideal de belleza clásico."
    },
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Por qué muchas copias romanas en mármol tienen un tronco junto a la pierna?",
      correcta: "Porque el mármol pesa más y necesita un apoyo que el bronce no necesitaba",
      incorrectas: ["Porque así lo diseñó el escultor griego", "Porque representan bosques sagrados", "Para colgar las armas de la estatua"],
      explicacion: "Es un añadido de la copia. El original de bronce no lo llevaba (por ejemplo, en el Doríforo)."
    },
    {
      tema: "estilo",
      nivel: "basico",
      texto: "¿Cuáles eran los temas principales de la escultura griega?",
      correcta: "Dioses, héroes y atletas",
      incorrectas: ["Paisajes y bodegones", "Animales y plantas", "Reyes egipcios"],
      explicacion: "El atleta desnudo representa el ideal de belleza física y moral."
    },

    /* ============ NIVEL EXTREMO (datos finos) ============ */
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué dice la inscripción de la base del Kouros de Anavysos?",
      correcta: "«Detente y llora ante la tumba de Kroisos, a quien el furioso Ares mató luchando en primera fila»",
      incorrectas: ["«Policleto lo hizo, siguiendo el canon de las siete cabezas»", "«Ofrenda a Apolo por la victoria en la carrera de carros»", "«Atenea protege esta ciudad y a sus ciudadanos»"],
      explicacion: "Era una estatua funeraria sobre la tumba de un joven guerrero, Kroisos. No es un retrato: representa un ideal."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Dónde y cuándo se halló el Hermes con Dioniso niño?",
      correcta: "En el templo de Hera de Olimpia, en 1877",
      incorrectas: ["En la isla de Milo, en 1820", "En la isla de Samotracia, en 1863", "En Pompeya, en el siglo XVIII"],
      explicacion: "Se discute si es el original de Praxíteles o una copia posterior de gran calidad."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "Según Vitruvio, ¿de dónde viene el nombre «cariátide»?",
      correcta: "De las mujeres de Karyai, castigadas a cargar pesos",
      incorrectas: ["De una diosa llamada Cárite", "Del arquitecto que las diseñó", "De la palabra griega para «columna»"],
      explicacion: "Es una explicación antigua, del romano Vitruvio, pero no es segura."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "En el friso de Pérgamo, ¿por qué Atenea separa a Alcioneo del suelo?",
      correcta: "Porque era inmortal mientras tocaba la tierra, su madre Gea",
      incorrectas: ["Porque quería llevarlo al Olimpo", "Porque Gea se lo había pedido", "Porque así lo exigía el marco de la metopa"],
      explicacion: "Gea surge del suelo suplicando por su hijo, mientras la serpiente de Atenea muerde al gigante."
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Qué rey de Pérgamo encargó el Altar de Zeus?",
      correcta: "Eumenes II",
      incorrectas: ["Filipo II", "Pericles", "Alejandro Magno"],
      explicacion: "Su friso, de unos 113 m de largo, rodeaba el altar. Hoy está en el Pergamonmuseum de Berlín."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Cuántas metopas tenía el Partenón?",
      correcta: "92",
      incorrectas: ["14", "48", "160"],
      explicacion: "Además, 2 frontones y un friso de unos 160 m. Cada lado tenía un tema mítico distinto."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Cuántas columnas tiene el Partenón en cada lado largo?",
      correcta: "17",
      incorrectas: ["8", "12", "21"],
      explicacion: "Es octástilo (8 en la fachada) y períptero, con 17 columnas en cada lado."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Qué tema tenían las metopas del lado SUR del Partenón?",
      correcta: "Lapitas contra centauros",
      incorrectas: ["Dioses contra gigantes", "Griegos contra amazonas", "La guerra de Troya"],
      explicacion: "Este: dioses contra gigantes. Oeste: griegos contra amazonas. Sur: lapitas contra centauros. Norte: guerra de Troya."
    },
    {
      tema: "estilo",
      nivel: "extremo",
      texto: "¿Qué es el «equilibrio cruzado» del Doríforo?",
      correcta: "La pierna en tensión se opone al brazo relajado, y a la inversa",
      incorrectas: ["Los dos brazos y las dos piernas están en tensión", "El cuerpo forma una S apoyada en un tronco", "La cabeza mira en sentido contrario al disco"],
      explicacion: "Es el perfeccionamiento del contrapposto que hace Policleto.",
      esquema: "postura"
    },
    {
      tema: "contexto",
      nivel: "extremo",
      texto: "¿Quién fue el arquitecto de los Propileos de la Acrópolis?",
      correcta: "Mnesicles",
      incorrectas: ["Calícrates", "Ictino", "Hipódamo de Mileto"],
      explicacion: "Los Propileos (437-432 a.C.) son la entrada monumental de la Acrópolis."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué es el opus vermiculatum?",
      correcta: "Un mosaico de teselas diminutas que parece una pintura",
      incorrectas: ["Un mosaico de cantos rodados", "Una técnica de cerámica de figuras negras", "Un tipo de aparejo de sillares"],
      explicacion: "Con teselas de 0,5-1 cm. Ejemplo: el Mosaico de Alejandro (Pompeya), copia de una pintura griega."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué ceramista pintó Aquiles y Áyax jugando a los dados, en figuras negras?",
      correcta: "Exequias",
      incorrectas: ["Polignoto", "Apeles", "Zeuxis"],
      explicacion: "Polignoto, Zeuxis y Apeles fueron pintores famosos, pero su obra se ha perdido: los conocemos por los textos."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Con qué material se hicieron los primeros mosaicos griegos (Olinto, Pella)?",
      correcta: "Con guijarros (cantos rodados)",
      incorrectas: ["Con teselas de vidrio dorado", "Con azulejos vidriados", "Con fragmentos de cerámica de figuras rojas"],
      explicacion: "Los mosaicos de guijarros son de finales del s. V y del s. IV a.C. Después llegan las teselas."
    },
    {
      tema: "etapas",
      nivel: "extremo",
      texto: "¿Qué kore arcaica del siglo VII a.C. tiene las manos y los pies demasiado grandes?",
      correcta: "Dama de Auxerre",
      incorrectas: ["Venus de Milo", "Afrodita de Cnido", "Cariátide del Erecteion"],
      explicacion: "Está en el Louvre. Es una kore muy rígida, todavía muy cercana al modelo egipcio."
    }
  ]
};
