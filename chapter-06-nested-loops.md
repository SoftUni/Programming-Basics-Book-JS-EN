# Chapter 6.1. Nested Loops

In the current chapter we will be looking at **nested loops** and how to use `for` loops to **draw** various **figures on the console**, that contain symbols and signs, ordered in rows and columns on the console. We will use **single** and **nested loops** (loops that stay in other loops), **calculations** and **checks**, in order to print on the console simple and not so simple figures by specified sizes.


## Video: Chapter Overview
<div class="video-player">
  Watch video-lesson of this chapter here: <a target="_blank" href="https://www.youtube.com/watch?v=1v1yIZV7p4k&feature=youtu.be">https://www.youtube.com/watch?v=1v1yIZV7p4k&feature=youtu.be</a>.
</div>


### Example: Rectangle Made of 10 x 10 Stars

Print on the console a rectangle made out of **10 x 10** stars.

|Input|Output|
|---|---|
|(None)|<code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code><br><code>\*\*\*\*\*\*\*\*\*\*</code>|

#### Hints and Guidelines

![](/assets/chapter-6-1-images/01.Rectangle-of-10-x-10-stars-01.png)

How does the example work? We initialize **a loop with a variable `i = 1`**, which increases with each iteration of the loop, while it is **less or equal to 10**. This way the code in the body of the loop is executed **10 times**.In the body of the loop we print a new line on the console **`"*".repeat(10)`**, which creates a string of 10 stars.

#### Testing in the Judge System

