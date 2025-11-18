// MENU RESPONSIVE
$("#menuBtn").click(() => {
    $("#navMenu").toggleClass("hidden");
});

// FORMULARIO JQUERY
$("#formContacto").submit(function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let motivo = $("#motivo").val();
    let mensaje = $("#mensaje").val().trim();

    if (nombre === "" || email === "" || motivo === "" || mensaje === "") {
        mostrarPopup("#popupError");
        return;
    }

    $("#modalCargando").removeClass("hidden").addClass("flex");

    setTimeout(() => {
        $("#modalCargando").addClass("hidden").removeClass("flex");
        mostrarPopup("#popupExito");
        $("#formContacto")[0].reset();
    }, 2000);
});

function mostrarPopup(id) {
    $(id).removeClass("hidden");
    setTimeout(() => {
        $(id).addClass("hidden");
    }, 3000);
}
