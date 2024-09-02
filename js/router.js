/* router - rutas para cada página
permite activar los templates necesarios para cargar contenido en la página */
var loaded = false;

  const router = new Navigo("/", { hash: true });
  //const render = (content) => (document.querySelector("#contenido").innerHTML = content);

  router
    .on("/quienes-somos", (match) => {
      borrarContenido();
      setTitulo(10, "titulo-quienesSomos");
      setTitulo(11, "titulo-informes");
      setContenidoQuienesSomos();
      borrarSecciones(".quienesSomosSection");
      loaded=true
    })
    .on("/proyectos-activos", (match) => {
      borrarContenido();
      setTitulo(12, "titulo-proyectosActivos");
      setContenidoProyectosActivos();
      borrarSecciones(".proyectosActSection");
      loaded=true
    })
    .on("/proyectos-activos/proyecto", (match) => {
      borrarContenido();
      setTitulo(12, "titulo-proyectosActivosDetalle");
      setContenidoProyectosActivosDetalle(Object.keys(match.params)[0]);
      borrarSecciones(".paDetalleSection");
      loaded=true
    })
    .on("/proyectos-historicos", (match) => {
      borrarContenido();
      setTitulo(13, "titulo-proyectosHistoricos");
      setContenidoProyectosHistoricos();
      borrarSecciones(".proyectosHistSection");
      loaded=true
    })
    .on("/proyectos-historicos/proyecto", (match) => {
      borrarContenido();
      setTitulo(13, "titulo-proyectosHistoricosDetalle");
      setContenidoProyectosHistoricosDetalle(Object.keys(match.params)[0]);
      borrarSecciones(".phDetalleSection");
      loaded=true
    })
    .on("/voces-politica", (match) => {
      borrarContenido();
      setTitulo(14, "titulo-vocesPolitica");
      setContenidoVoces();
      borrarSecciones(".vocesPoliticaSection");
      loaded=true
    })
    .on("/noticias", (match) => {
    //
      borrarContenido();
      setTitulo(15, "titulo-noticias");
      setContenidoNoticias();
      borrarSecciones(".noticiasSection");
      
    })

    .on("/noticias/noti", (match) => {
      borrarContenido();
      setTitulo(15, "titulo-noticiasDetalle");
      setContenidoNoticiasDetalle(Object.keys(match.params)[0]);
      borrarSecciones(".noticiasDetalleSection");
      loaded=true
    })
    .on("/columnas", (match) => {
      borrarContenido();
      setTitulo(16, "titulo-columnas");
      setContenidoColumnas();
      borrarSecciones(".columnasSection");
      loaded=true
    })
    .on("/publicaciones", (match) => {
      borrarContenido();
      setTitulo(17, "titulo-publicaciones");
      setContenidoPublicaciones();
      setTitulo(18, "agua-titulo");
      setTitulo(19, "turismo-titulo");
      setTitulo(20, "territorio-titulo");
      setTitulo(21, "mineria-titulo");
      setTitulo(22, "agro-titulo");
      setTitulo(23, "carto-titulo");
      setTitulo(24, "guias-titulo");
      setTitulo(25, "memorias-titulo");
      setTitulo(26, "modelo-titulo");
      setTitulo(27, "estudios-titulo");
      setTitulo(28, "tfg-titulo");
      borrarSecciones(".publicacionesSection");
      loaded=true
    })
    .on("/fotos", (match) => {
      borrarContenido();
      setTitulo(29, "titulo-fotos");
      setContenidoFotos();
      borrarSecciones(".fotosSection");
      loaded=true
    })
    .on("/videos", (match) => {
      borrarContenido();
      setTitulo(30, "titulo-videos");
      setContenidoVideos();
      borrarSecciones(".videosSection");
      loaded=true
    })
    .on("/mapas", (match) => {
      borrarContenido();
      setTitulo(31, "titulo-mapas");
      setContenidoMapas();
      borrarSecciones(".mapasSection");
      loaded=true
    })
    .on((match) => {
      borrarContenido();
      setTitulo(1, "titulo-qs-inicio");
      setTitulo(2, "titulo-proyectos-inicio");
      setTitulo(3, "titulo-pubs-inicio");
      setTitulo(4, "titulo-noti-inicio");
      setTitulo(5, "titulo-contacto-inicio");
      setTitulo(6, "titulo-enlaces-inicio");
      setTitulo(7, "subtitulo-enlaces-va");
      setTitulo(8, "subtitulo-enlaces-ua");
      setTitulo(9, "subtitulo-enlaces-ae");
      setContenidoInicio();
      borrarSecciones(".inicioSection");
      loaded=true
    })
    .notFound(() => {
      borrarContenido();
      setTitulo(1, "titulo-qs-inicio");
      setTitulo(2, "titulo-proyectos-inicio");
      setTitulo(3, "titulo-pubs-inicio");
      setTitulo(4, "titulo-noti-inicio");
      setTitulo(5, "titulo-contacto-inicio");
      setTitulo(6, "titulo-enlaces-inicio");
      setTitulo(7, "subtitulo-enlaces-va");
      setTitulo(8, "subtitulo-enlaces-ua");
      setTitulo(9, "subtitulo-enlaces-ae");
      setContenidoInicio();
      borrarSecciones(".inicioSection");
    })
    .resolve();

