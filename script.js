// Smooth form message
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  alert("Thank you for contacting me, " + name + "!");
  this.reset();
});

// Animate skill bars on scroll
const skills = document.querySelectorAll(".progress-bar");

function showSkills() {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      skill.style.width = skill.getAttribute("data-width");
    }
  });
}

window.addEventListener("scroll", showSkills);
