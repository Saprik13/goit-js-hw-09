!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("iU1Pc");var r=o("h6c0i"),i=document.querySelector(".form");console.dir(i.elements);var a=0,u=0,c=0;function l(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,i=n.amount;if(a=Number(t.value),u=Number(o.value),c=Number(i.value),a<=0)return;for(var f=1;f<=c;f+=1)l(f,a).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),a+=u;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.7e33a616.js.map
