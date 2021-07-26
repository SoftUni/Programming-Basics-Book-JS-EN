# Chapter 8.1. Practical Exam Preparation - Part I

In **the present chapter** we will examine a few **problems** with a level of difficultly **трудност** that can be expected in **the problems** of the practical **exam** in “Programming Basics”. We will **review** and **practice** all the knowledge that was gained from this book and through the "Programming Basics" course.


## Video

<div class="video-player">
  Watch a video tutorial on this chapter here: <a target="_blank"
  href="https://www.youtube.com/watch?v=bnxf9oiDduo">
  https://www.youtube.com/watch?v=bnxf9oiDduo</a>.
</div>


## The "Programming Basics" Practical Exam

The course **"Programing Basics"** finishes with a **practical exam**. There are **6** problems included, and you will have **4 часа** to solve them. **Each** of the exam problems will **cover** one of the studied **topics** during the course. Problem topics are as follows:

- Problem with simple calculations (without conditions)
- Problem with simple condition
- Problem with more complex conditions
- Problem with a simple loop
- Problem with nested loops (drawing a figure on the console)
- Problem with nested loops and more complex logic

## The Online Evaluation System (Judge)

**All exams and homeworks** are automatically **tested** through the online **Judge system**: [https://judge.softuni.bg](https://judge.softuni.bg). For **each** of the problems there are **visible** (zero point) testso help you understand what is expected of the problem and fix your mistakes, as well as **competition** tests that are **hidden** and check if your solution is working properly. In the **Judge** system you can log in with your **softuni.bg account**.

**How** does the testing in the **Judge** system works? **You upload** he source code and from the menu below you choose to compile as a **JavaScript** program. The program is being **tested** with a series of tests, giving **points** for each **successful** test.


## Problems with Simple Calculations

**The first**  problem of the "Programming Basics" Practical Exam covers **simple calculations without checks and loops**. Here are a few examples:

### Problem: 2D Triangle Area

<table>
   <tr>
      <td width="60%">
        <b>Triangle in the plain</b>  is defined by the coordinates of its three vertices. First <b>the vertex (x1, y1)</b> is set. Then the other two vertices are set: <b>(x2, y2)</b> and <b>(x3, y3)</b> which <b>lie on a common horizontal line</b> i.e. they have the same Y coordinates). Write a program that calculates <b>the triangle area</b> пby the coordinates of its three vertices.
      </td>
      <td>
         <img src="assets/chapter-8-1-images/01.Triangle-area-01.png"/>
      </td>
   </tr>
</table>

#### Input
We submit **6 integers** as parameters of the function: **x1, y1, x2, y2, x3, y3.**
-	All input numbers are in range [**-1000 … 1000**].
-	It's guaranteed that **y2 = y3**.

#### Output
Print on the console **the triangle area**.

#### Sample Input and Output

|Input|Output|Visualization|Comments|
|-----|------|-------------|--------|
|5<br>-2<br>6<br>1<br>1<br>1|7.5|![](/assets/chapter-8-1-images/01.Triangle-area-01.png)|The side of the triangle **а** = 6 - 1 = **5**<br>The height of the triangle **h** = 1 - (-2) = **3**<br>The area of the triangle **S** = a \* h / 2 = 5 \* 3 / 2 = **7.5**|

|Input|Output|Visualization|Comments|
|-----|------|-------------|--------|
  |4<br>1<br>-1<br>-3<br>3<br>-3|8|![](/assets/chapter-8-1-images/01.Triangle-area-02.png)|The side of the triangle **а** = 3 - (-1) = **4**<br>The height of the triangle **h** = 1 - (-3) = **4**<br>The area of the triangle **S** = a \* h / 2 = 4 \* 4 / 2 = **8**|

#### Hints and Guidelines

It is important in such types of tasks where some coordinates are given to pay attention to **the order** in which they are submitted, and to properly understand which of the coordinates we will use and how. In this case, the input is in order **x1, y1, x2, y2, x3, y3**. If we do not follow this sequence, the solution becomes wrong. First, we write the code that reads the input data:
![](assets/chapter-8-1-images/01.Triangle-area-03.png)

We have to calculate **the side** and **the height** of the triangle. From the examples and the condition **`y2 = y3`** we notice that the one **side** is always parallel to the horizontal axis. It means that its **length** is equal to the length of the segment between its coordinates **`x2` and `x3`**,  which is equal to the difference between the larger and the smaller coordinates. Similarly, we can calculate **the height**.It will always be equal to the difference between **`y1` and `y2`**(or **`y3`**,  as they are equal). Since we do not know if **`x2`** is greater than **`x3`**, or **`y1`** will be below or above the triangle side, we will use **the absolute values** of the difference to always get positive numbers, because one segment cannot have a negative length.

![](assets/chapter-8-1-images/01.Triangle-area-04.png)

We will calculate the triangle area by using our familiar formula for finding an **area of a triangle** .


![](assets/chapter-8-1-images/01.Triangle-area-05.png)

The only thing left is to print the area on the console.

![](assets/chapter-8-1-images/01.Triangle-area-06.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#0](https://judge.softuni.bg/Contests/Practice/Index/939#0).


### Problem: Moving Bricks

Construction workers have to transfer a total of **x bricks**. **The workers** are **w** and work simultaneously. They transport the bricks in trolleys, each with a **capacity of m** bricks. Write a program that reads the integers **x**, **w** and **m**, and calculates **what is the minimum number of courses** the workers need to do to transport the bricks.

#### Input

As parameters of the function we give **3 integers**:
- **The number of bricks x**
- **The number of workers w**
- **The capacity of the trolley m**

All iput numbers are integers in the range [**1 … 1000**].

#### Output

Print on the console **the minimum number of courses** needed to transport the bricks.

#### Sample Input and Output
|Input|Output|Comments|
|-----|------|--------|
|120<br>2<br>30|2|We have **2** workers, each transporting **30** bricks per course. In total, workers are transporting **60**  bricks per course. To transport **120** bricks, exactly **2** courses are needed.|

|Input|Output|Comments|
|-----|------|--------|
|355<br>3<br>10|12|We have **3** workers, each transporting **10** bricks per course. In total, workers are transporting **30** bricks per course. To transport **355** bricks, exactly **12** courses are needed: **11** complete courses carry **330** bricks and the last **12th** course carries the last **25** bricks.|

|Input|Output|Comments|
|-----|------|--------|
|5<br>12<br>30|1|We have **5** workers, each transporting **30** bricks per course. In total, workers are transporting **150** bricks per course. To transport **5** bricks, only **1** course is enough (although incomplete, with only 5 bricks).|

#### Hints and Guidelines

The input is standard, and we only need to be careful about the sequence in which we read the data. 

![](assets/chapter-8-1-images/02.Bricks-01.png)

We calculate how many **bricks** the workers transport in a single course.

![](assets/chapter-8-1-images/02.Bricks-02.png)

By dividing the total number of **the bricks transporteed for 1 course**, we will obtain the number of **courses** needed to carry them. We will use the method **`Math.ceil(…)`** to round the result always up. When the bricks can be transferred with **an exact number of courses**, д the division will return a whole number and there will be nothing to round. Accordingly, if not, the result of the division will be **the number of exact courses** but with a decimal fraction.  The decimal part will be rounded up and we will get the required **1 course** for the remaining bricks.

![](assets/chapter-8-1-images/02.Bricks-03.png)

At the end, we print the result on the console.

![](assets/chapter-8-1-images/02.Bricks-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#1](https://judge.softuni.bg/Contests/Practice/Index/939#1).


## Problems with Simple Condition

**The second** problem of the "Programming Basics" Practical Exam covers **conditional statements and simple calculations**. Here are a few examples:

### Problem: Point on a Segment

**A horizontal segment** is placed on a horizontal line, set with the **x** coordinates of both ends: **first** and **second**. **A point** is located **on** сthe same horizontal line and is set with its **x coordinate**. Write a program that checks whether the point is **inside or outside of the segment** and calculates **the distance to the nearest end** of the segment.

#### Input

As parameters of the function we give **3 integers**:
- The first number – **the one end of the segment**.
- The second number – **the other end of the segment**.
- The point number – **the location of the point**.

Всички входни числа са цели и в диапазона [**-1000 … 1000**].

#### Output

Print the result on the console:
- On the first line, print "**in**" or "**out**" – whether the point is inside or outside the segment.
- On the second line, print the distance from the point to the nearest end of the segment.

#### Sample Input and Output

|Input|Output|Visualization|
|-----|------|-------------|
|10<br>5<br>7|in<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-01.png)|

|Input|Output|Visualization|
|-----|------|-------------|
|8<br>10<br>5|out<br>3|![](/assets/chapter-8-1-images/03.Point-on-segment-02.png)|

|Input|Output|Visualization|
|-----|------|-------------|
|1<br>-2<br>3|out<br>2|![](/assets/chapter-8-1-images/03.Point-on-segment-03.png)|

#### Hints and Guidelines

We read the input from the console.

![](assets/chapter-8-1-images/03.Point-on-segment-04.png)

Since we do not know which **point**  is on the left and which is on the right, we will create two variables to mark this. Since **the left point** is always the one with the smaller **х coordinate**, we will use **`Math.min(…)`** to find it. Accordingly, **the right point** is always the one with a larger **х coordinate** and we will use **`Math.max(…)`**. We will also find the distance from **the point x** to **the two points**. Because we do not know their position relative to each other, we will use **`Math.abs(…)`** to get a positive result.

![](assets/chapter-8-1-images/03.Point-on-segment-05.png)

The shorter of the two **distances** we will find by using **`Math.min(…)`**.

![](assets/chapter-8-1-images/03.Point-on-segment-06.png)

What remains is to find whether **the point** is on or out of the line. The point will be **on the lines** always when it **matches** one of the other two points or its x coordinate lies **between them**. Otherwise, the point is **outside the line**.  After checking, we display one of the two messages, depending on which condition is satisfied.

![](assets/chapter-8-1-images/03.Point-on-segment-07.png)

Finally, we print **the distance** which we fine before.

![](assets/chapter-8-1-images/03.Point-on-segment-08.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#2](https://judge.softuni.bg/Contests/Practice/Index/939#3).


### Problem: Point on a Figure

Write a program that check if a point (with coordinates **x** and **y**) is **inside** or **outside** of the given figure:
 
![](/assets/chapter-8-1-images/04.Point-in-figure-01.png)

#### Input

As parameters of the function we give **two integers**: **x** и **y**.

All inputs are integers in the range **[-1000 … 1000]**.

#### Output

Print on the console "**in**" or "**out**" – whether the point is **inside** or **outside** the figure (the outline is inside).

#### Sample Input and Output

|Input|Output|Input|Output|
|-----|------|-----|------|
|8<br>-5|in|6<br>-3|in|

|Input|Output|Input|Output|
|-----|------|-----|------|
|11<br>-5|out|11<br>2|out|

#### Hints and Guidelines

To find out if **the point** is inside of the figure, we will divide **the figure** into 2 rectangles:

![](assets/chapter-8-1-images/04.Point-in-figure-02.png)
![](assets/chapter-8-1-images/04.Point-in-figure-03.png)

A sufficient condition is **the point** to be located in one of them, in order to be in **the figure**.

We read the input from the console:

![](assets/chapter-8-1-images/04.Point-in-figure-04.png)

We will initialize two variables that will mark whether **the point** is in one of the rectangles.

![](assets/chapter-8-1-images/04.Point-in-figure-05.png)

When printing the message, we will check whether any of the variables has accepted a value of **`true`**. It's enough **only one** of them to be **`true`**,  so that the point is in the figure.

![](assets/chapter-8-1-images/04.Point-in-figure-06.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#3](https://judge.softuni.bg/Contests/Practice/Index/939#3).


## Problems with Complex Conditions

**The third** problem of the "Programming Basics" Practical Exam includes **several nested checks combined with simple calculations**. Here are a few examples:

### Problem: Date after 5 days

There are two numbers **d** (day) and **m** (month) that form **a date**. Write a program that prints the date that will be **after 5 days**. For example, 5 days after **28.03** is the date **2.04**. We assume that the months: April, June, September and November have 30 days, February has 28 days, and the rest have 31 days. Months to be printed with **leading zero** when they contain a single digit (e.g. 01, 08).

#### Input

As parameters of the function we give **two integers**:
-	A integer **d** in the range [**1 … 31**] – day. The number of the day does not exceed the number of days in that month (e.g. 28 for February).
-	A integer **m** in the range [**1 … 12**] – month. Month 1 is January, month 2 is February, …, month 12 is December. The month may contain a leading zero (e.g. April may be written as 4 or 04).

#### Output

Print a single line containing the date after 5 days in the format **day.month** on the console. The month must be a 2-digit number with a leading zero, if necessary. The day must be written without leading zero.

#### Sample Input and Output

|Input|Output|Input|Output|
|-----|------|-----|------|
|28<br>03|2.04|27<br>12|1.01|

|Input|Output|Input|Output|
|-----|------|-----|------|
|25<br>1|30.01|26<br>02|3.03|

#### Hints and Guidelines

We take the input from the console.

![](assets/chapter-8-1-images/05.Date-after-5-days-01.png)

To make our checks easier, we'll create a variable that will contain the **number of days** that we have in the month we set.

![](assets/chapter-8-1-images/05.Date-after-5-days-02.png)

We are increasing **the day** with 5.

![](assets/chapter-8-1-images/05.Date-after-5-days-03.png)

We check if **the day** has not exceeded the number of days in **the month**. If so, we must deduct the days of the month from the obtained day in order to calculate which day of the next month our day corresponds to.

![](assets/chapter-8-1-images/05.Date-after-5-days-04.png)

After we have passed to **the next month**,  this should be noted by increasing the initial one by 1. We need to check if it has not become greater than 12 and if it has, to adjust it. Because we cannot skip more than **one month** when we increase by 5 days, the following check is enough.

![](assets/chapter-8-1-images/05.Date-after-5-days-05.png)

The only thing that remains is to print the result on the console. It is important to **format the output** correctly to display the leading zero in the first 9 months. This is done by creating a new variable for the month, to which to add 0 if necessary. Finally, we print the day and the new variable for the month.

![](assets/chapter-8-1-images/05.Date-after-5-days-06.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#4](https://judge.softuni.bg/Contests/Practice/Index/939#4).


### Problem: Sums of Three Numbers

There are **3 integers** given. Write a program that checks if **the sum of two of the numbers is equal to the third one**. For example, if the numbers are **3**, **5** and **2**, the sum of two of the numbers is equal to the third one: **2 + 3 = 5**.

#### Input

As parameters of the function we give **three integers**. The numbers are in the range [**1 … 1000**].

#### Output

-	Print a text line on the console containing the solution of the problem in the format "**a + b = c**", where **a**, **b** and **c** are among the three input numbers and  **a ≤ b**.
-	If the problem has no solution, print “**No**” on the console.

#### Sample Input and Output

|Input|Output|Input|Output|
|-----|------|-----|------|
|3<br>5<br>2|2 + 3 = 5|2<br>2<br>4|2 + 2 = 4|

|Input|Output|Input|Output|
|-----|------|-----|------|
|1<br>1<br>5|No|2<br>6<br>3|No|

#### Hints and Guidelines

We take the input from the console.

![](assets/chapter-8-1-images/06.Sums-3-numbers-01.png)

We have to check if **the sum** of a pair of numbers is equal to the third number. We have three possible cases:
* a + b = c
* a + c = b 
* b + c = a

We will write **a template**, which will later be complemented by the required code. If none of the above three conditions is met, we will make our program print "**No**".

![](assets/chapter-8-1-images/06.Sums-3-numbers-02.png)

We now have to understand the order in which the **two addents** will be written in the output of the program. For this purpose, we will create **a nested condition** that checks which one of the two numbers is the larger one. In the first case, it will look like this:

![](assets/chapter-8-1-images/06.Sums-3-numbers-03.png)

Similarly, we will supplement the other two cases. The full code of the program will look like this:

![](assets/chapter-8-1-images/06.Sums-3-numbers-04.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/939#5](https://judge.softuni.bg/Contests/Practice/Index/939#5).


## Problems with Simple Loops

**The fourth** problem of the "Programming Basics" Practical Exam includes a **a simple loop with simple logic** in it. Here are a few examples:

### Problem: Sums with Step of 3

There are given **n** integers **a1, a2, …, an**. Calculate the sums:
-	**sum1 = a1 + a4 + a7** + … (the numbers are summed, starting from the first one with step of 3).
-	**sum2 = a2 + a5 + a8** + … (the numbers are summed, starting from the second one with step of 3).
-	**sum3 = a3 + a6 + a9** + … (the numbers are summed, starting from the third one with step of 3).

#### Input

As input of the function we give the array with size **n+1 (0 ≤ n ≤ 1000)**. The array will contain **the number** of the numbers **n** and **n integers** in the range [**-1000 … 1000**]: **a1, a2, …, an**.

#### Output

On the console we should print 3 lines containing the 3 sums in a format such as in the example.

#### Sample Input and Output

|Input|Output|Input|Output|Input|Output|
|-----|------|-----|------|-----|------|
|2<br>3<br>5<br>|sum1 = 3<br>sum2 = 5<br>sum3 = 0|4<br>7<br>-2<br>6<br>12|sum1 = 19<br>sum2 = -2<br>sum3 = 6|5<br>3<br>5<br>2<br>7<br>8|sum1 = 10<br>sum2 = 13<br>sum3 = 2| 

#### Hints and Guidelines

Ще вземем **броя на числата** (големината на входния масив) и ще декларираме **начални стойности** на трите суми.

![](assets/chapter-8-1-images/07.Sums-Step-3-01.png)

Тъй като не знаем предварително колко числа ще обработваме, ще си ги взимаме едно по едно в **цикъл**, който ще се повтори **n на брой пъти** и ще ги обработваме в тялото на цикъла.

![](assets/chapter-8-1-images/07.Sums-Step-3-02.png)

За да разберем в коя от **трите суми** трябва да добавим числото, ще разделим **поредния му номер на три** и ще използваме **остатъка**. Ще използваме променливата **`i`**, която следи **броя завъртания** на цикъла, за да разберем на кое поред число сме. Когато остатъкът от **`i/3`** е **нула**, това означава, че ще добавяме това число към **първата** сума, когато е **1** към **втората** и когато е **2** към **третата**.

![](assets/chapter-8-1-images/07.Sums-Step-3-03.png)

Накрая, ще отпечатаме резултата на конзолата в изисквания **формат**.

![](assets/chapter-8-1-images/07.Sums-Step-3-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#6](https://judge.softuni.bg/Contests/Practice/Index/939#6).


### Задача: поредица от нарастващи елементи

Дадена е редица от **n** числа: **a1**, **a2**, **…**, **an**. Да се пресметне **дължината на най-дългата нарастваща поредица** от последователни елементи в редицата от числа.

#### Входни данни

Като параметър на функцията подаваме масив с големина **n+1** (**0 ≤ n ≤ 1000**). Масивът ще съдържа **броя** на числата **n** и **n цели числа** в интервала [**-1000 … 1000**]: **a1**, **a2**, **…**, **an**.

#### Изходни данни

На конзолата трябва да се отпечата едно число – **дължината** на най-дългата нарастваща редица.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|Вход|Изход|Вход|Изход|
|---|---|---|---|---|---|---|---|
|<b>3</b><br>5<br>2<br>4|2|<b>4</b><br>2<br>8<br>7<br>6|2|<b>4</b><br>1<br>2<br>4<br>4|3|<b>4</b><br>5<br>6<br>7<br>8|4|

#### Насоки и подсказки

За решението на тази задача трябва да помислим малко **по-алгоритмично**. Дадена ни е **редица от числа** и трябва да проверяваме дали всяко **следващо**, ще бъде **по-голямо от предното** и ако е така да броим колко дълга е редицата, в която това условие е изпълнено. След това трябва да намерим **коя редица** от всички такива е **най-дълга**. За целта, нека да си направим няколко променливи, които ще ползваме през хода на задачата. 

![](assets/chapter-8-1-images/08.Increasing-numbers-01.png)

Променливата **`n`** е **броя числа**, които ще получим от конзолата. В **`countCurrentLongest`** ще запазваме **броя на елементите** в нарастващата редица, която **броим в момента**. Напр. при редицата: 5, 6, 1, 2, 3 **`countCurrentLongest`** ще бъде 2, когато сме стигнали **втория елемент** от броенето (5, **6**, 1, 2, 3) и ще стане 3, когато стигнем **последния елемент** (5, 6, 1, 2, **3**), понеже нарастващата редица 1, 2, 3 има 3 елемента. Ще използваме **`countLongest`**, за да запазим **най-дългата** нарастваща редица. Останалите променливи са **`num`** - числото, на което се намираме **в момента**, и **`numPrev`** - **предишното число**, което ще сравним с **`num`**, за да разберем дали редицата **расте**.

Започваме да въртим числата и проверяваме дали настоящото число **`а`** е по-голямо от предходното **`numPrev`**. Ако това е изпълнено, значи редицата **е нарастваща** и трябва да увеличим броя ѝ с **1**. Това запазваме в променливата, която следи дължината на редицата, в която се намираме в момента, а именно - **`countCurrentLongest`**. Ако числото **`num`** **не е по-голямо** от предходното, това означава, че започва **нова редица** и трябва да стартираме броенето от **1**. Накрая, след всички проверки, **`numPrev`** става **числото**, което използваме **в момента**, и започваме цикъла от начало със **следващото** въведено **`num`**.

Ето и примерна реализация на описания алгоритъм:

![](assets/chapter-8-1-images/08.Increasing-numbers-02.png)

Остава да разберем коя от всички редици е **най-дълга**. Това ще направим с проверка в цикъла дали **редицата**, в която се намираме **в момента**, е станала по-дълга от дължината на **най-дългата намерена до сега**. Целият цикъл ще изглежда така:

![](assets/chapter-8-1-images/08.Increasing-numbers-03.png)

Накрая принтираме дължината на **най-дългата** намерена редица.

![](assets/chapter-8-1-images/08.Increasing-numbers-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#7](https://judge.softuni.bg/Contests/Practice/Index/939#7).


## Задачи за чертане на фигурки на конзолата

**Петата** задача на практическия изпит по “Основи на програмирането” изисква **използване на един или няколко вложени цикъла за рисуване** на някаква фигурка на конзолата. Може да се изискват логически размишления, извършване на прости пресмятания и проверки. Задачата проверява способността на студентите да мислят логически и да измислят прости алгоритми за решаване на задачи, т.е. да мислят алгоритмично. Ето няколко примера за изпитни задачи:

### Задача: перфектен диамант

Да се напише функция, която приема като параметър цяло число **n** и чертае **перфектен диамант** с размер **n** като в примерите по-долу.

#### Входни данни

Параметър цяло число **n** в интервала [**1 … 1000**].

#### Изходни данни

На конзолата трябва да се отпечата диамантът като в примерите.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|----|----|----|----|
|2|<code>&nbsp;&#42;&nbsp;</code><br><code>&#42;-&#42;</code><br><code>&nbsp;&#42;&nbsp;</code>|3|<code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;&nbsp;&nbsp;</code><br>|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|4|<code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;</code><br>|5|<code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&#42;-&#42;-&#42;-&#42;-&#42;</code><br><code>&nbsp;&#42;-&#42;-&#42;-&#42;&nbsp;</code><br><code>&nbsp;&nbsp;&#42;-&#42;-&#42;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&#42;-&#42;&nbsp;&nbsp;&nbsp;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&nbsp;&nbsp;&nbsp;&nbsp;</code><br>|

#### Насоки и подсказки

В задачите с чертане на фигурки най-важното, което трябва да преценим е **последователността**, в която ще рисуваме. Кои елементи се **повтарят** и с какви **стъпки**. Ясно може да забележим, че **горната и долната** част на диаманта са **еднакви**. Най-лесно ще решим задачата, като направим **един цикъл**, който чертае **горната част**, и след това още **един**, който чертае **долната** (обратно на горната).

Ще си прочетем числото **`n`** от параметрите на функцията.

![](assets/chapter-8-1-images/09.Perfect-diamond-01.png)

Започваме да рисуваме **горната половина** на диаманта. Ясно виждаме, че **всеки ред** започва с няколко **празни места и <code>*</code>**. Ако се вгледаме по-внимателно, ще забележим, че **празните места** са винаги равни на **`n - индекса на реда - 1`** (на първия ред са n-1, на втория - n-2 и т.н.) Ще започнем с това да нарисуваме броя **празни места**, както и **първата звездичка**. Забележете, че започваме да броим от **0, а не от 1**. След това ще остане само да добавим няколко пъти **`-*`**, за да **довършим реда**.

Ето фрагмент от кода за начертаване на **горната част на диаманта**:

![](assets/chapter-8-1-images/09.Perfect-diamond-02.png)

Остава да **довършим всеки ред** с нужния брой **`-*`** елементи. На всеки ред трябва да добавим **`i`** такива **елемента** (на първия -> 0, на втория -> 1 и т.н.)

Ето и пълния код за начертаване на **горната част на диаманта**:

![](assets/chapter-8-1-images/09.Perfect-diamond-03.png)

За да изрисуваме **долната част** на диаманта, трябва да обърнем **горната** на обратно. Ще броим от **`n - 2`**, тъй като ако започнем от **`n - 1`**, ще изрисуваме средния ред два пъти. Не забравяйте да смените **стъпката** от **`++` на `--`**.

Ето го и кода за начертаване на **долната част на диаманта**:

![](assets/chapter-8-1-images/09.Perfect-diamond-04.png)

Остава **да си сглобим цялата програма** като първо четем параметъра на функцията, печатаме горната част на диаманта и след него и долната част на диаманта.

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#8](https://judge.softuni.bg/Contests/Practice/Index/939#8).


### Задача: правоъгълник със звездички в центъра

Да се напише функция, която приема като параметър цяло число **n** и чертае **правоъгълник** с размер **n с две звездички в центъра**, като в примерите по-долу.

#### Входни данни

Параметърът е цяло число **n** в интервала [**2 … 1000**].

#### Изходни данни

На конзолата трябва да се отпечата правоъгълникът като в примерите.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|2|<code>&#37;&#37;&#37;&#37;</code><br><code>&#37;&#42;&#42;&#37;</code><br><code>&#37;&#37;&#37;&#37;</code><br>|3|<code>&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&#42;&#42;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|4|<code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&#42;&#42;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|5|<code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&#42;&#42;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#37;</code><br><code>&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;&#37;</code><br>|

#### Насоки и подсказки

Прочитаме входния параметър на функцията.

![](assets/chapter-8-1-images/10.Rectangle-with-stars-01.png)

Първото нещо, което лесно забелязваме, е че **първият и последният ред** съдържат **`2 * n`** символа **`%`**. Ще започнем с това и после ще нарисуваме средата на четириъгълника.

![](assets/chapter-8-1-images/10.Rectangle-with-stars-02.png)

От дадените примери виждаме, че **средата** на фигурата винаги има **нечетен брой** редове. Забелязваме, че когато е зададено **четно число**, броят на редовете е равен на **предишното нечетно** (2 -> 1, 4 -> 3 и т.н.). Създаваме си променлива, която представлява броя редове, които ще има нашият правоъгълник, и я коригираме, ако числото **`n` е четно**. След това ще нарисуваме **правоъгълника без звездичките**. Всеки ред има за **начало и край** символа **`%`** и между тях **`2 * n - 2`** празни места (ширината е **`2 * n`** и вадим 2 за двата процента в края). Не забравяйте да преместите кода за **последния ред след цикъла**.

![](assets/chapter-8-1-images/10.Rectangle-with-stars-03.png)

Можем да **стартираме и тестваме кода до тук**. Всичко без двете звездички в средата трябва да работи коректно.

Сега остава **в тялото** на цикъла да добавим и **звездичките**. Ще направим проверка дали сме на **средния ред**. Ако сме на средния, ще рисуваме **реда** заедно **със звездичките**, ако не - ще рисуваме **нормален ред**. Редът със звездичките има **`n - 2`** **празни места** (**`n`** е половината дължина и махаме звездичката и процента), **две звезди** и отново **`n - 2` празни места**. Двата процента в началото и в края на реда си ги оставяме извън проверката.

![](assets/chapter-8-1-images/10.Rectangle-with-stars-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#9](https://judge.softuni.bg/Contests/Practice/Index/939#9).


## Задачи с вложени цикли с по-сложна логика

**Последната** (шеста) задача от практическия изпит по “Основи на програмирането” изисква използване на **няколко вложени цикъла и по-сложна логика в тях**. Задачата проверява способността на студентите да мислят алгоритмично и да решават нетривиални задачи, изискващи съставянето на цикли. Следват няколко примера за изпитни задачи.


### Задача: четворки нарастващи числа

По дадена двойка числа **a** и **b** да се генерират всички четворки **n1, n2, n3, n4,** за които **a ≤ n1 < n2 < n3 < n4 ≤ b**.

#### Входни данни

Като параметри на функцията получаваме две цели числа **a** и **b** в интервала [**0 … 1000**].

#### Изходни данни

Изходът съдържа всички търсени **четворки числа**, в нарастващ ред, по една на ред.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|3<br>7|3 4 5 6<br>3 4 5 7<br>3 4 6 7<br>3 5 6 7<br>4 5 6 7|15<br>20|15 16 17 18<br>15 16 17 19<br>15 16 17 20<br>15 16 18 19<br>15 16 18 20<br>15 16 19 20<br>15 17 18 19<br>15 17 18 20<br>15 17 19 20<br>15 18 19 20<br>16 17 18 19<br>16 17 18 20<br>16 17 19 20<br>16 18 19 20<br>17 18 19 20<br>|

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|5<br>7|No|10<br>13|10 11 12 13|

#### Насоки и подсказки

Прочитаме входните параметри на функцията. Създаваме и допълнителната променлива **`count`**, която ще следи дали има **съществуваща редица числа**.

![](assets/chapter-8-1-images/11.Increasing-4-numbers-01.png)

Най-лесно ще решим задачата, ако логически я разделим **на части**. Ако се изисква да изведем всички редици от едно число между **`a`** и **`b`**, ще го направим с **един цикъл**, който изкарва всички числа от **`а`** до **`b`**. Нека помислим как ще стане това с **редици от две числа**. Отговорът е лесен - ще ползваме **вложени цикли**. 

![](assets/chapter-8-1-images/11.Increasing-4-numbers-02.png)

Можем да тестваме недописаната програма, за да проверим дали е вярна до този момент. Тя трябва да отпечата всички двойки числа **`i`**, **`j`**, за които **`i ≤ j`**.

Тъй като всяко **следващо число** от редицата трябва да е **по-голямо** от **предишното**, вторият цикъл ще се върти от **`i + 1`** (следващото по-голямо число). Съответно, ако **не съществува редица** от две нарастващи числа (**`a`** и **`b`** са равни), вторият цикъл  **няма да се изпълни** и няма да се разпечата нищо на конзолата.

**Аналогично**, остава да реализираме по същия начин **вложените цикли** и за **четири числа**. Ще добавим и **увеличаване на брояча**, който инициализирахме в началото, за да знаем дали **съществува** такава **редица**.

![](assets/chapter-8-1-images/11.Increasing-4-numbers-03.png)

Накрая ще проверим дали **броячът** е равен на **0** и съответно ще принтираме “**No**” на конзолата, ако е така.

![](assets/chapter-8-1-images/11.Increasing-4-numbers-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#10](https://judge.softuni.bg/Contests/Practice/Index/939#10).


### Задача: генериране на правоъгълници

По дадено число **n** и **минимална площ m** да се генерират всички правоъгълници с цели координати в интервала [**-n…n**] с площ поне **m**. Генерираните правоъгълници да се отпечатат в следния формат:

**(left, top) (right, bottom) -> area**

Правоъгълниците се задават чрез горния си ляв и долния си десен ъгъл. В сила са следните неравенства:
-	**-n ≤ left < right ≤ n**
-	**-n ≤ top < bottom ≤ n**

#### Входни данни

Като параметри на функцията получаваме две числа:

-	Цяло число **n** в интервала [**1 … 100**] – задава минималната и максималната координата на връх.
-	Цяло число **m** в интервала [**0 … 50 000**] – задава минималната площ на генерираните правоъгълници.

#### Изходни данни

-	На конзолата трябва да се отпечатат описаните правоъгълници във формат като в примерите по-долу.
-	Ако за числата **n** и **m** няма нито един правоъгълник, да се изведе **“No”**.
-	Редът на извеждане на правоъгълниците е без значение.

#### Примерен вход и изход

|Вход|Изход|Вход|Изход|
|---|---|---|---|
|1<br>2|(-1, -1) (0, 1) -> 2<br>(-1, -1) (1, 0) -> 2<br>(-1, -1) (1, 1) -> 4<br>(-1, 0) (1, 1) -> 2<br>(0, -1) (1, 1) -> 2|2<br>17|No|

|Вход|Изход|
|---|---|
|3<br>36|(-3, -3) (3, 3) -> 36|

#### Насоки и подсказки

Прочитаме входните параметри на функцията. Ще създадем и един **брояч**, в който ще пазим броя на намерените правоъгълници.

![](assets/chapter-8-1-images/12.Generating-rectangles-01.png)

Изключително важно е да успеем да си представим задачата, преди да започнем да я решаваме. В нашия случай се изисква да търсим правоъгълници в координатна система. Нещото, което знаем е, че **лявата точка** винаги ще има координата **`х`, по-малка** от **дясната**. Съответно **горната** винаги ще има **по-малка** координата **`у`** от **долната**. За да намерим всички правоъгълници, ще трябва да направим **цикъл**, подобен на този от предходната задача, но този път **не всеки следващ цикъл** ще започва от **следващото число**, защото някои от **координатите** може да са **равни** (например **`left`** и **`top`**).

![](assets/chapter-8-1-images/12.Generating-rectangles-02.png)

С променливите **`left`** и **`right`** ще следим координатите по **хоризонталата**, а с **`top`** и **`bottom`** - по **вертикалата**. Важното тук е да знаем кои координати кои са, за да можем да изчислим правилно страните на правоъгълника. Сега трябва да намерим **лицето на правоъгълника** и да направим проверка дали то е **по-голямо** или **равно** на **`m`**. Едната **страна** ще е **разликата между `left` и `right`**, а **другата -  между `top` и `bottom`**. Тъй като координатите евентуално може да са разменени, ще ползваме **абсолютни стойности**. Отново добавяме и **брояча** в цикъла, като броим **само четириъгълниците**, които изписваме. Важно е да забележим, че поредността на изписване е **`left`**, **`top`**, **`right`**, **`bottom`**, тъй като така е зададено в условието.

![](assets/chapter-8-1-images/12.Generating-rectangles-03.png)

Накрая принтираме “**No**”, ако не съществуват такива правоъгълници.

![](assets/chapter-8-1-images/12.Generating-rectangles-04.png)

#### Тестване в Judge системата

Тествайте решението си тук: [https://judge.softuni.bg/Contests/Practice/Index/939#11](https://judge.softuni.bg/Contests/Practice/Index/939#11).
