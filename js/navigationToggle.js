$(document).ready(function() {
  //alert("i'm ready");
  hideSection();
});

function hideSection() {
    $('#global1').on('click', function() {
        $('#mainContent').show();
        $('#champs').hide();
        $('#rankings').hide();
    });

    $('#global2').on('click', function() {
        $('#rankings').show();
        $('#mainContent').hide();
        $('#champs').hide();
    });

    $('#global3').on('click', function() {
        $('#champs').show();
        $('#mainContent').hide();
        $('#rankings').hide();
    });
}
