# Chapter 8.2. Exam Preparation - Part II

In the current chapter we wil review a **practical exam in Programming Basics**, conducted at SoftUni on December 18, 2016. The problems will give you a good overview of what you can expect at an admission exam in Programming at SoftUni. The exam covers the material studied in the current book and the Programming Basics course at SoftUni.

## Exam Problems

Traditionally, the admission exam at SoftUni consists of **6 practical programming problems**:
 - Simple problems (no conditions).
 - A problem with a single condition.
 - A problem with more complex conditions.
 - A problem with a single loop.
 - A problem with nested loops (drawing a figure on the console).
 - A problem with nested loops and more complex logic.
 
Let's examine a **real exam topic**, the problems it contains and their solutions.


## Problem: Distance

Write a program that calculates **what is the distance passed by a car (in kilometers)**, if we know **the initial speed** \(km/h\), **the initial time frame** in minutes, then the **speed is increased by 10%**, **the second time frame**, then the **speed is decreased by 5%**, and the **time until the end** of the trip. In order to calculate the distance, you need to **convert the minutes into hours** \(for example 70 minutes = 1.1666 hours\).

### Input

 **4 arguments** are given as parameters of the function:
* **The start speed in km/h** – an integer within the range [**1 … 300**].
* **The first time in minutes** – an integer within the range [**1 … 1000**].
* **The second time in minutes** – an integer within the range [**1 … 1000**].
* **The third time in minutes** – an integer within the range [**1 … 1000**].

### Output

Print a number on the console: **the kilometers passed**, formatted up to the **second digit after the decimal point**.

### Sample Input and Output

|Input|Output|Comments|
|-----|------|--------|
|90<br>60<br>70<br>80|330.90|**Distance with initial speed**: 90 km/h \* 1 hour (60 min) = **90 km**<br>**After speed increase**: 90 + 10% = 99.00 km/h \* 1.166 hours (70 min) = **115.50 km**<br>**After speed decrease**: 99 - 5% = 94.05 km/h \* 1.33 hours (80 min) = **125.40 km**<br>**Total number of km passed**: **330.9 km**|

|Input|Output|Comments|
|-----|------|--------|
|140<br>112<br>75<br>190|917.12|**Distance with initial speed**: 140 km/h \* 1.86 hours (112 min) = **261.33 km**<br>**After speed increase**: 140 + 10% = 154.00 km/h \* 1.25 hours (75 min) = **192.5 km**<br>**After speed decrease**: 154.00 - 5% = 146.29 km/h \* 3.16 hours (190 min) = **463.28 km**<br>**Total number of km passed**: **917.1166 km**|

### Hints and Guidelines

It is possible that such a description may look **misleading** and incomplete at first glance, which **adds** to the **complexity** of a relatively easy task. Let's **separate** the problem into a few **sub-problems** and try to **solve** each of them one by one, which will lead us to the final result:

* **Receiving** the input data.
* **Execution** of the main programming logic.
* **Calculation** and shaping up the end result.

**The main** part of the programming logic is to calculate what will be the **distance passed after all changes** in speed. As during **execution** of the program, part of the data that we have is modified, we could **separate** the program code into a few logically separated parts:

* **Calculation** of the **distance** passed with initial speed.
* Change of **speed** and calculation of the **distance** passed.
* Last change of **speed** and **calculation**.
* **Summing up**.

On condition for **input** will be submitted **four** arguments of the function which we have to **convert to numbers** to make needed calculations. We will convert them using the  **`Number(...)`** constructor:

![](assets/chapter-8-2-images/01.Distance-01.png) 

On this way we solved successfully the **first sub-problem** - receiving the input data.

We initially **store** one **variable** that will be used multiple times. This centralization approach gives us **flexibility** and **possibility** to **modify** the end result of the program with minimum efforts. In case we need to change the value, we must do it in **only once place in the code**, which saves us time and effort:

![](assets/chapter-8-2-images/01.Distance-02.png)

<table>
<tr>
<td width=10%><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td><strong>Avoiding repetitibe code</strong> (centralization of the program logic) in the tasks that we examine in the present book may look unnecessary at first glance, but this approach is very important upon building large applications in a real work environment, and its exercising in an initial stage of training will help you build a quality programming style.
</td>
</tr>
</table>

We calculate the **travel time** (in hours) by **dividing the time by 60** (minutes in an hour). The **travel distance** is calculated by **multiplying the starting speed by the time passed** (in hours). After that we change the speed by increasing it by **10%**(on condition), as per the task description. Calculating the **percentage**, as well as the following **distances** passed, is done in the following way:

