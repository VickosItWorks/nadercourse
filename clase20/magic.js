let objPendiente = {};
let objCompleto = {};
const formulario = document.querySelector("#elform");
const firstList = document.querySelector("#firstlistul");
const secList = document.querySelector("#sndlistul");
const todasListas = document.querySelector("#allLists");

const conseguirObj = (obj, a, b) => {
  obj[a] = b;
};

const borrarElemento = (a, b) => delete a[b];

function renderCard(obj, list) {
  let pendingHtml = "";
  for (let i in obj) {
    pendingHtml += `<li>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${i}</h5>
          <p class="card-text">${obj[i]}</p>
        </div>
      </div>
    </li>`;
  }
  list.innerHTML = pendingHtml;
}

formulario.addEventListener("submit", function (evt) {
  evt.preventDefault();
  conseguirObj(objPendiente, this.tarea.value, this.desc.value);
  renderCard(objPendiente, firstList);
  this.reset();
});

todasListas.addEventListener("click", function (evt) {
  if (evt.path.length < 11) {
    return;
  }

  let isPending = evt.path.filter((el) => el.className === "listapendiente")
    .length
    ? true
    : false;

  if (isPending && evt.path.length === 11) {
    conseguirObj(
      objCompleto,
      evt.target.children[0].innerText,
      evt.target.children[1].innerText
    );
    borrarElemento(objPendiente, evt.target.children[0].innerText);
  } else if (isPending && evt.path.length === 12) {
    let parent = evt.target.parentElement;
    conseguirObj(
      objCompleto,
      parent.children[0].innerText,
      parent.children[1].innerText
    );
    borrarElemento(objPendiente, parent.children[0].innerText);
  } else if (evt.path.length === 11) {
    conseguirObj(
      objPendiente,
      evt.target.children[0].innerText,
      evt.target.children[1].innerText
    );
    borrarElemento(objCompleto, evt.target.children[0].innerText);
  } else {
    let parent = evt.target.parentElement;
    conseguirObj(
      objPendiente,
      parent.children[0].innerText,
      parent.children[1].innerText
    );
    borrarElemento(objCompleto, parent.children[0].innerText);
  }

  renderCard(objPendiente, firstList);
  renderCard(objCompleto, secList);
});
