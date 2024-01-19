/*1. feladat*/
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color]=car;
console.log(brand+" "+model+" "+year+" "+color);
/*
kérdések
Milyen változóneveket lehet használni tömb esetén destrukturálás esetén?
bármit lehet használni de érdemes olyat használni amit mások 1 évvel később is értenek
A változók sorrendje fontos-e?
igen, mert sorba halad a tömbön
*/

/*2. feladat*/
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};
let {title, author, publicationYear, language}=book;
console.log(title+" "+author+" "+publicationYear+" "+language);

/*
kérdések
Milyen változóneveket lehet használni objektum esetén destrukturálás esetén?
kulcs nevével megegyezőt lehet csak
A változók sorrendje fontos-e?
nem
*/

/*3. feladat*/
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};
function printStudentInfo({name, age, grade, subjects}){
    console.log(name+" "+age+" "+grade+" "+subjects);
}
printStudentInfo(student)