* **The time frame** (in hours) is calculated by **dividing** the provided time frame in minutes by the minutes that are contained in an hour (60).
* **The distance passed** is calculated by **multiplying** the time frame (in hours) by the speed that is obtained after the increase.
* The next step is to **decrease the speed** by **5%**, as per the problem description.
* We calculate the **remaining distance** in the manner described in the first two points.

![](assets/chapter-8-2-images/01.Distance-03.png)

Up until now we were able to **solve two** of the **most important sub-problems**, namely the **receiving data input** and **their processing**. What remains is to **calculate the end result**. As by the description we are required to **format it** up to **2** symbols after the decimal point, we can do this in the following **manner**:


![](assets/chapter-8-2-images/01.Distance-04.png)

If you worked accurately and wrote the program using the input data given in the task description, you will be convinced that it works properly.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/940#0](https://judge.softuni.bg/Contests/Practice/Index/940#0).


## Problem: Changing Tiles

Haralambi has some **savings** that he wants to use to **change the tiles** on the bathroom floor. The **floor is rectangular**, and the **tiles are triangular**. Write a program that **calculates if his savings will be sufficient**. **The width and length of the floor are submitted**, as well as **one of the sides of the triangle with its height towards it**. We must **calculate how many tiles are needed,** in order to cover the floor. The **number** of tiles **must be rounded up to the higher integer** and **5 more tiles must be added** as spare tiles. Also **we have submitted** – **the price per tile** and **the amount paid for the work** of a workman.

### Input

We submit 7 numbers as parameters of the function:

* **The savings**.
* **The width** of the floor.
* **The length** of the floor.
* **The side** of the triangle.
* **The height** of the triangle.
* **The price** of a tile.
* **The sum** for the workman.

**All** numbers are real numbers within the range [**0.00 … 5000.00**].

### Output

The following must be printed on the console as a **single line**:

* If the money **is sufficient**:
   * “{Remaining funds} lv left.”
* If the money **IS NOT sufficient**:
   * “You'll need {Insufficient funds} lv more.”

The result must be **formatted up to the second symbol** after the decimal point.

### Sample Input and Output

|Input|Output|Comments|
|-----|------|--------|
|500<br>3<br>2.5<br>0.5<br>0.7<br>7.80<br>100|25.60 lv left.|**Floor area** &rarr; 3 \* 2.5 = **7.5**<br>**Tile area** &rarr; 0.5 \* 0.7 / 2 = **0.175**<br>**Needed tiles** &rarr; 7.5 / 0.175 = 42.857… = **43 + 5 spare tiles** = **48**<br>**Total amount** &rarr; 48 \* 7.8 + 100 (workman) = **474.4**<br>**474.4 < 500** &rarr; **25.60 lv left**|

|Input|Output|Comments|
|-----|------|--------|
|1000<br>5.55<br>8.95<br>0.90<br>0.85<br>13.99<br>321|You'll need 1209.65 lv more.|**Floor area** &rarr; 5.55 \* 8.95 = **49.67249**<br>**Tile area** &rarr; 0.9 \* 0.85 / 2 = **0.3825**<br>**Needed tiles** &rarr; 49.67249 / 0.3825 = 129.86… = **130 + 5 spare tiles** = **135**<br>**Total amount** &rarr; 135 \* 13.99 + 321 (workman) = **2209.65**<br>**2209.65 > 1000** &rarr; **1209.65 lv are insufficient**|

### Hints and Guidelines

The following task requires our problem to accept more input data and to perform a larger number of calculations, despite the fact that the solution is **identical**. Accepting the input data is done in the **familiar way**.

Now that we already have everything for executing the programming logic, we can move to the following part. How can we **calculate** what is the **needed** number of tiles that will be sufficient to cover the entire floor? The requirement is that tiles have **triangular** shape, which can cause confusion, but practically, the task needs just **simple calculations**. We can calculate the **common part of the floor** by the formula for finding rectangle area, as well as the **area of a single tile** using the relevant formula for triangle area.

In order to calculate the **number of tiles** that are needed, **we divide the floor area by the area of a single tile** (we should not forget to add the 5 additional tiles, that were mentioned in the requirements).

