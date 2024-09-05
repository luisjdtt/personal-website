// function aaosInit(anchor) {
//   let aaosClassName = "as";
//   let options;
//   if (anchor && typeof anchor == "object") options = anchor;
//   else
//     options = {
//       root: null, // Use the viewport as the root
//       rootMargin: "0px",
//       threshold: 0.1,
//     };
//   if (options && options.aaosClassName) aaosClassName = options.aaosClassName;

//   let observer = new IntersectionObserver(callback, options);
//   let targets = document.getElementsByClassName(aaosClassName);
//   for (let target of targets) {
//     prepareElement(target);
//     observer.observe(target);
//   }

//   function callback(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         animateElement(entry.target);
//       }
//     });
//   }

//   function prepareElement(target) {
//     var classList = target.classList;
//     for (let i = 0; i < classList.length; i++) {
//       if (
//         classList[i].startsWith("animate__") &&
//         !classList[i].startsWith("animate__animated")
//       ) {
//         let originalClass = "s_" + classList[i];
//         target.classList.remove(classList[i]);
//         target.classList.add(originalClass);
//       }
//     }
//   }

//   function animateElement(target) {
//     var classList = target.classList;
//     for (let i = 0; i < classList.length; i++) {
//       if (classList[i].startsWith("s_animate__")) {
//         let animationClass = classList[i].substring(2);
//         target.classList.remove(classList[i]);
//         target.classList.add(animationClass);
//       }
//     }
//   }
// }

function aaosInit(anchor){
  let aaosClassName = 'as'
  let options
  if (anchor && (typeof anchor)=='object')
    options = anchor
  else
	 options = {
		root: document.querySelector(anchor || document.body),
		rootMargin: '0px',
		threshold: 0.9
	}
  if (options && options.aaosClassName) aaosClassName = options.aaosClassName
  if (options && options.root && (typeof options.root)=='string') options.root = document.querySelector(options.root)

	let observer = new IntersectionObserver(callback, options);
  let targets = document.getElementsByClassName(aaosClassName)
	for (var i = 0; i < targets.length; i++) 
		observer.observe(targets[i]);

	function callback(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) 
				replaceClass(entry.target)
		});
	};

	function replaceClass(target){
		var classList = target.classList
		for (var i = 0; i < classList.length; i++) {
		 if (classList[i].startsWith('s_animate')){
			 var klass = classList[i]
			 target.classList.remove(classList[i])
			 target.classList.add(klass.substring(2))
			 target.classList.remove(aaosClassName)
		 }
		}
	}	
}

// Usage
// document.addEventListener("DOMContentLoaded", function () {
aaosInit({
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.01,
  aaosClassName: "as",
});
// });
