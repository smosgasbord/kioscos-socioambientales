
// controla la fecha y que se mantenga acutalizada durante el tiempo

d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();

//*      SWIPER CAROUSEL DE IMAGENES    *//

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperGallery = new Swiper(".swiper-gallery", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//******** ENLACES A SPREADHSHEETS Y VISTAS/PLANTILLAS ********//

/*     titulos de secciones y subsecciones */

var titulosURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=1580148924";
var titulosTemplate = Handlebars.compile($("#titulos-template").html());

/*    INICIO    */

var proyectosURL =
  "https://docs.google.com/spreadsheets/d/1Bm-iCoLhbyR7AJ5lB0ORHSWcWh2zNTZncAa05XHn-c0/edit#gid=0";
var proyectosInicioTemplate = Handlebars.compile(
  $("#proyectosInicio-template").html()
);

var inicioURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=911467772";
var quienesTemplate = Handlebars.compile($("#quienes-template").html());
var contactoTemplate = Handlebars.compile($("#contacto-template").html());

var pubsURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=826941858";
var pubsTemplate = Handlebars.compile($("#pubs-template").html());

var notiURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=0";
var notiTemplate = Handlebars.compile($("#noticias-template").html());
var notiCompletoTemplate = Handlebars.compile(
  $("#noticiasCompleto-template").html()
);

var slideURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=1527897219";
var slideTemplate = Handlebars.compile($("#slide-template").html());

var alianzasURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=208723422";
var enlacesTemplate = Handlebars.compile($("#enlaces-template").html());

// QUIENES SOMOS

var qsURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=0";
var qsImgTemplate = Handlebars.compile($("#qsImg-template").html());
var descTemplate = Handlebars.compile($("#desc-template").html());

var objURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=1078155806";
var objTemplate = Handlebars.compile($("#obj-template").html());

var informesURL =
  "https://docs.google.com/spreadsheets/d/1f7vX1sLeD-NRfiiBOPLKsk80OTADXjLz9eugcNRfd-Y/edit#gid=1134650069";
var informesTemplate = Handlebars.compile($("#informes-template").html());

// PROYECTOS ACTIVOS / HISTORICOS
var proyectosHistoricosURL =
  "https://docs.google.com/spreadsheets/d/1Bm-iCoLhbyR7AJ5lB0ORHSWcWh2zNTZncAa05XHn-c0/edit#gid=275504825";
var proyectosTemplate = Handlebars.compile(
  $("#proyectosActivos-template").html()
);
var proyectosTemplate = Handlebars.compile(
  $("#proyectosActivos-template").html()
);
var proyectosDetalleTemplate = Handlebars.compile(
  $("#paDetalle-template").html()
);

// VOCES Y POLITICA
var vocesURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=1421429696";
var vocesTemplate = Handlebars.compile($("#voces-template").html());

// NOTICIAS

var noticiasURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=0";
var noticiasTemplate = Handlebars.compile($("#noticias-template").html());
var noticiasDetalleTemplate = Handlebars.compile(
  $("#noticiasDetalle-template").html()
);

// COLUMNAS

var columnasURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=336351036";
var columnasTemplate = Handlebars.compile($("#columnas-template").html());

// PUBLICACIONES

var aguaURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=369052572";
var turismoURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=830609932";
var agroURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1042859567";
var estudiosURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1969744267";
var tfgURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1757606291";
var territorioURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1818983920";
var mineriaURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1903868351";
var cartoURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1535626720";
var guiasURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=1266199375";
var memoriasURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=956414";
var modeloURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=190200942";
var pubTemplate = Handlebars.compile($("#pub-template").html());
//var tfgTemplate = Handlebars.compile($("#tfg-template").html());

//**Videos*//

var videosURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=544185687";
var videosTemplate = Handlebars.compile($("#videos-template").html());

//** Mapas **//
var mapasURL =
  "https://docs.google.com/spreadsheets/d/1RAFrstx1xXMkGH5BXLEf9PsT1zmJlN8AQSDqwsv1fYQ/edit#gid=372551485";
var mapasTemplate = Handlebars.compile($("#mapas-template").html());

/* fotos galeria */

var fotosURL =
  "https://docs.google.com/spreadsheets/d/1Mz1Td_4Db4pURTnkmXXu9vrXLmkmbx-OFZDRFcxiC5g/edit#gid=285120347";
var fotosTemplate = Handlebars.compile($("#fotos-template").html());

//******      FUNCIONESQUE CARGAN CONTENIDO       *****//

//*     DESPLEGAR TITULOS       *//

var setTitulo = (idSeccion, idDiv) => {
  $("#" + idDiv).sheetrock({
    url: titulosURL,
    rowTemplate: titulosTemplate,
    query: "select * where A = " + idSeccion,
    reset: true,
  });
};

//*      LIMPIAR CONTENIDO DE VISTA ANTERIOR     *//

const borrarContenido = (tag) => {
  $(".dinamicos").html("");
};

const borrarSecciones = (tag) => {
  //console.log($('section:not('+tag+')'))
  $("section:not(" + tag + ")").hide();
  $(tag).show();
};

//*      INICIO      *//

var setContenidoInicio = () => {
  $("#slide").sheetrock({
    url: slideURL,
    rowTemplate: slideTemplate,
    reset: true,
  });

  $("#proyectos").sheetrock({
    url: proyectosURL,
    fetchSize: 4,
    rowTemplate: proyectosInicioTemplate,
    reset: true,
  });

  $("#quienesResumen").sheetrock({
    url: inicioURL,
    rowTemplate: quienesTemplate,
    reset: true,
  });

  $("#publicaciones").sheetrock({
    url: pubsURL,
    rowTemplate: pubsTemplate,
    fetchSize: 4,
    reset: true,
  });

  $("#noticias").sheetrock({
    url: notiURL,
    rowTemplate: notiTemplate,
    fetchSize: 4,
    query: "select * order by B desc ",
    reset: true,
  });

  $("#contacto").sheetrock({
    url: inicioURL,
    rowTemplate: contactoTemplate,
    reset: true,
  });

  $("#uaAL").sheetrock({
    url: alianzasURL,
    rowTemplate: enlacesTemplate,
    query: "select * where D = 'UA'",
    reset: true,
  });

  $("#vasAl").sheetrock({
    url: alianzasURL,
    rowTemplate: enlacesTemplate,
    query: "select * where D = 'VAS'",
    reset: true,
  });

  $("#extAL").sheetrock({
    url: alianzasURL,
    rowTemplate: enlacesTemplate,
    query: "select * where D = 'EXT'",
    reset: true,
  });
};

//*      CONOZCANOS       *//

var setContenidoQuienesSomos = () => {
  $("#qsImg").sheetrock({
    url: qsURL,
    rowTemplate: qsImgTemplate,
    reset: true,
  });

  $("#descripcion").sheetrock({
    url: qsURL,
    rowTemplate: descTemplate,
    reset: true,
  });

  $("#objetivo").sheetrock({
    url: objURL,
    rowTemplate: objTemplate,
    reset: true,
  });

  $("#informes").sheetrock({
    url: informesURL,
    rowTemplate: informesTemplate,
    reset: true,
  });
};

//*    PROYECTOS  ACTIVOS       *//

var setContenidoProyectosActivos = () => {
  $("#proyectosActivos").sheetrock({
    url: proyectosURL,
    rowTemplate: proyectosTemplate,
    reset: true,
  });
};

//*      PROYECTOS ACTIVOS DETALLE    *//

var setContenidoProyectosActivosDetalle = (id) => {
  $("#proyectosActivosDetalle").sheetrock({
    url: proyectosURL,
    query: "select * where A = " + id,
    rowTemplate: proyectosDetalleTemplate,
    reset: true,
  });
};

//*     PROYECTOS HISTORICOS      *//

var setContenidoProyectosHistoricos = () => {
  $("#proyectosHistoricos").sheetrock({
    url: proyectosHistoricosURL,
    rowTemplate: proyectosTemplate,
    reset: true,
  });
};

//*     PROYECTOS HISTORICOS DETALLE      *//

var setContenidoProyectosHistoricosDetalle = (id) => {
  $("#proyectosHistoricosDetalle").sheetrock({
    url: proyectosHistoricosURL,
    query: "select * where A = " + id,
    rowTemplate: proyectosDetalleTemplate,
    reset: true,
  });
};

//*     VOCES Y POLITICAS      *//

var setContenidoVoces = () => {
  $("#voces").sheetrock({
    url: vocesURL,
    rowTemplate: vocesTemplate,
    reset: true,
  });
};

//*     VOCES Y POLITICAS      *//

var setContenidoColumnas = () => {
  $("#columnas").sheetrock({
    url: columnasURL,
    rowTemplate: columnasTemplate,
    query: "select * order by A desc",
    reset: true,
  });
};

//*      NOTICIAS    *//



var setContenidoNoticias = () => {
  console.log(loaded);
  if (loaded) {
    location.replace("https://kioscos-socioambientales.glitch.me/#/noticias");
    document.location.reload();
  }

  $("#noticiasCompleto")
    .sheetrock({
      url: noticiasURL,
      rowTemplate: notiCompletoTemplate,
      query: "select * order by A desc",
      reset: true,
    })
    .on("sheetrock:loaded", buscarNoticias());
};

//* filtar y buscar informacion *//

function buscarInfo(idInput, keywordName, itemsTag, itemsClass) {
  var input = document.getElementById("inputBuscar" + idInput);
  const keyword = document
    .querySelector("input[name=keyword" + keywordName + "]")
    .value.toLowerCase();
  console.log(keyword);
  var items = document.querySelectorAll(itemsClass);

  for (let i = 0; i < items.length; i++) {
    let item = items[i].querySelector(itemsTag);

    if (item.innerText.toLowerCase().indexOf(keyword) > -1) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

var buscarNoticias = () => {

  

  window.addEventListener("load", function () {
    const wrapper = document.querySelector(".wrapper");
    const pagination = document.querySelector(".pagination");
    //const filters = document.querySelector("#filters");
    const input = document.querySelector("#inputBuscarNoticias");
    const categorias = document.querySelector("#type");
    const items = Array.from(document.querySelectorAll(".item"));
    //console.log(items);
    let filteredItems = items;
    let currPage = 1;

    var buscarFiltrar = () => {
      const keyword = document
        .querySelector("input[name=keyword]")
        .value.toLowerCase();
      const type = document.querySelector("select[name=type]").value;

      if (keyword && type) {
        filteredItems = items.filter((el) => {
          //console.log(el)
          return (
            el.classList.contains(type) &&
            el.querySelector("h5").innerText.toLowerCase().indexOf(keyword) > -1
          );
        });
      } else if (!keyword && type) {
        filteredItems = items.filter((el) => {
          return el.classList.contains(type);
        });
      } else if (keyword && !type) {
        filteredItems = items.filter((el) => {
          return (
            el.querySelector("h5").innerText.toLowerCase().indexOf(keyword) > -1
          );
        });
      } else {
        filteredItems = items;
      }
      currPage = 1;
      if (filteredItems.length !== 0) {
        pagination.style.display = "block";
        setHTML(filteredItems);
      } else {
        pagination.style.display = "none";
        wrapper.innerHTML = "<p>No se encontraron resultados</p>";
      }
    };

    
    input.addEventListener("keyup", (e) => {  
        buscarFiltrar();
    });
    
    categorias.addEventListener("change", (e) => {  
        buscarFiltrar();
    });

    function paginate(
      totalItems,
      currentPage = 1,
      pageSize = 10,
      maxPages = 5
    ) {
      console.log("pag");
      let totalPages = Math.ceil(totalItems / pageSize);
      if (currentPage < 1) {
        currentPage = 1;
      } else if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      let startPage, endPage;
      if (totalPages <= maxPages) {
        startPage = 1;
        endPage = totalPages;
      } else {
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
          startPage = 1;
          endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
        } else {
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
        }
      }

      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
        (i) => startPage + i
      );

      return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
      };
    }

    function setHTML(items) {
      //console.log(items);
      wrapper.innerHTML = "";
      pagination.innerHTML = "";
      const {
        totalItems,
        currentPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages,
      } = paginate(items.length, currPage, 20, 10);

      const nav = document.createElement("nav");

      let paginationHTML = "";
      paginationHTML += `<button ${currentPage === 1 && "disabled"} class="${
        currentPage === 1 ? "cursor-not-allowed" : "prev"
      } p10 ">
                <
            </button>`;

      pages.forEach((page) => {
        if (currentPage === page) {
          paginationHTML += `<button class="p10 verde" page="${page}" ${
            currentPage === page && "disabled"
          }>${page}</button>`;
        } else {
          paginationHTML += `<button class="page p10" page="${page}" ${
            currentPage === page && "disabled"
          }>${page}</button>`;
        }
      });

      paginationHTML += `<button ${
        currentPage === endPage && "disabled"
      } class="${currentPage === endPage ? "cursor-not-allowed" : "next"} p10">
               > 
            </button>`;

      nav.innerHTML = paginationHTML;
      pagination.append(nav);

      const start = (currentPage - 1) * pageSize,
        end = currentPage * pageSize;
      items.slice(start, end).forEach((el) => {
        wrapper.append(el);
      });
    }

    document.body.addEventListener("change", function (e) {});
    document.addEventListener("click", function (e) {
      const $this = e.target;
      //console.log($this);
      if ($this.classList.contains("page")) {
        currPage = parseInt($this.getAttribute("page"));
        setHTML(filteredItems);
      }
      if ($this.classList.contains("next")) {
        currPage += 1;
        setHTML(filteredItems);
      }
      if ($this.classList.contains("prev")) {
        currPage -= 1;
        setHTML(filteredItems);
      }
    });
    //console.log("hola")
    setHTML(filteredItems);
  });
};

