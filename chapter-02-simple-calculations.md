# Chapter 2.1. Simple Calculations

In this chapter we are going to get familiar with the following concepts and programming techniques:
- How to work with **data types and variables** which we need when processing numbers and strings.
- How to **print** a result on the screen.
- How to **read** a custom input.
- How to do simple **aritmetic operations**: addition, subtraction, multiplication, division, concatenate strings.
- How to **round** numbers.

## Video

<div class="video-player">
   Watch video tutorial based on this chapter here: <a target="_blank" href="https://www.youtube.com/watch?v=kP_1cKnciyA">https://www.youtube.com/watch?v=kP_1cKnciyA</a>.
</div>


## Calculations in Programming

We know that the computers are machines which process data. All **data** is stored in the computer memory (RAM) in **variables**. The variables are named memory areas that store data of a certain type , for example number or string. Each **variable** in JavaScript has **name** and **value**. Here is how we would define a variable by assigning it a value at the same time as declaring it:

![](/assets/chapter-2-1-images/00.Declaring-variables-01.png)

fter processing, the data is stored again in variables (i.e. somewhere in the memory set aside by our program).

## Data Types and Variables

In programming each variable stores a certain **value** of a particular **type**. For example, data types can be: **number**, **string** (text), **boolean** type, **data**, **list**, etc.
Here are some examples of data types and values for them:
- **number** - type of number: 1, 42, -5, 3.14, NaN, …
- **string** - type of text (string): 'Hello', "Hi", 'Beer', …
- **boolean** - boolean type: true, false
- **Date** - date: Tue Jul 04 2017, ……

The **JavaScript** language has three keywords for declaring a variable - **`var`**, **`const`** and **`let`**. The main difference between **`let`** and **`var`** is in the scope of the variable. We use **`const`** when we are sure that what we assign to the variable will not change. A little further in the book we will find out more details about the range of variables but for now we will use the word ** `let` ** to declare a new variable.


## Print a Result on the Screen

For printing text, number or other result on the screen, it's necessary to call the built-in method **`console.log()`**.With it we can print both the value of a variable and directly text or number:

```javascript
console.log(42); // prints number

console.log('Hello!'); // prints string

let msg = 'Hello, JavaScript!';
console.log(msg); // prints a value of variable
```

## Reading a User Input as an Integer:

For reading a user input as a **number** is necessary to **define an argument** of our function:

```javascript
function sum([arg1, arg2]) {
    let a = parseInt(arg1);
    let b = parseInt(arg2);
    ...
}
```

Let's note that the arguments **`arg1`** and **`arg2`** can be a different data type than the one we want. That's why it's necessary to convert them into a suitable one. If it's not done for the program **each number** will be just a **string** with which **we can't do operations** aritmetic operations.

### Example: Calculating a Square Area with Length of a Side **а**

For example, let us look at the following function which reads an integer from the console, multiplies it by itself (squares it) and prints the result from the multiplication. That's how we can calculate square area by side length:

```javascript
function calculateSquareArea([arg1]) {
    let a = parseInt(arg1);
    let area = a * a;
    console.log('Square area = ' + area);
}
```

If we call our function with parameter 3 - **`calculateSquareArea([3])`** the result will be - **`Square area = 9`**.  Here's how out code looks like in action in the web browser's JavaScript console:

![](/assets/calculate-square-area-js.png)

If we try to write a wrong number, for example "hello", we will get an error message during runtime (exception). This is normal. Later on, we will find out how we can catch these kinds of errors and make the user enter a number again.

#### How Does the Example Work?

On the first line with **`function calculateSquareArea([arg1]) {`** we define our function by giving it a name and setting arguments that it needs. In our case we have one argument which is the side of the square.

On the next line with **`let a = parseInt(arg1);`** we get the argument of the function **`arg1`** and convert it to an integer with the method **`parseInt(arg1);`**. The result is saved in the variable **`a`**.

**Note**: If **`arg1`** contains **floating point number**, то ще бъде **rounded to integer**. Converting a floating number to integer is performed by  **removing**  all digits after the decimal point. Example: **`parseInt(2.3)`** = 2, **`parseInt(3.8)`** = 3

The next command **`let area = a * a;`** is saved in new variable named **`area`** - the result of the multiplication **`a`** by **`a`**.

The next command **`console.log('Square area = ' + area);`** prints the specified text by placing the calculated face of the square, which we have saved in the variable **`area`** next to it.


In fact, the above program can be simplified a bit, like this:

