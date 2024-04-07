function guardarUsuario(){
    db.collection("usuarios").add({
        nombre: document.getElementById(""),
        email: document.getElementById(""),
        libro_poseido: document.getElementById(""),
        libro_deseado: document.getElementById(""),
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}
function guardarLibro(){
    db.collection("usuarios").add({
        titulo: document.getElementById(""),
        autor: document.getElementById(""),
        genero: document.getElementById(""),
        resumen: document.getElementById(""),
        calificacion_promedio: document.getElementById(""),
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}
function guardarResena(){
    db.collection("usuarios").add({
        calificacion: document.getElementById(""),
        comentario: document.getElementById(""),
        id_libro: document.getElementById(""),
        id_usuario: document.getElementById(""),
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}