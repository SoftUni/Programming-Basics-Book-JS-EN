# Chapter 11. Tricks and Hacks

In the current chapter we are going to see some tricks, hacks and techniques, which will make our work with **JavaScript**  easier in the **Visual Studio Code** IDE. In particular we will see:

* How to properly **format our code**.
* Conventions for **naming elements in the code**.
* Some **keyboard shortcuts** (keyboard shortcuts).
* Some **code snippets** (code snippets).
* Techniques to **debug our code**.

## Code Formatting

The right formatting of aur code will make it **easier to read and understand**, In case someone else needs to work with it.This is important, because in practice we will need to work in a team with other people and it is highly important to write our code in a way that our colleagues can **quickly understand ** it.

There are some defined rules for correct formatting of the code, which are collected in one placeand are called **conventions**. The conventions are group of rules, gennerally accepted by the programmers using a given language, which are massively used. These conventions help building norms in given languages - what is the best way to write and what are the **good practices**. It is accepted that if a programmer follows them then his code is easy to read and understand.

The **JavaScript** language is created by **Brendan Eich** as part of the development of one of the first browsers **Netscape**. The basic constructions and basic syntax are intentionally **similar to Java**, to reduce the learning effort. Moreover, similar conventions are even used to write and format the code. You should know that , even if you do not follow the imposed conventions, the code will **work** (as long as it is written correctly), but simply **will not be easy to understand**. Of course, this is not fatal on base level, but the faster you get used to writing quality code, the better.

The rules that are used for writing **JavaScipt** can be found on many sources. The oficcial rules, ect. **JavaScript code conventions** are very well described in the article "**Coding style**" in the documentation of "Mozilla": [https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style). It is important, to note that in the examples, we have given so far and will give in the future in this book, we are guided mainly by it.

For code formatting **curly braces `{}`** to be opened on the same line and to be closed just below the construction, to which they refer, as in the example below.

```javascript
if (someCondition) {
    console.log("Inside the if statement");
}
```

You can see that the command **`console.log(…)`** in the example is **offset by 4 white spaces(one tab)**, which is also recommended by the documentation. If given construction with curly brackets is offset by one tab,, then **the curly brackets `{}`** must be in  **the beginning of the construction**, as in the example below:

```javascript
if (someCondition) {
   if (anotherCondition) {
       console.log("Inside the if statement");
   }
}
```

This is an example for **badly formatted code** according to the accepted conventions for writing code in **JavaScript**:
   
```javascript
if(someCondition)
{
console.log("Inside the if statement");}
```

The first thing we can notice are the **curly braces `{}`**. The first (opening) bracket must be **exactly next to the `if` condition**, and the second (closing) bracket - **under the command `console.log(…)`, on a separate blank line**. In addition, the command insede the **`if`** construction must be **offset by 4 white spaces(one tab)**. Immediately after the keyword **`if`** and before the condition of the check, a **space** is left.

The same rule applies to **`for` loops, as well as any other constructions with curly braces `{}`**. Here are some more examples:

**Correct:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
**Wrong:**
```javascript
for(let i=0;i<5;i++)
{
console.log(i);
}
```

For your comfort there are **keyboard shortcuts in Visual Studio Code**, which we will explain later in this chapter, but for now we are interested in the following combinations for formatting **the code in the whole document**:
* For Windows [**Shift + Alt + F**]
* For Mac [**Shift + Option + F**]
* Fpr Ubuntu [**Ctrl + Shift + I**]

Let's use **the wrongly formatted example** from earlier:

```javascript
for(let i=0;i<5;i++)
{
console.log(i);
}
```