<table>
<tr>
<td width="10%"><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>Pay attention that the requirements state that we should round up the number of tiles, obtained upon the division, up to the higher number, and then we should add 5. Find more information about the system functionality that does that: <code><strong>Math.ceil(…)</strong></code>.
</td>
</tr>
</table>
We can find the end result by **calculating the total amount** that is needed to cover the entire floor, by **summing up the tile price and the price that will be paid to the workman**, that we have from the input data. We can figure out that **the total costs** for tiles can be calculated by **multiplying the number of tiles by the price per tile**. We fill find out whether the amount that we have will be sufficient by comparing the savings (based on the input data) and the total costs:

![](assets/chapter-8-2-images/02.Change-Tiles-01.png)

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/940#1](https://judge.softuni.bg/Contests/Practice/Index/940#1).


## Problem: Flowers Shop

A flowers shop offers 3 types of flowers: **chrysanthemums**, **roses** and **tulips**. The prices depend on the season.

|Season|Chrysanthemums|Roses|Tulips|
|:---:|:---:|:---:|:---:|
|spring / summer<br>autumn / winter|2.00 lv./pc.<br>3.75 lv./pc.|4.10 lv./pc.<br>4.50 lv./pc.|2.50 lv./pc.<br>4.15 lv./pc.|

On holidays, prices of all flowers are **increased by 15%.** The following **discounts** are offered:
* For purchasing more than 7 tulips in spring – **5% of the price** of the whole bouquet.
* For purchasing 10 or more roses in winter – **10% of the price** of the whole bouquet.
* For purchasing more than 20 flowers in total in any season – **20% of the price** of the whole bouquet.

**Discounts are made in the above described order and can be combined! All discounts are valid after increasing of the price on a holiday!**

The price for arranging a bouquet is always **2 lv.**. Write a program that calculates the **price of a bouquet**.

### Input

The function receives **5 arguments**:
* **The number** of the puchared **chrysanthemums** – цяло число в интервала [**0 … 200**].
* **The number** of the puchared **roses** – цяло число в интервала [**0 … 200**].
* **The number** of the puchared **tullips** – цяло число в интервала [**0 … 200**].
* **The season** – [**Spring, Summer, Autumn, Winter**].
* **If the day is a holiday** – [**Y - да / N - не**].

### Output

Print on the console 1 number – **the price of flowers**, formatted up to the second digit after the decimal point.

### Sample Input and Output

|Input|Output|Comments|
|-----|------|--------|
|2<br>4<br>8<br>Spring<br>Y<br>|46.14|**Price**: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 лв.<br>**Holiday**: 40.40 + 15% = 46.46 лв.<br>**5% discount** for more than 7 tulips in spring: 44.14<br>The flowers are in total 20 or less: **no discount**<br>44.14 + 2 **for arranging** = 46.14 лв.|

|Input|Output|Comments|
|-----|------|--------|
|3<br>10<br>9<br>Winter<br>N<br>|69.39|**Price**: 3\*3.75 + 10\*4.50 + 9\*4.15 = 93.60 лв.<br>**No holiday**: no increase in price<br>**10% discount** for 10 or more roses in winter: 84.24<br>The flowers are in total over 20: **20% discount** = 67.392<br>67.392 + 2 **for arranging** = 69.392 лв.|

|Input|Output|
|-----|------|
|10<br>10<br>10<br>Autumn<br>N|101.20|

### Hints and Guidelines

After carefully reading the requirements, we understand that once again we need to do **simple calculations**, however this time we will need **additional** logical **conditions**. We need to pay more **attention** to the moment of **making changes** in the final price, in order to be able to properly build the logic of our program. Again, the bold text gives us sufficient **guidelines** on how to proceed. For a start, we will separate the already **defined** values in **variables**, like we did in the previous tasks:

![](assets/chapter-8-2-images/03.Flowers-01.png)

We will also do the same for the rest of the defined values:

![](assets/chapter-8-2-images/03.Flowers-02.png)

Our next sub-task is to **read** properly **the input** data from the console. We will do that in the familiar way for **converting** them in numbers:

![](assets/chapter-8-2-images/03.Flowers-03.png)

Let's think of the most appropriate way to **structure** our programming logic. By the requirements it becomes clear that the path of the program is divided mainly into two parts: **spring / summer** and **autumn / winter**. We can do the separation by conditional statement, by storing variables in advance for the **prices** of the individual flowers, as well as for the **end result**:

![](assets/chapter-8-2-images/03.Flowers-04.png)

What remains is to perform **a few checks** regarding **the discounts** of the different types of flowers, depending on the season, and to modify the end result.

### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/940#2](https://judge.softuni.bg/Contests/Practice/Index/940#2).


