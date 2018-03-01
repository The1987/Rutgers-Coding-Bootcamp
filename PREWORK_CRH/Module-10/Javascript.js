
// When the boxGrow button is clicked... 
/*$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})*/



        document.getElementById("shrinkBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "25px";

        });

        document.getElementById("growBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";

        });

        document.getElementById("resetBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";

        });

    </script>