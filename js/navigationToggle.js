$(document).ready(function() {
  //alert("i'm ready");
  hideSection();
});

function hideSection() {
    $('#global1').on('click', function() {
        $('#mainContent').show();
        $('#records').hide();
        $('#rankings').hide();
    });

    $('#global2').on('click', function() {
        $('#rankings').show();
        $('#mainContent').hide();
        $('#records').hide();
    });

    $('#global3').on('click', function() {
        $('#records').show();
        $('#mainContent').hide();
        $('#rankings').hide();
    });
}
