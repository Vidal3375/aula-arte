/* =====================================================================
   ACTIVIDAD: EL ARTE ISLÁMICO EN AL-ÁNDALUS Y EL ARTE MUDÉJAR
   ---------------------------------------------------------------------
   Este archivo contiene TODO el contenido de la actividad.
   Puedes editarlo con cualquier editor de texto (o desde la web de GitHub).

   - "obras": las 4 obras del listado PAU y 2 extras (torre de San Martín
     y Santa Sofía). Con ellas la app crea sola las preguntas con imágenes.
     "nota" (opcional) aparece en la ficha de la obra.
   - "preguntas": preguntas de texto. Para añadir una, copia un bloque
     { ... }, pégalo debajo y cambia el texto. Fíjate en las comas.

   Temas posibles de una pregunta: "estilo", "etapas", "contexto".
   "esquema" (opcional) muestra un dibujo AL CORREGIR.
   "imagen" (opcional) muestra un dibujo o una foto JUNTO A LA PREGUNTA.
   Los dos usan los nombres de la lista "esquemas" de abajo.

   Fuentes: resumen «El arte islámico y mudéjar» y presentación de
   comentarios de las obras (15/11/2026), que citan el borrador del
   profesor, Wikipedia (es/en) y la UNESCO. No se han usado los datos
   que esos documentos marcan como dudosos o sin comprobar.
   ===================================================================== */

window.ACTIVIDADES = window.ACTIVIDADES || {};