## Problem: Grades

Write a program that **calculates statistics for grades** in an exam. At the beginning, the program receives the **number of students** who attended the exam and for **each student – their grade**. At the end, the program must **print the percentage of students** that have grades between 2.00 and 2.99, between 3.00 and 3.99, between 4.00 and 4.99, 5.00 or more, as well as the **average grade** of the exam.


### Input

The function receives **a sequence of numbers** (arguments):
 * On the first line (argument) – **the number of students who attended the exam** – an integer within the range [**1 … 1000**].
 * For **each individual student** on a separate line (argument) – **the grade on the exam** – a real number within the range [**2.00 … 6.00**].

### Output

Print on the console **5 lines** that hold the following information:
 * "Top students: {percentage of students with grade of 5.00 or more}%".
 * "Between 4.00 and 4.99: {between 4.00 and 4.99 included}%".
 * "Between 3.00 and 3.99: {between 3.00 and 3.99 included}%".
 * "Fail: {less than 3.00}%".
 * "Average: {average grade}".

The results must be **formatted up to the second symbol** after the decimal point.


### Sample Input and Output

|Input|Output|Comments|
|-----|------|--------|
|10<br>3.00<br>2.99<br>5.68<br>3.01<br>4<br>4<br>6.00<br>4.50<br>2.44<br>5<br>|Top students: 30.00%<br>Between 4.00 and 4.99: 30.00%<br>Between 3.00 and 3.99: 20.00%<br>Fail: 20.00%<br>Average: 4.06|5 or more - **3 students** = 30% of 10<br>Between 4.00 and 4.99 - **3 students** = 30% of 10<br>Between 3.00 and 3.99 - **2 students** = 20% of 10<br>Under 3 - **2 students** = 20% of 10<br>The average grade is: 3 + 2.99 + 5.68 + 3.01 + 4 + 4 + 6 + 4.50 + 2.44 + 5 = 40.62 / 10 = 4.062|

|Input|Output|
|-----|------|
|6<br>2<br>3<br>4<br>5<br>6<br>2.2|Top students: 33.33%<br>Between 4.00 and 4.99: 16.67%<br>Between 3.00 and 3.99: 16.67%<br>Fail: 33.33%<br>Average: 3.70|

### Hints and Guidelines

By the requirements we see that **first** we will receive number** of students, and then, **their grades**. For that reason,**първо** ще приемем **броя** на студентите. За да обработим самите оценки, ще използваме **`for`** цикъл. Всяка итерация на цикъла ще прочита и обработва по една оценка:

![](assets/chapter-8-2-images/04.Grades-01.png)

Преди да се изпълни кода от **`for`** цикъла заделяме променливи, в които ще пазим **броя на студентите** за всяка група: слаби резултати (до 2.99), резултати от 3 до 3.99, от 4 до 4.99 и оценки над 5. Ще ни е необходима и още една променлива, в която да пазим **сумата на всички оценки**, с помощта на която ще изчислим средната оценка на всички студенти:

![](assets/chapter-8-2-images/04.Grades-02.png)

Завъртаме **цикъла** и в него **декларираме още една** променлива, в която ще запазваме **текущата** въведена оценка. Променливата ще е от тип **`Number`** и на всяка итерация ще проверяваме **каква е стойността ѝ**. Според тази стойност, **увеличаваме** броя на студентите в съответната група с **1**, като не забравяме да увеличим и **общата** сума на оценките, която също следим:

![](assets/chapter-8-2-images/04.Grades-03.png)

Какъв **процент** заема дадена **група студенти** от общия брой, можем да пресметнем като **умножим броя на студентите** от съответната група по **100** и след това разделим на **общия брой студенти**. 

**Крайният** резултат оформяме по добре познатия ни начин **до втория символ** след десетичния знак.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/940#3](https://judge.softuni.bg/Contests/Practice/Index/940#3).


## Задача: коледна шапка

Да се напише програма, която прочита от конзолата **цяло число `n`** и чертае **коледна шапка** с ширина **4 \* `n` + 1 колони** и височина **2 \* `n` + 5 реда** като в примерите по-долу.

### Входни данни

На функцията се подава само **един аргумент - цяло число n** в интервала [**3 … 100**]. 

### Изходни данни

Да се отпечата на конзолата **коледна шапка**, точно както в примерите.

### Примерен вход и изход

