tlacitkoStart.addEventListener('click', function () {
    console.log("Hra začala.")
    tlacitkoStart.remove()
    plocha.style.display = ""
    document.addEventListener("keydown", autopohyb);
  });
  tlacitkoZmenVelikost.addEventListener("click", zmenaMrizky)
  
  