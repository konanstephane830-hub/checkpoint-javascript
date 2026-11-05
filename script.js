// ============================
// 1. FONCTIONS DE MANIPULATION DE CHAÎNES
// ============================

// 1. Inverser une chaîne de caractères
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

// 2. Compter les caractères
function compterCaracteres(str) {
  return str.length;
}

// 3. Mise en majuscules des mots - Met en majuscule la première lettre de chaque mot
function mettreMajusculeMots(phrase) {
  return phrase.split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}

// ============================
// 2. FONCTIONS DE TABLEAU
// ============================

// 4. Trouver le maximum et le minimum
function trouverMax(tab) {
  return Math.max(...tab);
}

function trouverMin(tab) {
  return Math.min(...tab);
}

// 5. Somme d'un tableau
function sommeTableau(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme;
  // Version courte aussi possible : return tab.reduce((a, b) => a + b, 0);
}

// 6. Filtrer un tableau - Exemple : filtrer les nombres pairs
function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}

// ============================
// 3. FONCTIONS MATHÉMATIQUES
// ============================

// 7. Factorielle
function factorielle(n) {
  if (n === 0 || n === 1) return 1;
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// 8. Vérification des nombres premiers
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 9. Suite de Fibonacci - génère jusqu'à n termes
function fibonacci(n) {
  let suite = [0, 1];
  if (n <= 2) return suite.slice(0, n);
  for (let i = 2; i < n; i++) {
    suite.push(suite[i - 1] + suite[i - 2]);
  }
  return suite;
}

// ============================
// TESTS POUR MONTRER AU PROF
// ============================
console.log("1. Inverser:", inverserChaine("hello")); // "olleh"
console.log("2. Compter:", compterCaracteres("hello")); // 5
console.log("3. Majuscule:", mettreMajusculeMots("bonjour tout le monde")); // "Bonjour Tout Le Monde"
console.log("4. Max:", trouverMax([1, 5, 3, 9, 2]), "Min:", trouverMin([1, 5, 3, 9, 2]));
console.log("5. Somme:", sommeTableau([1, 2, 3, 4])); // 10
console.log("6. Filtre pairs:", filtrerTableau([1, 2, 3, 4, 5, 6], x => x % 2 === 0)); // [2,4,6]
console.log("7. Factorielle 5:", factorielle(5)); // 120
console.log("8. Est premier 7?", estPremier(7)); // true
console.log("9. Fibonacci 8 termes:", fibonacci(8)); // [0,1,1,2,3,5,8,13]