|Вход|Изход|
|:-----:|:-----:|
|4|<code>......./&#124;\\.......</code><br><code>.......\\&#124;/.......</code><br><code>.......\*\*\*.......</code><br><code>......\*-\*-\*......</code><br><code>.....\*--\*--\*.....</code><br><code>....\*---\*---\*....</code><br><code>...\*----\*----\*...</code><br><code>..\*-----\*-----\*..</code><br><code>.\*------\*------\*.</code><br><code>\*-------\*-------\*</code></br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code>|

|Вход|Изход|
|:-----:|:-----:|
|7|<code>............./&#124;\\.............</code><br><code>.............\\&#124;/.............</code><br><code>.............\*\*\*.............</code><br><code>............\*-\*-\*............</code><br><code>...........\*--\*--\*...........</code><br><code>..........\*---\*---\*..........</code><br><code>.........\*----\*----\*.........</code><br><code>........\*-----\*-----\*........</code><br><code>.......\*------\*------\*.......</code><br><code>......\*-------\*-------\*......</code><br><code>.....\*--------\*--------\*.....</code><br><code>....\*---------\*---------\*....</code><br><code>...\*----------\*----------\*...</code><br><code>..\*-----------\*-----------\*..</code><br><code>.\*------------\*------------\*.</code><br><code>\*-------------\*-------------\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br>|

### Насоки и подсказки

При задачите за **чертане** на конзолата, най-често потребителят въвежда **едно цяло число**, което е свързано с **общата големина на фигурката**, която трябва да начертаем. Тъй като в условието е упоменато как се изчисляват общата дължина и широчина на фигурката, можем да ги използваме за **отправни точки**. От примерите ясно се вижда, че без значение какви са входните данни, винаги имаме **първи два реда**, които са с почти идентично съдържание.

<code>......./\|\\.......</code><br><code>.......\\\|/.......</code>

Забелязваме също така, че **последните три реда** винаги присъстват, **два** от които са напълно **еднакви**.

<code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code><br><code>\*.\*.\*.\*.\*.\*.\*.\*.\*</code><br><code>\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</code>

От тези наши наблюдения можем да изведем **формулата** за **височина на променливата част** на коледната шапка. Използваме зададената по условие формула за общата височина, като изваждаме големината на непроменливата част. Получаваме **`(2 * n + 5) – 5`** или **`2 * n`**.

За **начертаването** на **динамичната** част от фигурката ще използваме **цикъл**. Размерът на цикъла ще бъде от **0** до **широчината**, която имаме по условие, а именно **`4 * n + 1`**. Тъй като тази формула ще използваме на **няколко места** в кода, е добра практика да я изнесем в **отделна променлива**. Преди изпълнението на цикъла би следвало да **заделим променливи** за **броя** на отделните символи, които участват в динамичната част: **точки** и **тирета**. Чрез изучаване на примерите можем да изведем формули и за **стартовите стойности** на тези променливи. Първоначално **тиретата** са **0**, но броя на **точките** ясно се вижда, че можем да получим като от **общата широчина** извадим **3** (броя символи, които изграждат върха на коледната шапка) и след това **разделим на 2**, тъй като броя точки от двете страни на шапката е еднакъв.

<code>.......\*\*\*.......</code><br><code>......\*-\*-\*......</code><br><code>.....\*--\*--\*.....</code><br><code>....\*---\*---\*....</code><br><code>...\*----\*----\*...</code><br><code>..\*-----\*-----\*..</code><br><code>.\*------\*------\*.</code><br><code>\*-------\*-------\*</code>

Остава да изпълним тялото на цикъла, като **след всеки** начертан ред **намаляваме** броя на точките с **1**, а **тиретата увеличим** с **1**. Нека не забравяме да начертаем и по една **звездичка** между тях. Последователността на чертане в тялото на цикъла е следната:

* Символен низ от точки
* Звезда
* Символен низ от тирета
* Звезда
* Символен низ от тирета
* Звезда
* Символен низ от точки

В случай че сме работили правилно получаваме фигурки, идентични на тези от примерите.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/940#4](https://judge.softuni.bg/Contests/Practice/Index/940#4).


## Задача: комбинации от букви

Напишете програма, която да принтира на конзолата **всички комбинации от 3 букви** в зададен интервал, като се пропускат комбинациите, **съдържащи зададена от конзолата буква**. Накрая трябва да се принтира броят отпечатани комбинации.

### Входни данни

Входът на програмата съдържа **точно 3 реда** (аргумента):
* Малка буква от английската азбука за начало на интервала – от **'a'** до **'z'**.
* Малка буква от английската азбука за край на интервала – от **първата буква** до **'z'**.
* Малка буква от английската азбука – от **'a'** до **'z'** – като комбинациите, съдържащи тази буква се пропускат.

