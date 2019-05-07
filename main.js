// // (repo: js-students):
// //
// // - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// // - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
// studente inserendo nell’ordine: nome, cognome e età.

//creo oggetto che descrive studente
var student = {
  "nome": "Donato",
  "cognome": "Ciao",
  "età": 29 + " anni"
}

//stampo le proprietà dello studente a schermo
for (var prop in student) {
  document.writeln(student[prop]);
}

//creo array di studenti
var students = [
  {
    "nome": "Mario",
    "cognome": "Rossi",
    "età": 28 + " anni"
  },
  {
    "nome": "Marco",
    "cognome": "Verdi",
    "età": 26 + " anni"
  },
  {
    "nome": "Luca",
    "cognome": "Grandi",
    "età": 27 + " anni"
  }
];

//ciclo array di studenti su tutti gli studenti e stampo nome e cognome per ognuno

for (var i = 0; i < students.length; i++) {
  document.writeln("</br>");
  for (var props in students[i]) {
    document.writeln(students[i][props]);
  }
}

//inserisco nuovo studente con prompt