```js
function calculateSquareArea([a]) {
    let area = a * a;
    console.log('Square area = ' + area);
}
```

The above code will work correctly, because when multiplied, the variable `a` will be converted to a number. When the input is only a single number, the parentheses `[]` can also be skipped, like this:

```js
function calculateSquareArea(a) {
    let area = a * a;
    console.log('Square area = ' + area);
}
```

The code can be compact even more, like this:

```js
function calculateSquareArea(a) {
    console.log('Square area = ' + a * a);
}
```

#### Testing in the Judge system

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/927#0](https://judge.softuni.bg/Contests/Practice/Index/927#0). Try all four solutions of the problem.

## Reading Floating Point Numbers

To read user input as **floating-point number** it's necessary again to **define an argument** to our function. The syntax is similar to reading an integer, but here we have to use the function **`parseFloat(...)`**:

```javascript
function sum([arg1, arg2]) {
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);
    ...
}
```

### Example: Converting Inches into Centimeters

Let's write a function that reads a floating-point number in inches and converts it to centimeters::

```javascript
function convertInchesToCentimeters([arg1]) {
    let inches = parseFloat(arg1);
    let centimeters = inches * 2.54;
    console.log('Centimeters = ' + centimeters);
}
```

Let's call the function and make sure that when passing a value in inches, we get a correct result in centimeters:

```javascript
convertInchesToCentimeters([5]); // Centimeters = 12.7
```

#### Testing in the Judge System
Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/927#1](https://judge.softuni.bg/Contests/Practice/Index/927#1).

## Reading a Text Input

Same with other data types, to read a **string** it's necessary to **define an argument** to our function and after that to assign it to a variable:

```javascript
function print([arg1]) {
    let text = arg1;
    ...
}
```

### Example: Greeting by Name

Let's write a program that asks the user for their name and salutes them with the text "**Hello, (име)**".

```javascript  
function sayHello([arg1]) {
    let name = arg1;
    console.log(`Hello, ${name}!`);
}
```

In this case the expression **`${name}`** will be replaced with **the value of the variable `name`**. If we call the function with the name "Ivan", that will be the result:

```javascript  
sayHello(['Ivan']); // Hello, Ivan!
```

#### Testing in Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/927#2](https://judge.softuni.bg/Contests/Practice/Index/927#2).


## Concatenating Text and Numbers

When printing text, numbers and other data **we can concatenate them** by using templates **``` `variable = ${variable}` ```**. In programming these templates are called **placeholders**. Pay attention: We need to use italicized apostrophes <code><strong>`</strong></code> (**backticks**) instead of normal quotes to recognize the template:

```javascript
function printInfo([firstName, lastName, age, town]) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
```
We call the function with test parameters again and make sure that it works:

```javascript
printInfo(['Ivan', 'Ivanov', 20, 'Sofia']);
```
Except variables, we can make simple calculations in the templates.

It's possible the same variable to be used as a template more than once.Here's an example:

```javascript
let a = 1;
console.log(`${a} + ${a} = ${a + a}`);
```
The result is:
```
1 + 1 = 2
```

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/927#3](https://judge.softuni.bg/Contests/Practice/Index/927#3).


## Aritmetic Operations

Let's examine the basic arithmetic operations in programming.

### Summing Numbers (operator **`+`**)

We can sum numbers using the operator **`+`**:

```javascript
let a = 5;
let b = 7;
let sum = a + b; // the result is 12
```

### Subtracting Numbers (operator **`-`**)

Subtracting numbers is done using the **`-`** operator:

```javascript
function substractNumbers([arg1, arg2]) {
    let a = parseInt(a);
    let b = parseInt(b);
    let result = a - b;
    console.log(result);
}
```

Let we check the result of the execution of this program (with numbers 10 and 3):
```javascript
substractNumbers([10, 3]); // 7
```

### Multiplying Numbers (operator **`*`**)

For multiplication of numbers we use the **`*`** operator:

```javascript
let a = 5;
let b = 7;
let product = a * b; // 35
```

### Dividing Numbers (operator **`/`**)

Dividing numbers is done using the **`/`** operator. 

**Note:** Float numbers **divided by 0** do not cause an exception and the result is **+/- infinity** or the special value **Infinity**.

Here are a few examples with the division operator:

```javascript
console.log(10 / 2.5); // Result: 4
console.log(10 / 4);   // Result: 2.5
console.log(10 / 6);   // Result: 1.6666666666666667

