!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react/jsx-runtime")):"function"==typeof define&&define.amd?define(["react","react/jsx-runtime"],t):(e||self).reactAnimationScroll=t(e.react,e.jsxRuntime)}(this,function(e,t){return function(n){var i=n.children,r=n.animation,o=n.className,c=n.delay,a=void 0===c?1:c,s=n.duration,u=void 0===s?1:s,d=n.infinite,f=void 0!==d&&d,l=e.useRef(null);return e.useEffect(function(){new IntersectionObserver(function(e){e.forEach(function(e,t){a>1&&"1"!==l.current.style.opacity&&(l.current.style.opacity=0),e.isIntersecting&&(setTimeout(function(){"0"===l.current.style.opacity&&(l.current.style.opacity=1),e.target.classList.add(r)},a),u&&l.current.style.setProperty("--animation-duration",u+"s"),f&&e.target.addEventListener("animationend",function(){e.target.classList.remove(r)}))})},{rootMargin:"0px",threshold:[.3],once:!0}).observe(l.current)},[]),/*#__PURE__*/t.jsx("div",{ref:l,className:""+o,children:i})}});
//# sourceMappingURL=index.umd.js.map
