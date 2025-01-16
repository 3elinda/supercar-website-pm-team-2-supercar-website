function rearrangeSections() {
  const section1 = document.querySelector(".section-1");
  const section2 = document.querySelector(".section-2");
  const parent = section1.parentNode;
  const sect1Title = document.querySelector(".section-1 h2");
  const sendTo = document.querySelector(".send-to-trion-container");
  const selection1 = document.querySelector(".interior");
  const selection2 = document.querySelector(".exterior");

  if (window.innerWidth <= 520) {
    parent.insertBefore(section2, section1);
    sect1Title.style.display = "none";
    section1.appendChild(sendTo);
    selection1.innerHTML = "INTERIOR";
    selection2.textContent = "EXTERIOR";
  } else {
    parent.insertBefore(section1, section2);
    sect1Title.style.display = "block";
    section2.appendChild(sendTo);
    selection1.innerHTML = "INTERIOR SELECTIONS";
    selection2.textContent = "EXTERIOR SELECTIONS";
  }
}
rearrangeSections();
window.addEventListener("resize", rearrangeSections);
