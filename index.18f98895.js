var e=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e()})}),t=new Promise(function(e,t){setTimeout(function(){t(Error("Promise was rejected!"))},3e3)});e.then(function(){var e=document.createElement("div");e.classList.add("message"),e.textContent="Promise was resolved!",document.body.appendChild(e)}),t.catch(function(e){var t=document.createElement("div");t.classList.add("message","error-message"),t.textContent=e.message,document.body.appendChild(t)});
//# sourceMappingURL=index.18f98895.js.map
