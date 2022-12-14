const cats =["Milo", "Otis", "Garfield"];
cats.slice("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name) {
    cats.splice(4, 0, "Ralph");
}
function destructivelyPrependCat(name) {
    cats.splice(0, 0, "Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.splice(2, 1);
}
function destructivelyRemoveFirstCat(name) {
    cats.splice(0,1);
}
function appendCat(name) {
   const newCats=['Broom', ...cats];
}