console.log(a / 0);   // Result: Infinity
console.log(-a / 0);  // Result: -Infinity
console.log(0 / 0);   // Result: NaN (Not a Number), i.e. the result
                      // The operation  hasn't a valid numeric value
```

## Concatenating Text and Numbers

Операторът **`+`**, освен за събиране на числа, служи и за съединяване на текст (долепяне на два символни низа един след друг). В програмирането съединяване на текст с текст или с число наричаме "**конкатенация**". Ето как можем да съединяваме текст и число с оператора **`+`**:

```javascript
let firstName = "Maria";
let lastName = "Ivanova";
let age = 19;
let str = firstName + " " + lastName + " @ " + age; 
console.log(str);  // Maria Ivanova @ 19
```

Ето още един пример:

```javascript
let a = 1.5;
let b = 2.5;
let sum = "The sum is: " + a + b;
console.log(sum);  // The sum is: 1.52.5
```

Забелязвате ли нещо странно? Може би очаквахте числата **`a`** и **`b`** да се сумират? Всъщност конкатенацията работи отляво надясно и горният резултат е абсолютно коректен. Ако искаме да сумираме числата, ще трябва да ползваме **скоби**, за да променим реда на изпълнение на операциите:

```javascript
let a = 1.5;
let b = 2.5;
let sum = "The sum is: " + (a + b);
console.log(sum);  // The sum is: 4
```

## Числени изрази

В програмирането можем да пресмятаме и **числови изрази**, например:

```javascript
let expr = (3 + 5) * (4 – 2);
```

В сила е стандартното правило за приоритетите на аритметичните операции: **умножение и деление се извършват винаги преди събиране и изваждане**. При наличие на **израз в скоби, той се изчислява пръв**, но ние знаем всичко това от училищната математика.

### Пример: изчисляване на лице на трапец

Да напишем функцията, която приема дължините на двете основи на трапец и неговата височина (по едно дробно число на ред) и пресмята **лицето на трапеца** по стандартната математическа формула:

```javascript
function printТrapezoidArea([arg1, arg2, arg3]) {
    let b1 = parseFloat(arg1);
    let b2 = parseFloat(arg2);
    let h = parseFloat(arg3);
    let area = (b1 + b2) * h / 2;
    console.log("Trapezoid area = " + area);
}
```

Тъй като искаме функцията ни да работи, както с цели, така и с дробни числа, използваме **`parseFloat()`**. Ако стартираме функцията и въведем за страните съответно **`3`**, **`4`** и **`5`**, ще получим следния резултат:
```javascript
printТrapezoidArea([3, 4, 5]); // Trapezoid area = 17.5
```

#### Тестване в Judge системата

Тествайте решението си тук: 

[https://judge.softuni.bg/Contests/Practice/Index/927#4](https://judge.softuni.bg/Contests/Practice/Index/927#4).


## Закръгляне на числа

Понякога, когато работим с дробни числа, се налага да приведем числата към еднотипен формат. Това привеждане се нарича **закръгляне**. Езикът **JavaScript** ни предоставя няколко метода за закръгляне на числа:

* **`Math.ceil(…)`** - **закръгляне нагоре**, до следващо (по-голямо) цяло число:
```javascript
let up = Math.ceil(45.15); // up = 46
```
* **`Math.floor(…)`** - **закръгляне надолу**, до предишно (по-малко) цяло число:
```javascript
let down = Math.floor(45.67);	// down = 45
```

* **`Math.trunc(…)`** - **отрязване** на знаците след десетичната запетая:
```javascript
let trunc = Math.trunc(45.67); // trunc = 45
```

* **`Math.round(…)`** - закръглянето се извършва по **основното правило за закръгляване** - ако десетичната част е по-малка от 5, закръглението е надолу и обратно, ако е по-голяма от 5 - нагоре:
```javascript
Math.round(5.439); // 5
Math.round(5.539); // 6
```

* **`.toFixed([брой символи след десетичната запетая])`** - закръгляне до **най-близко** число:
```javascript
(123.456).toFixed(2);	 // 123.46
(123).toFixed(2);	     // 123.00
(123.456).toFixed(0);	 // 123
(123.512).toFixed(0);	 // 124
```

### Пример: периметър и лице на кръг 

Нека напишем функция, която приема **радиуса r** на кръг и **изчислява лицето и периметъра** на кръга / окръжността.

Формули:
- Лице = π \* r \* r
- Периметър = 2 \* π \* r
- π ≈ 3.14159265358979323846…

```javascript
function calculateCircleAreaAndPerimeter([arg1]) {
    let r = parseInt(arg1);
    console.log("Area = " + Math.PI * r * r); 
    // Math.PI - вградена в JavaScript константа за стойността на числото π
    console.log("Perimeter = " + 2 * Math.PI * r);
}
```
Нека извикаме функцията с **радиус `r = 10`**:

```javascript
calculateCircleAreaAndPerimeter([10])
```

Резултатът е следният:

![](assets/chapter-2-1-images/00.Calculate-circle-area-and-perimeter.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#5](https://judge.softuni.bg/Contests/Practice/Index/927#5).


### Пример: лице на правоъгълник в равнината

Правоъгълник е зададен с **координатите на два от своите два срещуположни ъгъла**. Да се пресметнат **площта и периметъра** му:

<img alt="rectangleArea" src="/assets/chapter-2-1-images/00.Rectangle-area-01.png" width="250" height="200" />

В тази задача трябва да съобразим, че ако от по-голямата **`x`** координата извадим по-малката **`x`** координата, ще получим дължината на правоъгълника. Аналогично, ако от по-големия **`y`** извадим по-малкия **`y`**, ще получим височината на правоъгълника. Остава да умножим двете страни. Ето примерна имплементация на описаната логика:

```javascript
function calculateRectangleArea([arg1, arg2, arg3, arg4]) {
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);
    
    // Изчисляване страните на правоъгълника:
    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.max(y1, y2) - Math.min(y1, y2);

    console.log(width * height);
    console.log(2 * (width + height));
}
```

Използваме метода **`Math.max(x1, x2)`**, за да намерим по-голямата измежду стойностите **`x1`** и **`x2`** и аналогично **`Math.min(y1, y2)`** за намиране на по-малката от двете стойности.

Нека извикаме функцията с тестови стойности от координатната система:

```javascript
calculateRectangleArea([60, 20, 10, 50]); // 1500
                                          // 160
```

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#6](https://judge.softuni.bg/Contests/Practice/Index/927#6).


## Какво научихме от тази глава?

Да резюмираме какво научихме от тази глава на книгата:
- **Четене на потребителски вход**: **`function sum([number1, number2])`**.
- **Преобразуване към число**: **`let num = parseInt(arg1)`**, **`let num = parseFloat(arg1)`**.
- **Извършване на пресмятания с числа** и използване на съответните **аритметични оператори** [+, -, \*, /, ()]: **`let sum = 5 + 3`**.
- **Извеждане на текст по шаблон**: **```console.log(`3 + 5 = ${3 + 5}`)```**.
- Различните типове **закръгляния** на числа: **`Math.ceil()`**, **`Math.trunc()`**, **`Math.floor()`** и **`.toFixed()`**

## Упражнения: прости пресмятания

Нека затвърдим наученото в тази глава с няколко задачи.

### Празен **JS** файл за решението на задачата ни във Visual Studio Code

Започваме като създадем празен **JS файл** във Visual Studio Code. В настоящото практическо занимание ще създадем нова папка и ще добавяме нов **JS файл** за всяка задача, за да организираме решенията на задачите от упражненията:

Стартираме Visual Studio Code и създаваме **нов файл:** [**File**] -> [**New File**]:

![](assets/chapter-2-1-images/00.Visual-studio-01.png)

**Запаметяваме** файла от [**File**] -> [**Save**] или чрез клавишната комбинация [**Ctrl + S**]:

![](assets/chapter-2-1-images/00.Visual-studio-02.png)

Даваме **значещо име** и разширение **.js** на нашия файл, след което натискаме бутона [**Save**]:

![](assets/chapter-2-1-images/00.Visual-studio-03.png)

### Задача:	пресмятане на лице на квадрат

Първата задача от тази тема е следната: да се напише функция, която **получава цяло число `a` и пресмята лицето** на квадрат със страна **`a`**. Задачата е тривиално лесна: **приемате число** като аргумент на функцията, **умножавате го само по себе си** и **печатате получения резултат** на конзолата.

#### Насоки и подсказки

Вече имаме правилно именуван празен файл. Остава да напишем **кода за решаване на задачата**. За целта пишем следния код:

![](assets/chapter-2-1-images/01.Calculate-square-area-01.png)

Кодът дефинира функция **`calculateSquareArea()`**, която приема един аргумент **`arg1`**. Тъй като се очаква аргументът да е цяло число, преобразуваме аргумента с метода **`parseInt()`** и след това изчисляваме лицето: **`area = a * a`**. Накрая печатаме стойността на променливата **`area`**. 
За да **тестваме**, e нужно в същия файл да **извикаме функцията** с произволен параметър и след това да стартираме програмата като натиснем [**Ctrl + F5**]:

![](assets/chapter-2-1-images/01.Calculate-square-area-02.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#0](https://judge.softuni.bg/Contests/Practice/Index/927#0).

Трябва да получите 100 точки (напълно коректно решение):

![](assets/chapter-2-1-images/01.Calculate-square-area-03.png)

![](assets/chapter-2-1-images/01.Calculate-square-area-04.png)


### Задача:	от инчове към сантиметри

Да се напише функция, която **приема число** (не непременно цяло) и преобразува числото от **инчове в сантиметри.** За целта **умножава инчовете по 2.54** (защото 1 инч = 2.54 сантиметра).

#### Насоки и подсказки

Първо създаваме **нов файл** в папката с другите решения - във Visual Studio Code избираме [**File**] -> [**New file**]. Запаметяваме файла под името **convertInchesToCentimeters.js** и натискаме бутона [**Save**]. Следва да напишем **кода на програмата**:

![](assets/chapter-2-1-images/02.Inches-to-centimeters-01.png)

**Извикваме функцията** с параметър **2** и стартираме програмата с [**Ctrl + F5**]:

![](assets/chapter-2-1-images/02.Inches-to-centimeters-02.png)

Да тестваме с дробни числа, например с **4.5**:

![](assets/chapter-2-1-images/02.Inches-to-centimeters-03.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#1](https://judge.softuni.bg/Contests/Practice/Index/927#1).

Решението би трябвало да бъде прието като напълно коректно:

![](assets/chapter-2-1-images/02.Inches-to-centimeters-04.png)


### Задача: поздрав по име

Да се напише функция, която **приема като аргумент име на човек** и отпечатва **`Hello, <name>!`**, където **`<name>`** е въведеното преди това име.

#### Насоки и подсказки

Отново създаваме **нов файл** в папката с другите решения и го запазваме под името **sayHello.js**. Следва да напишем кода на програмата. Ако се затруднявате, може да ползвате примерния код по-долу:

![](assets/chapter-2-1-images/03.Greeting-by-name-01.png)

**Извикваме функцията** с примерен параметър и **стартираме програмата** с [**Ctrl+F5**], за да тестваме дали работи коректно:

![](assets/chapter-2-1-images/03.Greeting-by-name-02.png)

#### Тестване в Judge системата

Тествайте решението си тук:  [https://judge.softuni.bg/Contests/Practice/Index/927#2](https://judge.softuni.bg/Contests/Practice/Index/927#2).


### Задача:	съединяване на текст и числа

Напишете функция, която получава като аргумент име, фамилия, възраст и град и печата съобщение от следния вид: **`You are <firstName> <lastName>, a <age>-years old person from <town>`**.

#### Насоки и подсказки

По същия начин създаваме нов файл и го именуваме **printInfo.js**. **Кодът**, който отпечатва описаното в условието на задачата съобщение, е целенасочено размазан и трябва да се допише от читателя:

![](assets/chapter-2-1-images/04.Concatenate-data-01.png)

Следва да се тества решението локално, като се извика функцията с примерни стойности и се стартира програмата с [**Ctrl+F5**].

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#3](https://judge.softuni.bg/Contests/Practice/Index/927#3).


### Задача:	лице на трапец

Напишете функция, която получава аргумент три числа **b1, b2 и h и пресмята лицето на трапец** с основи **b1 и b2 и височина h. Формулата за лице на трапец е (b1 + b2) * h / 2**.

На фигурата по-долу е показан трапец със страни 8 и 13 и височина 7. Той има лице **(8 + 13) * 7 / 2 = 73.5**.

![](assets/chapter-2-1-images/05.Trapezoid-area-01.png)

#### Насоки и подсказки

Отново трябва да добавим във Visual Studio Code файл с име **calculateTrapezoidArea.js** и да напишем кода, който чете входните данни от аргументите на функция, пресмята лицето на трапеца и го отпечатва. Кодът на картинката е нарочно размазан, за да помисли читателят върху него и да го допише сам:

![](assets/chapter-2-1-images/05.Trapezoid-area-02.png)

**Тествайте** решението локално с извикване на функцията и стартиране с [**Ctrl+F5**].

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#4](https://judge.softuni.bg/Contests/Practice/Index/927#4).


### Задача:	периметър и лице на кръг

Напишете функция, която получава аргумент **число r** и пресмята и отпечатва **лицето и периметъра на кръг**/**окръжност** с **радиус r**.

#### Примерен вход и изход

| Вход | Изход                                                     |
| ---- | --------------------------------------------------------- |
| 3    | Area = 28.2743338823081 <br> Perimeter = 18.8495559215388 |
| 4.5  | Area = 63.6172512351933 <br> Perimeter = 28.2743338823081 |

#### Насоки и подсказки

За изчисленията можете да използвате следните формули:
-	**`Area = Math.PI * r * r`**.
-	**`Perimeter = 2 * Math.PI * r`**.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#5](https://judge.softuni.bg/Contests/Practice/Index/927#5).


### Задача: лице на правоъгълник в равнината

**Правоъгълник** е зададен с **координатите** на два от своите срещуположни ъгъла (x1, y1) – (x2, y2). Да се пресметнат **площта и периметъра** му. **Входът** се приема като аргумент на функция. Числата **x1, y1, x2 и y2** са дадени по едно на ред. **Изходът** се извежда на конзолата и трябва да съдържа два реда с по една число на всеки от тях – лицето и периметъра.

![](/assets/old-images/chapter-2-images/07.Rectangle-area-01.png)

#### Примерен вход и изход

| Вход                                 | Изход               |
| ------------------------------------ | ------------------- |
| 60<br>20<br>10<br>50                 | 1500<br>160         |
| 30<br>40<br>70<br>-10                | 2000<br>180         |
| 600.25<br>500.75<br>100.50<br>-200.5 | 350449.6875<br>2402 |

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#6](https://judge.softuni.bg/Contests/Practice/Index/927#6).


### Задача:	лице на триъгълник

Напишете функция, която приема като аргумент **страна и височина на триъгълник** и пресмята неговото лице. Използвайте **формулата** за лице на триъгълник: **area = a * h / 2**. Закръглете резултата до **2 цифри след десетичния знак, използвайки `area.toFixed(2)`**.

#### Примерен вход и изход

| Вход                | Изход                 |
| ------------------- | --------------------- |
| 20 <br>30           | Triangle area = 300   |
| 15 <br>35           | Triangle area = 262.5 |
| 7.75 <br>8.45       | Triangle area = 32.74 |
| 1.23456 <br>4.56789 | Triangle area = 2.82  |

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#7](https://judge.softuni.bg/Contests/Practice/Index/927#7).


### Задача: конвертор - от градуси °C към градуси °F

Напишете функция, която чете **градуси по скалата на Целзий** (°C) и ги преобразува до **градуси по скалата на Фаренхайт** (°F). Потърсете в Интернет подходяща [формула](http://bfy.tw/3rGh "Търсене в Google"), с която да извършите изчисленията. Закръглете резултата до **2 символа след десетичния знак**. Ето няколко примера:

#### Примерен вход и изход

| Вход | Изход |
| ---- | ----- |
| 25   | 77    |
| 0    | 32    |
| -5.5 | 22.1  |
| 32.3 | 90.14 |

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#8](https://judge.softuni.bg/Contests/Practice/Index/927#8).


### Задача: конвертор - от радиани в градуси

Напишете функция, която чете **ъгъл в [радиани](https://bg.wikipedia.org/wiki/Радиан)** (**`rad`**) и го преобразува в **[градуси](https://bg.wikipedia.org/wiki/Градус_(ъгъл))** (`deg`). Потърсете в Интернет подходяща формула. Числото **π** в **JavaScript** програмите е достъпно чрез **``Math.PI``**. Закръглете резултата до най-близкото цяло число, използвайки метода **``Math.round(…)``**.

#### Примерен вход и изход

| Вход   | Изход |
| ------ | ----- |
| 3.1416 | 180   |
| 6.2832 | 360   |
| 0.7854 | 45    |
| 0.5236 | 30    |

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#9](https://judge.softuni.bg/Contests/Practice/Index/927#9).


### Задача: конвертор - USD към BGN

Напишете функция за **конвертиране на щатски долари** (USD) **в български лева** (BGN). **Закръглете** резултата до **2 цифри** след десетичния знак. Използвайте фиксиран курс между долар и лев: **1 USD = 1.79549 BGN**.

#### Примерен вход и изход

| Вход | Изход      |
| ---- | ---------- |
| 20   | 35.91 BGN  |
| 100  | 179.55 BGN |
| 12.5 | 22.44 BGN  |

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#10](https://judge.softuni.bg/Contests/Practice/Index/927#10).


### Задача:	\*  междувалутен конвертор

Напишете функция за **конвертиране на парична сума от една валута в друга**. Трябва да се поддържат следните валути: **BGN, USD, EUR, GBP**. Използвайте следните фиксирани валутни курсове:

| Курс  | USD     | EUR     | GBP     |
| :---: | :-----: | :-----: | :-----: |
| 1 BGN | 1.79549 | 1.95583 | 2.53405 |

**Входът** e **сума за конвертиране**, **входна валута** и **изходна валута**. **Изходът** е едно число – преобразуваната сума по посочените по-горе курсове, закръглен до **2 цифри** след десетичната точка. 

#### Примерен вход и изход

| Вход                 | Изход      |
| -------------------- | ---------- |
| 20<br>USD<br>BGN     | 35.91 BGN  |
| 100<br>BGN<br>EUR    | 51.13 EUR  |
| 12.35<br>EUR<br>GBP  | 9.53 GBP   |
| 150.35<br>USD<br>EUR | 138.02 EUR |
 
#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#11](https://judge.softuni.bg/Contests/Practice/Index/927#11).


### Задача:	** пресмятане с дати - 1000 дни на Земята

Напишете функция, която чете **рождена дата** във формат **`dd-MM-yyyy`** и пресмята датата, на която се навършват **1000 дни** от тази рождена дата и я отпечатва в същия формат.

#### Примерен вход и изход

| Вход       | Изход      |
| ---------- | ---------- |
| 1995-02-25 | 20-11-1997 |
| 2003-11-07 | 02-08-2006 |
| 2002-12-30 | 24-09-2005 |
| 2012-01-01 | 26-09-2014 |
| 1980-06-14 | 10-03-1983 |

#### Насоки и подсказки 
* Потърсете информация за типа **``Date``** в JavaScript и по-конкретно разгледайте методите **``setDate(...)``**, **``getDate()``**, **``getMonth()``** и **``getYear()``**. С тяхна помощ може да решите задачата, без да е необходимо да изчислявате дни, месеци и високосни години.
* **Не печатайте** нищо допълнително на конзолата освен изискваната дата!

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/927#12](https://judge.softuni.bg/Contests/Practice/Index/927#12).


## Графични приложения с числови изрази

За да упражним работата с променливи и пресмятания с оператори и числови изрази, ще направим нещо интересно: ще разработим **уеб приложение** с графичен потребителски интерфейс. В него ще използваме пресмятания с дробни числа.

### Уеб приложение: \*\*\* конвертор от BGN към EUR!
Създайте уеб приложение, което пресмята стойността в **евро** (EUR) на парична сума, зададена в **лева** (BGN). При промяна на стойността в лева, равностойността в евро трябва да се преизчислява автоматично. Използвайте курс лева / евро: **1.95583**.

![](assets/chapter-2-1-images/13.Bgn-to-eur-01.png)

По подобен начин както във първата глава ("Първи стъпки в програмирането"), за нашето приложение ще използваме езиците **JavaScript**, **HTML** и **CSS**.

1. Първата стъпка е да си **създадем папка** в която ще съхраняваме всички файлове които са необходими за нашето приложение.
2. След това в папката трябва да създадем html файл: **index.html**

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <title>BGN to EUR Converter</title>
</head>
<body>
    <form class="content-form">
        <h2 class="title">BGN to EUR Converter</h2>
        <section class="items">
            <label for="bgn" class="currency">
                <span class="item-currency">BGN: </span>
                <input class="currency-value" type="number" id="bgn" value="0" />
            </label>
            <label for="euro" class="currency">
                <span class="item-currency">EUR: </span>
                <input class="currency-value" type="text" id="euro" readonly />
            </label>
            <input class="primary-btn" type="button" value="Convert!" />
        </section>
    </form>
</body>
</html>
```

