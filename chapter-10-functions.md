# Chapter 10. Functions

**JavaScript** is a well-known **functional language** for programming. As the name hints, **functions** are an extremely important part of the language. 

In this chapter, we will introduce you to **functions** and you will learn their **definition**, as well as what their **base concepts** are while working with them. You will learn why it's **good practice** to use them, how to **define** and **declare** them. We will also introduce you to the **parameters** and **return value of a function**, as well as how to use that return value. In the end, we will peek at **best practices** when using functions.

## What is "function"?

Until this moment, we have found out that while **writing** a programming code for an exercise, **separating** the exercise into **parts**, favors us a lot. Every part is responsible for a **corresponding action** and by doing so it's **easier** to solve the problem, and the **readability** and the debugging of the code are better.

Every piece of code, which does corresponding functionality and which we have separated logically is called **function**. **Functions – slices of code, that are named** by us in a specific way can be called numerous times when we need them, and they will be run that many times as we want to.

One **function** can be **called** that many times, that we think is needed for solving a problem. That **saves** us from repeating the same code and **reduces** the opportunities of making a mistake while editing the repeated code. 

### Simple functions

Simple functions are responsible for running a specific **action**, that will **help** us solve a problem. Those actions can be printing a string on the console, doing a conditional statement, doing a loop, etc.

Let's see an **example of a simple function**:

![](assets/chapter-10-images/01.Simple-method-01.png)

This **function** has the task to print a header, that is a series of the symbol **`-`**. Because of this, the name of the function is **`printHeader`**. The round brackets  **`( `** and **`)`** are always after the name, no matter how we have named the functions. Later we will take a look at how we have to name the functions we are working with, but for now, we will only say that it's important for the **name of the function to define the action** that is doing.

The **body** of the function consists of **programming code**, which is located between the curly brackets **`{`** and **`}`**. Between them, we place code, that will solve our problem, described by the name of the function.

### Why should we use functions?

Up to this moment, we have found out that, functions help us with **separating long exercise into smaller parts**, which leads to an **easier solution** of the corresponding problem. This makes our program, not just well structured, **easy readable** but and more understandable.

Using functions we **escape repeating** of programming code. **Repeating** code is **bad practice** because it makes **harder maintenance** of the program which leads to errors. If one part of the code exists in our program more than once and we have to fix it, we will have to change the repeating code in every single place. The probability of us forgetting one of the repeating places is very big, which will lead to incorrect behavior of the program. This is exactly why it's a **good practice** to define a fragment that will be used **more than once** as a **separate function**.

Functions offer us the **opportunity** to use **code several times**. With solving more than more exercises, we will conclude that using already defined functions saves us a lot of time and effort.

## Declaring functions

In Javascript language we can **define** function everywhere, using the same way we define variables everywhere. Declaring represents the **register of a function** inside a program, to be recognized in it.

Javascript isn't **strongly typed** language. That's why when we **declare a function** it doesn't have a type(string, number, array, etc.), which other programming language methods have.

There are 2 types of ways, which declare a function in Javascript - **function declaration** and **Function expression**.

### Function declaration

With the next example, we will take a look at the required elements inside a function, using **function declaration**.

![](assets/chapter-10-images/02.Declaring-methods-02.png)

* **Keyword function**. We start by using the keyword ***function***, with which we define that there will be declared a function. We name it **keyword** because it is reserved in the Javascript language. We can't have a variable that is named **function** exactly because it is reserved.
* **Name of the function**.  The name of the function is **defined by us** and we must never forget that it must **define the task** it is doing. In the example, the name **`getSquare`** tells us that the task of this function is to find the area of the square.
* **List of parameters**. We declare them between the brackets  **`(`** and **`)`**, which we type after the name of the function. Here we list a series of **parameters**, which the function will use. We can have **only one** parameter, **more than one** parameter or we can leave it empty. If there are no parameters we will only type the brackets **`()`**. In the current example, the parameter is only the **`n`**.
* **Body of the function**. It is declared between the brackets **`{`** and **`}`** which we type after the closing bracket **`)`**. In the **body of the function**, we define **using code**
all operations, that we want our function to do. In the body of the function, we describe the **algorithm** by which the function solves the given problem. We achieve the **logic** of the function. In the current example, we calculate the area of the square using **`n * n`**.

When declaring functions it is important to follow the **sequence** of the fundamental elements - first **Keyword function** then **Name of function**, **List of parameters** surrounded by round brackets **`()`**, **Body of the function** surrounded by curly brackets **`{}`**.

### Function expression

With the next example, we will look at the required elements in the declaration of an **expression function**. It is similar to **function declaration** which we have already viewed and it can be said that it's a **combination** of **declaring a variable** and **declaring a declaration function**.

![](assets/chapter-10-images/02.Declaring-methods-03.png)

