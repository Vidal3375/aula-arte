/* =====================================================================
   AULA DE ARTE · lógica de la aplicación
   No hace falta tocar este archivo para cambiar preguntas:
   el contenido está en la carpeta "datos".
   ===================================================================== */
(function () {
  "use strict";

  var ACTIVIDADES = window.ACTIVIDADES || {};
  var app = document.getElementById("app");

  var NIVELES = [
    { id: "basico",  nombre: "Básico",  desc: "Para empezar" },
    { id: "normal",  nombre: "Normal",  desc: "Nivel de clase" },
    { id: "extremo", nombre: "Extremo", desc: "Para la PAU" }
  ];

  var MODOS = [
    { id: "obras",    emoji: "🖼️", titulo: "Identifica la obra",  desc: "Mira la imagen y reconoce la obra" },
    { id: "etapas",   emoji: "⏳", titulo: "Etapas",              desc: "Arcaico, severo, clásico, helenístico" },
    { id: "estilo",   emoji: "🏛️", titulo: "Rasgos de estilo",    desc: "Órdenes, canon, contrapposto…" },
    { id: "contexto", emoji: "📜", titulo: "Contexto histórico",  desc: "Polis, Pericles, Alejandro…" },
    { id: "mezcla",   emoji: "🎲", titulo: "Repaso mezclado",     desc: "Un poco de todo" }
  ];

  // Actividades que aparecerán más adelante (solo se muestran como "Próximamente")
  var PROXIMAS = ["El arte romano"];

  /* ---------------- Utilidades ---------------- */
  function barajar(lista) {
    var a = lista.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function leer(clave, porDefecto) {
    try { var v = localStorage.getItem("aula-arte:" + clave); return v === null ? porDefecto : JSON.parse(v); }
    catch (e) { return porDefecto; }
  }
  function guardar(clave, valor) {
    try { localStorage.setItem("aula-arte:" + clave, JSON.stringify(valor)); } catch (e) {}
  }
  function nivelInfo(id) { return NIVELES.filter(function (n) { return n.id === id; })[0] || NIVELES[1]; }
  function colorNivel(id) { return "var(--" + id + ")"; }
  function imgObra(act, o) { return act.carpetaImagenes + o.img; }
  function creditoObra(o) { return "Foto: " + o.foto.autor + " · " + o.foto.licencia + " · Wikimedia Commons"; }
  function vibrar(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

  // Elige n distractores distintos del valor correcto (y que no se contengan entre sí)
  function distractores(correcto, candidatos, n) {
    var vistos = {}, res = [];
    vistos[correcto] = true;
    barajar(candidatos).forEach(function (c) {
      if (res.length >= n || !c || vistos[c]) return;
      if (c.indexOf(correcto) >= 0 || correcto.indexOf(c) >= 0) return;
      vistos[c] = true; res.push(c);
    });
    return res;
  }

  /* ---------------- Generadores de preguntas con imagen ---------------- */
  // Cada generador devuelve una pregunta lista para mostrar.
  function pImagenATexto(act, o, etiqueta, enunciado, correcta, candidatos, explicacion, nOpciones) {
    var malas = distractores(correcta, candidatos, (nOpciones || 4) - 1);
    return {
      tipo: "imagen", etiqueta: etiqueta, enunciado: enunciado,
      img: imgObra(act, o), pieImg: creditoObra(o), obra: o,
      opciones: barajar([{ texto: correcta, ok: true }].concat(malas.map(function (m) { return { texto: m, ok: false }; }))),
      solucion: correcta,
      explicacion: (explicacion || (o.nombre + " (" + (o.autorCorto || o.autor) + ", " + o.fecha + "). " + o.clave)).replace(/\.\./g, ".")
    };
  }
  function otras(act, o, mismoTipo) {
    return act.obras.filter(function (x) { return x.id !== o.id && (!mismoTipo || x.tipo === o.tipo); });
  }

  var GEN = {
    obra: function (act, o, mismoTipo) {
      return pImagenATexto(act, o, "Identifica la obra", "¿Qué obra es esta?", o.nombre,
        otras(act, o, mismoTipo).map(function (x) { return x.nombre; }));
    },
    imagenes: function (act, o, mismoTipo) {
      var malas = barajar(otras(act, o, mismoTipo)).slice(0, 3);
      return {
        tipo: "imagenes", etiqueta: "Identifica la obra", enunciado: "¿Cuál de estas imágenes es «" + o.nombre + "»?",
        obra: o,
        opciones: barajar([o].concat(malas)).map(function (x) {
          return { img: imgObra(act, x), nombre: x.nombre, ok: x.id === o.id };
        }),
        solucion: o.nombre,
        explicacion: o.nombre + " (" + o.fecha + "). " + o.clave
      };
    },
    periodoAmplio: function (act, o) {
      var amplio = o.periodo.indexOf("Clásico") === 0 ? "Clásico" : o.periodo;
      return pImagenATexto(act, o, "Etapas", "¿A qué período pertenece esta obra?", amplio,
        ["Arcaico", "Clásico", "Helenístico"], o.nombre + ": " + o.periodo + ", " + o.fecha + ".", 3);
    },
    periodo: function (act, o) {
      return pImagenATexto(act, o, "Etapas", "¿A qué etapa pertenece esta obra?", o.periodo,
        act.periodos, o.nombre + ": " + o.periodo + ", " + o.fecha + ". " + o.clave);
    },
    fecha: function (act, o) {
      var cands = act.obras.filter(function (x) { return x.periodo !== o.periodo; }).map(function (x) { return x.fecha; });
      return pImagenATexto(act, o, "Etapas", "¿De cuándo es esta obra?", o.fecha, cands,
        o.nombre + ": " + o.fecha + " (" + o.periodo + ").");
    },
    autor: function (act, o) {
      var cands = act.obras.map(function (x) { return x.autorCorto; }).concat(act.autoresExtra || []);
      return pImagenATexto(act, o, "Autoría", "¿Quién es el autor de esta obra?", o.autorCorto, cands,
        o.nombre + ": " + o.autor + ", " + o.fecha + ". " + o.clave);
    },
    rasgo: function (act, o) {
      return pImagenATexto(act, o, "Rasgos de estilo", "¿Qué rasgo de estilo describe esta obra?", o.rasgo,
        otras(act, o, true).map(function (x) { return x.rasgo; }));
    },
    lugar: function (act, o) {
      return pImagenATexto(act, o, "Identifica la obra", "¿Dónde se encuentra esta obra?", o.lugar,
        act.obras.map(function (x) { return x.lugar; }),
        o.nombre + ": " + o.lugar + ".");
    }
  };

  function preguntaTexto(act, q) {
    return {
      tipo: "texto",
      etiqueta: { estilo: "Rasgos de estilo", etapas: "Etapas", contexto: "Contexto histórico" }[q.tema] || "",
      enunciado: q.texto,
      opciones: barajar([{ texto: q.correcta, ok: true }].concat(q.incorrectas.map(function (t) { return { texto: t, ok: false }; }))),
      solucion: q.correcta,
      explicacion: q.explicacion,
      esquema: q.esquema && act.esquemas ? act.esquemas[q.esquema] : null
    };
  }

  /* Banco de "fábricas" de preguntas para un modo y un nivel.
     Cada elemento es { clave, crear() } para poder evitar repeticiones. */
  function fabricas(act, modo, nivel) {
    var res = [];
    function obrasCon(gen, filtro, extra) {
      act.obras.forEach(function (o) {
        if (filtro && !filtro(o)) return;
        res.push({ clave: gen + ":" + o.id, obra: o.id, crear: function () { return GEN[gen](act, o, extra); } });
      });
    }
    function textos(tema) {
      act.preguntas.forEach(function (q, i) {
        if (q.tema !== tema || (q.nivel || "normal") !== nivel) return;
        res.push({ clave: "t" + i, crear: function () { return preguntaTexto(act, q); } });
      });
    }
    var conAutor = function (o) { return !!o.autorCorto; };
    var noSevero = function (o) { return o.periodo !== "Estilo severo"; };

    if (modo === "obras" || modo === "mezcla") {
      if (nivel === "basico") { obrasCon("obra", null, false); obrasCon("imagenes", null, false); }
      if (nivel === "normal") { obrasCon("obra", null, true); obrasCon("imagenes", null, true); obrasCon("autor", conAutor); }
      if (nivel === "extremo") { obrasCon("lugar"); obrasCon("autor", conAutor); }
    }
    if (modo === "etapas" || modo === "mezcla") {
      if (nivel === "basico") obrasCon("periodoAmplio", noSevero);
      if (nivel === "normal") obrasCon("periodo");
      if (nivel === "extremo") obrasCon("fecha");
      textos("etapas");
    }
    if (modo === "estilo" || modo === "mezcla") {
      if (nivel === "extremo") obrasCon("rasgo");
      textos("estilo");
    }
    if (modo === "contexto" || modo === "mezcla") textos("contexto");
    return res;
  }

  function crearRonda(act, modo, nivel, cuantas) {
    var lista = barajar(fabricas(act, modo, nivel));
    // Si no hay suficientes de este nivel, se completa con los otros niveles
    if (lista.length < cuantas) {
      NIVELES.forEach(function (n) {
        if (n.id !== nivel) lista = lista.concat(barajar(fabricas(act, modo, n.id)));
      });
    }
    // Evita que la misma obra salga dos veces seguidas en la ronda
    var elegidas = [], obrasUsadas = {}, resto = [];
    lista.forEach(function (f) {
      if (f.obra && obrasUsadas[f.obra]) { resto.push(f); return; }
      if (f.obra) obrasUsadas[f.obra] = true;
      elegidas.push(f);
    });
    elegidas = elegidas.concat(resto).slice(0, cuantas);
    return barajar(elegidas).map(function (f) { return f.crear(); });
  }

  /* ---------------- Estado ---------------- */
  var partida = null;   // { actId, modo, nivel, preguntas, i, aciertos, racha, respondida, fallos }

  /* ---------------- Pantallas ---------------- */
  function pantallaInicio() {
    var ids = Object.keys(ACTIVIDADES);
    var html = '<main class="pantalla estrecha">' +
      '<header class="portada"><h1>Aula de Arte</h1><p>Juegos para repasar Historia del Arte</p></header>' +
      '<div class="greca" aria-hidden="true"></div>' +
      avisoInstalar() +
      '<h2 class="seccion">Actividades</h2><div class="lista">';
    ids.forEach(function (id) {
      var a = ACTIVIDADES[id];
      var portada = a.obras && a.obras[0] ? imgObra(a, a.obras[0]) : "";
      html += '<button class="tarjeta actividad" data-ir="#/a/' + esc(id) + '">' +
        (portada ? '<img src="' + esc(portada) + '" alt="">' : "") +
        '<div><h3>' + esc(a.titulo) + '</h3><p>' + esc(a.subtitulo || "") + '</p></div></button>';
    });
    PROXIMAS.forEach(function (t) {
      html += '<div class="tarjeta actividad proxima"><div style="width:96px;height:96px;border-radius:12px;background:var(--line)"></div>' +
        '<div><h3>' + esc(t) + '</h3><p>Próximamente</p></div></div>';
    });
    html += '</div>' + pie() + '</main>';
    return html;
  }

  function pantallaActividad(id) {
    var act = ACTIVIDADES[id];
    var nivel = leer("nivel", "normal");
    var cuantas = leer("cuantas", 10);
    var html = '<main class="pantalla estrecha" style="--nivel:' + colorNivel(nivel) + '">' +
      '<div class="barra"><button class="boton-icono" data-ir="#/" aria-label="Volver al inicio">‹</button><h2>' + esc(act.titulo) + '</h2></div>' +
      '<div class="greca" aria-hidden="true"></div>' +
      '<h2 class="seccion" style="margin-top:4px">Nivel de dificultad</h2>' +
      '<div class="niveles" role="group" aria-label="Nivel">';
    NIVELES.forEach(function (n) {
      html += '<button data-nivel="' + n.id + '" aria-pressed="' + (n.id === nivel) + '" style="--nivel:' + colorNivel(n.id) + '">' +
        esc(n.nombre) + '<small>' + esc(n.desc) + '</small></button>';
    });
    html += '</div><div class="opciones-ronda">Preguntas por partida:';
    [10, 20].forEach(function (n) {
      html += '<button data-cuantas="' + n + '" aria-pressed="' + (n === cuantas) + '">' + n + '</button>';
    });
    html += '</div><h2 class="seccion">Elige un juego</h2><div class="lista">';
    MODOS.forEach(function (m) {
      var rec = leer("record:" + id + ":" + nivel + ":" + m.id, null);
      html += '<button class="tarjeta modo" data-jugar="' + m.id + '">' +
        '<span class="emoji" aria-hidden="true">' + m.emoji + '</span>' +
        '<span class="txt"><h3>' + esc(m.titulo) + '</h3><p>' + esc(m.desc) + '</p></span>' +
        (rec !== null ? '<span class="record">Récord ' + rec + '%</span>' : '') + '</button>';
    });
    html += '</div><h2 class="seccion">Estudiar</h2>' +
      '<button class="tarjeta modo" data-ir="#/a/' + esc(id) + '/fichas"><span class="emoji" aria-hidden="true">📚</span>' +
      '<span class="txt"><h3>Fichas de las obras</h3><p>Las ' + act.obras.length + ' obras con sus datos clave</p></span></button>' +
      pie() + '</main>';
    return html;
  }

  function pantallaJuego() {
    var p = partida, act = ACTIVIDADES[p.actId];
    if (p.i >= p.preguntas.length) return pantallaResultado();
    var q = p.preguntas[p.i];
    var modo = MODOS.filter(function (m) { return m.id === p.modo; })[0];
    var letras = "ABCD";
    var html = '<main class="pantalla" style="--nivel:' + colorNivel(p.nivel) + '">' +
      '<div class="juego-cabecera">' +
      '<button class="boton-icono" data-salir aria-label="Salir del juego">✕</button>' +
      '<div class="progreso" role="progressbar" aria-valuemin="0" aria-valuemax="' + p.preguntas.length + '" aria-valuenow="' + p.i + '"><div style="width:' + (p.i / p.preguntas.length * 100) + '%"></div></div>' +
      '<span class="contador">' + (p.i + 1) + '/' + p.preguntas.length + '</span>' +
      '<span class="racha" title="Aciertos">✅ ' + p.aciertos + '</span>' +
      '</div>' +
      '<section class="pregunta' + (q.tipo === "imagen" ? " con-imagen" : "") + '">' +
      '<div class="etiqueta">' + esc(q.etiqueta || modo.titulo) + ' · <span class="chip">' + esc(nivelInfo(p.nivel).nombre) + '</span></div>' +
      '<h2>' + esc(q.enunciado) + '</h2><div class="cuerpo">';

    if (q.tipo === "imagen") {
      html += '<div class="media"><img src="' + esc(q.img) + '" alt="Imagen de la obra que hay que identificar" data-ampliar="' + esc(q.img) + '">' +
        '<button class="lupa" data-ampliar="' + esc(q.img) + '">🔍 Ampliar</button></div>';
    }
    html += '<div class="lado">';

    if (q.tipo === "imagenes") {
      html += '<div class="opciones imagenes">';
      q.opciones.forEach(function (op, k) {
        var cls = "";
        if (p.respondida) cls = op.ok ? " acierto" : (k === p.elegida ? " fallo" : " apagada");
        html += '<button class="opcion-img' + cls + '" data-op="' + k + '"' + (p.respondida ? " disabled" : "") +
          ' aria-label="Opción ' + letras[k] + (p.respondida ? ": " + esc(op.nombre) : "") + '">' +
          '<img src="' + esc(op.img) + '" alt="">' +
          '<span class="marca">' + letras[k] + '</span>' +
          (p.respondida ? '<span class="nombre">' + esc(op.nombre) + '</span>' : '') + '</button>';
      });
      html += '</div>';
    } else {
      html += '<div class="opciones">';
      q.opciones.forEach(function (op, k) {
        var cls = "";
        if (p.respondida) cls = op.ok ? " acierto" : (k === p.elegida ? " fallo" : " apagada");
        html += '<button class="opcion' + cls + '" data-op="' + k + '"' + (p.respondida ? " disabled" : "") + '>' +
          '<span class="letra">' + letras[k] + '</span><span>' + esc(op.texto) + '</span></button>';
      });
      html += '</div>';
    }

    if (p.respondida) {
      var bien = q.opciones[p.elegida].ok;
      html += '<div class="tarjeta correccion ' + (bien ? "bien" : "mal") + '" id="correccion">' +
        '<h3>' + (bien ? "¡Correcto! 🎉" : "No es correcto") + '</h3>' +
        (bien ? "" : '<p>La respuesta correcta es: <strong>' + esc(q.solucion) + '</strong></p>') +
        '<p>' + esc(q.explicacion) + '</p>' +
        (q.esquema ? '<img class="esquema" src="' + esc(q.esquema.img) + '" alt="' + esc(q.esquema.pie) + '" data-ampliar="' + esc(q.esquema.img) + '"><p class="pie">' + esc(q.esquema.pie) + '</p>' : '') +
        (q.pieImg ? '<p class="pie">' + esc(q.pieImg) + '</p>' : '') +
        '<button class="boton ancho" data-siguiente>' + (p.i + 1 < p.preguntas.length ? "Siguiente →" : "Ver resultado") + '</button>' +
        '</div>';
    }
    html += '</div></div></section></main>';
    return html;
  }

  function pantallaResultado() {
    var p = partida, total = p.preguntas.length;
    var pct = Math.round(p.aciertos / total * 100);
    var estrellas = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    var frase = ["¡Sigue practicando! Repasa las fichas y vuelve a intentarlo.",
      "¡Aprobado! Vas por buen camino.",
      "¡Muy bien! Ya dominas casi todo.",
      "¡Excelente! Estás listo para la PAU."][estrellas];

    if (!p.esRepaso) {
      var clave = "record:" + p.actId + ":" + p.nivel + ":" + p.modo;
      var rec = leer(clave, null);
      if (rec === null || pct > rec) { guardar(clave, pct); p.nuevoRecord = rec !== null; }
    }

    var html = '<main class="pantalla estrecha" style="--nivel:' + colorNivel(p.nivel) + '">' +
      '<div class="barra"><button class="boton-icono" data-ir="#/a/' + esc(p.actId) + '" aria-label="Volver">‹</button><h2>Resultado</h2></div>' +
      '<div class="tarjeta resultado">' +
      '<div class="nota">' + p.aciertos + '<small> / ' + total + '</small></div>' +
      '<div class="estrellas" aria-label="' + estrellas + ' de 3 estrellas">' + "★★★".slice(0, estrellas) + '<span style="opacity:.25">' + "★★★".slice(0, 3 - estrellas) + '</span></div>' +
      '<p><span class="chip">' + esc(nivelInfo(p.nivel).nombre) + '</span> · ' + pct + '% de aciertos' + (p.nuevoRecord ? ' · ¡Nuevo récord!' : '') + '</p>' +
      '<p style="margin-top:10px;color:var(--ink)">' + frase + '</p>' +
      '</div><div class="acciones">' +
      (p.fallos.length ? '<button class="boton" data-repetir-fallos>Repetir los ' + p.fallos.length + ' fallos</button>' : '') +
      '<button class="boton' + (p.fallos.length ? " secundario" : "") + '" data-otra>Otra partida</button>' +
      '</div>';
    if (p.fallos.length) {
      html += '<h2 class="seccion">Para repasar</h2><div class="lista repaso">';
      p.fallos.forEach(function (q) {
        var img = q.img || (q.obra ? imgObra(ACTIVIDADES[p.actId], q.obra) : "");
        html += '<div class="tarjeta item' + (img ? "" : " sin-img") + '">' +
          (img ? '<img src="' + esc(img) + '" alt="">' : '') +
          '<div><div class="q">' + esc(q.enunciado) + '</div><div class="r">✓ ' + esc(q.solucion) + '</div></div></div>';
      });
      html += '</div>';
    }
    html += '</main>';
    return html;
  }

  function pantallaFichas(id) {
    var act = ACTIVIDADES[id];
    var html = '<main class="pantalla">' +
      '<div class="barra"><button class="boton-icono" data-ir="#/a/' + esc(id) + '" aria-label="Volver">‹</button><h2>Fichas · ' + esc(act.titulo) + '</h2></div>' +
      '<div class="greca" aria-hidden="true"></div><div class="galeria">';
    act.obras.forEach(function (o) {
      html += '<button class="tarjeta ficha-mini" data-ir="#/a/' + esc(id) + '/fichas/' + esc(o.id) + '">' +
        '<img src="' + esc(imgObra(act, o)) + '" alt="" loading="lazy"><div><h3>' + esc(o.nombre) + '</h3><p>' + esc(o.periodo) + '</p></div></button>';
    });
    html += '</div></main>';
    return html;
  }

  function pantallaFicha(id, obraId) {
    var act = ACTIVIDADES[id];
    var idx = act.obras.findIndex(function (o) { return o.id === obraId; });
    if (idx < 0) return pantallaFichas(id);
    var o = act.obras[idx];
    var ant = act.obras[(idx - 1 + act.obras.length) % act.obras.length];
    var sig = act.obras[(idx + 1) % act.obras.length];
    return '<main class="pantalla estrecha">' +
      '<div class="barra"><button class="boton-icono" data-ir="#/a/' + esc(id) + '/fichas" aria-label="Volver a las fichas">‹</button><h2>' + esc(o.nombre) + '</h2></div>' +
      '<article class="tarjeta ficha">' +
      '<div class="media"><img src="' + esc(imgObra(act, o)) + '" alt="' + esc(o.nombre) + '" data-ampliar="' + esc(imgObra(act, o)) + '">' +
      '<button class="lupa" data-ampliar="' + esc(imgObra(act, o)) + '">🔍 Ampliar</button></div>' +
      '<div class="datos"><h2>' + esc(o.nombre) + '</h2>' +
      '<dl><dt>Autor</dt><dd>' + esc(o.autor) + '</dd>' +
      '<dt>Fecha</dt><dd>' + esc(o.fecha) + '</dd>' +
      '<dt>Etapa</dt><dd>' + esc(o.periodo) + '</dd>' +
      '<dt>Lugar</dt><dd>' + esc(o.lugar) + '</dd>' +
      '<dt>Rasgo</dt><dd>' + esc(o.rasgo) + '</dd></dl>' +
      '<p class="clave">' + esc(o.clave) + '</p>' +
      '<p class="credito">' + esc(creditoObra(o)) + ' · <a href="' + esc(o.foto.url) + '" target="_blank" rel="noopener">ver original</a></p>' +
      '</div></article>' +
      '<div class="ficha-nav"><button class="boton secundario" data-ir="#/a/' + esc(id) + '/fichas/' + esc(ant.id) + '">← Anterior</button>' +
      '<button class="boton secundario" data-ir="#/a/' + esc(id) + '/fichas/' + esc(sig.id) + '">Siguiente →</button></div>' +
      '</main>';
  }

  function pantallaCreditos() {
    var html = '<main class="pantalla estrecha texto">' +
      '<div class="barra"><button class="boton-icono" data-ir="#/" aria-label="Volver">‹</button><h2>Créditos</h2></div>' +
      '<div class="greca" aria-hidden="true"></div>' +
      '<p>Contenidos elaborados a partir de los apuntes de clase de Historia del Arte (2.º Bachillerato) y del listado de obras de la PAU de la Comunitat Valenciana.</p>' +
      '<p>Esta app no recoge datos: los récords se guardan solo en tu dispositivo.</p>';
    Object.keys(ACTIVIDADES).forEach(function (id) {
      var a = ACTIVIDADES[id];
      html += '<h2 class="seccion">Fotografías · ' + esc(a.titulo) + '</h2><ul class="creditos">';
      a.obras.forEach(function (o) {
        html += '<li><strong>' + esc(o.nombre) + '</strong>: ' + esc(o.foto.autor) + ', ' + esc(o.foto.licencia) +
          ', <a href="' + esc(o.foto.url) + '" target="_blank" rel="noopener">Wikimedia Commons</a>.</li>';
      });
      html += '</ul>';
    });
    html += '<p>Las licencias CC BY y CC BY-SA permiten usar las fotos citando al autor. Las fotos se han reducido de tamaño para la app.</p></main>';
    return html;
  }

  function pie() {
    return '<footer class="pie-app">Aula de Arte · funciona sin conexión<br><button data-ir="#/creditos">Créditos de las imágenes</button></footer>';
  }

  /* ---------------- Aviso para instalar ---------------- */
  var eventoInstalar = null;
  function esStandalone() {
    return window.navigator.standalone === true || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
  }
  function esIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  function avisoInstalar() {
    if (esStandalone() || leer("avisoCerrado", false)) return "";
    if (esIOS()) {
      return '<div class="tarjeta aviso"><span aria-hidden="true">📲</span><span><strong>Instálala en tu iPhone o iPad:</strong> pulsa el botón <strong>Compartir</strong> ' +
        '<span aria-hidden="true">(□↑)</span> y elige <strong>«Añadir a pantalla de inicio»</strong>.</span>' +
        '<button class="x" data-cerrar-aviso aria-label="Cerrar aviso">✕</button></div>';
    }
    if (eventoInstalar) {
      return '<div class="tarjeta aviso"><span aria-hidden="true">📲</span><span><strong>Instala la app</strong> para abrirla como cualquier otra y usarla sin conexión.</span>' +
        '<button class="boton" style="min-height:40px;padding:6px 14px;font-size:.9rem" data-instalar>Instalar</button>' +
        '<button class="x" data-cerrar-aviso aria-label="Cerrar aviso">✕</button></div>';
    }
    return "";
  }
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    eventoInstalar = e;
    if (!location.hash || location.hash === "#/") render();
  });

  /* ---------------- Navegación ---------------- */
  function render() {
    var partes = (location.hash || "#/").replace(/^#\/?/, "").split("/").filter(Boolean);
    var html;
    if (partes[0] === "a" && ACTIVIDADES[partes[1]]) {
      var id = partes[1];
      if (partes[2] === "jugar") {
        var modo = partes[3] || "mezcla";
        if (!partida || partida.actId !== id || partida.modo !== modo) nuevaPartida(id, modo);
        html = pantallaJuego();
      } else if (partes[2] === "fichas") {
        html = partes[3] ? pantallaFicha(id, partes[3]) : pantallaFichas(id);
      } else {
        partida = null;
        html = pantallaActividad(id);
      }
    } else if (partes[0] === "creditos") {
      html = pantallaCreditos();
    } else {
      html = pantallaInicio();
    }
    app.innerHTML = html;
  }

  function ir(hash) {
    if (location.hash === hash) render(); else location.hash = hash;
    window.scrollTo(0, 0);
  }

  function nuevaPartida(actId, modo, preguntas) {
    var nivel = leer("nivel", "normal");
    partida = {
      actId: actId, modo: modo, nivel: nivel,
      preguntas: preguntas || crearRonda(ACTIVIDADES[actId], modo, nivel, leer("cuantas", 10)),
      i: 0, aciertos: 0, respondida: false, elegida: null, fallos: [], esRepaso: !!preguntas
    };
  }

  window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });

  /* ---------------- Clics ---------------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-ir],[data-nivel],[data-cuantas],[data-jugar],[data-op],[data-siguiente],[data-salir],[data-otra],[data-repetir-fallos],[data-ampliar],[data-cerrar-aviso],[data-instalar]");
    if (!b) return;

    if (b.hasAttribute("data-ampliar")) { abrirVisor(b.getAttribute("data-ampliar")); return; }
    if (b.hasAttribute("data-ir")) { ir(b.getAttribute("data-ir")); return; }

    if (b.hasAttribute("data-nivel")) { guardar("nivel", b.getAttribute("data-nivel")); render(); return; }
    if (b.hasAttribute("data-cuantas")) { guardar("cuantas", Number(b.getAttribute("data-cuantas"))); render(); return; }

    if (b.hasAttribute("data-jugar")) {
      var actId = location.hash.split("/")[2];
      nuevaPartida(actId, b.getAttribute("data-jugar"));
      ir("#/a/" + actId + "/jugar/" + b.getAttribute("data-jugar"));
      return;
    }

    if (b.hasAttribute("data-op") && partida && !partida.respondida) {
      var k = Number(b.getAttribute("data-op"));
      var q = partida.preguntas[partida.i];
      partida.respondida = true;
      partida.elegida = k;
      if (q.opciones[k].ok) { partida.aciertos++; vibrar(15); }
      else { partida.fallos.push(q); vibrar([40, 60, 40]); }
      render();
      var c = document.getElementById("correccion");
      if (c) c.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }

    if (b.hasAttribute("data-siguiente") && partida) {
      partida.i++;
      partida.respondida = false;
      partida.elegida = null;
      render();
      window.scrollTo(0, 0);
      return;
    }

    if (b.hasAttribute("data-salir") && partida) {
      if (partida.i === 0 && !partida.respondida || confirm("¿Salir de la partida? Se perderá el progreso.")) {
        ir("#/a/" + partida.actId);
      }
      return;
    }

    if (b.hasAttribute("data-otra") && partida) {
      nuevaPartida(partida.actId, partida.modo);
      render(); window.scrollTo(0, 0);
      return;
    }

    if (b.hasAttribute("data-repetir-fallos") && partida) {
      var fallos = partida.fallos.map(function (q) {
        var copia = Object.assign({}, q);
        copia.opciones = barajar(q.opciones);
        return copia;
      });
      nuevaPartida(partida.actId, partida.modo, barajar(fallos));
      render(); window.scrollTo(0, 0);
      return;
    }

    if (b.hasAttribute("data-cerrar-aviso")) { guardar("avisoCerrado", true); render(); return; }

    if (b.hasAttribute("data-instalar") && eventoInstalar) {
      eventoInstalar.prompt();
      eventoInstalar.userChoice.finally(function () { eventoInstalar = null; render(); });
    }
  });

  /* ---------------- Visor de imágenes ---------------- */
  var visor = document.getElementById("visor");
  function abrirVisor(src) {
    visor.querySelector("img").src = src;
    var pie = "";
    Object.keys(ACTIVIDADES).forEach(function (id) {
      var a = ACTIVIDADES[id];
      (a.obras || []).forEach(function (o) { if (imgObra(a, o) === src) pie = creditoObra(o); });
    });
    visor.querySelector(".visor-pie").textContent = pie;
    visor.hidden = false;
  }
  visor.addEventListener("click", function () { visor.hidden = true; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") visor.hidden = true;
    // Teclado (útil en iPad con teclado u ordenador): 1-4 o A-D para responder
    if (!partida || visor.hidden === false) return;
    var n = "1234".indexOf(e.key); if (n < 0) n = "abcd".indexOf(e.key.toLowerCase());
    var boton = n >= 0 ? document.querySelector('[data-op="' + n + '"]:not([disabled])') : null;
    if (boton) boton.click();
    else if (e.key === "Enter") { var s = document.querySelector("[data-siguiente]"); if (s) s.click(); }
  });

  /* ---------------- Modo sin conexión ---------------- */
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  render();
})();
