//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
let fullName = 'Murad Nərimanlı Tərlan'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin


let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....


//4) + Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
/*
function repeadNumber2(repnum2, num2) {
    let count = 0;
    for (let i = 0; i < repnum2.length; i++) {
        if (typeof repnum2[i] === 'number' && repnum2[i] === num2) {
            count++
        }
    }
    return count;
}

const repNumber = 5
const resultRepNumber = repeadNumber2(arr, repNumber);
console.log(arr)
console.log(`${repNumber} array da ${resultRepNumber} defe tekrarlanibdir`)
*/


//5) + Yuxaridaki arraydaki butun reqemlerin cemini tapin
/*
let value = 0;

const num1 = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    value
)

console.log('cem: ' + num1)
*/


//6) + arrayda tekrar olunan reqemleri artan sira ile duzun
/*
let uniqueSortedArr = arr.filter((num, index, self) => self.indexOf(num) === index).sort((a, b) => a - b);
console.log(uniqueSortedArr)
*/


//7) + arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin  
/*
let bigNumber = (arr) => {
    let resultNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (resultNumber < arr[i]) {
            resultNumber = arr[i]
        }
    }
    return resultNumber
}

function countEvent(arrNum, num) {
    let count = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === num) {
            count++
        }
    }
    return count;
}

let repeadNumber = 7;
let total = countEvent(arr, repeadNumber);

console.log('En boyuk reqem: ' + bigNumber(arr))
console.log(`${repeadNumber} reqemi array de ${total} defe tekrar yazilib`)
*/


//8) + Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
/*
let randomNumber = Math.floor(Math.random() * 10) + 1;
let namberArray = arr.indexOf(randomNumber) !== -1

console.log(`Random Reqem ${randomNumber}`);
console.log(`Random Reqemin Array icinde olub olmamasi ${namberArray}`)
*/


//9) + Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
/*
const myName = "Murad";
const nameLength = myName.length;

const isNameLengthInArray = arr.includes(nameLength);

console.log(`Adımın herif sayi: ${nameLength}`);
console.log(`Herif sayi array icinde?: ${isNameLengthInArray}`);
*/


//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin


//11) + arraydaki en boyuk reqemin ilk indexini tapin
/*
function findIndexOfMaxValue(arr) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}


const maxIndex = findIndexOfMaxValue(arr);

console.log(`Arraydaki en boyuk reqemin ilk indexi: ${maxIndex}`);
console.log(arr)
*/


//12) + 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
/*
function findIndexesOfNumber(arr, number) {
  const indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      indexes.push(i);
    }
  }

  return indexes;
}


const indexesOf4 = findIndexesOfNumber(arr, 4);

console.log(`4 reqeminin indexdeki yerleri: ${indexesOf4}`);
console.log(arr)
*/


//13) + 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
/*
function findIndexesOf5(arr) {
  let minIndex = -1;
  let maxIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      if (minIndex === -1 || i < minIndex) {
        minIndex = i;
      }
      if (maxIndex === -1 || i > maxIndex) {
        maxIndex = i;
      }
    }
  }
  return [minIndex, maxIndex];
}

const [minIndex, maxIndex] = findIndexesOf5(arr);

if (minIndex !== -1 && maxIndex !== -1) {
  console.log(`5 reqeminin en balaca indexi: ${minIndex}`);
  console.log(`5 rakamının en boyuk indexi: ${maxIndex}`);
}
console.log(arr)
*/


//14) + "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
/*
let arr2 = []

for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > 2 ) {
        arr2.push(arr[i])
    }
}

console.log(arr)
console.log(arr2)
console.log(arr.length - arr2.length)
*/


//15) + 7 reqeminin indexleri cemini tapin.
/*
let sumOfIndexes = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
    sumOfIndexes += i;
  }
}

console.log(`7 reqeminin indexlerinin toplami: ${sumOfIndexes}`);
*/



let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir

// + 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
/*
function filterObjectsStartingWithT(arr) {
  const resultArray = [];
  for (let i = 0; i < arr2.length; i++) {
    const currentObj = arr2[i];
    if (currentObj.name.startsWith("t") || currentObj.name.startsWith("T")) {
      resultArray.push(currentObj);
    }
  }
  return resultArray;
}

const newArr = filterObjectsStartingWithT(arr2);
console.log(newArr);
*/


// + 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
/*
let count = 0;

for (let obj of arr2) {
  let name = obj.name.toLowerCase();
  if (name.startsWith("t") && name.endsWith("t")) {
    count++;
  }
}
console.log("T ile baslayib T ile biten obyektlerin sayi: ", count);
*/


// + 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
/*
let sumOfKeys = 0;

for (let obj of arr2) {
  let name = obj.name.toLowerCase();
  if (name.startsWith("t") && name.endsWith("t")) {
    sumOfKeys += obj.key;
  }
}

console.log("T heifi ile baslayib T herifi ile biten 'key' Lerin cemi: ", sumOfKeys);
*/


// + 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
/*
for (let obj of arr2) {
  if (obj.name.toLowerCase().endsWith("e")) {
    obj.name = "SuperDev";
  }
}

console.log(arr2);
*/


// + 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
/*
let longestNameLength = 0;
let keyOfLongestNameObj;

for (let obj of arr2) {
  if (obj.name.length > longestNameLength) {
    longestNameLength = obj.name.length;
    keyOfLongestNameObj = obj.key;
  }
}

console.log("'Name' En uzun olan obyektlerin 'key'i:", keyOfLongestNameObj);
*/


// + 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
/*
let longestNameLength = 0;
let indexOfLongestNameObj;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].name.length > longestNameLength) {
    longestNameLength = arr2[i].name.length;
    indexOfLongestNameObj = i;
  }
}

let squareOfIndex = indexOfLongestNameObj * indexOfLongestNameObj;

console.log("Arr2 obyektinde name en uzun olan indexin kvadrati: ", squareOfIndex);
*/



// + 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
/*
const filteredArray = arr2.filter(item => item.name.length === 4);
console.log(filteredArray);
*/


// + 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
/*
let largestKey = -Infinity;
let nameOfLargestKeyObj;

for (let obj of arr2) {
  if (obj.key > largestKey) {
    largestKey = obj.key;
    nameOfLargestKeyObj = obj.name;
  }
}

console.log("arr2 de en boyuk key - i olan obyektin 'name'-i:", nameOfLargestKeyObj);
*/


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.

// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun