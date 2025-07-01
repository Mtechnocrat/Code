const pressedKey = [];
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  insert.innerHTML = `
    <div>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
  </tr>
</table>
    </div>
    
    `;
});
