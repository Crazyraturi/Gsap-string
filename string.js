var initialPath = "M 10 100 Q 900 100 1790 100";
var finalPath = "M 10 100 Q 900 100 1790 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1790 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration:0.3,
    ease:"power3.out"
  });
});



string.addEventListener("mouseleave",function(){
    gsap.to("svg path ", {
        attr:{d:finalPath},
        ease:"elastic.out(1,0.2)",
        duration:1.5
    });

})

// string.addEventListener("mouseleave",function(){

//     console.log('Leaved');

// })
