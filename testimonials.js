const testimonials = [
  {
    title: "Amazing User Experience",
    quote:
      "Working with this platform completely changed how quickly our team could build and launch new pages. The templates are thoughtfully designed, the code structure is easy to follow, and customization is straightforward.",
    name: "Charlotte Hale",
    role: "Director, Delos Inc.",
    img: "./assets/cust-photo-1.jpeg",
    stars: 5,
  },
  {
    title: "Fast and Flexible",
    quote:
      "We shipped our landing page in a day. Everything was organized and easy to customize without breaking anything.",
    name: "Jordan Kim",
    role: "Product Manager, Nova Labs",
    img: "./assets/cust-photo-2.jpeg",
    stars: 5,
  },
  {
    title: "Clean Design",
    quote:
      "The design looks professional out of the box. We only tweaked colors and content and it still feels unique.",
    name: "Avery Patel",
    role: "Founder, Bright Studio",
    img: "./assets/cust-photo-4.jpeg",
    stars: 4,
  },
];

const root = document.getElementById("testimonials");
if (!root) throw new Error("Missing #testimonials container");

const els = {
  title: root.querySelector(".testimonial__title"),
  quote: root.querySelector(".testimonial__quote"),
  name: root.querySelector(".testimonial__name"),
  role: root.querySelector(".testimonial__role"),
  img: root.querySelector(".testimonial__profile--img"),
  stars: root.querySelector(".review__stars"),
};

let index = 0;

function render(i) {
  const t = testimonials[i];
  els.title.textContent = t.title;
  els.quote.textContent = t.quote;
  els.name.textContent = t.name;
  els.role.textContent = t.role;

  els.img.src = t.img;
  els.img.alt = t.name;

  els.stars.innerHTML = "";
  for (let s = 1; s <= 5; s++) {
    const icon = document.createElement("i");
    icon.className = s <= t.stars ? "fa-solid fa-star" : "fa-regular fa-star";
    els.stars.appendChild(icon);
  }
}

function next() {
  index = (index + 1) % testimonials.length;
  render(index);
}

function prev() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  render(index);
}

root.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-dir]");
  if (!btn) return;
  btn.dataset.dir === "next" ? next() : prev();
});

render(index);