Обърнете внимание, че всяка html страница трябва да има **определена структура**. Например винаги основният код който пишем е в тага **`<body>`**, и винаги заглавието на страницата е в тага **`<title>`**.

3. Вече имаме структурата на страницата, остава да добавим и **JavaScript** файл със самата логика. Създаваме нов файл и го именуваме **converter.js**

```javascript
function eurConverter() {
    let bgn = document.getElementById("bgn").value;
    let eur = (bgn / 1.95583).toFixed(2);
    document.getElementById("euro").value = eur;    
}
```

4. След като имаме логиката на приложението, трябва да намерим начин да кажем къде да се изпoлзва. За целта трябва да направим 2 промени в съществуващия **index.html** файл:

Първо добавяме следния ред точно под **`title`** тага, чрез който се осъществява връзката между файловете **index.html** и **converter.js**:
   
```html
 <script src="converter.js" type="text/javascript"></script>
```

И второ, намираме и заместваме **`input`** полето с тип **`button`** със следния код. По този начин задаваме **при клик** на бутона [**Convert!**] да се извиква функцията **`eurConverter()`**:

```html
<input class="primary-btn" type="button" onclick="eurConverter()" value="Convert!" />
```

Ако стартираме файла **index.html** от папката, в момента би трябвало да имаме работещо приложение, което да конвертира от BGN към EUR:
 
