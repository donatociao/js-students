// // (repo: js-students):
// //
// // - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// // - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

//creo oggetto che descrive studente
var student1 = {
  "nome": "Donato",
  "cognome": "Ciao",
  "età": 29 + " anni"
}

//stampo le proprietà dello studente a schermo
for (var prop in student1) {
  document.writeln(student1[prop]);
}

//creo array di studenti
var students = [
  {
    "name": "Mario",
    "surname": "Rossi",
    "age": 28 + " anni"
  },
  {
    "name": "Marco",
    "surname": "Verdi",
    "age": 26 + " anni"
  },
  {
    "name": "Luca",
    "surname": "Grandi",
    "age": 27 + " anni"
  }
];

//ciclo array di studenti su tutti gli studenti e stampo nome e cognome per ognuno
for (var i = 0; i < students.length; i++) {
  document.writeln("</br>");
  for (var props in students[i]) {
    document.writeln(students[i][props]);
  }
}

//inserisco nuovo studente con prompt e stampo il nuovo studente
var student2 = {};

student2.name = prompt("Inserisci il nome dello studente");
student2.surname = prompt("Inserisci il cognome dello studente");
student2.age = prompt("Inserisci l'età dello studente");

document.writeln("</br>");
for (var prop in student2) {
  document.writeln(student2[prop]);
}