* **Keyword `let`**. We will start with using the **keyword `let`**, with which we will declare a declaration of a variable.
* **Name of the variable**. The name of the variable is **decided by us**. In the example, the name is **`getSquare`** which tells us that the task of this function is to calculate the area of the square.
* **Declaration of a function**. Using the same structure that we have learned in **function declaration** -  first **Keyword function** then **Name of function**, **List of parameters** surrounded by round brackets **`()`**, **Body of the function** surrounded by curly brackets **`{}`**. The difference, in this case, is that **Name of a function** is not necessary, but it is recommended to get used to writing the name. In the example, the program will work without problems even if we don't type **`getSquareFunc`**. If we don't type the name, the function will become **anonymous**.

When we declare a variable in the body of a function (using the keyword **`let`** or **`const`**)
we call it **local** variable for the function. The scope in which it exists and can be used is from the row it is defined to the end of the closing bracket **`}`** of the function. That scope is called **variable scope**.

### Function declaration or Function expression

The difference between **Function declaration** and **Function expression** is very simple.
All functions declared by **function declaration** are loaded in the memory of the program before it is started, while when using **function expression** the program will know and run the function only when it has come to it.

In theory, this means that we can **call function** declared with **function declaration** even before it was declared in the previous rows. If we try to use **function expression** the program will **throw an error** that the function is not declared yet.

## Invoking a function
Invoking a function is the **beginning execution of the code** that is located inside the body of the function. We call it by typing the **name** of the function followed by **`()`** and **`;`** to end the row. Here is an example:

![](assets/chapter-10-images/03.Invoking-methods-01.png)

This function can be called from **different points** in our program. One of the ways to be called is to be called from the **global scope**.

![](assets/chapter-10-images/03.Invoking-methods-02.png)

A Function can be invoked from the **body of another function** which is **not** the global scope of our program.

![](assets/chapter-10-images/03.Invoking-methods-03.png)