Test your solution here:: [https://judge.softuni.bg/Contests/Practice/Index/935#0](https://judge.softuni.bg/Contests/Practice/Index/935#0).


###Example: Rectangle Made of N x N Stars

Write a program that gets a positive integer **n** and prints on the console **a rectangle made out of N x N stars**.

|Input|Output|Input|Output|Input|Output|
|---|---|---|---|---|---|
|2|<code>\*\*</code><br><code>\*\*</code>|3|<code>\*\*\*</code><br><code>\*\*\*</code><br><code>\*\*\*</code>|4|<code>\*\*\*\*</code><br><code>\*\*\*\*</code><br><code>\*\*\*\*</code><br><code>\*\*\*\*</code>|

#### Hints and Guidelines

![](/assets/chapter-6-1-images/02.Rectangle-of-N-x-N-stars-01.png)

#### Note

On some web browsers the same results on the console merge with one another. It's advised to use **NodeJS** for the examples. If you still get to this case you can use the symbol **`\n`** in the end of the printing function **`console.log("*".repeat(10) + "\n");`**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/935#1](https://judge.softuni.bg/Contests/Practice/Index/935#1).


## Nested loops

A **nested loop** is a construction where **in the body of one loop** (outer one) **stays another loop** (inner one). In each iteration of the outer loop, **the whole** inner loop is executed. This happens in the following way:

 - When nested loops start executing, **the outer loop starts** first: the controlling variable is **initialized** and after a check for ending the loop the code in its body is executed.
 - After that, **the inner loop is executed**. The controlling variables start position is initialized, a check for ending the loop is made and the code in its body is executed.
 - When reaching the specified value for **ending the loop**, the program goes back one step up and continues executing the previous \(outer\) loop. The controlling variable of the outer loop changes with one step, a check is made to see if the condition for ending the loop is met and **a new execution of the nested \(inner\) loop is started**.
 - This is repeated until the variable of the outer loop meets the condition to **end the loop**.

Here is an **example** that illustrates nested loops. The aim is again to print a rectangle made of `n` \*_ _`n` stars, in which for each row a loop iterates from **1** to `n`, and for each column a nested loop is executed from **1** to \*`n`:

```javascript
function drawSquare(n) {
    for (let i = 1; i <= n; i++) {
        let stars = "";

        for (let j = 1; j <= n; j++) {
            stars += "*";
        }

        console.log(stars);
    }
}
```

Let's look at the example above. After initializing **the first \(outer\) loop**, its **body**, which contains **the second \(nested\) loop** starts executing. By itself it prints on one row `n` number of stars. After **the inner** loop **finishes** executing at the first iteration of the outer one, **the first loop will continue**, i.e. it will print an empty row on the console. **After that**, the variable of **the first** loop will be **renewed** and the whole **second** loop will be executed again. The inner loop will execute as many times as the body of the outer loop executes, in this case `n` times.

### Example: Square Made of Stars

Print on the console a square made of **N x N** stars (use a space between the stars, staying on the same line):

|Input|Output|Input|Output|Input|Output|
|---|---|---|---|---|---|
|2|<code>\* \*</code><br><code>\* \*</code>|3|<code>\* \* \*</code><br><code>\* \* \*</code><br><code>\* \* \*</code>|4|<code>\* \* \* \*</code><br><code>\* \* \* \*</code><br><code>\* \* \* \*</code><br><code>\* \* \* \*</code>|

#### Hints and Guidelines

The problem is similar to the last one. The difference here is that we need to figure out how to add a whitespace after the stars so that there aren't any excess white spaces in the beginning or the end.

![](/assets/chapter-6-1-images/03.Square-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/935#2](https://judge.softuni.bg/Contests/Practice/Index/935#2).


### Example: Triangle Made of Dollars

Write a program that takes an integer **n** and prints **a triangle made of dollars** of size **n**.

|Input|Output|Input|Output|Input|Output
|---|---|---|---|---|---|
|3|<code>$</code><br><code>$ $</code><br><code>$ $ $</code>|4|<code>$</code><br><code>$ $</code><br><code>$ $ $</code><br><code>$ $ $ $</code>|5|<code>$</code><br><code>$ $</code><br><code>$ $ $</code><br><code>$ $ $ $</code><br><code>$ $ $ $ $</code>|

#### Hints and Guidelines

The problem is **similar** to those for drawing **a rectangle** and **square**. Once again, we will use **nested loops**, but there is **a  catch** here. The difference is that **the number of columns** that we need to print depends on **the row**, on which we are and not on the input number **`n`**. From the example input and output data we see that **the count of dollars depends** on which **row** we are on at the moment of the printing, i.e. 1 dollar means first row, 3 dollars mean third row and so on. Let's see the following example in detail. We see that **the variable** of **the nested** loop is connected with the variable of **the outer** one. This way our program prints the desired triangle.

![](/assets/chapter-6-1-images/04.Triangle-of-dollars-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/935#3](https://judge.softuni.bg/Contests/Practice/Index/935#3).


### Example: Square Frame

Write a program that takes a positive integer **n** and draws on the console **a square frame** with a size of **n \* n**.

|Input|Output|Input|Output|
|---|---|---|---|
|3|<code>+ - +</code><br><code>&#124; - &#124;</code><br><code>+ - +</code>|4|<code>+ - - +</code><br><code>&#124; - - &#124;</code><br><code>&#124; - - &#124;</code><br><code>+ - - +</code>|

|Input|Output|Input|Output|
|---|---|---|---|
|5|<code>+ - - - +</code><br><code>&#124; - - - &#124;</code><br><code>&#124; - - - &#124;</code><br><code>&#124; - - - &#124;</code><br><code>+ - - - +</code>|6|<code>+ - - - - +</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>&#124; - - - - &#124;</code><br><code>+ - - - - +</code>|

#### Насоки и подсказки

We can solve the problem in the following way:
* We read from the console the number **`n`**.
* We print **the upper part**: first a **`+`** sign, then **n-2** times **`-`** and in the end a  **`+`** sign.
* We print **the middle part**: we print **n-2** rows, as we first print a **`|`** sign, then **n-2** times **`-`** and in the end again a **`|`** sign. We can do this with nested loops.
* We print **the lower part**: first a **`+`** sign, then **n-2** times **`-`** and in the end a  **`+`** sign.

Here is an example implementation of the above idea with nested loops:

![](/assets/chapter-6-1-images/05.Square-frame-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/935#4](https://judge.softuni.bg/Contests/Practice/Index/935#4).


### Problem: Rhombus Made of Stars

Write a program that takes a positive integer **n** and prints **a rhombus made of stars** with size **n**.

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|1|<code>\*</code>|2|<code>&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;</code><br>|


|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3|<code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;&nbsp;</code>|4|<code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>\*&nbsp;\*&nbsp;\*&nbsp;\*</code><br><code>&nbsp;\*&nbsp;\*&nbsp;\*&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;\*&nbsp;&nbsp;&nbsp;</code>|

#### Насоки и подсказки

За решението на тази задача е нужно да **разделим** мислено **ромба** на **две части** - **горна**, която включва **и** средния ред, и **долна**. За **разпечатването** на всяка една част ще използваме **два** отделни цикъла, като оставяме на читателя сам да намери зависимостта между **`n`** и променливите на циклите. За първия цикъл може да използваме следните насоки:

* Отпечатваме **`n - row`** интервала.
* Отпечатваме **`*`**.
* Отпечатваме **`row - 1`** пъти **`*`**.

**Втората** (долна) част ще разпечатаме по **аналогичен** начин, което отново оставяме на читателя да се опита да направи сам:

![](/assets/chapter-6-1-images/06.Rhombus-of-stars-01.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/935#5](https://judge.softuni.bg/Contests/Practice/Index/935#5).


### Пример: коледна елха

Да се напише програма, която въвежда число **n** (1 ≤ n ≤ 100) и печата коледна елха с височина **n+1**.

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|1|<code>&nbsp;&nbsp;&#124;&nbsp;&nbsp;</code><br><code>\*&nbsp;&#124;&nbsp;\*</code>|2|<code>&nbsp;&nbsp;&nbsp;&#124;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;\*&nbsp;&#124;&nbsp;\*&nbsp;</code><br><code>\*\*&nbsp;&#124;&nbsp;\*\*</code>|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3|<code>&nbsp;&nbsp;&nbsp;&nbsp;&#124;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;\*&nbsp;&#124;&nbsp;\*&nbsp;&nbsp;</code><br><code>&nbsp;\*\*&nbsp;&#124;&nbsp;\*\*&nbsp;</code><br><code>\*\*\*&nbsp;&#124;&nbsp;\*\*\*</code>|4|<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#124;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;\*&nbsp;&#124;&nbsp;\*&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;\*\*&nbsp;&#124;&nbsp;\*\*&nbsp;&nbsp;</code><br><code>&nbsp;\*\*\*&nbsp;&#124;&nbsp;\*\*\*&nbsp;</code><br><code>\*\*\*\*&nbsp;&#124;&nbsp;\*\*\*\*</code>|

#### Насоки и подсказки

От примерите виждаме, че **елхата** може да бъде **разделена** на **три** логически части. **Първата** част са **звездичките и празните места** преди и след тях, **средната** част е **`(интервал)|(интервал) `**, а **последната** част са отново **звездички**, като този път **празни** места има само **преди** тях. Разпечатването може да бъде постигнато само с **един цикъл** и метода **`.repeat(n)`**, който ще използваме един път за звездичките и един път за интервалите: 

![](/assets/chapter-6-1-images/07.Christmas-tree-01.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/935#6](https://judge.softuni.bg/Contests/Practice/Index/935#6).


## Чертане на по-сложни фигури

Да разгледаме как можем да чертаем на конзолата фигури с по-сложна логика на конструиране, за които трябва повече да помислим преди да почнем да пишем.

### Пример: слънчеви очила
Да се напише програма, която въвежда цяло число **n** (3 ≤ n ≤ 100) и печата слънчеви очила с размер **5\*n x n** като в примерите:

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3|<code>\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*</code><br><code>\*////\*&#124;&#124;&#124;\*////\*</code><br><code>\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*</code>|4|<code>\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*</code><br><code>\*//////\*&#124;&#124;&#124;&#124;\*//////\*</code><br><code>\*//////\*&nbsp;&nbsp;&nbsp;&nbsp;\*//////\*</code><br><code>\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*</code><br>|

|Вход|Изход|
|---|---|
|5|<code>\*\*\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*\*\*</code><br><code>\*////////\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*////////\*</code><br><code>\*////////\*&#124;&#124;&#124;&#124;&#124;\*////////\*</code><br><code>\*////////\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*////////\*</code><br><code>\*\*\*\*\*\*\*\*\*\*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\*\*\*\*\*\*\*\*\*\*</code><br>|

#### Насоки и подсказки

От примерите виждаме, че очилата могат да се разделят на три части – **горна**, **средна** и **долна**. По-долу е част от кода, с който задачата може да се реши. При рисуването на горния и долния ред трябва да се изпечатат **`2 * n`** звездички, **`n`** интервала и **`2 * n`** звездички:

![](/assets/chapter-6-1-images/08.Sunglasses-01.png)

При печатането на **средната** част трябва да **проверим** дали редът е **`(n - 1) / 2 - 1`**, тъй като от примерите е видно, че на **този ред** трябва да печатаме **вертикални чертички** вместо интервали. Проблемът с **`(n - 1) / 2 - 1`**, е че може да бъде число с десетичен остатък. Пример за **`n = 6`**: **(6 - 1) / 2 - 1** => **5 / 2 - 1** => **2.5 - 1** => **1.5**. Поради тази причина, трябва да приложим математически метод за премахване на десетичната част - **`Math.floor(...)`**. Методът **`Math.floor(...)`** връща най-голямото цяло число, което е по-малко или равно на подаденото число:

![](/assets/chapter-6-1-images/08.Sunglasses-02.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/935#7](https://judge.softuni.bg/Contests/Practice/Index/935#7).


### Пример: къщичка

Да се напише програма, която въвежда число **n** (2 ≤ **n** ≤ 100) и печата **къщичка** с размери **n x n**, точно като в примерите:

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|2|<code>**</code><br><code>&#124;&#124;</code><br>|3|<code>-\*-</code><br><code>\*\*\*</code><br><code>&#124;\*&#124;</code>|4|<code>-\*\*-</code><br><code>\*\*\*\*</code><br><code>&#124;\*\*&#124;</code><br><code>&#124;\*\*&#124;</code>

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|5|<code>--\*--</code><br><code>-\*\*\*-</code><br><code>\*\*\*\*\*</code><br><code>&#124;\*\*\*&#124;</code><br><code>&#124;\*\*\*&#124;</code>|8|<code>---\*\*---</code><br><code>--\*\*\*\*--</code><br><code>-\*\*\*\*\*\*-</code><br><code>\*\*\*\*\*\*\*\*</code><br><code>&#124;\*\*\*\*\*\*&#124;</code><br><code>&#124;\*\*\*\*\*\*&#124;</code><br><code>&#124;\*\*\*\*\*\*&#124;</code><br><code>&#124;\*\*\*\*\*\*&#124;</code><br>|


#### Насоки и подсказки

Разбираме от условието на задачата, че къщата е с размер **`n` x `n`**. Това, което виждаме от примерните вход и изход, е че:

* Къщичката е разделена на 2 части: **покрив и основа**. 

![](assets/old-images/chapter-6-images/09.House-01.png)

* Когато **`n`** е четно число, върхът на къщичката е "тъп".
* Когато **`n`** е нечетно число, **покривът** е с един ред по-голям от **основата**.

##### Покрив
* Съставен е от **звезди** и **тирета**.
* В най-високата си част има една или две звезди, спрямо това дали **n** e четно или нечетно, както и тирета.
* В най-ниската си част има много звезди и малко или никакви долни черти.
* С всеки един ред по-надолу, **звездите** се увеличават с 2, а **тиретата** намаляват с 2.

##### Основа
* Дълга е **`n`** на брой реда.
* Съставена е от **звезди** и **тирета**.
* Редовете представляват 2 **тирета** - по едно в началото и в края на реда, както и **звезди** между тиретата с дължина на низа **`n - 2`**.  

Подаваме **`n`**, като параметър на нашата функция:

![](/assets/chapter-6-1-images/09.House-02.png)

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Много е важно да проверяваме дали са валидни входните данни!</b> В тези задачи не е проблем директно да обръщаме подаденият параметър в <b><code>Number</code></b>, защото изрично е казано, че ще получаваме валидни целочислени числа. Ако обаче правите по-сериозни приложения е добра практика да проверявате данните. Какво ще стане, ако вместо буквата "А", потребителя въведе число?</td>
</tr></table>

За да начертаем **покрива**, записваме колко ще е началният брой **звезди** в променлива **`stars`**:
* Ако **`n`** е **четно** число, ще са 2 броя.
* Ако е **нечетно**, ще е 1 брой.

![](/assets/chapter-6-1-images/09.House-03.png)

Изчисляваме дължината на **покрива**. Тя е равна на половината от **`n`**. Резултата записваме в променливата **`roofLength`**:

![](/assets/chapter-6-1-images/09.House-04.png)

Важно е да се отбележи че, когато **`n`** е нечетно число, дължината на покрива е по-голяма с един ред от тази на **основата**. В езика **JavaScript**, когато два целочислени типа се делят и има остатък, то резултата ще е десетично число. Пример:

```javascript
    let result = 3 / 2; // резултат 1.5
```

Ако искаме да закръглим нагоре, трябва да използваме метода **`Math.ceil(…)`**: **`let result = Math.ceil(3 / 2);`**. Резултатът от **`3 / 2`** е **`1.5`**. **`Math.ceil(…)`** ще закръгли резултата от делението нагоре. В нашият случай **`1.5`** ще се закръгли на **`2`**. **`parseInt()`** се използва, за да трансформираме входния параметър в тип **`Number`**.

След като сме изчислили дължината на покрива, завъртаме цикъл от 0 до **`roofLength`**. На всяка итерация ще:
* Изчисляваме броя **тирета**, които трябва да изрисуваме. Броят ще е равен на **`(n - stars) / 2`**. Записваме го в променлива **`padding`**:

![](/assets/chapter-6-1-images/09.House-05.png)

* Отпечатваме на конзолата: "**тирета**" (**`padding / 2`** на брой пъти) + "**звезди**" (**`stars`** пъти) + "**тирета**" (**`padding / 2`** пъти):

![](/assets/chapter-6-1-images/09.House-06.png)

* Преди да свърши итерацията на цикъла добавяме 2 към **`stars`** (броя на **звездите**):

![](/assets/chapter-6-1-images/09.House-07.png)

След като сме приключили с **покрива**, е време за **основата**. Тя е по-лесна за печатане:
* Започваме с цикъл от 0 до n (изключено).
* Отпечатваме на конзолата: **`|`** + **`*`** (**`n - 2`** на брой пъти) + **`|`**.

![](/assets/chapter-6-1-images/09.House-08.png)

Ако всичко сме написали както трябва, задачата ни е решена.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/935#8](https://judge.softuni.bg/Contests/Practice/Index/935#8).


### Пример: диамант

Да се напише програма, която въвежда цяло число **n** (1 ≤ **n** ≤ 100) и печата диамант с размер **n**, като в следните примери:

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|1|<code>\*</code><br>|2|<code>\*\*</code>|3|<code>-\*-</code><br><code>\*-\*</code><br><code>-\*-</code>|

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|4|<code>-\*\*-</code><br><code>\*--\*</code><br><code>-\*\*-</code>|5|<code>--\*--</code><br><code>-\*-\*-</code><br><code>\*---\*</code><br><code>-\*-\*-</code><br><code>--\*--</code><br>|6|<code>--\*\*--</code><br><code>-\*--\*-</code><br><code>\*----\*</code><br><code>-\*--\*-</code><br><code>--\*\*--</code><br>|

|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|
|7|<code>---\*---</code><br><code>--\*-\*--</code><br><code>-\*---\*-</code><br><code>\*-----\*</code><br><code>-\*---\*-</code><br><code>--\*-\*--</code><br><code>---\*---</code><br>|8|<code>---\*\*---</code><br><code>--\*--\*--</code><br><code>-\*----\*-</code><br><code>\*------\*</code><br><code>-\*----\*-</code><br><code>--\*--\*--</code><br><code>---\*\*---</code><br>|9|<code>----\*----</code><br><code>---\*-\*---</code><br><code>--\*---\*--</code><br><code>-\*-----\*-</code><br><code>\*-------\*</code><br><code>-\*-----\*-</code><br><code>--\*---\*--</code><br><code>---\*-\*---</code><br><code>----\*----</code>|

#### Насоки и подсказки

Това, което знаем от условието на задачата, е че диамантът е с размер **`n` x `n`**.

От примерните вход и изход можем да си направим изводи, че всички редове съдържат точно по **`n`** символа и всички редове, с изключение на горните върхове, имат по **2 звезди**. Можем мислено да разделим диаманта на 2 части:
* **Горна** част. Тя започва от горният връх до средата.
* **Долна** част. Тя започва от реда след средата до най-долния връх (включително).

##### Горна част
* Ако **n** е **нечетно**, то тя започва с **1 звезда**.
* Ако **n** е **четно**, то тя започва с **2 звезди**.
* С всеки ред надолу, звездите се отдалечават една от друга.
* Пространството между, преди и след **звездите** е запълнено с **тирета**.

##### Долна част
* С всеки ред надолу, звездите се събират една с друга. Това означава, че пространството (**тиретата**) между тях намалява, а пространството (**тиретата**) отляво и отдясно се увеличава.
* В най-долната си част е с 1 или 2 **звезди**, спрямо това дали **n** е четно или не.

##### Горна и долна част на диаманта
* На всеки ред звездите са заобиколени от външни **тирета**, с изключение на средния ред.
* На всеки ред има пространство между двете **звезди**, с изключение на първия и последния ред (понякога **звездата е 1**).

Подаваме стойността на **n** като входящ параметър (число) на функция:

![](/assets/chapter-6-1-images/10.Diamond-01.png)

Започваме да чертаем горната част на диаманта. Първото нещо, което трябва да направим, е да изчислим началната стойност на външната бройка **тирета `leftRight`** (тиретата от външната част на **звездите**). Тя е равна на **`(n - 1) / 2`**, закръглено надолу.  За закръглянето ще използваме метода **`Math.floor(...)`**, за да премахнем остатъка от деленето. Такъв може да има при входящо нечетно **`n`**:

![](/assets/chapter-6-1-images/10.Diamond-02.png)

След като сме изчислили броя на външните тирета **`leftRight`**, започваме да чертаем **горната част** на диаманта. Може да започнем, като завъртим **цикъл** от **`0`** до **`n / 2 + 1`** (закръглено надолу). Като при всяка итерация на цикъла трябва да се изпълнят следните стъпки:

* Рисуваме по конзолата левите **тирета** (с дължина **`leftRight`**) и веднага след тях първата **звезда**:

![](/assets/chapter-6-1-images/10.Diamond-03.png)

* Ще изчислим разстоянието между двете **звезди**. Може да го изчислим като извадим от **n** дължината на външните **тирета**, както и числото 2 (бройката на **звездите**, т.е. очертанията на диаманта). Резултата от тази разлика записваме в променлива **`mid`**: 

![](/assets/chapter-6-1-images/10.Diamond-04.png)

* Ако стойността на **`mid`** е по-малка от 0, то тогава знаем, че на реда трябва да има 1 звезда. Ако е по-голяма или равна на 0, то тогава трябва да начертаем **тирета** с дължина **`mid`** и една **звезда** след тях.

* Рисуваме на конзолата десните външни **тирета** с дължина **`leftRight`**: 

![](/assets/chapter-6-1-images/10.Diamond-05.png)

* В края на цикъла намаляваме **`leftRight`** с 1 (**звездите** се отдалечават).

Готови сме с горната част.

Рисуването на долната част е доста подобна на рисуването на горната част. Разликите са, че вместо да намаляваме **`leftRight`** с 1 към края на цикъла, ще увеличаваме **`leftRight`** с 1 в началото на цикъла. Също така, **цикълът ще е от 0 до `(n - 1) / 2`**.   

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><b>Повторението на код се смята за лоша практика</b>, защото кодът става доста труден за поддръжка. Нека си представим, че имаме парче код (напр. логиката за чертането на ред от диаманта) на още няколко места и решаваме да направим промяна. За целта би било необходимо да минем през всичките места и да направим промените. Нека си представим, че трябва да използвате код не 1, 2 или 3 пъти, а десетки пъти. Начин за справяне с този проблем е като се използват <b>функции</b>. Можете да потърсите допълнителна информация за тях в Интернет, или да прегледате <a href="chapter-10-methods.md">глава 10. Функции</a>.</td>
</tr></table>

Ако сме написали всичко коректно, задачата ни е решена.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/935#9](https://judge.softuni.bg/Contests/Practice/Index/935#9).


## Какво научихме от тази глава?

Запознахме се с конструктора с методът **`repeat(...)`** на обектите от тип **`String`**:

```javascript
let foo = "*".repeat(10);
```

Научихме се да чертаем фигури с вложени **`for`** цикли:

```javascript
for (let i = 1; i <= n; i++) {
    let stars = "";

    for (let j = 1; j <= n; j++) {
        stars += "*";
    }

    console.log(stars);
}
```

## Упражнения: чертане на фигурки в уеб среда

Сега, след като свикнахме с **вложените цикли** и как да ги използваме, за да чертаем фигурки на конзолата, можем да се захванем с нещо още по-интересно: да видим как циклите могат да се използват за **чертане в уеб среда**. Ще направим уеб приложение, което визуализира **числов рейтинг** (число от 0 до 100) със звездички. Такава визуализация се среща често в сайтове за електронна търговия, ревюта на продукти, оценки на събития, рейтинг на приложения и други.

Не се притеснявайте, ако не разберете целия код, как е точно е направен и как точно работи проектът. Нормално е, сега се учим да пишем код, не сме стигнали до технологиите за уеб разработка. Ако имате трудности да си напишете проекта, следвайки описаните стъпки, **гледайте видеото** от началото на тази глава или питайте в СофтУни форума: [https://softuni.bg/forum](https://softuni.bg/forum).

### Задача: рейтинги – визуализация в уеб среда

Да се разработи **JavaScript** приложение за визуализация на рейтинг (число от 0 до 100). Чертаят се от 1 до 10 звездички (с половинки). Звездичките да се генерират с **`for`** цикъл.

![](assets/old-images/chapter-6-images/11.Ratings-01.png)

Отваряме празна папка във файловата система с име "**ratings**". В нея създаваме два файла и една папка:

- **index.html**
- **script.js**
- **images** (папка)

Сега добавяме **картинките със звездичките** (те са част от файловете със заданието за този проект и могат да бъдат свалени от [тук](https://github.com/mchaov/Programming-Basics-Book-JS-BG/tree/master/assets/chapter-6-1-assets)). Копираме ги от Windows Explorer и ги поставяме в папката **images** с copy/paste.

Отваряме **index.html** и въвеждаме следният код:

![](/assets/chapter-6-1-images/11.Ratings-01.png)

Този код създава едно поле **`input-rating`**, в което потребителят може да въвежда число в интервала [**0 … 100**] и бутон [**Draw**], който осъществява пресмятането на звездичките с въведената стойност. Действието, което ще обработи данните, се казва **`drawRating`**. След формата се отпечатва съдържанието на **`<div id="ratingHolder"></div>`**. Кодът, който ще се съдържа в него, ще бъде динамично генериран HTML с поредица от звездички.

Добавяме функция **`drawRating()`** във файла **script.js**, която има следният код:

```javascript
/**
 * drawRating, рисува HTML, който е нужен за визуализацията на звездичките
 * @param {Number} rating
 * @return {String} html
 */
function drawRating(rating) {
    // низ от HTML
    let html = "";

    // краен брой звезди
    let allStars = 10;

    // всички пълни звезди
    let fullStars = Math.floor(rating / allStars);

    // всички празни звезди
    let emptyStars = Math.floor((100 - rating) / allStars);

    // всички наполовина запълнени звезди
    let halfStars = allStars - fullStars - emptyStars;

    // построяване на HTML
    for (let i = 0; i < fullStars; i++) {
        html += '<img src="images/full-star.png">';
    }
    for (let i = 0; i < halfStars; i++) {
        html += '<img src="images/half-star.png">';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<img src="images/empty-star.png">';
    }

    // връщане на готовият HTML
    return html;
}
```

Горният код взима въведеното число **`rating`**, прави малко пресмятания и изчислява броя **пълни звездички**, броя **половинки звездички** и броя **празни звездички**, след което генерира HTML код, който нарежда няколко картинки със звездички една след друга, за да сглоби от тях картинката с рейтинга. Подготвеният HTML код се връща като резултат от функцията и е готов за по-нататъшно използване. Към момента резултатът от тази функция не може да се използва, защото няма как да го свържем с бутона. Въвеждаме функция, която се казва **`drawHandler()`** и съдържа следният код:

```javascript
/**
 * drawHandler, функция която се изпълнява, когато потребителя клика върху
 * бутона "Draw".
 * @return {Void}
 */
function drawHandler() {
    // намиране на инпут елемента, който държи числото на рейтинга
    // и вземане на неговата стойност
    let ratingInput = document.getElementById("input-rating");

    // по подразбиране всички стойности от форми идват като "string"
    // за това се налага да ги обърнем в число чрез "parseInt()"
    let rating = parseInt(ratingInput.value);

    // намиране на елемента, който държи звездичките
    let ratingHolder = document.getElementById("ratingHolder");

    // генериране на HTML на база въведеният от потребителя рейтинг
    let html = drawRating(rating);

    // рисуване на страницата
    ratingHolder.innerHTML = html;
}
```

Фунцкията **`drawHandler()`** прави няколко неща:
- **Намира HTML елемента**, който държи рейтинга (**`input-rating`**) и **взема** неговата стойност.
- **Обръща стойността** от низ към число.
- **Намира HTML елемента**, който ще държи звездичките (**`ratingHolder`**).
- **Генерира HTML-а на звездичките**, чрез **`drawRating(...)`** функцията.
- **Поставя ново генерираният HTML** чрез **`innerHTML`** метод в елемента **`ratingHolder`**.

Имаме нужда от още една функция, която да обедини горните две и да ги свърже с HTML елементите. Тази функция се казва **`appInit()`**, и както името подсказва, нейната роля е да стартира нашето приложение. Въвеждаме следният код във функцията **`appInit()`**:

```javascript
/**
 * appInit, отговаря за първоначалното изпълнение на нашата програма
 * @return {Void}
 */
function appInit() {
    // намиране на бутон елемента в HTML
    let button = document.getElementById("input-draw");

    // Закачане към събитието "click" за изпълнение на рисуването
    button.addEventListener("click", drawHandler);

    // първоначално изрисуване на рейтинга
    drawHandler();
}
```

След като имаме всички функции въведени е време да стартираме нашето приложение. Обърнете внимание, че **script.js** е включен в края на нашият файл, точно преди затварящият **`</body>`** таг на страницата. Това е добра практика и осигуря по-бързо зареждане на **`DOM`** дървото. Това също ни позволява да изпълняваме JavaScript код, който използва HTML елементи. При тези условия можем да бъдем сигурни, че всички те са вече заредени в паметта на браузъра.

Въпреки това, вместо да извикаме директно **`appInit()`** на края на файла, ще добавим още една добра практика:

```javascript
/**
 * Стартиране на приложението асинхронно, чрез "event listener".
 * Слушане за "DOMContentLoaded".
 */
document.addEventListener("DOMContentLoaded", appInit);
```

Събитието **`DOMContentLoaded`** осигурява, че браузърът е приключил всички действия по създаването на **`DOM`** дървото. Закачайки се на него с **`addEventListener(...)`** осигурява правилното изпълнение на нашата JavaScript програма.

Когато браузърът е готов ще изпълни нашата стартираща функция **`appInit()`**. Резултатът от функцията е:

- Закачане на функцията **`drawHandler()`** към събитието **`click`** върху нашият **Draw** бутон.
- Първоначално извикване на **`drawHandler()`**, за да попълним звездичките на база на текущият HTML.

Ако имате проблеми с примерния проект по-горе, **гледайте видеото** в началото на тази глава. Там приложението е направено на живо стъпка по стъпка с много обяснения. Или питайте във **форума на СофтУни**: https://softuni.bg/forum.
