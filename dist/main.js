(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("nav");t.classList.add("navbar");const n=document.createElement("h2");n.classList.add("nav-logo"),n.innerHTML="<h3><i class='fa fa-coffee' aria-hidden='true'></i> Chainess </h3>";const d=document.createElement("ul");d.classList.add("nav-list");const a=document.createElement("button");a.classList.add("home-button"),a.textContent="HOME",a.onclick=()=>{const t=document.createElement("a"),n=document.createElement("li");n.classList.add("nav-list-item"),t.onclick=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.appendChild(e("Best Tea, Coffee and Snacks Spot")),t.appendChild(e("made in 2020")),t.appendChild(e("Make an order with us and enjoy")),t}())}(),t.innerText="Home",n.appendChild(t),d.appendChild(n)},d.appendChild(a);const c=document.createElement("button");c.classList.add("menu-button"),c.innerText="MENU",c.onclick=()=>{const e=document.createElement("a"),t=document.createElement("li");t.classList.add("nav-list-item"),e.onclick=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("h4");n.textContent="Tea and Cookies @ 260";const d=document.createElement("h4");d.textContent="Tea and Biscuits @ 240";const a=document.createElement("h4");a.textContent="Tea and Samosas @ 300";const c=document.createElement("h4");return c.textContent="Tea and MeatPie @ 360",t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(c),e.appendChild(t),e}())}(),e.innerText="MENU",t.appendChild(e),d.appendChild(t)},d.appendChild(c);const o=document.createElement("button");return o.classList.add("contact-button"),o.textContent="CONTACT",o.onclick=()=>{const e=document.createElement("a"),t=document.createElement("li");t.classList.add("nav-list-item"),e.onclick=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-area");const t=document.createElement("div");t.classList.add("contact-header");const n=document.createElement("h2");n.classList.add("contact-header-text"),t.appendChild(n);const d=document.createElement("div");d.classList.add("contact-card");const a=document.createElement("h3");a.textContent="Contact us";const c=document.createElement("p");c.textContent="0090 789 567";const o=document.createElement("p");c.textContent="chainess@chai.com";const i=document.createElement("span");return c.textContent="Nairobi, Kenya",d.appendChild(a),d.appendChild(c),d.appendChild(o),d.appendChild(i),e.appendChild(t),e.appendChild(d),e}())}(),e.innerText="CONTACT",t.appendChild(e),d.appendChild(t)},d.appendChild(o),t.appendChild(n),t.appendChild(a),t.appendChild(c),t.appendChild(o),t}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.classList.add("footer-details"),t.textContent="Chainess @ 2020",e.appendChild(t),e}())}()})();