![](assets/chapter-2-1-images/13.Bgn-to-eur-02.png)

Нека го направим по-красиво.

5.	Създаваме нов файл с разширение **\*.css** и име **index**. [CSS](https://www.w3schools.com/html/html_css.asp) служи за стилизиране на елементите в HTML. Отваряме файла **index.html** и добавяме следния ред в тага **`<head>`**:

```html
<link rel="stylesheet" href="index.css" type="text/css" />
```

Във файла **index.css** слагаме следния код (дефинираме стилове за отделните елементи от HTML формата):

```css
body {
    font-family: 'Lato', sans-serif;
    color: #FFFFFF;
}

.content-form {
    width: 50%;
    margin: 5% auto;
    background: #234465;
    padding: 5px 10px 10px;
    border-radius: 15px;
    box-shadow: 5px 5px 10px #808080, 5px 5px 10px #6793c1 inset;
}

.currency-value {
    border: none;
    padding: 5px;
    border-radius: 5px;
}

.title {
    text-align: center;
}

.item-currency {
    font-weight: 700;
}

.currency {
    margin: auto;
    padding-bottom: 15px;
}

.items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.primary-btn {
    margin: auto;
    border: none;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: #ffa000;
    color: #FFFFFF;
    font-weight: 700;
}

```

6. Стартираме **index.html** файла:

![](assets/chapter-2-1-images/13.Bgn-to-eur-03.png)


### Уеб приложение: \*\*\* Хвани мишката!

При преместване на курсора на мишката върху изображението, то се премества на случайна позиция. Така се създава усещане, че „**изображението бяга от курсора** и е трудно да се хване“. При „хващане“ на изображението, се извежда съобщение-поздрав.

**Подсказка**: напишете обработчик за събитието **`mouseover`** и премествайте изображението на случайна позиция. Използвайте генератор за случайни числа **`Math.random()`**. Позицията на изображението се задава от свойството **`style.position`**. За да "хванете мишката", напишете функция за събитието **`onclick`**.

![](assets/chapter-2-1-images/14.Catch-the-mouse-00.png)

1. Създаваме нова папка **catch-the-mouse** в която ще съхраняваме файловете за уеб приложението.
2. В папката създаваме два файла: **index.html** и **app.js**. Структурата на папката трябва да изглежда по следния начин:


![](assets/chapter-2-1-images/14.Catch-the-mouse-01.png)

3.	Можете да си помогнете с кода по-долу:

Файлът **index.html** трябва да изглежда по следния начин:

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Catch the mouse!</title>
    <script src="app.js" type="text/javascript"></script>
</head>
<body>
    <img id="image" style="position:absolute;top:30%;left:30%; width:10%; height:auto; " src="images/mouse.jpg" />
</body>
</html>

```

Файлът **app.js** трябва да изглежда по следния начин:

```javascript
function chaseMouse() {
    let img = document.getElementById("image");
    img.style.position = "absolute";
    img.style.left = (Math.random() * 300) + "px";
    img.style.top = (Math.random() * 300) + "px";
}

function catchMouse() {
    alert("Congratulations, You Win!")
}
```

4. Намираме изображение от интернет и го добавяме, като го именуваме **`mouse.jpg`**.

Тествайте приложението, като отворите папката на проекта в **explorer**  и стартирате файла **index.html**:

![](assets/chapter-2-1-images/14.Catch-the-mouse-02.png)

5. Завършете приложението.

Ако имате трудности питайте във **форума на СофтУни**: https://softuni.bg/forum.
