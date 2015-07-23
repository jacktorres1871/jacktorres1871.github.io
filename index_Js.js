$( "h1" ).click(function() {
  $("#lol").replaceWith("<h1>Just call me Gio, Straight up like that ^-^</h1>" );
});

$( "#theweeknd" ).hide(0);

$( "#q" ).click(function() {
$( "#theweeknd" ).toggle( "slow" );
});

$( "#hunter" ).hide(0);

$( "#x" ).click(function() {
$( "#hunter" ).toggle( "slow" );
});

$( "#chilling" ).hide(0);

$( "#y" ).click(function() {
$( "#chilling" ).toggle( "slow" );
});

$( "#u" ).hide(0);

$( ".dont" ).click(function() {
$( "#g").hide();
$( "#u").show();
});
