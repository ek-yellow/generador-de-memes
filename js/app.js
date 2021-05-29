const generadorDeMemes = () => {
  const $ = (id) => {
    return document.getElementById(id);
  };

  const descargarMeme = () => {
    domtoimage.toBlob($("canvas-meme")).then(function (blob) {
      saveAs(blob, "mi-meme.png");
    });
  };

  const actualizarFiltros = () => {
    const brightness = $("brightness-slider").value;
    const opacity = $("opacity-slider").value;
    const blur = $("blur-slider").value;
    const contrast = $("contrast-slider").value;
    const grayscale = $("grayscale-slider").value;
    const hue = $("hue-slider").value;
    const sepia = $("sepia-slider").value;
    const saturate = $("saturate-slider").value;
    const invert = $("invert-slider").value;

    $(
      "image-meme"
    ).style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`;
  };

  const reestrablecerFiltros = () => {
    $("brightness-slider").value = 1;
    $("opacity-slider").value = 1;
    $("blur-slider").value = 0;
    $("contrast-slider").value = 100;
    $("grayscale-slider").value = 0;
    $("hue-slider").value = 0;
    $("sepia-slider").value = 0;
    $("saturate-slider").value = 100;
    $("invert-slider").value = 0;

    actualizarFiltros();
  };

  const alternarTextos = () => {
    if ($("no-top-text-checkbox").checked) {
      $("top-text").classList.add("oculto");
    } else {
      $("top-text").classList.remove("oculto");
    }

    if ($("no-bottom-text-checkbox").checked) {
      $("bottom-text").classList.add("oculto");
    } else {
      $("bottom-text").classList.remove("oculto");
    }
  };

  const alinearTexto = (alineacion) => {
    $("top-text").style.textAlign = alineacion;
    $("bottom-text").style.textAlign = alineacion;
  };

  const actualizarContorno = (contorno) => {
    const grosor = "2px";

    if (contorno === "ninguno") {
      $("top-text").style.textShadow = "none";
      $("bottom-text").style.textShadow = "none";
    } else if (contorno === "claro") {
      $(
        "top-text"
      ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`;
      $(
        "bottom-text"
      ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`;
    } else if (contorno === "oscuro") {
      $(
        "top-text"
      ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`;
      $(
        "bottom-text"
      ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`;
    }
  };

  // Cambio de tema
  $("dark-theme-button").addEventListener("click", () => {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  });
  $("light-theme-button").addEventListener("click", () => {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  });

  // Config de paneles
  $("panel-img-button").addEventListener("click", () => {
    $(`panel-text`).classList.add("oculto");
    $(`panel-img`).classList.remove("oculto");
    $("panel").classList.remove("oculto");
  });
  $("text-panel-button").addEventListener("click", () => {
    $(`panel-img`).classList.add("oculto");
    $(`panel-text`).classList.remove("oculto");
    $("panel").classList.remove("oculto");
  });
  $("panel-close-button").addEventListener("click", () => {
    $("panel").classList.add("oculto");
  });

  // Funcionalidad de imagen
  $("url-img-input").addEventListener("input", (evento) => {
    if (evento.target.value.length !== 0) {
      $("image-meme").style.backgroundImage = `url("${evento.target.value}")`;
    }
  });

  $("blend-mode-color-input").addEventListener("input", (evento) => {
    $("blend-mode-color").innerText = evento.target.value.toUpperCase();
    $("image-meme").style.backgroundColor = evento.target.value;
  });
  $("blend-mode-select").addEventListener("change", (evento) => {
    $("image-meme").style.backgroundBlendMode = evento.target.value;
  });

  $("brightness-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("opacity-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("blur-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("contrast-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("grayscale-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("hue-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("sepia-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("saturate-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });
  $("invert-slider").addEventListener("change", (evento) => {
    actualizarFiltros();
  });

  $("default-filters-button").addEventListener("click", reestrablecerFiltros);

  window.addEventListener("resize", () => {
    $("canvas-meme").style.height = `${
      $("canvas-meme").getBoundingClientRect().width
    }px`;
  });

  // Funcionalidades de texto
  $("top-text-input").addEventListener("input", () => {
    // Actualizo el texto
    if ($("text-no-background-checkbox").checked) {
      $("top-text").style.position = "absolute";
      $("bottom-text").style.position = "absolute";
    } else {
      $("top-text").style.position = "static";
      $("bottom-text").style.position = "static";
    }
    $("top-text").innerText = $("top-text-input").value;
    $("bottom-text").innerText = $("bottom-text-input").value;
  });

  $("bottom-text-input").addEventListener("input", () => {
    // Actualizo el texto
    if ($("text-no-background-checkbox").checked) {
      $("top-text").style.position = "absolute";
      $("bottom-text").style.position = "absolute";
    } else {
      $("top-text").style.position = "static";
      $("bottom-text").style.position = "static";
    }
    $("top-text").innerText = $("top-text-input").value;
    $("bottom-text").innerText = $("bottom-text-input").value;
  });

  $("no-top-text-checkbox").addEventListener("change", alternarTextos);
  $("no-bottom-text-checkbox").addEventListener("change", alternarTextos);

  $("text-font-select").addEventListener("change", () => {
    const fuente = $("text-font-select").value;
    $("top-text").style.fontFamily = fuente;
    $("bottom-text").style.fontFamily = fuente;
  });
  $("text-size-input").addEventListener("input", () => {
    if (window.innerWidth > 1100) {
      return;
    }
    const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5);
    const padding = Math.round((window.innerWidth / 10) * 0.2);
    $("text-size-input").value = tamanioTexto;
    $("padding-input").value = padding;
  });
  $("text-left-align-button").addEventListener("click", () =>
    alinearTexto("left")
  );
  $("text-center-align-button").addEventListener("click", () =>
    alinearTexto("center")
  );
  $("text-right-align-button").addEventListener("click", () =>
    alinearTexto("right")
  );

  $("text-color-input").addEventListener("input", () => {
    const color = $("text-color-input").value.toUpperCase();

    $("text-color").innerText = color;
    $("top-text").style.color = color;
    $("bottom-text").style.color = color;
  });
  $("text-background-color-input").addEventListener("input", () => {
    if (!$("text-no-background-checkbox").checked) {
      const color = $("text-background-color-input").value;

      $("text-background-color").innerText = color.toUpperCase();
      $("top-text").style.backgroundColor = color;
      $("bottom-text").style.backgroundColor = color;
    } else {
      $("top-text").style.backgroundColor = "transparent";
      $("bottom-text").style.backgroundColor = "transparent";
    }
  });
  $("text-no-background-checkbox").addEventListener("change", () => {
    if (!$("text-no-background-checkbox").checked) {
      const color = $("text-background-color-input").value;

      $("text-background-color").innerText = color.toUpperCase();
      $("top-text").style.backgroundColor = color;
      $("bottom-text").style.backgroundColor = color;
    } else {
      $("top-text").style.backgroundColor = "transparent";
      $("bottom-text").style.backgroundColor = "transparent";
    }
    actualizarPosicionTexto();
  });

  $("no-outline-button").addEventListener("click", () => {
    actualizarContorno("ninguno");
  });

  $("light-outline-button").addEventListener("click", () => {
    actualizarContorno("claro");
  });

  $("dark-outline-button").addEventListener("click", () => {
    actualizarContorno("oscuro");
  });

  $("padding-input").addEventListener("input", () => {
    const paddingY = $("padding-input").value;
    $("top-text").style.padding = `${paddingY}px 50px`;
    $("bottom-text").style.padding = `${paddingY}px 50px`;
  });

  $("line-height-input").addEventListener("change", () => {
    const lineHeight = $("line-height-input").value;
    $("top-text").style.lineHeight = lineHeight;
    $("bottom-text").style.lineHeight = lineHeight;
  });

  window.addEventListener("resize", () => {
    const tamanio = $("text-size-input").value;
    $("top-text").style.fontSize = `${tamanio}px`;
    $("bottom-text").style.fontSize = `${tamanio}px`;
  });

  $("download-meme-button").addEventListener("click", descargarMeme);
};

window.onload = generadorDeMemes;