If we press [**Shift + Alt + F**], which is our combination to format **the entire document**, we will get code formatted according to **generally accepted JavaScript conventions**. 
However, automatic formatting does not affect the naming of our variables, which we have to take care of ourselves. Прието е променливите да **започват** винаги **с малка буква** и да **съдържат малки букви**, като **всяка следваща дума** в тях **започва с главна буква** (това именуване е още познато като **`camelCase`** конвенция).
* Трябва да се внимава за главни и малки букви, тъй като **JavaScript прави разлика** между тях. Например **`age`** и **`Age`** са различни променливи.
* Имената на променливите **не могат** да съвпадат със служебна дума (keyword) от езика JavaScript, например **`let`** е невалидно име на променлива. Служебните или т.н. ключови фрази са просто думи, които са **част от синтаксиса на JavaScript** и поради тази причина те са резервирани и не могат да бъдат ползвани като имена на нашите променливи. Чрез тези думи ние имаме възможност да изграждаме нашите програми. Като пример за такива думи могат да се дадат вече използваните: **`for`**, **`while`**, **`do`**, **`if`**, **`else`**, **`let`** и др. Пълен списък с тези резервирани фрази можете да видите тук: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

<table><tr><td><img src="assets/alert-icon.png" style="max-width:50px" /></td>
<td>Although using the symbol <code><b>_</b></code> in the manes of variables is allowed, in JavaScript it is not recommended and is considered a bad style of naming.</td>
</tr></table>

Here are some examples for **well named**variables:

* **`firstName`**
* **`age`**
* **`startIndex`**
* **`lastNegativeNumberIndex`**

Here are some examples for **badly named variables**, even though the names are correct according to the JavaScript language:

* **`_firstName`** (start with '\_')
* **`last_name`** (contains '\_')
* **`AGE`** (written in uppercase)
* **`Start_Index`** (starts with an uppercase letter and contains '\_')
* **`lastNegativeNumber_Index`** (contains '\_')

At a first look all these rules can seem meaningless and unnecessary, but with time passed and experience gaining you will see the need for conventions for writing quality code ,  in order to be able to work more easily and faster in a team. You will understand that the work with a code, which is written without complying with any rules for code quality, is annoying.

## Shortcuts in Visual Studio Code

In the prevous section we mentioned some of the combinations, that are used for formatting code. One of them [**Shift + Alt + F**] is used for **formatting the whole code in a file**, and others did the same thing but on a different operating system.. These combinations are called **shortcuts** and now we will give more thorough information about them.

Shortcuts are **combinations**, that give us the ability to perform some actions **easier and faster**, and each software development environment has its own shortcuts, although most are repetitive. We will now look at some of the **shortcuts** in **Visual Studio Code**. The listed keyboard shortcuts work for sure and have been tested on Windows. The idea is to show you that this exists, it is easy to use and when needed, you can always find what you need for every operating system.

