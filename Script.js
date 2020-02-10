//alert("merhaba");
// var dtC = new Date('1/1/1990');
// var dayOfMoth = dtC.getDate();
// dtC.setDate(dayOfMoth - 1);

// console.log(dtC);

// var birthday = new Date('07/30/1980');
// var ageDifMs = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDifMs);

// console.log("your age is as msc :" + ageDifMs);
// console.log("your age is as agedate :" + ageDate);
// console.log("your age is : " + (ageDate.getFullYear() - 1970));

// var dt = new Date();

// console.log(dt);
// console.log(dt.getMonth() + 1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());



// var mothersDay = new Date();
// mothersDay.setHours(0, 0, 0, 0);
// mothersDay.setFullYear(2020);
// mothersDay.setDate(1);
// mothersDay.setMonth(4);

// while (mothersDay.getDay() != 0) {
//     mothersDay.setDate(mothersDay.getDate() + 1);
// }

// mothersDay.setDate(mothersDay.getDate() + 7);
// console.log(mothersDay);



// var val1 = Math.round(2.4);
// var val2 = Math.ceil(2.4);
// var val3 = Math.floor(2.4);

// console.log(`round 2.4=  ${val1}`);
// console.log(`ceil 2.4= ${val2}`);
// console.log(`floor 2.4= ${val3}`);

// var num = 15.12234123123;

// console.log(num.toFixed(3));

// var sentence = "Yayınlandığı tarihten beri Udemy'nin en iyi 3 kursu içerisinde "+
//                  " en yüksek değerlendirme oranına sahip olduğumuzu bilmenizi isterim. " +
//                  " Bu başarının nedeni şüphesiz ki; sürekli güncel kalan bir kurs olmamız ve web "+
//                  " geliştirme alanıyla alakalı en önemli ve en gerekli konuları sadece bir kursta yalın ve net bir şekilde öğreniyor olmanızdır.";


// console.log(`count of letter = ${sentence.length}`);

// console.log(`count of word = ${sentence.trim().split(' ').length}`);

// console.log(sentence.replace(/ /g, '-').replace(/'/g,'--'));


// let years=[2016,2017,2018,2019,2020];

// years.push(2021);
// years.unshift(2015);

// years.pop();
// years.shift();

// console.log(years);

// years.reverse();

// console.log(years);


// years.splice(2,0,2021, 2022);
// console.log(years);

// years.splice(2,2);
// console.log(years);

// function over18(year){
//     let age=2020-year;
//     return age>=3;

// }

// let result=years.find(over18);
// console.log(result);

// let multiResult=years.filter(over18);
// console.log(multiResult);


// let newArr=["bmw", "mercedes", "opel", "mazda"];

// console.log(`length of cars array : ${newArr.length}`);
// console.log(newArr[0]);
// console.log(newArr[newArr.length-1]);

// newArr.push("Seat");
// newArr.unshift("Toyota");

// console.log(newArr);


// //sorting array example.
// let numbers=[1,2,5,80,4,15,67,76];

// function compare(a,b){
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
// }

// console.log(numbers.sort(compare));

// let people = [
//     { firstName:'Ercan', lastName : 'Erdoğan'},
//     {firstName : 'Süleyman', lastName : 'Gündüz'},
//     {firstName :'Burak', lastName : 'Küçük'}
// ];

// let val = people[2];
// val =people[2].firstName;

// console.log(val);

// for (let i=0;i<people.length;i++){
//     console.log(people[i]);
// }


// let sonuc=1;
// for(let i=10;i>0;i--){
//     if(i%2==1){
//     sonuc*=i;
//     }

// }

// console.log(sonuc);

// let cars=['BMW', 'Mercedes', 'Toyota'];

// // for(let i in cars){
// //     console.log(`index : ${i} value : ${cars[i]}`);
// // }

// cars.forEach(function(item){
// console.log(item);
// });


// //map usage with json and arrays
// let people = [
//     { firstName:'Ercan', lastName : 'Erdoğan'},
//     {firstName : 'Süleyman', lastName : 'Gündüz'},
//     {firstName :'Burak', lastName : 'Küçük'}
// ];


// let val = people.map(function(item){
//     return item.firstName + ' ' + item.lastName;
// })

// console.log(val);

// let numbers =[1,3,5,7,9];
// let twiceNumbers = numbers.map(function(num){
//     return num*num;
// });

// console.log(twiceNumbers);

// //prediction game
// let prCount=5;
// let prediction;
// var RandomNumber=Math.floor((Math.random()*10)+1);
// let result;
// let ind=0;

// // console.log(RandomNumber);

// while(prCount>0){
//     prCount--;
//     ind++;

//     prediction = Number(prompt('What is the number ?'));

//     if (RandomNumber===prediction){
//         console.log("Congragulations number was : " + RandomNumber);
//         console.log(`Your result is : ${100-(20)*(ind-1)}`);
//         break;
//     }
//     else if (prediction>RandomNumber){
//         console.log("down");
//     }
//     else {
//         console.log("up");
//     }

//     if(prCount==0){
//         console.log("Game over...");
//     }

// }


// dynamics arguments 
// function sumAll(){
//     var total=0;
//     for (let i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }

//     return total;
// }

// console.log(`sum of all arguments : ${sumAll(10,20,30,32,40,13)}`);


//window object usage....
// let val=window.location;
// console.log(val);
// val=window.location.href;
// console.log(val);
// val=window.location.port;
// console.log(val);
// val=window.location.host;
// console.log(val);
// val=window.location.protocol;
// console.log(val);
// val=window.location.search;
// console.log(val);
// val=window.document;
// console.log(val);


// let val= document.querySelectorAll('li:nth-child(odd)');


// // val.forEach(function(item){
// //     item.style.background='#ccc';
// // });
let val;
// let list=document.querySelectorAll('.list-group');
// let list=document.getElementsByClassName('list-group');
// console.log(list);

list=document.getElementById('task-list');

val=list.childNodes;
console.log(val);

val=list.children[0].nextSibling;
console.log(val);


val=list.parentNode;
 console.log(val);