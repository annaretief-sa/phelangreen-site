/* Phelan Green / Hopefield -- shared site script
   Language toggle (English / Afrikaans), remembered per browser. */
(function () {
  "use strict";
  var body = document.body;
  var btn = document.getElementById("langToggle");

  try {
    if (localStorage.getItem("pg_lang") === "af") body.classList.add("af");
  } catch (e) {}

  function label() {
    if (btn) btn.textContent = body.classList.contains("af") ? "English" : "Afrikaans";
    document.documentElement.lang = body.classList.contains("af") ? "af" : "en";
  }
  label();

  if (btn) {
    btn.addEventListener("click", function () {
      body.classList.toggle("af");
      try {
        localStorage.setItem("pg_lang", body.classList.contains("af") ? "af" : "en");
      } catch (e) {}
      label();
    });
  }
})();
