// $(document).ready(function(){
// 	$(".project").hover(function(){
// 		$(this).css("background-color","gray");},
// 		function(){
// 			$(this).css("background-color", "white");
// 		});
// 	});

// function myFunction() {
//             var x = document.getElementById("nav");
//             if (x.className === "nav") {
//                 x.className += " responsive";
//             } else {
//                 x.className = "nav";
//             }
//         }
//       </script>

// $(".icon").click(function() {
//   	x = 
// 	removeFromCart($(this));
//     $(this).parent().remove();
//   });

window.onload = function() {    
	var x =document.getElementById("nav");    
	x.onclick =function() {    
		if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }  
	}
}