//*     NOTICIAS DETALLE      *//

var setContenidoNoticiasDetalle = (id) => {
  $("#noticiasDetalle").sheetrock({
    url: noticiasURL,
    rowTemplate: noticiasDetalleTemplate,
    query: "select * where A = " + id,
    reset: true,
  });
};

//*     PUBLICACIONES      *//
const pubObj = {
  agua: aguaURL,
  turismo: turismoURL,
  agro: agroURL,
  territorio: territorioURL,
  mineria: mineriaURL,
  carto: cartoURL,
  guias: guiasURL,
  memorias: memoriasURL,
  estudios: estudiosURL,
  modelo: modeloURL,
  tfg: tfgURL,
};

var setContenidoPublicaciones = () => {
  for (const pub in pubObj) {
    $("#" + pub).sheetrock({
      url: pubObj[pub],
      rowTemplate: pubTemplate,
      reset: true,
    });
  }
};

//*     VIDEOS     *//

var setContenidoVideos = () => {
  $("#videos").sheetrock({
    url: videosURL,
    rowTemplate: videosTemplate,
    reset: true,
  });
};

//*     MAPAS     *//

var setContenidoMapas = () => {
  $("#mapas").sheetrock({
    url: mapasURL,
    rowTemplate: mapasTemplate,
    reset: true,
  });
};

//*     MAPAS     *//

var setContenidoFotos = () => {
  $("#fotos").sheetrock({
    url: fotosURL,
    rowTemplate: fotosTemplate,
    reset: true,
  });
};