### Изходни данни

Да се отпечатат на един ред **всички комбинации**, отговарящи на условието, следвани от **броя им**, разделени с интервал.

### Примерен вход и изход

|Вход|Изход|Обяснения|
|---|---|---|
|a<br>c<br>b|aaa aac aca acc caa cac cca ccc 8|Всички възможни комбинации с буквите '**а**', '**b**' и '**c**' са:<br>aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc<br>Комбинациите, **съдържащи 'b', не са валидни**.<br>Остават **8** валидни комбинации.|

|Вход|Изход|
|---|---|
|f<br>k<br>h|fff ffg ffi ffj ffk fgf fgg fgi fgj fgk fif fig fii fij fik fjf fjg fji fjj fjk fkf fkg fki fkj fkk gff gfg gfi gfj gfk ggf ggg ggi ggj ggk gif gig gii gij gik gjf gjg gji gjj gjk gkf gkg gki gkj gkk iff ifg ifi ifj ifk igf igg igi igj igk iif iig iii iij iik ijf ijg iji ijj ijk ikf ikg iki ikj ikk jff jfg jfi jfj jfk jgf jgg jgi jgj jgk jif jig jii jij jik jjf jjg jji jjj jjk jkf jkg jki jkj jkk kff kfg kfi kfj kfk kgf kgg kgi kgj kgk kif kig kii kij kik kjf kjg kji kjj kjk kkf kkg kki kkj kkk 125|

|Вход|Изход|
|---|---|
|a<br>c<br>z|aaa aab aac aba abb abc aca acb acc baa bab bac bba bbb bbc bca bcb bcc caa cab cac cba cbb cbc cca ccb ccc 27|

### Насоки и подсказки

За последната задача имаме по условие входни данни от **3 аргумента**, които са представени от по един символ от **ASCII таблицата** ([http://www.asciitable.com/](http://www.asciitable.com/)). Бихме могли да използваме вече дефинирания метод в езика JavaScript, **`.charCodeAt()`**, чрез който ще получим ASCII кода на подадения символ:

![](assets/chapter-8-2-images/06.Letters-01.png)

Нека помислим как бихме могли да стигнем до **крайния резултат**. В случай че условието на задачата e да се принтират всички от началния до крайния символ (с пропускане на определена буква), как бихме постъпили? 

Най-лесният и удачен начин е да използваме **цикъл**, с който да преминем през **всички символи** и открием тези, които са **различни** от **буквата**, която трябва да пропуснем. В езика JavaScript можем да обходим всички символи от 'a' до 'z' по следния начин:

![](assets/chapter-8-2-images/06.Letters-02.png)

Методът **`String.fromCharCode(...)`** ще конвертира подадения ASCII код в символ. Резултатът от изпълнението на горния код е всички букви от **а** до **z** включително, принтирани на един ред и разделени с интервал. Това прилича ли на крайния резултат от нашата задача? Трябва да измислим **начин**, по който да се принтират по **3 символа**, както е по условие, вместо по **1**. Изпълнението на програмата много прилича на игрална машина. Там най-често печелим, ако успеем да наредим няколко еднакви символа. Да речем, че на машината имаме места за три символа. Когато **спрем** на даден **символ** на първото място, на останалите две места **продължават** да се изреждат символи от всички възможни. В нашия случай **всички възможни** са буквите от началната до крайната такава, зададена от потребителя, а решението на нашата програма е идентично на начина, по който работи игралната машина.

Използваме **цикъл**, който минава през **всички символи** от началната до крайната буква включително. На **всяка итерация** на **първия** цикъл пускаме **втори** със същите параметри (но **само ако** буквата на първия цикъл е валидна, т.е. не съвпада с тази, която трябва да изключим по условие). На всяка итерация на **втория** цикъл пускаме още **един** със **същите параметри** и същата **проверка**. По този начин ще имаме три вложени цикъла, като в тялото на **последния** ще добавяме символите към крайния резултат:

![](assets/old-images/chapter-8-2-images/06.Letters-03.png)

Нека не забравяме, че се изисква от нас да принтираме и **общия брой валидни комбинации**, които сме намерили, както и че те трябва да се принтират на **същия ред**, разделени с интервал. Тази подзадача оставяме на читателя.

### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/940#5](https://judge.softuni.bg/Contests/Practice/Index/940#5).
