//mettre focus (cadre blue) sur le premier élément de formulair
let savoir = document.getElementById('savoir');
savoir.focus();

//pour evider d'entrer plus de 40 caracter
savoir.addEventListener('input', function (event) {
  if (event.target.value.length >= 110) {
    savoir.blur();
  }
});

//détecter quel champs de formulaire est en train de saisir
//event.target.name => name c'est le name de champ de formulaire
//meme chose pour blur => sortir de champ
let inputElements = document.querySelectorAll('input , textarea');
inputElements.forEach((inputElement) => {
  inputElement.addEventListener('focus', function (event) {
    console.log(
      `utilisateur est en train de remplir le champ ${event.target.name}`
    );
  });
});

//recuperer select
let elemSelect = document.querySelector('select');
elemSelect.addEventListener('chang', function (event) {
  console.log(`${event.target.name} : ${event.target.value}`);
});

//valeur par defaut
//elemSelect.value = "3";

//recuperer les radios
let elemsRadios = document.querySelectorAll('input[type = "radio"]');
elemsRadios.forEach((elemsRadio) => {
  elemsRadio.addEventListener('chang', function (event) {
    console.log(`${event.target.id} : ${event.target.checked}`);
  });
});

//valeur par defaut
elemsRadios[1].checked = true;

//recuperer checkbox
let elemCheckbox = document.querySelector('input[type = "checkbox"]');
elemCheckbox.addEventListener('chang', function (event) {
  console.log(`${event.target.name} : ${event.target.checked}`);
});
