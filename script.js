function irASeccion(seccion) {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("menu").style.display = "none";

    if (document.getElementById(seccion)) {
        document.getElementById(seccion).style.display = "block";
    }
}