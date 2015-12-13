//sebagai autofill dependent dropdown list data.
$(document).ready(function(){
	$("#two").change(function(){
		var kd = $(this).find(":selected").val();
		$('#dua').load('dua.php?kd_hari=' + kd);		
	});
});

$(document).ready(function(){
	$("#four").change(function(){
		var kd = $(this).find(":selected").val();
		$('#empat').load('empat.php?kd_hari=' + kd);		
	});
});

$(document).ready(function(){
	$("#six").change(function(){
		var kd = $(this).find(":selected").val();
		$('#enam').load('enam.php?kd_hari=' + kd);		
	});
});

$(document).ready(function(){
	$("#TFkhu").change(function(){
		var kd = $(this).find(":selected").val();
		$('#DEkhu').load('khu24.php?kd_hari=' + kd);		
	});
});

$(document).ready(function(){
	$("#SEkhu").change(function(){
		var kd = $(this).find(":selected").val();
		$('#EDkhu').load('khu68.php?kd_hari=' + kd);		
	});
});

//fungsi menampilkan jendela cetak saat tombol di klik.
var s5_taf_parent = window.location;
function ctkdua(){
window.open('ctkdua.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctkempat(){
window.open('ctkempat.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctkenam(){
window.open('ctkenam.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctkdlpn(){
window.open('ctkdlpn.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctkDEkhu(){
window.open('ctk24khu.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctkEDkhu(){
window.open('ctk68khu.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

var s5_taf_parent = window.location;
function ctklp(){
window.open('ctklp.php','page','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=0,width=900,height=700,left=50,top=50,titlebar=yes')
}

//input nama dosen sebagai autocomplete tanpa reload halaman.
$(function() {
$(".btndosen").click(function() {
var dostxt = $("#simdos").val();
var dataString = 'simdos='+ dostxt;
if(dostxt=='')
{
alert("Input masih kosong.");$("#simdos").focus();
}
else
{
$("#flash").show();
$("#flash").fadeIn(400).html('<img src="ajax-loader.gif" align="absmiddle"><span class="loading">Sedang diproses...</span>');

$.ajax({
type: "POST",
url: "simdos.php",
data: dataString,
cache: false,
success: function(html){
$("#display").after(html);
document.getElementById('simdos').value='';
$("#flash").hide(); $("#simdos").focus();
}
});
} return false;
});
});

//update nama dekan dan kajur tanpa reload halaman.
$(function() {
$("#btndeka").click(function() {
var d = $("#de").val();var k = $("#ka").val();
var dataString = 'nm_dekan='+ d + '&nm_kajur='+ k;
$("#load").show();
$("#load").fadeIn(400).html('<img src="ajax-loader.gif" align="absmiddle"><span class="loading">Sedang diproses...</span>');
$.ajax({
type: "POST",
url: "simdeka.php",
data: dataString,
cache: false,
success: function(html){
$("#tampil").after(html);
$("#load").hide();
}
});
 return false;
});
});

//hide tab menu using cursor
var mouseY = 0;
document.addEventListener('mousemove', function(e) {
  mouseY = e.clientY || e.pageY;
  if(mouseY < 30) {
     $('nav').css({ top: '0' });
  } }, false);
$('nav').mouseover(function() {
  var sc = ($(this).scrollTop() > 10) ? $('nav').css({ top: '-70px' }) : $('nav').css({ top: '0' });
});
$('nav').mouseout(function() {
     $('nav').css({ top: '-70px' });
});
