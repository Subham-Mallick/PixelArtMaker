$(document).ready(function() {
// $("#sizePicker").submit(
	
// 	function (event) {
// 		event.preventDefault();

// 		var row = $("#gridHeight").val();
// 		var col = $("#gridWidth").val();

// 		makeGrid(row,col);

// 	}
// );


// $("#reset").on('click',
// 	$("#pixelCanvas").html("");
// );


$("#go").on('click',
	function()
	{
		var row = $("#gridHeight").val();
		var col = $("#gridWidth").val();

		makeGrid(row,col);
	}
);

function makeGrid(row,col) {

	$("#pixelCanvas").html("");
	for (var i = 1; i <=row; i++) {
		$("#pixelCanvas").append("<tr class=tableRow-"+i+"> </tr>");
	
		for (var j = 1; j <=col; j++) {
			$(".tableRow-"+i).append("<td class=colorPixel></td>");
		}
	}

	$(".colorPixel").click(

		function addHue() {
			
			var color = $("#gridColor").val();
			// alert(color);
			if( $(this).attr("style") )
			{

				$(this).removeAttr("style");

			}
			else
			{

				$(this).attr("style","background-color:"+color);

			}

		}


	);
}

//////////////////////////////////////////////////////////////////////////


    // $("#btn-Preview-Image").on('click', function () {

    // 	$("#previewImage").html("");

    //      html2canvas(element, {
    //      onrendered: function (canvas) {
    //             $("#previewImage").append(canvas);
    //             getCanvas = canvas;
    //          }
    //      });
    // });





//  $("#btn-Convert-Html2Image").on('click', function () {

//  	var element = $("#pixelCanvas"); // global variable
// 	download(element);
// });
// /////////////////////////////////////////////////////////////////////////////////

// function download(element)
// {
// 	var getCanvas; // global variable
	
// 	html2canvas(element, {
// 		onrendered: function (canvas) {
// 	      	getCanvas = canvas;
// 	    }
// 	});
// 	var imgageData = getCanvas.toDataURL("image/png");
//     // Now browser starts downloading it instead of just showing it
//     var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
//     $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
// }



	var reset = document.getElementById('reset');
	reset.onclick = function()
	{
		$("#pixelCanvas").html("");
	}

	
	//*
var element = $("#pixelCanvas"); // global variable
var getCanvas; // global variable

    $("#btn-Preview-Image").on('click', function () {
         
    	$("#previewImage").html("");
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    // document.getElementById('btn-Convert-Html2Image').click();
    });
//*
	//*
$("#btn-Convert-Html2Image").click( function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    // console.log(newData);
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
});


//*





});
