(function(){
  const supported = ["en","zh","ja","de"];
  function pickLang(){
    const saved = localStorage.getItem("lang");
    if(saved && supported.includes(saved)) return saved;
    const n = (navigator.language || "en").toLowerCase();
    if(n.startsWith("zh")) return "zh";
    if(n.startsWith("ja")) return "ja";
    if(n.startsWith("de")) return "de";
    return "en";
  }
  window.__pickLang = pickLang;
})();
