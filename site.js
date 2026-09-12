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

  /* "Site last updated" -- reads the timestamp of the latest commit to the
     site's GitHub repo, so the date shown is always the real one and
     nobody has to remember to update it by hand. Leaves the static
     fallback text in place if the request fails (e.g. offline). */
  var upd = document.getElementById("siteUpdated");
  if (upd) {
    fetch("https://api.github.com/repos/annaretief-sa/phelangreen-site/commits?per_page=1")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !data[0] || !data[0].commit) return;
        var iso = data[0].commit.committer.date || data[0].commit.author.date;
        var d = new Date(iso);
        if (isNaN(d.getTime())) return;
        var s = d.toLocaleString("en-GB", {
          timeZone: "Africa/Johannesburg",
          day: "numeric", month: "long", year: "numeric",
          hour: "2-digit", minute: "2-digit"
        });
        upd.textContent = s + " SAST";
      })
      .catch(function () { /* keep fallback text */ });
  }

  /* Cloudflare Web Analytics -- privacy-first: no cookies, no fingerprinting,
     aggregate-only visit counts. See privacy.html for what this does and
     doesn't collect. TOKEN BELOW IS A PLACEHOLDER -- get the real one from
     the Cloudflare dashboard (Analytics & Logs > Web Analytics > add this
     site's hostname > copy the token out of the JS snippet it gives you;
     no DNS/nameserver change needed) and replace it here before this does
     anything. */
  var cfToken = "REPLACE_WITH_CLOUDFLARE_BEACON_TOKEN";
  if (cfToken.indexOf("REPLACE_WITH") !== 0) {
    var cf = document.createElement("script");
    cf.defer = true;
    cf.src = "https://static.cloudflareinsights.com/beacon.min.js";
    cf.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
    document.head.appendChild(cf);
  }
})();