window.ACTIVIDADES["arte-islamico"] = {
  titulo: "El arte islámico y mudéjar",
  subtitulo: "Historia del Arte · 2.º Bachillerato · PAU",
  carpetaImagenes: "img/islamico/",
  portada: "mezquita-cordoba",

  descModos: {
    etapas: "Emirato, califato, taifas, almohades, nazaríes, mudéjar",
    estilo: "Arcos, cubiertas, decoración, la mezquita…",
    contexto: "Al-Ándalus, omeyas, taifas, 1492…"
  },

  periodos: [
    "Emirato y califato omeya",
    "Reinos de taifas",
    "Almohade",
    "Nazarí",
    "Mudéjar",
    "Bizantino"
  ],
  periodosBasicos: [
    "Emirato y califato omeya",
    "Reinos de taifas",
    "Almohade",
    "Nazarí",
    "Mudéjar",
    "Bizantino"
  ],

  autoresExtra: ["Hernán Ruiz I", "Quinto Pierres Vedel", "Ibn Zamrak"],

  esquemas: {
    arcos: {
      img: "img/esquemas-islamico/arcos.jpg", titulo: "Los arcos",
      pie: "Los arcos del arte hispanomusulmán: herradura califal, polilobulado, herradura apuntada y arcos entrecruzados.",
      credito: "Dibujo de elaboración propia."
    },
    mezquita: {
      img: "img/esquemas-islamico/mezquita.jpg", titulo: "Esquema de la mezquita",
      pie: "Esquema de la mezquita: patio (sahn) con fuente de abluciones, sala de oración (haram), muro de la quibla, mihrab, mimbar y macsura.",
      credito: "Dibujo de elaboración propia."
    },
    "planta-cordoba": {
      img: "img/esquemas-islamico/planta-cordoba.jpg", titulo: "Planta de la Mezquita de Córdoba",
      pie: "Mezquita de Córdoba, las cinco etapas en colores. 1 patio · 2 alminar · 3 sala de oración · 4 puerta de San Esteban · 5 capilla de Villaviciosa · 6 macsura · 7 mihrab · 8 muro de la quibla.",
      credito: "Esquema propio según el plano de Azahara22 y R Prazeres (Wikimedia Commons, CC BY-SA 4.0).",
      url: "https://commons.wikimedia.org/wiki/File:Plano_de_la_Mezquita_de_C%C3%B3rdoba_(revised_with_labels_and_dates).jpg"
    },
    "planta-aljaferia": {
      img: "img/esquemas-islamico/planta-aljaferia.jpg", titulo: "Planta de la Aljafería",
      pie: "Aljafería. 1 foso · 2 recinto con torreones · 3 torre del Trovador · 4 patio de Santa Isabel · 5 pórtico norte y Salón Dorado · 6 pórtico sur · 7 oratorio (posición aproximada) · 8 entrada · 9 baluartes (s. XVI).",
      credito: "Plano: Papix (Wikimedia Commons, CC BY-SA 4.0). Números añadidos.",
      url: "https://commons.wikimedia.org/wiki/File:Plano_Aljaferia224.png"
    },
    "planta-alhambra": {
      img: "img/esquemas-islamico/planta-alhambra.jpg", titulo: "Plano general de la Alhambra",
      pie: "La Alhambra. 1 Alcazaba · 2 Puerta de la Justicia · 3 Mexuar · 4 Palacio de Comares · 5 Palacio de los Leones · 6 Palacio de Carlos V · 7 Partal · 8 Iglesia de Santa María · 9 Generalife.",
      credito: "Plano: R Prazeres (Wikimedia Commons, CC BY-SA 4.0). Números añadidos.",
      url: "https://commons.wikimedia.org/wiki/File:Alhambra_general_plan_(blank).png"
    },
    "planta-nazaries": {
      img: "img/esquemas-islamico/planta-nazaries.jpg", titulo: "Plano de los Palacios Nazaríes",
      pie: "Palacios Nazaríes. Verde: Mexuar · naranja: Palacio de Comares (4 Patio de los Arrayanes, 7 Salón de Embajadores) · azul: Palacio de los Leones (18 patio y fuente, 20 Sala de las Dos Hermanas, 23 Sala de los Abencerrajes).",
      credito: "Plano: Constantin Uhde (según R. Contreras), Wikimedia Commons, dominio público. Colores añadidos.",
      url: "https://commons.wikimedia.org/wiki/File:116_Tafel_6_Grenada_Alhambra_-_Plano_del_Palacio_Arabe.jpg"
    },
    "doble-arqueria": {
      img: "img/esquemas-islamico/doble-arqueria.jpg", titulo: "Doble arquería de la Mezquita de Córdoba",
      pie: "Doble arquería de la Mezquita de Córdoba: herradura abajo, medio punto arriba, y dovelas rojas y blancas.",
      credito: "Foto: PerryPlanet · dominio público · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Mezquita_arches_cordoba.jpg"
    },
    "cupula-macsura": {
      img: "img/esquemas-islamico/cupula-macsura.jpg", titulo: "Cúpula de la macsura (Córdoba)",
      pie: "Cúpula de la macsura de Córdoba: nervios que se cruzan sin pasar por el centro, formando una estrella, y mosaicos dorados.",
      credito: "Foto: Ruggero Poggianella · CC BY-SA 2.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Cordoba,_la_Mezquita_-_C%C3%BApula_de_la_Maqsura_(cropped).jpg"
    },
    "mihrab-cordoba": {
      img: "img/esquemas-islamico/mihrab-cordoba.jpg", titulo: "Mihrab de la Mezquita de Córdoba",
      pie: "Mihrab de Alhakén II (Córdoba): arco de herradura con alfiz, mosaicos de tradición bizantina e inscripciones cúficas.",
      credito: "Foto: Jebulon · dominio público · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Mirhab_mezquita_cordoba.jpg"
    },
    "salon-dorado": {
      img: "img/esquemas-islamico/salon-dorado.jpg", titulo: "Salón Dorado de la Aljafería",
      pie: "Salón Dorado de la Aljafería y su pórtico: arcos mixtilíneos y polilobulados que se multiplican como una celosía.",
      credito: "Foto: Américo Toledano · CC BY-SA 4.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Aljafer%C3%ADa_-_Sal%C3%B3n_Dorado_001.jpg"
    },
    "arco-mixtilineo": {
      img: "img/esquemas-islamico/arco-mixtilineo.jpg", titulo: "Arco mixtilíneo de la Aljafería",
      pie: "Arco mixtilíneo de la Aljafería: tramos rectos y curvos, con ataurique y lacería en yeso.",
      credito: "Foto: José Luis Filpo Cabana · CC BY 4.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Arco_mixtil%C3%ADneo,_Palacio_de_la_Aljafer%C3%ADa_(Zaragoza).jpg"
    },
    "mihrab-aljaferia": {
      img: "img/esquemas-islamico/mihrab-aljaferia.jpg", titulo: "Mihrab del oratorio de la Aljafería",
      pie: "Mihrab del oratorio de la Aljafería: arco de herradura en el ángulo sureste, orientado hacia La Meca.",
      credito: "Foto: José Luis Filpo Cabana · CC BY 4.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Mihrab_del_oratorio_de_la_Aljafer%C3%ADa_(Zaragoza).jpg"
    },
    arrayanes: {
      img: "img/esquemas-islamico/arrayanes.jpg", titulo: "Patio de los Arrayanes (Alhambra)",
      pie: "Patio de los Arrayanes (Palacio de Comares, Alhambra): la alberca refleja los pórticos.",
      credito: "Foto: Jebulon · CC0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Patio_de_los_Arrayanes_Alhambra_Granada_Spain.jpg"
    },
    "dos-hermanas": {
      img: "img/esquemas-islamico/dos-hermanas.jpg", titulo: "Sala de las Dos Hermanas (Alhambra)",
      pie: "Sala de las Dos Hermanas (Alhambra): cúpula de mocárabes de unos 8 m, con al menos 5.000 piezas.",
      credito: "Foto: José Luis Filpo Cabana · CC BY-SA 4.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:C%C3%BApula_de_la_sala_de_las_Dos_Hermanas_(Alhambra,_Granada).jpg"
    },
    embajadores: {
      img: "img/esquemas-islamico/embajadores.jpg", titulo: "Salón de Embajadores (Alhambra)",
      pie: "Salón de Embajadores: el gran salón del Palacio de Comares (Alhambra), con muros cubiertos de yeserías.",
      credito: "Foto: Yair Haklai · CC BY-SA 4.0 · Wikimedia Commons.",
      url: "https://commons.wikimedia.org/wiki/File:Sal%C3%B3n_de_Embajadores,_Alhambra.jpg"
    }
  },

  obras: [
    {
      id: "mezquita-cordoba", nombre: "Mezquita de Córdoba", tipo: "arquitectura",
      autor: "Desconocido (promotores: Abderramán I, Abderramán II, Abderramán III, Alhakén II y Almanzor)", autorCorto: null,
      fecha: "785-988", periodo: "Emirato y califato omeya", lugar: "Córdoba",
      rasgo: "Sala hipóstila con doble arquería (herradura y medio punto) y dovelas bicolores",
      clave: "Un bosque de columnas que crece con cada emir.",
      img: "mezquita-cordoba.jpg",
      foto: { autor: "PerryPlanet", licencia: "Dominio público", url: "https://commons.wikimedia.org/wiki/File:Mezquita_arches_cordoba.jpg" }
    },
    {
      id: "aljaferia", nombre: "Aljafería de Zaragoza", tipo: "arquitectura",
      autor: "Atribuida a Al-Halifa Zuhayr (no es seguro); promotor: Al-Muqtadir", autorCorto: null,
      fecha: "h. 1065-1081", periodo: "Reinos de taifas", lugar: "Zaragoza",
      rasgo: "Arcos mixtilíneos, polilobulados y entrecruzados de yeso que forman celosías",
      clave: "Arcos que ya no sostienen: decoran.",
      img: "aljaferia.jpg",
      foto: { autor: "José Luis Filpo Cabana", licencia: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Fachada_del_p%C3%B3rtico_sur,_Patio_de_Sta._Isabel_(Aljafer%C3%ADa).jpg" }
    },
    {
      id: "giralda", nombre: "Giralda de Sevilla", tipo: "arquitectura",
      autor: "Ahmad ibn Baso (inicio) y Alí de Gomara; campanario renacentista de Hernán Ruiz II", autorCorto: "Ahmad ibn Baso y Alí de Gomara",
      fecha: "1184-1198 (alminar)", periodo: "Almohade", lugar: "Sevilla",
      rasgo: "Alminar de planta cuadrada y ladrillo, con rampas interiores y paños de sebka",
      clave: "La austeridad almohade hecha torre.",
      img: "giralda.jpg",
      foto: { autor: "Diliff", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:La_Giralda,_Seville,_Spain_-_Sep_2009.jpg" }
    },
    {
      id: "alhambra", nombre: "La Alhambra de Granada", tipo: "arquitectura",
      autor: "Desconocido (promotores: Muhammad I, Yusuf I y Muhammad V)", autorCorto: null,
      fecha: "Desde 1238; palacios del s. XIV", periodo: "Nazarí", lugar: "Granada",
      rasgo: "Patios con agua, columnas muy finas, yeserías y cúpulas de mocárabes",
      clave: "La última y más rica palabra del arte andalusí.",
      img: "alhambra.jpg",
      foto: { autor: "Jebulon", licencia: "CC0 (dominio público)", url: "https://commons.wikimedia.org/wiki/File:Fountain_patio_de_los_Leones_Alhambra_Granada_Spain.jpg" }
    },
    {
      id: "torre-san-martin", nombre: "Torre de San Martín (Teruel)", tipo: "arquitectura",
      autor: "Desconocido; reforma de Quinto Pierres Vedel (1549-1551)", autorCorto: null,
      fecha: "1315-1316", periodo: "Mudéjar", lugar: "Teruel",
      rasgo: "Torre de ladrillo con cerámica vidriada y estructura de alminar almohade",
      clave: "Arte cristiano con técnicas islámicas: el ladrillo se convierte en ornamento.",
      nota: "Obra extra: no está en la selección de obras de la PAU. Sirve para entender el arte mudéjar.",
      img: "torre-san-martin.jpg",
      foto: { autor: "Malopez 21", licencia: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Teruel,_Torre_de_San_Mart%C3%ADn,_desde_la_plaza_de_P%C3%A9rez_Prado.jpg" }
    },
    {
      id: "santa-sofia", nombre: "Santa Sofía de Constantinopla", tipo: "arquitectura",
      autor: "Antemio de Tralles e Isidoro de Mileto", autorCorto: "Antemio de Tralles e Isidoro de Mileto",
      fecha: "532-537", periodo: "Bizantino", lugar: "Estambul (Turquía)",
      rasgo: "Gran cúpula sobre pechinas, con 40 ventanas en su base",
      clave: "La cúpula que parece flotar: el modelo de las grandes mezquitas otomanas.",
      nota: "Obra extra: no es arte islámico, sino bizantino. Se incluye porque influyó en el arte islámico y fue mezquita durante siglos.",
      img: "santa-sofia.jpg",
      foto: { autor: "Arild Vågen", licencia: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg" }
    }
  ],

  preguntas: [

    /* ============ CONTEXTO HISTÓRICO ============ */
    {
      tema: "contexto", nivel: "basico",
      texto: "¿En qué año vencieron los musulmanes al rey visigodo Rodrigo en Guadalete?",
      correcta: "711",
      incorrectas: ["756", "929", "1031"],
      explicacion: "En 711 los musulmanes, al mando del bereber Tariq, vencieron a Rodrigo en Guadalete y en pocos años dominaron casi toda la península."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué nombre dieron los musulmanes al territorio de la península que dominaban?",
      correcta: "Al-Ándalus",
      incorrectas: ["Hispania", "Magreb", "Bizancio"],
      explicacion: "Llamaron al-Ándalus a este territorio. La presencia musulmana duró casi ocho siglos."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿En qué año conquistaron Granada los Reyes Católicos?",
      correcta: "1492",
      incorrectas: ["1212", "1236", "1031"],
      explicacion: "La conquista de Granada en 1492 puso fin a casi ocho siglos de presencia musulmana en la península."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué era un mudéjar?",
      correcta: "Un musulmán que vivía en un reino cristiano",
      incorrectas: ["Un cristiano que vivía en al-Ándalus", "Un bereber del norte de África", "Un rey de una taifa"],
      explicacion: "«Mudéjar» viene del árabe mudayyan, «aquel a quien se ha permitido quedarse». También se llama así al arte cristiano hecho con técnicas islámicas."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué ciudad fue la capital del califato en el siglo X?",
      correcta: "Córdoba",
      incorrectas: ["Sevilla", "Granada", "Zaragoza"],
      explicacion: "Córdoba fue capital del califato desde 929. Las ampliaciones de su mezquita acompañan el crecimiento de la ciudad."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Cuál fue el último reino de al-Ándalus?",
      correcta: "El reino nazarí de Granada",
      incorrectas: ["La taifa de Zaragoza", "El califato de Córdoba", "El imperio almohade"],
      explicacion: "El reino nazarí (1238-1492) sobrevivió más de dos siglos, cuando el resto de al-Ándalus ya había caído en manos cristianas."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué institución tiene hoy su sede en la Aljafería de Zaragoza?",
      correcta: "Las Cortes de Aragón",
      incorrectas: ["El Ayuntamiento de Zaragoza", "La Universidad de Zaragoza", "El Museo de Bellas Artes"],
      explicacion: "Tras ser palacio taifa, palacio de los reyes de Aragón, sede de la Inquisición y cuartel, hoy acoge las Cortes de Aragón."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Qué es hoy la Giralda?",
      correcta: "El campanario de la catedral de Sevilla",
      incorrectas: ["El alminar de una mezquita en uso", "Una torre de la muralla de Sevilla", "Un faro del puerto de Sevilla"],
      explicacion: "Era el alminar de la mezquita mayor almohade. Tras la conquista cristiana se conservó como campanario de la catedral."
    },
    {
      tema: "contexto", nivel: "basico",
      texto: "¿Por qué el arte de al-Ándalus mezcla tradiciones romanas, visigodas, bizantinas y orientales?",
      correcta: "Porque los árabes no tenían tradición arquitectónica propia y tomaron lo que encontraron",
      incorrectas: ["Porque lo hicieron arquitectos traídos de Roma", "Porque la religión obligaba a copiar edificios cristianos", "Porque los visigodos siguieron gobernando al-Ándalus"],
      explicacion: "Los árabes eran nómadas: de Roma tomaron columnas y dovelas bicolores, de los visigodos el arco de herradura y de Bizancio cúpulas y mosaicos."
    },

    {
      tema: "contexto", nivel: "normal",
      texto: "¿Quién creó en 756 un emirato independiente en Córdoba?",
      correcta: "Abderramán I",
      incorrectas: ["Abderramán III", "Alhakén II", "Almanzor"],
      explicacion: "Abderramán I, superviviente de la dinastía omeya derrocada en Damasco, creó el emirato independiente y fundó la Mezquita de Córdoba en 785."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Quién se proclamó califa en 929?",
      correcta: "Abderramán III",
      incorrectas: ["Abderramán I", "Alhakén II", "Al-Muqtadir"],
      explicacion: "Con el califato de Córdoba (929-1031) llegó el máximo esplendor político y cultural de al-Ándalus."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué pasó en al-Ándalus tras la desaparición del califato en 1031?",
      correcta: "Se dividió en reinos de taifas",
      incorrectas: ["Lo conquistaron los Reyes Católicos", "Lo unificó el reino nazarí", "Pasó a depender de Damasco"],
      explicacion: "Los reinos de taifas eran independientes y competían entre sí copiando el lujo de la corte cordobesa."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Quién mandó construir la Aljafería?",
      correcta: "Al-Muqtadir, rey de la taifa de Zaragoza",
      incorrectas: ["Abderramán III, califa de Córdoba", "Muhammad V, sultán nazarí", "Abu Yaqub Yusuf, califa almohade"],
      explicacion: "Al-Muqtadir, de la dinastía de los Banu Hud, la hizo construir h. 1065-1081 como símbolo de su poder."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Quiénes eran los almohades?",
      correcta: "Un movimiento bereber de gran rigor religioso",
      incorrectas: ["Una dinastía omeya llegada de Damasco", "Los reyes nazaríes de Granada", "Los musulmanes que vivían en reinos cristianos"],
      explicacion: "Unificaron el Magreb y al-Ándalus en el siglo XII. Su rigor religioso explica un arte austero."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué ciudad eligieron los almohades como capital en la península?",
      correcta: "Sevilla",
      incorrectas: ["Córdoba", "Granada", "Toledo"],
      explicacion: "Por eso construyeron en Sevilla su mezquita mayor, de la que se conserva el alminar: la Giralda."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿En qué batalla fueron derrotados los almohades en 1212?",
      correcta: "Las Navas de Tolosa",
      incorrectas: ["Guadalete", "Covadonga", "Alarcos"],
      explicacion: "La derrota almohade en las Navas de Tolosa (1212) marca el final de esta etapa en al-Ándalus."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿A quién pidió Alhakén II mosaístas para el mihrab de Córdoba?",
      correcta: "Al emperador bizantino",
      incorrectas: ["Al califa de Damasco", "Al rey de Aragón", "Al papa de Roma"],
      explicacion: "Con los mosaicos bizantinos quería vincularse con los omeyas de Damasco, que también los habían usado."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué rey conquistó Córdoba en 1236 y consagró la mezquita como catedral?",
      correcta: "Fernando III",
      incorrectas: ["Alfonso VI", "Jaime I", "Fernando el Católico"],
      explicacion: "Tras la conquista de Fernando III (1236) la mezquita se consagró como catedral."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué emperador levantó un palacio renacentista en la Alhambra?",
      correcta: "Carlos V",
      incorrectas: ["Felipe II", "Justiniano", "Pedro I"],
      explicacion: "Tras la conquista de Granada (1492), Carlos V levantó su palacio renacentista desde 1533."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué escritor romántico hizo famosa la Alhambra con sus «Cuentos»?",
      correcta: "Washington Irving",
      incorrectas: ["Gustavo Adolfo Bécquer", "Lord Byron", "Victor Hugo"],
      explicacion: "Los viajeros románticos, como Washington Irving (Cuentos de la Alhambra), la hicieron famosa."
    },
    {
      tema: "contexto", nivel: "normal",
      texto: "¿Qué ocurrió con Santa Sofía en 1453?",
      correcta: "Los otomanos la convirtieron en mezquita",
      incorrectas: ["Se hundió su cúpula", "Se convirtió en museo", "Justiniano la inauguró"],
      explicacion: "Mehmed II conquistó Constantinopla: se añadieron minaretes y un mihrab y se taparon las imágenes."
    },

    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Desde cuándo se construye un crucero renacentista dentro de la Mezquita de Córdoba?",
      correcta: "Desde 1523",
      incorrectas: ["Desde 1236", "Desde 1492", "Desde 1984"],
      explicacion: "El crucero renacentista, de Hernán Ruiz I, se levantó en el centro de la mezquita desde 1523."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué usos tuvo la Aljafería después de ser palacio taifa?",
      correcta: "Palacio de los reyes de Aragón, sede de la Inquisición y cuartel",
      incorrectas: ["Mezquita, catedral y museo", "Universidad, hospital y cárcel", "Monasterio, biblioteca y ayuntamiento"],
      explicacion: "Fue palacio de Pedro IV (s. XIV) y de los Reyes Católicos (1488-1495), sede de la Inquisición y cuartel. Se restauró desde 1947."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Quién dirigió la restauración de la Aljafería desde 1947?",
      correcta: "Francisco Íñiguez",
      incorrectas: ["Hernán Ruiz II", "Quinto Pierres Vedel", "Constantin Uhde"],
      explicacion: "La restauración empezó en 1947 con Francisco Íñiguez. Hoy es sede de las Cortes de Aragón."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Cuándo construyó Muhammad V el Palacio de los Leones?",
      correcta: "Tras recuperar el trono en 1362",
      incorrectas: ["Justo después de la conquista de Granada", "Durante el califato de Córdoba", "Tras la batalla de las Navas de Tolosa"],
      explicacion: "El Palacio de los Leones es de su segundo reinado, 1362-1391."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué se hizo con la mezquita mayor almohade de Sevilla tras la conquista cristiana?",
      correcta: "Se demolió para construir la catedral gótica, pero se conservó el alminar",
      incorrectas: ["Se conservó entera como catedral", "Se convirtió en palacio real", "Se abandonó y se arruinó con el alminar"],
      explicacion: "El alminar se convirtió en campanario; Hernán Ruiz II le añadió el cuerpo de campanas renacentista (1558-1568)."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué significa la palabra árabe mudayyan, de la que viene «mudéjar»?",
      correcta: "Aquel a quien se ha permitido quedarse",
      incorrectas: ["El que vive junto al río", "El que construye con ladrillo", "El que viene del norte de África"],
      explicacion: "Los mudéjares eran musulmanes a los que se permitió quedarse en los reinos cristianos."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "Según la UNESCO, ¿de qué es fruto el arte mudéjar?",
      correcta: "De la convivencia de cristianos, musulmanes y judíos",
      incorrectas: ["De la influencia de los arquitectos bizantinos", "De la llegada de los almohades", "De la imitación del arte romano"],
      explicacion: "En un mismo edificio mudéjar conviven elementos románicos o góticos e islámicos."
    },
    {
      tema: "contexto", nivel: "extremo",
      texto: "¿Qué ha sido Santa Sofía desde 1935?",
      correcta: "Museo desde 1935 y de nuevo mezquita desde 2020",
      incorrectas: ["Catedral desde 1935 y museo desde 2020", "Mezquita desde 1935 y museo desde 2020", "Siempre ha sido museo desde 1935"],
      explicacion: "Fue iglesia bizantina, mezquita otomana desde 1453, museo desde 1935 y volvió a ser mezquita en 2020."
    },

    /* ============ ETAPAS ============ */
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Cuál es el orden de las etapas de al-Ándalus?",
      correcta: "Emirato, califato, taifas, almorávides y almohades, nazaríes",
      incorrectas: ["Califato, emirato, nazaríes, taifas, almohades", "Taifas, emirato, califato, nazaríes, almohades", "Emirato, nazaríes, califato, almohades, taifas"],
      explicacion: "Emirato (711-929), califato (929-1031), taifas (1031-1090), almorávides y almohades (1090-1212) y reino nazarí (1238-1492)."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué etapa del arte andalusí es la más austera?",
      correcta: "La almohade",
      incorrectas: ["La nazarí", "La califal", "La taifa"],
      explicacion: "El rigor religioso de los almohades se traduce en un arte austero: ladrillo, grandes superficies lisas y decoración geométrica."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué etapa se caracteriza por una riqueza decorativa extrema?",
      correcta: "La nazarí",
      incorrectas: ["La almohade", "El emirato", "La mudéjar"],
      explicacion: "El reino nazarí de Granada, último de al-Ándalus, culmina en la Alhambra."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿En qué etapa se construyó la Aljafería de Zaragoza?",
      correcta: "Reinos de taifas",
      incorrectas: ["Califato de Córdoba", "Almohade", "Nazarí"],
      explicacion: "Es la obra más importante del arte taifa (siglo XI)."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué es el arte mudéjar?",
      correcta: "Arte hecho en los reinos cristianos con técnicas y gustos islámicos",
      incorrectas: ["Arte hecho por cristianos en al-Ándalus", "El arte de los almohades en el norte de África", "El arte de los últimos reyes nazaríes"],
      explicacion: "En un mismo edificio conviven elementos románicos o góticos e islámicos."
    },
    {
      tema: "etapas", nivel: "basico",
      texto: "¿Qué emir fundó la Mezquita de Córdoba en 785?",
      correcta: "Abderramán I",
      incorrectas: ["Alhakén II", "Almanzor", "Abderramán III"],
      explicacion: "Abderramán I la fundó en 785; los demás la ampliaron.",
      esquema: "planta-cordoba"
    },

    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué fechas tiene el califato de Córdoba?",
      correcta: "929-1031",
      incorrectas: ["711-929", "1031-1090", "1238-1492"],
      explicacion: "Empieza cuando Abderramán III se proclama califa (929) y termina cuando el califato se rompe en taifas (1031)."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Quién amplió la Mezquita de Córdoba con el mihrab y la macsura?",
      correcta: "Alhakén II",
      incorrectas: ["Abderramán I", "Abderramán II", "Almanzor"],
      explicacion: "La ampliación de Alhakén II (desde 961; mihrab y macsura h. 961-971) es el momento culminante de la etapa califal.",
      esquema: "planta-cordoba"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué añadió Almanzor a la Mezquita de Córdoba?",
      correcta: "Ocho naves al este",
      incorrectas: ["El mihrab", "El alminar", "El crucero renacentista"],
      explicacion: "Con la ampliación de Almanzor (987-988) la sala de oración llegó a 19 naves.",
      esquema: "planta-cordoba"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué aportó Abderramán III a la Mezquita de Córdoba?",
      correcta: "Un nuevo alminar y el patio ampliado al norte",
      incorrectas: ["El mihrab y la macsura", "Ocho naves al este", "La primera sala de 11 naves"],
      explicacion: "El alminar de Abderramán III (951-952) está hoy dentro de la torre cristiana.",
      esquema: "planta-cordoba"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cuántas naves llegó a tener la sala de oración de la Mezquita de Córdoba?",
      correcta: "19",
      incorrectas: ["11", "7", "35"],
      explicacion: "De las 11 naves de Abderramán I pasó a 19 tras la ampliación de Almanzor.",
      esquema: "planta-cordoba"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué califa almohade ordenó empezar la Giralda en 1184?",
      correcta: "Abu Yaqub Yusuf",
      incorrectas: ["Abderramán III", "Muhammad V", "Al-Muqtadir"],
      explicacion: "La empezó Ahmad ibn Baso, la continuó Alí de Gomara y se terminó en 1198, con Abu Yusuf al-Mansur."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué palacio de la Alhambra construyó Muhammad V entre 1362 y 1391?",
      correcta: "El Palacio de los Leones",
      incorrectas: ["El Palacio de Comares", "La Alcazaba", "El Palacio de Carlos V"],
      explicacion: "El Palacio de Comares (Yusuf I y Muhammad V) se terminó en 1370; el de los Leones es de 1362-1391.",
      esquema: "planta-nazaries"
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Cuándo se añadió el cuerpo de campanas renacentista a la Giralda?",
      correcta: "1558-1568",
      incorrectas: ["1184-1198", "1356", "1248"],
      explicacion: "Lo hizo Hernán Ruiz II y lo remata el Giraldillo (Bartolomé Morel, 1568), que da nombre a la torre."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿Qué estilos posteriores anuncia la Aljafería?",
      correcta: "El almohade y el nazarí, y fue fuente del mudéjar aragonés",
      incorrectas: ["El califal y el emiral", "El románico y el bizantino", "Solo el renacentista"],
      explicacion: "Lleva a un virtuosismo decorativo nuevo los arcos de la macsura de Córdoba."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "Según la UNESCO, ¿entre qué siglos se desarrolla el arte mudéjar?",
      correcta: "Del siglo XII a inicios del XVII",
      incorrectas: ["Del siglo VIII al X", "Solo en el siglo XV", "Del siglo XVIII al XIX"],
      explicacion: "La UNESCO sitúa su origen en Aragón en el siglo XII y lo prolonga hasta inicios del XVII."
    },
    {
      tema: "etapas", nivel: "normal",
      texto: "¿De qué etapa es la Torre de San Martín de Teruel (1315-1316)?",
      correcta: "Mudéjar aragonés",
      incorrectas: ["Almohade", "Califal", "Nazarí"],
      explicacion: "Une una estructura de alminar almohade con elementos góticos. Es del siglo XIV."
    },

    {
      tema: "etapas", nivel: "extremo",
      texto: "¿En qué año empieza el emirato independiente de Córdoba?",
      correcta: "756",
      incorrectas: ["711", "785", "929"],
      explicacion: "En 756 Abderramán I creó un emirato independiente. (El borrador dice 755.)"
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué fechas tienen los reinos de taifas en el resumen de clase?",
      correcta: "1031-1090",
      incorrectas: ["929-1031", "1090-1212", "1238-1492"],
      explicacion: "Después llegan los imperios bereberes del norte de África: almorávides y almohades (1090-1212)."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué parte de la Aljafería es anterior al palacio taifa?",
      correcta: "La torre del Trovador",
      incorrectas: ["El Salón Dorado", "El oratorio", "Los baluartes pentagonales"],
      explicacion: "La torre del Trovador es de los siglos IX o X. Los baluartes son de la fortificación del siglo XVI.",
      esquema: "planta-aljaferia"
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Cuál es la zona más antigua de la Alhambra?",
      correcta: "La Alcazaba (Torre de la Vela, 1238-1279)",
      incorrectas: ["El Palacio de los Leones", "El Palacio de Comares", "El Palacio de Carlos V"],
      explicacion: "La Alcazaba es la zona militar y la más antigua del conjunto.",
      esquema: "planta-alhambra"
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Cuándo derribó un terremoto el yamur de cuatro bolas de la Giralda?",
      correcta: "En 1356",
      incorrectas: ["En 1198", "En 1558", "En 1492"],
      explicacion: "El yamur era el remate del alminar, formado por cuatro bolas doradas."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿De cuándo es la sinagoga del Tránsito de Toledo?",
      correcta: "1355-1357 (siglo XIV)",
      incorrectas: ["Siglo XII", "Siglo XV", "Siglo X"],
      explicacion: "Es un ejemplo del mudéjar toledano. El borrador la sitúa en el siglo XV, pero es del XIV."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿De cuándo es el palacio de Pedro I en el Alcázar de Sevilla?",
      correcta: "1356-1364",
      incorrectas: ["1184-1198", "1065-1081", "1523-1533"],
      explicacion: "Es el gran ejemplo del mudéjar andaluz: estructura gótica y decoración de tradición nazarí."
    },
    {
      tema: "etapas", nivel: "extremo",
      texto: "¿Qué le pasó a la cúpula de Santa Sofía en 558?",
      correcta: "Se hundió y la rehízo Isidoro el Joven (562)",
      incorrectas: ["Se cubrió de mosaicos otomanos", "Se rodeó de minaretes", "Se desmontó para llevarla a Rávena"],
      explicacion: "La iglesia se construyó en 532-537; la cúpula actual es la reconstruida en 562."
    },

    /* ============ RASGOS DE ESTILO ============ */
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es el mihrab?",
      correcta: "Un nicho o pequeña sala en el muro de la quibla",
      incorrectas: ["La torre desde la que se llama a la oración", "El púlpito del imán", "El patio de la mezquita"],
      explicacion: "Indica hacia dónde se reza. La torre es el alminar; el púlpito, el mimbar; el patio, el sahn.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es el alminar?",
      correcta: "La torre de la mezquita desde la que se llama a la oración",
      incorrectas: ["La sala de oración", "El muro orientado a La Meca", "La fuente de las abluciones"],
      explicacion: "También se llama minarete. El ejemplo más famoso de al-Ándalus es la Giralda.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es la quibla?",
      correcta: "El muro de la mezquita orientado hacia La Meca",
      incorrectas: ["El remate de bolas del alminar", "El espacio reservado al soberano", "La decoración vegetal de yeso"],
      explicacion: "En el muro de la quibla se abre el mihrab. Las naves de la sala de oración son perpendiculares a él.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es el sahn?",
      correcta: "El patio de la mezquita, con la fuente de abluciones",
      incorrectas: ["La sala de oración", "El púlpito", "La torre"],
      explicacion: "En el patio está la fuente de abluciones (sabil), para purificarse antes de rezar.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿De qué tradición toma el arte islámico el arco de herradura?",
      correcta: "De la visigoda",
      incorrectas: ["De la bizantina", "De la romana", "De la persa"],
      explicacion: "Es un arco que supera la media circunferencia: sus extremos se cierran hacia dentro.",
      esquema: "arcos"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué tomó el arte islámico de Bizancio?",
      correcta: "Las cúpulas y los mosaicos",
      incorrectas: ["El arco de herradura", "Las columnas y las dovelas bicolores", "El arco apuntado y el lobulado"],
      explicacion: "De Roma tomó columnas y dovelas bicolores; de los visigodos, el arco de herradura; del Próximo Oriente, los arcos apuntado y lobulado."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Por qué la escultura es casi inexistente en el arte islámico?",
      correcta: "Porque en los espacios religiosos se evitan las imágenes",
      incorrectas: ["Porque no había piedra en al-Ándalus", "Porque la prohibieron los visigodos", "Porque solo se hacían pinturas"],
      explicacion: "Es un arte muy ligado a la religión. Por eso la pintura, el mosaico y el relieve sirven sobre todo para decorar."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es el ataurique?",
      correcta: "Decoración vegetal de hojas pequeñas, sobre todo en yeso",
      incorrectas: ["Decoración geométrica de líneas entrelazadas", "Escritura árabe de trazo anguloso", "Prismas de yeso que cuelgan del techo"],
      explicacion: "La decoración geométrica es la lacería; la escritura, la cúfica; los prismas que cuelgan, los mocárabes."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué es la lacería?",
      correcta: "Decoración geométrica de líneas que se entrelazan formando estrellas y polígonos",
      incorrectas: ["Decoración vegetal de hojas pequeñas", "Un techo plano de madera", "Un arco con varios lóbulos"],
      explicacion: "Es uno de los cuatro tipos de motivos: geométricos, vegetales, arabescos y caligráficos."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Cómo son en general los materiales de la arquitectura islámica?",
      correcta: "Pobres (ladrillo, yeso, madera), cubiertos por una rica decoración",
      incorrectas: ["Mármol y bronce, sin decorar", "Hormigón y sillares de granito", "Hierro y vidrio"],
      explicacion: "Es uno de los seis rasgos de la arquitectura islámica."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Cómo suelen ser el exterior y el interior de los edificios islámicos?",
      correcta: "Exterior austero e interior muy decorado",
      incorrectas: ["Exterior muy decorado e interior austero", "Los dos sin decoración", "Los dos cubiertos de esculturas"],
      explicacion: "La Aljafería es un buen ejemplo: exterior militar y austero, interior delicado."
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué son los mocárabes?",
      correcta: "Pequeños prismas de yeso o madera que cuelgan del techo como estalactitas",
      incorrectas: ["Columnas reaprovechadas de edificios romanos", "Azulejos de los zócalos", "Torres de las murallas"],
      explicacion: "Destacan en las cúpulas de la Alhambra, como la de la Sala de las Dos Hermanas.",
      esquema: "dos-hermanas"
    },
    {
      tema: "estilo", nivel: "basico",
      texto: "¿Qué tipo de decoración es la escritura cúfica?",
      correcta: "Caligráfica: escritura árabe de trazo anguloso",
      incorrectas: ["Vegetal", "Geométrica", "Figurativa"],
      explicacion: "Reproduce textos del Corán y poemas. Aparece, por ejemplo, en el mihrab de Córdoba.",
      esquema: "mihrab-cordoba"
    },
    {
      tema: "estilo", nivel: "basico",
      imagen: "doble-arqueria",
      texto: "¿Qué solución constructiva de la Mezquita de Córdoba ves en esta foto?",
      correcta: "La doble arquería: herradura abajo y medio punto arriba",
      incorrectas: ["Arcos mixtilíneos de yeso", "Una cúpula sobre pechinas", "Paños de sebka"],
      explicacion: "El arco de herradura inferior hace de entibo y el de medio punto superior sostiene la cubierta. Así se ganó altura con columnas cortas."
    },
    {
      tema: "estilo", nivel: "basico",
      imagen: "arrayanes",
      texto: "¿Qué patio de la Alhambra es este?",
      correcta: "El Patio de los Arrayanes",
      incorrectas: ["El Patio de los Leones", "El patio de Santa Isabel", "El Patio de los Naranjos"],
      explicacion: "Está en el Palacio de Comares: la alberca refleja los pórticos. El patio de Santa Isabel es de la Aljafería y el de los Naranjos, de Córdoba."
    },

    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es un arco polilobulado?",
      correcta: "Un arco cuyo intradós está formado por varios lóbulos",
      incorrectas: ["Un arco que combina tramos rectos y curvos", "Un arco que supera la media circunferencia", "Un arco que salta una columna"],
      explicacion: "El intradós es la cara interior del arco, la que se ve desde abajo.",
      esquema: "arcos"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué son los arcos entrecruzados?",
      correcta: "Arcos que se cruzan porque cada uno salta una columna",
      incorrectas: ["Arcos con dovelas de dos colores", "Dos arcos superpuestos, uno sobre otro", "Arcos con lóbulos en el intradós"],
      explicacion: "Aparecen en la macsura de Córdoba y, multiplicados, en la Aljafería.",
      esquema: "arcos"
    },
    {
      tema: "estilo", nivel: "normal",
      imagen: "arco-mixtilineo",
      texto: "¿Cómo se llama este tipo de arco de la Aljafería?",
      correcta: "Arco mixtilíneo",
      incorrectas: ["Arco de medio punto", "Arco apuntado", "Arco de herradura califal"],
      explicacion: "Combina tramos rectos y curvos. Lo rodean ataurique y lacería en yeso."
    },
    {
      tema: "estilo", nivel: "normal",
      imagen: "cupula-macsura",
      texto: "¿Qué tipo de cubierta es esta, de la macsura de Córdoba?",
      correcta: "Una bóveda nervada califal",
      incorrectas: ["Una cúpula de mocárabes", "Una cúpula sobre pechinas", "Un alfarje"],
      explicacion: "Sus nervios se cruzan sin pasar por el centro, forman una estrella y dejan allí una pequeña cúpula."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿De qué color son las dovelas bicolores de la Mezquita de Córdoba?",
      correcta: "Rojas (ladrillo) y blancas (piedra)",
      incorrectas: ["Azules (azulejo) y blancas (yeso)", "Doradas (mosaico) y negras (pizarra)", "Verdes (cerámica) y rojas (ladrillo)"],
      explicacion: "Las dovelas bicolores son una herencia romana.",
      esquema: "doble-arqueria"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Para qué sirvió la doble arquería de la Mezquita de Córdoba?",
      correcta: "Para ganar altura con columnas cortas",
      incorrectas: ["Para sostener una cúpula central", "Para separar la zona del soberano", "Solo para decorar"],
      explicacion: "El arco de herradura inferior hace de entibo y el de medio punto superior sostiene la cubierta de madera.",
      esquema: "doble-arqueria"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo es el mihrab de Alhakén II en Córdoba?",
      correcta: "Una pequeña sala cubierta con una cúpula en forma de concha",
      incorrectas: ["Un simple nicho sin decoración", "Una torre junto al patio", "Un púlpito de madera"],
      explicacion: "Su arco de herradura tiene alfiz, mosaicos de tradición bizantina e inscripciones cúficas.",
      esquema: "mihrab-cordoba"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué mezquita es el prototipo de la mezquita islámica?",
      correcta: "La de Damasco (Siria, h. 707)",
      incorrectas: ["La de Córdoba", "La Cúpula de la Roca de Jerusalén", "Santa Sofía de Constantinopla"],
      explicacion: "Otras mezquitas importantes son las de Kairuán (Túnez) y Córdoba."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Dónde está el origen constructivo de la mezquita?",
      correcta: "En las basílicas romanas y paleocristianas",
      incorrectas: ["En los templos griegos", "En los anfiteatros romanos", "En las pirámides egipcias"],
      explicacion: "Como la basílica, la mezquita es de planta rectangular y su sala de oración se divide en naves."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cómo se colocan las naves de la sala de oración respecto al muro de la quibla?",
      correcta: "Perpendiculares",
      incorrectas: ["Paralelas", "En diagonal", "En círculo"],
      explicacion: "Las naves llevan la mirada hacia el muro de la quibla, donde está el mihrab.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es la macsura?",
      correcta: "El espacio reservado al soberano delante del mihrab",
      incorrectas: ["El púlpito desde el que habla el imán", "La fuente de abluciones", "El remate del alminar"],
      explicacion: "Está separada por una celosía. La de Córdoba se cierra con arcos polilobulados entrecruzados.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es el mimbar?",
      correcta: "El púlpito desde el que el imán dirige la oración del viernes",
      incorrectas: ["El nicho que indica hacia dónde se reza", "La torre de la mezquita", "La sala de oración"],
      explicacion: "Está al lado del mihrab, en el muro de la quibla.",
      esquema: "mezquita"
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué función tienen los arcos de la Aljafería?",
      correcta: "Más decorativa que estructural",
      incorrectas: ["Sostienen grandes cúpulas de piedra", "Sirven de contrafuertes de la muralla", "Sostienen la doble arquería"],
      explicacion: "Los arcos se multiplican y se cruzan hasta formar una celosía de yeso.",
      esquema: "salon-dorado"
    },
    {
      tema: "estilo", nivel: "normal",
      imagen: "salon-dorado",
      texto: "¿De qué palacio es este pórtico de arcos mixtilíneos y polilobulados?",
      correcta: "De la Aljafería de Zaragoza",
      incorrectas: ["De la Alhambra de Granada", "Del Alcázar de Sevilla", "De Madinat al-Zahra"],
      explicacion: "Es el Salón Dorado o del trono, la zona noble del palacio."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué tiene la Giralda por dentro en lugar de escaleras?",
      correcta: "35 rampas",
      incorrectas: ["Una escalera de caracol", "Un ascensor de poleas", "Escaleras entre dos torres"],
      explicacion: "Las rampas rodean un núcleo central con cámaras. Las escaleras entre dos torres son de la Torre de San Martín."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es un paño de sebka?",
      correcta: "Una red de rombos formada por arcos ciegos entrecruzados",
      incorrectas: ["Un techo plano de madera", "Un zócalo de azulejos", "Un remate de bolas de metal"],
      explicacion: "Es típico del arte almohade (Giralda) y pasó al mudéjar (torres de Teruel)."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué simbolizan los cuatro canales de la fuente del Patio de los Leones?",
      correcta: "Los cuatro ríos del Paraíso, según la interpretación habitual",
      incorrectas: ["Los cuatro reinos de taifas", "Las cuatro etapas de al-Ándalus", "Los cuatro puntos cardinales de la muralla"],
      explicacion: "En la Alhambra, el agua y el jardín evocan el Paraíso."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Cuántos leones tiene la fuente del Patio de los Leones?",
      correcta: "Doce",
      incorrectas: ["Cuatro", "Ocho", "Dieciséis"],
      explicacion: "Son de mármol de Macael. La fuente lleva un poema de Ibn Zamrak."
    },
    {
      tema: "estilo", nivel: "normal",
      imagen: "embajadores",
      texto: "¿Qué sala de la Alhambra es esta?",
      correcta: "El Salón de Embajadores, del Palacio de Comares",
      incorrectas: ["La Sala de los Reyes, del Palacio de los Leones", "El Salón Dorado, de la Aljafería", "El mihrab de la mezquita de la Alhambra"],
      explicacion: "Es el gran salón del Palacio de Comares, con muros cubiertos de yeserías."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué materiales usa el arte mudéjar?",
      correcta: "Ladrillo para muros y pilares; yeso y madera para decorar",
      incorrectas: ["Mármol y bronce", "Sillares de granito sin argamasa", "Hormigón y mosaico de oro"],
      explicacion: "Las cubiertas son alfarjes (techos planos de madera) y armaduras de madera."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué es un alfarje?",
      correcta: "Un techo plano de madera con vigas labradas y pintadas",
      incorrectas: ["Una moldura rectangular que enmarca un arco", "Un recinto militar", "Una cúpula de gallones"],
      explicacion: "Es muy usado en el mudéjar. La moldura que enmarca el arco es el alfiz."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué foco del mudéjar destaca por sus torres con decoración exterior de ladrillo y cerámica vidriada?",
      correcta: "El aragonés",
      incorrectas: ["El castellanoleonés", "El toledano", "El andaluz"],
      explicacion: "Ejemplos: torres de San Martín y El Salvador (Teruel), San Pablo y la Magdalena (Zaragoza)."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué foco del mudéjar se conoce como «románico del ladrillo»?",
      correcta: "El castellanoleonés",
      incorrectas: ["El aragonés", "El toledano", "El andaluz"],
      explicacion: "Ábsides de ladrillo decorados con arcos ciegos y poca decoración: San Tirso y San Lorenzo (Sahagún), La Lugareja (Arévalo)."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué obra es del mudéjar andaluz?",
      correcta: "El palacio de Pedro I en el Alcázar de Sevilla",
      incorrectas: ["La sinagoga del Tránsito", "La torre de San Martín", "San Tirso de Sahagún"],
      explicacion: "Estructura gótica y decoración de tradición nazarí (yeserías, mocárabes). El Tránsito es toledano; San Martín, aragonés; San Tirso, castellanoleonés."
    },
    {
      tema: "estilo", nivel: "normal",
      texto: "¿Qué tipo de edificio destaca en el mudéjar toledano, además de las iglesias?",
      correcta: "Las sinagogas",
      incorrectas: ["Los anfiteatros", "Los acueductos", "Los alminares de mezquitas en uso"],
      explicacion: "Por ejemplo, Santa María la Blanca y la sinagoga del Tránsito."
    },

    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-cordoba",
      texto: "En esta planta de la Mezquita de Córdoba, ¿qué es el número 7?",
      correcta: "El mihrab",
      incorrectas: ["El alminar", "La puerta de San Esteban", "La capilla de Villaviciosa"],
      explicacion: "El mihrab de Alhakén II está en el muro de la quibla (8), con la macsura (6) delante."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-cordoba",
      texto: "En esta planta de la Mezquita de Córdoba, ¿qué es el número 2?",
      correcta: "El alminar",
      incorrectas: ["El mihrab", "La macsura", "El muro de la quibla"],
      explicacion: "Es el alminar de Abderramán III, que hoy está dentro de la torre renacentista."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-cordoba",
      texto: "¿Hacia dónde mira el muro de la quibla (8) de la Mezquita de Córdoba?",
      correcta: "Al sur, no hacia La Meca",
      incorrectas: ["Exactamente hacia La Meca, al sureste", "Al norte, hacia el río", "Al este, hacia Jerusalén"],
      explicacion: "Es un dato discutido: se debe a una tradición de al-Ándalus y el Magreb."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-aljaferia",
      texto: "En esta planta de la Aljafería, ¿qué es el número 4?",
      correcta: "El patio de Santa Isabel",
      incorrectas: ["La torre del Trovador", "El foso", "Los baluartes del siglo XVI"],
      explicacion: "El patio, con albercas y jardín, organiza el palacio. Al norte, el pórtico y el Salón Dorado (5); al sur, el pórtico sur (6)."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-aljaferia",
      texto: "En esta planta de la Aljafería, ¿qué es el número 3?",
      correcta: "La torre del Trovador",
      incorrectas: ["El oratorio", "El Salón Dorado", "La entrada principal"],
      explicacion: "Es anterior al palacio (siglos IX o X) y está en el lienzo norte."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-alhambra",
      texto: "En este plano de la Alhambra, ¿qué es el número 6?",
      correcta: "El Palacio de Carlos V",
      incorrectas: ["El Palacio de los Leones", "La Alcazaba", "El Generalife"],
      explicacion: "Es renacentista, desde 1533. En el plano, las construcciones cristianas o modernas van en gris."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-alhambra",
      texto: "En este plano de la Alhambra, ¿qué es el número 1?",
      correcta: "La Alcazaba",
      incorrectas: ["El Mexuar", "El Partal", "La Puerta de la Justicia"],
      explicacion: "Es la zona militar y la más antigua (Torre de la Vela, 1238-1279)."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-nazaries",
      texto: "En este plano de los Palacios Nazaríes, ¿qué palacio es la zona azul?",
      correcta: "El Palacio de los Leones",
      incorrectas: ["El Palacio de Comares", "El Mexuar", "El Palacio de Carlos V"],
      explicacion: "El 18 es el Patio de los Leones con su fuente; el 20, la Sala de las Dos Hermanas, y el 23, la de los Abencerrajes."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "planta-nazaries",
      texto: "En este plano de los Palacios Nazaríes, ¿qué es el número 4, en la zona naranja?",
      correcta: "El Patio de los Arrayanes",
      incorrectas: ["El Patio de los Leones", "La Sala de las Dos Hermanas", "El Salón Dorado"],
      explicacion: "Pertenece al Palacio de Comares; el 7 es el Salón de Embajadores. Se ordena en un eje largo con alberca."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cómo se organiza cada cara de la Giralda por encima del primer tramo liso?",
      correcta: "En tres calles: ventanas y balcones en la central, paños de sebka en las laterales",
      incorrectas: ["En cuatro pisos con superposición de órdenes", "En un friso helicoidal de relieves", "En cuerpos con platos de cerámica vidriada"],
      explicacion: "La decoración geométrica se integra en el muro y solo anima la parte alta, con un juego de luces y sombras."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Con qué alminares forma una familia la Giralda?",
      correcta: "Con la Kutubía de Marrakech y la torre Hasán de Rabat",
      incorrectas: ["Con la torre de San Martín y la de El Salvador", "Con los minaretes de Santa Sofía", "Con el alminar de Abderramán III en Córdoba"],
      explicacion: "Los tres son alminares almohades."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué tiene de especial la estructura de la Torre de San Martín de Teruel?",
      correcta: "Son dos torres, una dentro de otra, con la escalera entre ambas",
      incorrectas: ["Tiene 35 rampas en lugar de escaleras", "Se apoya en pechinas", "Es de sillares de granito sin argamasa"],
      explicacion: "Imita la estructura del alminar almohade. Además es una torre-puerta: por debajo pasa una calle."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué elemento gótico tiene la Torre de San Martín de Teruel?",
      correcta: "Bóvedas de crucería en los pisos de la torre interior",
      incorrectas: ["Cúpulas de mocárabes", "Una doble arquería", "Paños de sebka"],
      explicacion: "Une la estructura de alminar almohade con elementos góticos: bóvedas de crucería y arco apuntado."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué es una pechina?",
      correcta: "Un triángulo curvo que permite pasar de una planta cuadrada a una cúpula",
      incorrectas: ["Una moldura rectangular que enmarca un arco", "La cara interior de un arco", "Un remate de bolas de metal"],
      explicacion: "La cúpula de Santa Sofía, de unos 31 m, se apoya en cuatro arcos mediante pechinas."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Por qué parece flotar la cúpula de Santa Sofía?",
      correcta: "Porque tiene 40 ventanas en su base",
      incorrectas: ["Porque está hecha de madera ligera", "Porque se apoya en finas columnas de mármol", "Porque tiene un óculo en el centro"],
      explicacion: "Parece flotar sobre un anillo de luz. Simboliza el cielo y la presencia de Dios."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué arcos tomó el arte islámico del Próximo Oriente?",
      correcta: "El apuntado y el lobulado",
      incorrectas: ["El de herradura", "El de medio punto", "El mixtilíneo y el entrecruzado"],
      explicacion: "El de herradura es visigodo y el de medio punto, romano."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué es en realidad la Cúpula de la Roca de Jerusalén (691-692)?",
      correcta: "Un santuario de planta octogonal, no una mezquita",
      incorrectas: ["La primera mezquita hipóstila", "El alminar de la mezquita de Damasco", "Una iglesia bizantina convertida en mezquita"],
      explicacion: "El nombre «mezquita de Omar» es erróneo, según Wikipedia."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cuántas columnas reaprovechadas conserva hoy la Mezquita de Córdoba, aproximadamente?",
      correcta: "Unas 850",
      incorrectas: ["Unas 124", "Unas 35", "Unas 5.000"],
      explicacion: "Son de mármol, jaspe, granito…, reaprovechadas de edificios romanos y visigodos."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cómo se conoce la llegada de los mosaicos bizantinos al mihrab de Córdoba?",
      correcta: "Por crónicas, como la de Ibn Idari",
      incorrectas: ["Por una inscripción en el mihrab", "Por los planos originales", "Por las cartas de Justiniano"],
      explicacion: "Alhakén II pidió mosaístas al emperador bizantino."
    },
    {
      tema: "estilo", nivel: "extremo",
      imagen: "mihrab-aljaferia",
      texto: "Este es el mihrab del oratorio de la Aljafería. ¿Hacia dónde está orientado?",
      correcta: "Hacia La Meca, en el ángulo sureste",
      incorrectas: ["Al sur, como el de Córdoba", "Hacia Damasco, al norte", "Hacia el patio de Santa Isabel, al oeste"],
      explicacion: "El oratorio es una pequeña mezquita privada del palacio."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Qué salas del baño (hammam) hereda el arte islámico de las termas romanas?",
      correcta: "Sala fría, templada y caliente",
      incorrectas: ["Patio, sala de oración y alminar", "Mexuar, Comares y Leones", "Atrio, nave y ábside"],
      explicacion: "Los baños tenían función higiénica y ritual."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cómo se organizan los palacios islámicos?",
      correcta: "Con una zona pública y otra privada alrededor de patios con agua y jardines",
      incorrectas: ["Alrededor de una gran sala hipóstila", "En torno a una nave central con ábside", "En un solo bloque cerrado sin patios"],
      explicacion: "Algunos son auténticas ciudades: Madinat al-Zahra, la Aljafería, la Alhambra y el Generalife."
    },
    {
      tema: "estilo", nivel: "extremo",
      texto: "¿Cuántas inscripciones hay, aproximadamente, en todo el conjunto de la Alhambra?",
      correcta: "Unas 10.000",
      incorrectas: ["Unas 100", "Unas 850", "Unas 1.000.000"],
      explicacion: "La epigrafía es uno de los rasgos del arte nazarí, junto con los mocárabes y la integración de agua y jardín."
    }
  ]
};