A Function can be called from **its own body**. This is called **recursion** and you can find more about it on [Wikipedia](https://bg.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F) or google it.

### Example: empty cash receipt

Write a function, that prints empty cash receipt. The function must call another three functions: one to print the title, one for the main part, and the last for the bottom part.

|Part of cash receipt|Text|
|---|---|
|Upper part|CASH RECEIPT<br>------------------------------|
|Middle part|Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|
|Bottom part|------------------------------<br>(c) SoftUni|

#### Sample Input and Output

|Input|Output|
|---|---|
|None|CASH RECEIPT<br>------------------------------<br>Charged to\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>Received by\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_<br>------------------------------<br>(c) SoftUni|

#### Hints and Guidelines

Our first step is to create a function for **creating title**. We should give it a short descriptive name. For example: **`printReceiptHeader`**. In the body we will write the following code:

![](assets/chapter-10-images/04.Print-receipt-01.png)
In a like manner, we will create another two functions **to print the middle part** of the receipt (body) **`printReceiptBody`** and **to print the bottom part** of the receipt (footer **`printReceiptFooter`**.

After this we will set **one more function*** which will call the other three functions which we have written so far:

![](assets/chapter-10-images/04.Print-receipt-02.png)

In the end we will **invoke** **`printReceipt`** from the global scope of our program:

![](assets/chapter-10-images/04.Print-receipt-03.png)

#### Testing in the Judge System

The program with a total of four functions that call one another is ready and we can **run and debug it**. After that, we will send it for test in the Judge system: [https://judge.softuni.bg/Contests/Practice/Index/943#0](https://judge.softuni.bg/Contests/Practice/Index/943#0).

## Functions with parameters

When we are dealing with a given task the function we are using needs **additional information** which the result depends on. Exactly this information are the **parameters of the functions** and the behavior of the program depends on it.

### Using parameters inside a function

If the function requires **input data**, it is passed inside the **`()`** brackets. The order of the **function parameters** must match the order of the **function arguments** when declaring and invoking the function. Parameters can be **zero, one, or more**. When declaring the parameters we divide them with comma **`,`**.

**Declaring** function **`printNumbers(...)`** and the **list** of **parameters** which the programs need to work correctly will look like this:

![](assets/chapter-10-images/05.Method-parameters-01.png)

After this, we **invoke** the function, and we give it the **corresponding function arguments**:

![](assets/chapter-10-images/05.Method-parameters-02.png)

When **when declaring function parameters** we should check if every parameter has **name**. It's also important when we invoke a function we should always pass **values** in the order that they are declared. In the previous example, the variable **`start`** will be passed to the first element (in our case the number 5). The variable **`end`** will have the next number which is 10.

It's important to point out that in the programming language **JavaScript** declaring a function with a given **number of parameters** doesn't force us to invoke the function with the **same number of parameters**. We can invoke the function by giving it **more** or **less** parameters than needed and it won't throw an error.

Let's look at this example:

![](assets/chapter-10-images/05.Method-parameters-03.png)

In this example, we call the function  **`printNumbers(...)`** and we give 4 instead of the **declared** 2 parameters. All unnecessary parameters will be ignored. These are the numbers 15 and 20. They won't go to the function because the function doesn't have a declared parameter that will get them.

Let's look at another example:

![](assets/chapter-10-images/05.Method-parameters-04.png)

In this example, we call the function **`printNumbers(...)`** but this time we give only 1 parameter instead of the **declared** 2 parameters. All parameters that are not **set as values** will automatically get **`undefined`** values. In our case the variable.

### Example: Symbol of integer

Create a function that checks if a number is a positive or negative number.

#### Sample Input and Output

|Input|Output|
|---|---|
|2|The number 2 is positive.|
|-5|The number -5 is negative.|
|0|The number 0 is zero.|

#### Hints and Guidelines

Our first step is **declaring** a function and giving it describing name - **`printSign`**. This function will only have one parameter:

![](assets/chapter-10-images/06.Print-sign-01.png)

Our next step is **implementing** logic by which our program will check if the number is positive or negative. From the example, we can see that there are 3 cases:  if the number is bigger and smaller than zero or if it's zero. We will make three conditional statements in the body of the function.

Our next step is to call the function we have created:

![](assets/chapter-10-images/06.Print-sign-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/943#1](https://judge.softuni.bg/Contests/Practice/Index/943#1).


### Optional parameters

**JavaScript** programming language supports **optional** parameters. They allow **skipping** of parameters when calling a function. We declare them by **providing default values** in the description of the parameter.

Our next example shows the use of optional parameters:

![](assets/chapter-10-images/07.Optional-parameters-01.png)

**`printNumbers(...)`** can be invoked in different ways:

![](assets/chapter-10-images/07.Optional-parameters-02.png)

When we are not **setting value** for the parameter, he will **get the value** that we have given him when declaring the function.

### Example: Print of triangle

Create a function that will create a triangle as shown in the example.

#### Sample Input and Output

|Input|OutPut|Input|OutPut|
|---|---|---|---|
|3|1<br>1 2<br>1 2 3<br>1 2<br>1|4|1<br>1 2<br>1 2 3<br>1 2 3 4 <br>1 2 3<br>1 2<br>1|

#### Hints and Guidelines

We choose a name according to the task it will do. For example, **`printLine`** and we implement it:

![](assets/chapter-10-images/08.Print-triangle-01.png)

From drawing on console exercises we remember that it's a good practice to **divide the figure into different parts**. We will divide the triangle into 3 parts - upper, middle, and bottom.

Our next step is to print the **upper body** of the triangle with a loop:

![](assets/chapter-10-images/08.Print-triangle-02.png)

After that, we will print the **middle part**:

![](assets/chapter-10-images/08.Print-triangle-03.png)

In the end, we will print the **bottom part** from the triangle but this time with a reverse loop.

![](assets/chapter-10-images/08.Print-triangle-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/943#2](https://judge.softuni.bg/Contests/Practice/Index/943#2).

### Example: draw a filled square.

Draw a square with side **`n`**, as shown in the example.

#### Sample Input and Output

|Input|Output|Input|Output|
|---|---|---|---|
|4|<code>--------</code><br><code>-\\/\\/\\/-</code><br><code>-\\/\\/\\/-</code><br><code>--------</code>|5|<code>----------</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>-\\/\\/\\/\\/-</code><br><code>----------</code>|

#### Hints and Guidelines

We create a function that prints the first and last row because they are the same. We shouldn't forget that we have to give him a **corresponding name** and set as a **parameter** the length of the side. We will use the built-in function **`repeat(...)`**:

![](assets/chapter-10-images/09.Draw-filled-square-01.png)

Our next step is to create a function that will draw on the console the middle rows. Again we set a descriptive name such as **`printMiddleRow`**.

![](assets/chapter-10-images/09.Draw-filled-square-02.png)

In the end, we invoke the declared functions to draw the whole square:

![](assets/chapter-10-images/09.Draw-filled-square-03.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/943#3](https://judge.softuni.bg/Contests/Practice/Index/943#3).


## Return result from a function

Up to this point, we have viewed functions that do a specific task. For example printing a text, number a figure on the console. There is another type of function that can **return** a **result** from their task. For example the result of multiplication of two numbers. We will look at this type of function in this part.

### Operator return

За да получим резултат от функцията, на помощ идва операторът **`return`**. Той трябва да бъде **използван в тялото** на функцията и указва на програмата да **спре изпълнението** на функцията и да **върне** на извиквача определена **стойност**. Тази стойност се определя от израза след въпросния оператор **`return`**.

В примера по-долу имаме **функция**, която получава име и фамилия като **параметри**, съединява ги и **връща** като резултат пълното име.

![](assets/chapter-10-images/11.Return-operator-01.png)

**Има случаи**, в които **`return`** може да бъде извикван от няколко места във функцията, но само ако има **определени** входни условия.

В примера по-долу имаме функция, която сравнява две числа и **връща** резултат съответно **`-1`**, **`0`** или **`1`** според това дали първият аргумент е по-малък, равен или по-голям от втория аргумент, подаден на функцията. Функцията използва ключовата дума **`return`** на три различни места, за да върне три различни стойности според логиката на сравненията на числата:

![](assets/chapter-10-images/11.Return-operator-02.png)

#### Кодът след return е недостъпен

В случай, че **return** операторът не се намира в условна конструкция като **`if`**, след него, в текущия блок, **не** трябва да има други редове код, тъй като тогава Visual Studio Code ще покаже предупреждение, съобщавайки ни, че е засякъл код, който **не може да бъде достъпен**:

![](assets/chapter-10-images/11.Return-operator-03.png)

Операторът **`return`** може да бъде използван и без да бъде специфицирана **конкретна стойност**, която да бъде върната. В този случай, просто ще бъде **прекратено** изпълнението на кода във функцията и ще бъде върната стойност по подразбиране **`undefined`**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" />
</td><td>В програмирането не може да има два пъти оператор <code><b>return</b></code> един след друг, защото изпълнението на първия няма да позволи да се изпълни вторият. Понякога програмистите се шегуват с фразата “<b><i>пиши</i> <code>return; return;</code> <i>и да си ходим</i></b>”, за да обяснят, че логиката на програмата е объркана.</td></tr>
</table>

### Употреба на върнатата от функцията стойност

След като дадена функция е изпълнена и върне стойност, то тази стойност може да се използва по **няколко** начина.

Първият е да **присвоим резултата като стойност на променлива**:

![](assets/chapter-10-images/12.Return-value-01.png)

Вторият е резултатът да бъде използван **в израз**:

![](assets/chapter-10-images/12.Return-value-02.png)

Третият е да **подадем** резултата от работата на функцията към **друга функция**:

![](assets/chapter-10-images/12.Return-value-03.png)

### Пример: пресмятане на лицето на триъгълник

Да се напише функция, която изчислява лицето на триъгълник по дадени основа и височина и връща стойността му.

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|3<br>4|6|

#### Насоки и подсказки

**Създаваме** функция, с коректно име.

![](assets/chapter-10-images/13.Calculate-triangle-area-01.png)

Следващата ни стъпка е да **извикаме новата** функция и да **запишем върнатата стойност в подходяща променлива**.

![](assets/chapter-10-images/13.Calculate-triangle-area-02.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#4](https://judge.softuni.bg/Contests/Practice/Index/943#4).


### Пример: степен на число

Да се напише функция, която изчислява и връща резултата от повдигането на число на дадена степен.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|2<br>8|256|3<br>4|81|

#### Насоки и подсказки

Първата ни стъпка отново ще е да създадем функция, която ще приема два параметъра (числото и степента) и ще връща като резултат числото повдигнато на съответната степен.

![](assets/chapter-10-images/14.Number-power-01.png)

След като сме направили нужните изчисления, ни остава да извикаме декларираната функция.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#5](https://judge.softuni.bg/Contests/Practice/Index/943#5).


### Функции, връщащи няколко стойности

В практиката се срещат случаи, в които се нуждаем дадена функция да върне повече от един елемент като резултат. В езикът **JavaScript** има 2 начина по които може да бъде постигнато това - чрез **деструкция** и чрез **връщане на обект**.

#### Деструкция

Когато желаем функция да върне **повече от една стойност**, използваме ключовата думичка **`return`**, след което изброяваме всички стойности, които желаем да върнем, като ги ограждаме в квадратни скоби - **`[`**, **`]`**:

![](assets/chapter-10-images/15.Return-multiple-values-01.png)

След това за да получим върнатите стойности, отново на помощ идват квадратните скоби. Изброяваме параметри, които да получат тези стойности, като присвояването ще стане по реда, по който стойностите са върнати:

![](assets/chapter-10-images/15.Return-multiple-values-02.png)

В горният пример променливата **`name`** ще получи стойността "**John Doe**", която е първата върната стойност от функцията **`getNames`**, а **`fullName`** ще получи "**John Silver Doe**", която е втората върната стойност.

#### Обекти

Този подход е много подобен на предния, като разликата е, че не просто **изброяваме** стойностите, които искаме да върнем, но и им даваме **имена**. **Обектите** са изключително важна и основна част от езика **JavaScript**. За сега е достатъчно да знаете, че се декларират с фигурните скоби **`{`** **`}`**, като между тях изброяваме **името** на стойността (нарича се **ключ**), последвано от знака две точки - **`:`** и самата стойност. Разделяме отделните двойки **ключ-стойност** със символа **`,`**.

![](assets/chapter-10-images/15.Return-multiple-values-03.png)

В този пример връщаме обект, който държи 2 стойности - **`name`** и **`fullName`**. 

![](assets/chapter-10-images/15.Return-multiple-values-04.png)

Тук променливата **`personNames`** ще получи всички върнати стойности. Като **`name`** и **`fullName`** са част от тези стойности и могат да бъдат достъпени със символа **`.`**:

![](assets/chapter-10-images/15.Return-multiple-values-05.png)

## Варианти на функции

В много езици за програмиране една и съща функция може да е декларирана в **няколко варианта** с еднакво име и различни параметри. Това е известно с термина "**method overloading**". За добро или лошо **JavaScript** не поддържа тази възможност.

Когато декларирате **две или повече функции с еднакви имена**, програмата ще използва **последно декларираната** такава. Декларирайки втора функция със същото име, вие реално премахвате старата функция и записвате на нейно място новата.

## Вложени функции

Нека разгледаме следния пример:

![](assets/chapter-10-images/19.Local-functions-01.png)

### Какво е локална функция?

Виждаме, че в този код, в нашата функция **`solve()`** има **другa** декларирана функция **`sum()`**. Такава **вложенa** функция се нарича **локална** функция. Локалните функции могат да се декларират във всяка една друга функция.

### Защо да използваме локални функции?

С времето и практиката ще открием, че когато пишем код, често се нуждаем от функции, които бихме използвали само един път, или пък нужната ни функция става твърде дълга. По-нагоре споменахме, че когато една функция съдържа в себе си прекалено много редове код, то той става труден за поддръжка и четене. В тези случаи на помощ идват локалните функции - те предоставят възможност в дадена функция да се декларира друга функция, която ще бъде използвана например само един път. Това спомага кода ни да е по-добре подреден и по-лесно четим, което от своя страна спомага за по-бърза корекция на евентуална грешка в кода и намалява възможността за грешки при промени в програмната логика.

### Деклариране на локални функции

Нека отново разгледаме примера от по-горе.

![](assets/chapter-10-images/19.Local-functions-01.png)

В този пример, функцията **`sum()`** е локална функция, тъй като е вложена във функцията **`solve()`**, т.е. **`sum()`** е локална за **`solve()`**. Това означава, че функцията **`sum()`** може да бъде използван **само** във функцията **`solve()`**, тъй като е **декларирана в нея**.

Локалните функции имат достъп до променливи, които са декларирани на същото или по - горно ниво от тях. Следващият пример демонстрира как се случва това:

![](assets/chapter-10-images/19.Local-functions-02.png)

Тази особеност на вложените функции ги прави много удобни помощници при решаването на дадена задача. Те спестяват време и код, които иначе бихме вложили, за да предаваме на вложените функции параметри и променливи, които се използват във функциите, в които са вложени.


## Именуване на функции. Добри практики при работа с функции

В тази част ще се запознаем с някои **утвърдени практики** при работа с функции, свързани с именуването, подредбата на кода и неговата структура.

### Именуване на функции

Когато именуваме дадена функция е препоръчително да използваме **смислени имена**. Тъй като всяка функция **отговаря** за някаква част от нашия проблем, то при именуването ѝ трябва да вземем предвид **действието, което тя извършва**, т.е. добра практика е **името да описва целта**.

Задължително е името да започва с **малка буква** и трябва да е съставено от глагол или от двойка: глагол + съществително име. Форматирането на името става, спазвайки **Lower Camel Case** конвенцията, т.е. **всяка дума, с изключение на първата, започва с главна буква**. Кръглите скоби **`( `** и **`)`** винаги следват името на функцията.

Всяка функция трябва да изпълнява самостоятелна задача, а името на функцията трябва да описва каква е нейната роля.

Няколко примера за **коректно** именуване на функции:
* **`findStudent`**
*	**`loadReport`**
*	**`sine`**

Няколко примера за **лошо** именуване на функции:
*	**`method1`**
*	**`doSomething`**
*	**`handleStuff`**
*	**`sampleMethod`**
*	**`dirtyHack`**
*	**`FindStudent`**
*	**`LoadReport`**

Ако не можем да измислим подходящо име, то най-вероятно функцията решава повече от една задача или няма ясно дефинирана цел и тогава трябва да помислим как да я разделим на няколко отделни функции.

### Именуване на параметрите на функциите

При именуването на **параметрите** на функцията важат почти същите правила, както и при самите функции. Разликите тук са, че за имената на параметрите е добре да използваме съществително име или двойка от прилагателно и съществително име. Трябва да отбележим, че е добра практика името на параметъра да **указва** каква е **мерната единица**, която се използва при работа с него.

Няколко примера за **коректно** именуване на параметри на функции:
*   **`firstName`**
*	**`report`**
*	**`speedKmH`**
*	**`usersList`**
*	**`fontSizeInPixels`**
*	**`font`**

Няколко примера за **некоректно** именуване на параметри:
*	**`p`**
*	**`p1`**
*	**`p2`**
*   **`populate`**
*   **`LastName`**
*   **`last_name`**

### Добри практики при работа с функции

Нека отново припомним, че една функция трябва да изпълнява **само една** точно определена **задача**. Ако това не може да бъде постигнато, тогава трябва да помислим как да **разделим** функцията на няколко отделни такива. Както казахме, името на функцията трябва точно и ясно да описва нейната цел. Друга добра практика в програмирането е да **избягваме** функции, по-дълги от екрана ни (приблизително). Ако все пак кода стане много обемен, то е препоръчително функцията да се **раздели** на няколко по-кратки, както в примера по-долу.

![](assets/chapter-10-images/20.Good-practice-01.png)

### Структура и форматиране на кода

При писането на функции трябва да внимаваме да спазваме коректна **индентация** (отместване по-навътре на блокове от кода).

Пример за **правилно** форматиран JavaScript код:

![](assets/chapter-10-images/20.Good-practice-02.png)

Пример за **некоректно** форматиран JavaScript код:

![](assets/chapter-10-images/20.Good-practice-03.png)

Когато заглавният ред на функцията е **твърде дълъг**, се препоръчва той да се раздели на няколко реда, като всеки ред след първия се отмества с две табулации надясно (за по-добра четимост):

![](assets/chapter-10-images/20.Good-practice-04.png)

Друга добра практика при писане на код е да **оставяме празен ред** между функциите, след циклите и условните конструкции. Също така, опитвайте да **избягвате** да пишете **дълги редове и сложни изрази**. С времето ще установите, че това подобрява четимостта на кода и спестява време. 

Препоръчваме винаги да се **използват къдрави скоби за тялото на проверки и цикли**. Скобите не само подобряват четимостта, но и намалят възможността да бъде допусната грешка и програмата ни да се държи некоректно.

## Какво научихме от тази глава?

В тази глава се запознахме с базовите концепции при работа с функции:
* Научихме, че **целта** на функциите е да **разделят** големи програми с много редове код на по-малки и кратки задачи.
* Запознахме се със **структурата** на функциите, как да ги **декларираме** и **извикваме** по тяхното име.
* Разгледахме примери за функции с **параметри** и как да ги използваме в нашата програма.
* Научихме какво представляват **сигнатурата** и **връщаната стойност** на функцията, както и каква е ролята на оператора **`return`**.
* Запознахме се с **добрите практики** при работа с функции, как да именуваме функциите и техните параметри, как да форматираме кода и други.


## Упражнения

За да затвърдим работата с функции, ще решим няколко задачи. В тях се изисква да напишете функция с определена функционалност и след това да я извикате като ѝ подадете данни, точно както е показано в примерния вход и изход.


### Задача: "Hello, Име!"

Да се напише функция, която получава като параметър име и принтира на конзолата "*Hello, \<name\>!*".

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|Peter|Hello, Peter!|

#### Насоки и подсказки

Дефинирайте функция **`printName(name)`** и я имплементирайте. Да се напише функция **`solve(...)`**, която получава като входни данни име на човек и извиква **`printName`** функцията като подава прочетеното име.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#7](https://judge.softuni.bg/Contests/Practice/Index/943#7).


### Задача: по-малко число

Да се създаде функция **`getMin(a, b)`**, която връща по-малкото от две числа. Да се напише функция **`solve(...)`**, която получава като входни данни три числа и печата най-малкото от тях. Да се използва функцията **`getMin(…)`**, която е вече създадена.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|1<br>2<br>3|1|-100<br>-101<br>-102|-102|

#### Насоки и подсказки

Дефинирайте функция **`getMin(int a, int b)`** и я имплементирайте, след което я извикайте от функцията **`solve(...)`**, както е показано по-долу. За да намерите минимума на три числа, намерете първо минимума на първите две от тях и след това минимума на резултата и третото число:

```javascript
function solve([num1, num2, num3]) {
    let min = getMin(getMin(num1, num2), num3);
}
```

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#8](https://judge.softuni.bg/Contests/Practice/Index/943#8).


### Задача: повтаряне на низ

Да се напише функция **`repeatString(str, count)`**, която получава като параметри стрингова променлива **`str`** и цяло число **`n`** и връща низа, повторен **`n`** пъти. След това резултатът да се отпечата на конзолата.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|str<br>2|strstr|roki<br>6|rokirokirokirokirokiroki|

#### Насоки и подсказки

Допишете функцията по-долу като добавите входния низ към резултата в цикъла:

![](assets/chapter-10-images/21.Repeated-string-01.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#9](https://judge.softuni.bg/Contests/Practice/Index/943#9).


### Задача: n-та цифра

Да се напише функция **`findNthDigit(number, index)`**, която получава число и индекс N като параметри и печата N-тата цифра на числото (като се брои от дясно на ляво, започвайки от 1). След това, резултатът да се отпечата на конзолата.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|83746<br>2|4|93847837<br>6|8|2435<br>4|2|

#### Насоки и подсказки

За да изпълним алгоритъма, ще използваме **`while`** цикъл, докато дадено число не стане 0. На всяка итерация на **`while`** цикъла ще проверяваме дали настоящият индекс на цифрата не отговаря на индекса, който търсим. Ако отговаря, ще върнем като резултат цифрата на индекса (**`number % 10`**). Ако не отговаря, ще премахнем последната цифра на числото (**`number = number / 10`**). Трябва да следим коя цифра проверяваме по индекс (от дясно на ляво, започвайки от 1). Когато намерим цифрата, ще върнем индекса. 

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#10](https://judge.softuni.bg/Contests/Practice/Index/943#10).


### Задача: число към бройна система

Да се напише функция **`integerToBase(number, toBase)`**, която получава като параметри цяло число и основа на бройна система и връща входното число, конвертирано към посочената бройна система. След това, резултатът да се отпечата на конзолата. Входното число винаги ще е в бройна система 10, а параметърът за основа ще е между 2 и 10.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|----|---|---|---|---|
|3<br>2|11|4<br>4|10|9<br>7|12|

#### Насоки и подсказки

За да решим задачата, ще декларираме стрингова променлива, в която ще пазим резултата. След това трябва да изпълним следните изчисления, нужни за конвертиране на числото.
* Изчисляваме **остатъка** от числото, разделено на основата.
* **Вмъкваме остатъка** от числото в началото на низа, представящ резултата.
* **Разделяме** числото на основата.
* **Повтаряме** алгоритъма, докато входното число не стане 0.

Допишете липсващата логика във функцията по-долу:

```javascript
function integerToBase(number, toBase) {
    string result = "";
    while (number !== 0) {
        // implement the missing conversion logic
    }
    return result;
}
```

#### Тестване в Judge системата 

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#11](https://judge.softuni.bg/Contests/Practice/Index/943#11).


### Задача: известия

Да се напише функция **`solve(...)`**, която приема като първи параметър цяло число **`n`** - брой на съобщения и допълнителен брой параметри, които са самите части на **съобщенията**. За всяко съобщение може да се получи различен брой параметри. Първият параметър за всяко съобщение е **`messageType`**, който може да бъде **`success`**, **`warning`** или **`error`**:
   - Когато **`messageType`** е **`success`**, следващите 2 получени параметъра са **`operation`** и **`message`**
   - Когато **`messageType`** е **`warning`** следващият параметър е **`message`**.
   - Когато **`messageType`** е **`error`** следващите 3 получени параметъра са **`operation`** + **`message`** + **`errorCode`** (всяко е отделен параметър).

На конзолата да се отпечата **всяко прочетено съобщение**, форматирано в зависимост от неговия **`messageType`**. Като след заглавния ред за всяко съобщение да се отпечатат толкова на брой символа **`=`**, **колкото е дълъг** съответният **заглавен ред** и да се сложи по един **празен ред** след всяко съобщение (за по-детайлно разбиране погледнете примерите). 

Задачата да се реши с дефиниране на четири функции: **`showSuccessMessage(...)`**, **`showWarningMessage(...)`**, **`showErrorMessage(...)`** и **`processMessage(...)`**, като само последната функция да се извиква от главната **`solve(...)`** функция:

![](assets/chapter-10-images/23.Notifications-01.png)

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|4<br>error<br>credit card purchase<br>Invalid customer address<br>500<br>warning<br>Email not confirmed<br>success<br>user registration<br>User registered successfully<br>warning<br>Customer has not email assigned|<code>Error: Failed to execute credit card purchase.</code><br><code>==============================================</code><br><code>Reason: Invalid customer address.</code><br><code>Error code: 500.</code><br><br><code>Warning: Email not confirmed.</code><br><code>=============================</code><br><br><code>Successfully executed user registration.</code><br><code>========================================</code><br><code>User registered successfully.</code><br><br><code>Warning: Customer has not email assigned.</code><br><code>=========================================</code>|

#### Насоки и подсказки

Дефинирайте и имплементирайте четирите функции. След това извикайте **`processMessage(...)`** от главната **`solve(...)`** функция.

![](assets/chapter-10-images/23.Notifications-02.png)

В **`processMessage(...)`** извадете първо броят на съобщенията и след това ги обработете едно по едно спрямо техният тип и извикайте съответната функция за печатане.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#12](https://judge.softuni.bg/Contests/Practice/Index/943#12).


### Задача: числа към думи

Да се напише функция **`letterize(number)`**, която получава цяло число и го разпечатва с думи на английски език според условията по-долу:
* Да се отпечатат с думи стотиците, десетиците и единиците (и евентуални минус) според правилата на английския език.
* Ако числото е по-голямо от **999**, трябва да се принтира "**too large**".
* Ако числото е по-малко от **-999**, трябва да се принтира "**too small**".
* Ако числото е **отрицателно**, трябва да се принтира "**minus**" преди него.
* Ако числото не е съставено от три цифри, не трябва да се принтира.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3<br>999<br>-420<br>1020|nine-hundred and ninety nine<br>minus four-hundred and twenty<br>too large|2<br>15<br>350|fifteen<br>three-hundred and fifty|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|4<br>311<br>418<br>509<br>-9945|three-hundred and eleven<br>four-hundred and eighteen<br>five-hundred and nine<br>too small|3<br>500<br>123<br>9|five-hundred<br>one-hundred and twenty three<br>nine|

#### Насоки и подсказки

Можем първо да отпечатаме **стотиците** като текст - (числото / 100) % 10, след тях **десетиците** - (числото / 10) % 10 и накрая **единиците** - (числото % 10).

Първият специален случай е когато числото е точно **закръглено на 100** (напр. 100, 200, 300 и т.н.). В този случай отпечатваме "one-hundred", "two-hundred", "three-hundred" и т.н.

Вторият специален случай е когато числото, формирано от последните две цифри на входното число, е **по-малко от 10** (напр. 101, 305, 609 и т.н.). В този случай отпечатваме "one-hundred and one", "three-hundred and five", "six-hundred and nine" и т.н.

Третият специален случай е когато числото, формирано от последните две цифри на входното число, е **по-голямо от 10 и по-малко от 20** (напр. 111, 814, 919 и т.н.). В този случай отпечатваме "one-hundred and eleven", "eight-hundred and fourteen", "nine-hundred and nineteen" и т.н.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#13](https://judge.softuni.bg/Contests/Practice/Index/943#13).


### Задача: криптиране на низ

Да се напише функция **`еncrypt(char letter)`**, която криптира дадена буква по следния начин:
* Вземат се първата и последна цифра от ASCII кода на буквата и се залепят една за друга в низ, който ще представя резултата. 
* Към началото на стойността на низа, който представя резултата, се залепя символа, който отговаря на следното условие:
  * ASCII кода на буквата + последната цифра от ASCII кода на буквата.
* След това към края на стойността на низа, който представя резултата, се залепя символа, който отговаря на следното условие:
  * ASCII кода на буквата - първата цифра от ASCII кода на буквата.
* Функцията трябва да върне като резултат криптирания низ.

Пример:
* j &rarr; **p16i**
  * ASCII кодът на **j** e **106** &rarr; Първа цифра - **1**, последна цифра - **6**.
  * Залепяме първата и последната цифра &rarr; **16**.
  * Към **началото** на стойността на низа, който представя резултата, залепяме символа, който се получава от сбора на ASCII кода + последната цифра &rarr; 106 + 6 &rarr; 112 &rarr; **p**.
  * Към **края** на стойността на низа, който представя резултата, залепяме символа, който се получава от разликата на ASCII кода - първата цифра &rarr; 106 - 1 &rarr; 105 &rarr; **i**.
  
Използвайки метода, описан по-горе, да се дефинира функция **`solve(...)`**, която получава **поредица от символи**, **криптира ги** и отпечатва резултата на един ред. Приемаме, че входните данни винаги ще бъдат валидни. **`solve(...)`** функцията трябва да получава входните данни, подадени от потребителя – цяло число **`n`**, последвано от по един символ за всеки следващ **`n`** елемент. Да се криптират символите и да се добавят към криптирания низ. Накрая като резултат трябва да се отпечата **криптиран низ от символи** като в следващия пример.

**Пример**:
* S, o, f, t, U, n, i &rarr; V83Kp11nh12ez16sZ85Mn10mn15h

#### Примерен вход и изход

|Вход|Изход|
|---|---|
|7<br>S<br>o<br>f<br>t<br>U<br>n<br>i|V83Kp11nh12ez16sZ85Mn10mn15h|

|Вход|Изход| 
|---|---|
|7<br>B<br>i<br>r<br>a<br>H<br>a<br>x| H66<n15hv14qh97XJ72Ah97xx10w |

#### Насоки и подсказки
На променливата **`result`**, в която ще се пази стойността на резултата, ще присвоим първоначална стойност **`""`**. Трябва да се завърти цикъл **`n`** пъти, като на всяка итерация към променливата, в която пазим стойността на резултата, ще прибавяме криптирания символ. 

За да намерим първата и последната цифри от ASCII кода, ще използваме алгоритъма, който използвахме за решаване на задача "N-та цифра", а за да създадем низа, ще процедираме както в задачата "Число към бройна система".
 
#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/943#14](https://judge.softuni.bg/Contests/Practice/Index/943#14).