| Combination | Action |
| --- | --- |
|  [**CTRL + F**] | The conbination **opens the search window**, by which we can **search in our code**. |
|  [**CTRL + /**] | **Comments** part of our code and accordingly **removes the comment** which is already commented. |
|  [**CTRL + Z**] | **Brings back one change** (so-called Undo). |
|  [**CTRL + Y**] | The combination is opposite of [**CTRL + Z**] (the so-called Redo). |
|  [**Shift + Alt + F**] | **Formats the code** according the default conventions. |
|  [**CTRL + Backspace**] | **Deletes** the word to the left of the cursor. |
|  [**CTRL + Del**] | **Deletes ** the word to the right of the cursor. |
|  [**CTRL + K S**] | **Saves** all files in the project. |
|  [**CTRL + S**] | **Saves** the current file. |

More about the **shortcuts in Visual Studio Code** can be found here: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf). 

IF you feel confident enough about you shortcut skills, open **Visual Studio Code** and press [**CTRL + K + S**] (note that this is different from [**CTRL + K S**], where **Ctrl** and **K** are pressed simultaneously, and **S** after that), which will open a window in the development environment itself, which contains a complete list of all possible keys combinations in the world of **Visual Studio Code**. Moreover, even from there you will be able to make **changes** to existing keyboard shortcuts:

![](assets/chapter-11-images/00.Keyboard-Shortcuts-01.png)

Do not hesitate, apply what you have learned now and use the keyboard shortcuts that you think will help you in writing your programs!

## Code Snippets (code snippets)

In **Visual Studio Code** there are the so-called **code snippets** (code snippets), which write a block of code by using a code template. This useful option isn not enabled by default. You have to activate it yourself from [**File -> Preferences -> Settings**] (or just **[Ctrl + Comma]**), which opens window called **User Settings**. These are your personal settings, that you can easily change. Just add the following line between the opening and closing curly braces on the right side of the screen:

    "editor.tabCompletion": true

After doing this, when you type "**`for`**" and press **[Tab]** + **[Tab]**, the code of **complete `for` loop** in automatically generated in the body of our program. This is called "unfolding a code snippet". The snippet "**`if`**" + **[Tab]** + **[Tab]** works similarly. On the figure below you can see the "**`for`**" snippet in action:

![](assets/chapter-11-images/01.Code-snippet-01.png)

### Creating Your Own Code Snippet

In this section we are going to show you how to **make your own code snippet**. We will see **how to make a code snippet** for **`json`** object. For a start, we will go to [**File -> Preferences -> User Snippets**], then a window will open from which you can choose for which programming language you will create a snippet, as shown in the picture:

![](assets/chapter-11-images/01.Code-snippet-02.png) 

**We choose JavaScript** from the drop-down menu and a window with a name will open **javascript.json**. This extention **json** is a special format for saving data, which is imposed in the ways of data transfer and storage. Освен това, **json** форматът може да се ползва и в нашите програми, както ще разгледаме малко по - късно. Файлът изглежда така:

![](assets/chapter-11-images/01.Code-snippet-03.png) 

Примерът, който виждаме по подразбиране генерира код за писане по конзолата чрез ключовия префикс **log**. Този код е само примерен и всъщност този шаблон е вграден, но ако не беше, би изглеждал като примера.

В този пример виждате доста непознати неща, но няма страшно, по-нататък ще се запознаем и с тях. Сега се фокусираме върху частта **`"Print to console":`** и кода между **отварящата и затварящата къдрави скоби `{}`**. Това, което виждаме вътре в скобите представлява съдържанието на един шаблон. Всеки шаблон трябва да съдържа **`prefix`**, който представлява краткия текст, който след като натиснете [**Tab**] + [**Tab**] ще създава кода на шаблона във вашата програма.

Второто нещо, което трябва да има вашият шаблон е **`body`**, това е най-сложната част от шаблона. Това всъщност е **кодът, който ще се генерира**, като в него може да използваме **променливи**, които се създават с **`$1`**, като на мястото на единицата може да бъде поставен друг текст. В примера е използвана променлива: **`"console.log('$1');"`**.

Може да използваме **Tabstops**, които просто **поставят курсора на определени места в кода** и между тях може да се навигира с табулация. Те се създават автоматично чрез създаване на променлива.  Може да използваме и **Placeholders**, те представляват вид **Tabstops**, но могат да **съдържат и някаква стойност**, например: **`${1:myVal}`**.

Съществуват и по сложни конфигурации, но като за начало тези ще ни свършат отлична работа.

Последната част от шаблона е **`description`**, което служи за добавяне на допълнително пояснение за това, което прави той. Сега нека да пробваме да направим собствен шаблон. Изтриваме дадения пример и въвеждаме следния код:

![](assets/chapter-11-images/01.Code-snippet-04.png) 

Вече когато напишем **`json`** + [**Tab**] + [**Tab**] в отворен JavaScript файл във Visual Studio Code, **нашият нов snippet** се появява:

![](assets/chapter-11-images/01.Code-snippet-05.png) 

За тези от вас, които се интересуват повече от темата, доста от големите **frameworks** като **Angular, React и др.** имат собствени шаблони, които могат да се инсталират от прозореца за **разширения** (Extensions). Както самото име подсказва, **framework** представлява концептуална структура, която ни помага, като дава някои неща наготово, а също така и ни предпазва да не правим големи грешки, като налага някои ограничения. Основната идея е да дава завършено решение в дадена област, което да има възможност за надграждане на всички компоненти в тази област. Част от нещата, които можете да получите наготово са и именно тези шаблони.

![](assets/chapter-11-images/01.Code-snippet-06.png) 

## Техники за дебъгване на кода

Дебъгването играе важна роля в процеса на създаване на софтуер, която ни позволява **постъпково да проследим изпълнението** на нашата програма. С помощта на тази техника можем да **следим стойностите на локалните променливи**, тъй като те се променят по време на изпълнение на програмата, и да **отстраним** евентуални **грешки** (бъгове). Процесът на дебъгване включва:

* **Забелязване** на проблемите (бъговете).
* **Намиране** на кода, който причинява проблемите.
* **Коригиране** на кода, причиняващ проблемите, така че програмата да работи правилно.
* **Тестване**, за да се убедим, че програмата работи правилно след нанесените корекции.

**Visual Studio Code** ни предоставя **вграден дебъгер** (debugger), чрез който можем да поставяме **точки на прекъсване** (или т.нар. breakpoints), на избрани от нас места. При среща на **стопер** (breakpoint), програмата **спира изпълнението** си и позволява **постъпково изпълнение** на останалите редове. Дебъгването ни дава възможност да **вникнем в детайлите на програмата** и да видим къде точно възникват грешките и каква е причината за това.

За да демонстрираме работа с дебъгера, ще използваме следната програма:

```javascript
for (let i = 0; i < 100; i++) {
    console.log(i);
}
```

Ще сложим **стопер** (breakpoint) на метода **`console.log(…)`**. За целта трябва да преместим курсора на реда, който печата на конзолата, и да натиснем [**F9**]. Появява се **стопер** (червената точка, точно преди цифрата на ред 3), където програмата ще **спре** изпълнението си:

![](assets/chapter-11-images/02.Debugger-01.png) 

За да стартираме **програмата в режим на дебъгване**, избираме [**Debug**] -> [**Start Debugging**] или натискаме [**F5**]:

![](assets/chapter-11-images/02.Debugger-02.png) 

След стартиране на програмата виждаме, че тя **спира изпълнението си** на ред 4, където сложихме стопера (breakpoint). Кодът на текущия ред се **оцветява с жълт цвят** и можем да го **изпълняваме постъпково**. За да преминем на **следващ ред** използваме клавиш [**F10**]. **Забелязваме, че кодът на текущия ред все още не е изпълнен**. **Изпълнява се, когато преминем на следващия ред**:

![](assets/chapter-11-images/02.Debugger-03.png) 

От прозореца **Debug**, който се отваря от [**View -> Debug**] или чрез клавишна комбинация [**Ctrl + Shift + D**], можем да наблюдаваме **промените по локалните променливи**. 

![](assets/chapter-11-images/02.Debugger-04.png) 

## Справочник с хитрости

В тази секция ще покажем накратко **хитрости и техники** от програмирането с езика **JavaScript**, част от които споменавани вече в тази книга, които ще са ви много полезни, ако ходите на изпит по програмиране за начинаещи.

### Закръгляне на числа

При нужда от закръгляне можем да използваме един от следните методи:

 * **`Math.round(…)`** - приема 1 параметър - **числото, което искаме да закръглим**. Закръглянето се извършва по основното правило за закръгляване - ако десетичната част е по-малка 5, закръглението е надолу и обратно, ако е по-голяма от 5 - нагоре:

```javascript
let number = 5.439;
console.log(Math.round(number));
// Tова ще отпечата на конзолата "5"
let secondNumber = 5.539;
console.log(Math.round(secondNumber));
// Tова ще отпечата на конзолата "6"
```


 * **`Math.floor(…)`** - в случай, че искаме закръглянето да е винаги **надолу до предишното цяло число**. Например, ако имаме числото 5.99 и използваме **`Math.floor(5.99)`**, ще получим числото **5**:

```javascript
let numberToFloor = 5.99;
console.log(Math.floor(numberToFloor));
// Tова ще отпечата на конзолата 5
```

 * **`Math.ceil(…)`** - в случай, че искаме закръглянето да е винаги **нагоре до следващото цяло число**. Например, ако имаме числото 5.13 и използваме **`Math.ceil(5.13)`**, ще получим числото **6**:

```javascript
let numberToCeil = 5.13;
console.log(Math.floor(numberToCeil));
// Tова ще отпечата на конзолата 6
```

 * **`Math.trunc(…)`** - в случай, че искаме да **премахнем дробната част**. Например, ако имаме числото 2.63 и използваме **`Math.trunc(2.63)`**, ще получим **2**:

```javascript
let numberToTrunc = 2.63;
console.log(Math.floor(numberToTrunc));
// Tова ще отпечата на конзолата 2
```

### Използвайте === вместо ==, както и !== вместо !=

Операторите **`==`** и **`!=`** правят **автоматично преобразование** на сравняваната стойност или променлива, докато операторите  **`===`** и **`!==`** не прави такова преобразование и ако двете стойности не са от един и същ тип - резултатът е **`false`**. Те (**`==`** и **`!=`**) правят сравнение на **стойността и типа**, което е по-точно и дори по-бързо. Нека да видим следния пример, чрез който да изясним какво се има в предвид под **тип** на данните:

```javascript
[10] === 10    // false
[10] == 10    // true
"10" == 10     // true
"10" === 10    // false
 [] == 0     // true
 [] === 0     // false
 "" == false   // true but true == "a" is false
 "" === false // false 
```

Виждаме как числото **10** може да бъде записано в нашите програми по различни начини. Записано по този начин **`[10]`** представлява **масив** от едно число. Накратко масивите са **множество стойности** записани в дадена променлива. Например:

```javascript
let array = [10, 20, 30, 40];
// Това e променлива от тип масив
```

В последствие ще научим повече относно масивите, но за сега нека само се замислим дали масивът **`[10]`** е нормално да е равен на числото **`10`**. Ще ви подскажем - **не е нормално**. Затова, ако не искаме неприятни грешки (бъгове) във нашите програми, най-добре да ползваме операторите **`===`** и **`!==`**.

Ситуацията с останалите оператори за сравнения е подобна и същата логика важи и там.

### How to Write a Conditional Statement?

The conditional **`if` statement** contains the following elements:

* Keyword **`if`**
* **A Boolean expression** (condition)
* **Body** of the conditonal construction
* Optional: **`else` clause**

```javascript
if (condition) {
    // body
}
else (condition) {
    // body
}
```

To make it easier we can use a code snippet for an **`if` construction**: **`if`** + [**Tab**] + [**Tab**]**

### How to Write a 'For' Loop?

For a **`for` loop** we need a couple things:

* Инициализационен блок, в който се декларира променливата-брояч (**`let i`**) и се задава нейна начална стойност.
* Условие за повторение (**`i <= 10`**).
* Обновяване на брояча (**`i++`**).
* Тяло на цикъла.

```javascript
for (let i = 0; i <= 10; i++;) {
    // body
}
```

To be easier to write it, we can use the code snippet for the **`for` loop**: **`for`** + [**Tab**] + [**Tab**]**

### Използване на т.нар. положителни (Truthy) и отрицателни (Falsy) стойности

Всичките **Truthy** стойности използвани в условната конструкция **`if`** ще дадат положителен резултат и съответно нашата програма ще продължи изпълнението си в тялото на условната конструкция (за целите на примера тук тялото на условната конструкция не е форматирано правилно).

For some of them it seems logical to give a positive result, but for others not so much.

```javascript
//Truthy
if (true) {}       //true
if ({}) {}         //true
if ([]) {}         //true
if (42) {}         //true
if ("foo") {}      //true
if (new Date()) {} //true
if (-42) {}        //true
if (3.14) {}       //true
if (-3.14) {}      //true
if (Infinity) {}   //true
if (-Infinity) {}  //true
```
Conversely, all **Falsy** values, will give negative result and the program will not enter the body of the conditional statement.

```javascript
//Falsy
if (false) {}       //false
if (null) {}        //false
if (undefined) {}   //false
if (0) {}           //false
if (NaN) {}         //false
if ('') {}          //false
if ("") {}          //false
```

It is not necessary to know these values by heart at this stage, but only to remember that there are so-called **Truthy** and **Falsy** values. Over time, we will get used to how to use them properly and how they help us shorten our code. 

## What We Learned in This Chapter?

In the current chapter we learned how to **correctly** **format** and **name** the elements of our code, some **shortcuts** for work in Visual Studio Code, some **code snippets** and how to **debug code**.
