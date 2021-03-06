const ul = document.getElementById("repo-list");
const loading = document.getElementById("loading");
fetch(
  "https://api.github.com/users/rafashiga/repos?sort=pushed&page=1&per_page=8"
)
  .then((response) => response.json())
  .then((result) => {
    result.map(({ name, description, html_url }) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      const desc = description ? description : "";
      p.innerHTML = `<a href="${html_url}" target="_blank" class="repositories__link">${name}</a> <br>
          <span class="repositories__description">${desc}</span>`;
      li.appendChild(p);
      ul.appendChild(li);
      loading.classList.add("hidden");
    });
  })
  .catch((err) => {
    loading.classList.remove("hidden");
  });
