# Chapter 3.1. Simple conditions

In the present chapter we will take a look at the **conditional constructs in the JavaScript programing language**. By implementing these constructs, our program can produce a different output based on a given specific input. We will explain the syntax of the conditional operators (**`if`** and **`if-else`**) by implementing appropriate examples and also we will take a look a the range in which a variable lives (its **scope**). Finally, we will go over different **debugging** techniquies, in order to follow the programming steps through which our program goes during its run.

## Video

<div class="video-player">
  Watch the video course for this chapter: <a target="_blank" href="https://www.youtube.com/watch?v=0GTknpT5mw8">https://www.youtube.com/watch?v=0GTknpT5mw8</a>.
</div>


## Cnditional operators

In programming we can compare values through the use of the folowing **operators**:

* operator **`<`** (less than)
* operator **`>`** (greater than)
* operator **`<=`** (less than or equals)
* operator **`>=`** (greater than or equals)
* operator **`===`** (equals)
* operator **`!==`** (not equal; different than)

The result from a comparison is the so called Boolean value, which can be either **`true`** or **`false`** depending on the evaluated result being ether true or false.

It is important to note that in **JavaScript** there are further comparison operators - for **comparison**  **`==`** and **differance** **`!=`**. The implementation of these operators without having intimate knowledge of their evaluation may lead to unexpected results and problems, for the moment we will not take look at them in detail.

Additional information on the differances between the two types of comparison operators can be found on the following lonk: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

### Examples of Number Comparisons

![](assets/chapter-3-1-images/00.Comparing-numbers-01.png)

### Examples of comparing "text" (string) type variables

![](assets/chapter-3-1-images/00.Comparing-numbers-02.png)

It is important to note that the case of the letters **upper case** or **lower case** is important for the comparison. If the compared values are not **completely identical**, the output will allways be **`false`**.

### Comparison operators

In **JavaScript** we can use the folowing operators to compare data:

<table>
<tr>
<th>Operator</th> <th>Notation</th> <th>Applicable for</th>
</tr>
<tr>
<td>Equals</td><td align="center"> === </td><td rowspan="2"> numbers, strings, dates</td>
</tr>
<tr>
<td>Not equal</td><td align="center"> !== </td>
</tr>
<tr>
<td>Greater than</td><td align="center"> > </td><td rowspan="4">numbers, dates, other comparable data types</td>
</tr>
<tr>
<td>Greater than or equal</td><td align="center"> >= </td>
</tr>
<tr>
<td>Less than</td><td align="center"> &lt; </td>
</tr>
<tr>
<td>Less than or equal</td><td align="center"> &lt;= </td>
</tr>
</table>


## Simple **`if`** comparisons

In programming we often **check particular conditions** and perform various actions depending on the result of the comparison. This is done through the **`if`** comparison, which has the folowing structure:

```javascript
if (boolean condition) {
    // body of the conditional construct;  
}
```

### Example: Exellent Grade

We take the grade as an input argument to our function and upon evaluation we check if the input value is an exellent grade (**`≥ 5.50`**).

![](assets/chapter-3-1-images/01.ЕxcellentResult-01.png)

Test the example code locally. Try entering different grades, for example **4.75**, **5.49**, **5.50** и **6.00**. For grades **less than 5.50** the program will not give any output, however for grades of **5.50 or greater**, the output will be "**Excellent!**". The function is called by simply writing its name and filling the input value in the parenthesis:

![](assets/chapter-3-1-images/01.ЕxcellentResult-02.png)

#### Testing in the Judge System

You can test the solution example here:
[https://judge.softuni.bg/Contests/Practice/Index/929#0](https://judge.softuni.bg/Contests/Practice/Index/929#0).


## If-else conditional constructs

The **`if`** conditional can also have an **`else`** option in order to provide a specific action to be prformed in case the Boolean expression (which is specified at the beginning **`if (Boolean expression)`**) returns a negative / falsy result (**`false`**). Writen in this way the **conditional statement** is called **`if-else`** and its behaviour is as follows: if the result of the condition is **positive / truthy** (**`true`**) - a set of instructions is executed. By contrast, when the result is **negative / falsy** (**`false`**) - a different set is executed. The format of this structure in **JavaScript** is as follows:

```javascript
if (Boolean condition) {
    // Condition body to be executed if condition is true;
} else {
    // else structure body to be executed if condition is false;
}

```

### Example: Excellent Grade or Not

Similarly to the example above, we input a grade and check if it is excellent, but this time we should **output a result in both cases**:

![](assets/chapter-3-1-images/02.Excellent-or-not-01.png)

#### Testing in Judge System

You can test your solution at the folowing link: [https://judge.softuni.bg/Contests/Practice/Index/929#1](https://judge.softuni.bg/Contests/Practice/Index/929#1).


## About the Curly Braces { } after an if / else

When we have **only one comand** in the body of the **`if` statement**, we can **skip the curly braces**, indicating the body of the conditional operator. When we need to execute a **block of code** (group of comands), curly braces are **mandatory**. In case the braces are omitted, **only the first line of code** will be executed after the **`if` statement**.

<table><tr><td><img src="/assets/alert-icon.png" style="max-width:50px" /></td>
<td>It is a good practice to <strong> always include curly braces</strong>, since this makes the code more readable, neater and cleaner.</td>
</tr></table>

Here is an example, where omitting the curly braces leads to confusion:

![](assets/chapter-3-1-images/00.Brackets-tip-01.png)

Executing the code above will produce the folowing console output:

![](assets/chapter-3-1-images/00.Brackets-tip-02.png)

With curly braces:

![](assets/chapter-3-1-images/00.Brackets-tip-03.png)

The following output will be printed on the console:

![](assets/chapter-3-1-images/00.Brackets-tip-04.png)

### Problem: Even or Odd

Write a function that checks wether a given input number is **even** or **odd**.

The problem can be solved with a single **`if-else`** structure and the operator **`%`**, which returns the **devision remainder** of two numbers.

![](assets/chapter-3-1-images/03.Even-or-odd-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#2](https://judge.softuni.bg/Contests/Practice/Index/929#2).


### Problem: Finding the Greater Number

Write a program that reads two integers and outputs the greater one.

Our fitst task is to **read** the two numbers. After which through the use of a simple **`if-else`** structure, in combination with the **greater than operator** (**`>`**), to perform the comparison. We have deliberately blurred parts of the code, so that the reader can implement the learned so far.

![](assets/chapter-3-1-images/04.Greater-number-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#3](https://judge.softuni.bg/Contests/Practice/Index/929#3).

## Lifetime of a variable

Every variable has a scope in whch it exists, called **variable scope**. This scope specifies where the variable can be used and accessed. In **JavaScript** there are **two ways** to initialize variables. This is done through the key-word **`var`** or **`let`**. It is important to note the difference between them, as to avoid unexpected and unwanted results during the design and execution of our functions.

Variables initialized with the key-word **`var`** have the properties of **global variables**. They are characterized with the fact that they **can be accessed anywhere, regardles of the location in our code, where they are declared**.
Using the kay-word **`let`**, our variable assimes the properties of **a local variable**. This means that its lifetime begins at the row in which it is **defined** and ends untill the first closing curly brace **`}`** (of the function, of the **`if` statement** etc.). Owing to this it is important to know that every variable initialized with the key-word **`let`** within the body of an **`if`**, **will not be accessable outside its code block / scope**, unless we have defined it higher in the code.

In the example below, in the last lines we will try to access the defined variables. We wil print **`myMoney`** on the console, because it is declared in the beginning of our function, before the **`if` structure**, which makes it **available anywhere in the function body**. Even though **`salary`** is declared in the **`if`** structure block, we can print it because it has the properties of a **global variable** (since it is declared with **`var`**) and can be **used anywhere**. When we try to print the **`bonus`** variable, which is innitialized in the **`if` structure**, we will get an **error**, since the lifetime of this variable ends with the first closing curly brace **`}`**, which in this case is the one closing the **`if`** structure:

![](assets/chapter-3-1-images/00.Variable-scope-01.png)

Using the key-word **`var`** was the only way **in the past** to declare a variable, howadays however this is **not recommended**. Because of this in all exampls in this book we will use the key-word **`let`**.

It is important to note that there is a **third way** to initialize variables - through the use of the key-word **`const`**. These variables have the same scope as if defined through **`let`**, howver have one key diference - they are **constant variables**. This means that after the initial assignment, their value is **impossible to be changed or the variable re-defined**.

## Conditional chaining

Sometimes we have to do a series of checks, before deciding what actions our program will execute. In such cases we can apply the structure **`if-else if…-else` in series**. For this purpose we employ the folowing structure: 

```javascript
if (first condition) {
    // condition body;
} else if (second condition) {
    // condition body;
} else if (third condition) {
    // condition body;
}
…
else {
    // else structure body;
}
```

### Example: Numbers one through 9 in English

Print the digits one through nine in english on the console (the numbers are passed as arguments of the function upon call). We can take the digit and through a **series of conditions** print the corresponding English word on the console:

```javascript
function number1to9([arg1]) {
  let num = parseInt(arg1);
  
  if (num === 1) {
      console.log("one");
  } else if (num === 2) {
      console.log("two");
  } else if (num === 3) {
      console.log("three");
  }
  // TODO: add more checks
  else {
      console.log("number too big"); 
  }
}
```

The program logic of the above example **sequentially compares** the input number with the digits from 1 to 9 **with each consecutive comparison being performed only in case the previous result is not true**. Eventually if none of the **`if`** conditionals are astisfied, the last **`else` clasue** is executed.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#4](https://judge.softuni.bg/Contests/Practice/Index/929#4).


## Exersise: Simple conditions

In order to practice the implementation of the conditional constructs **`if`** and **`if-else`**, we will take a look at a fiew practial problems.

### Problem: Bonus Score 

We are given an **integer** – a number of points. Additional **bonus points** are awarded as per the rules described below. Write a function that calculates the **bonus points** for the given number and outputs the **total points** including the bonus.

- If the number is **up to 100** inclusive, the bonus points are 5.
- If the number is **larger than 100**, the bonus points are **20%** of the number.
- If the number is **larger than 1000**, the bonus points are **10%** of the number.
- Additional points are awarded as below (added separately from the described above):
    * For **even** numbers -> + 1 p.
    * For numbers, **ending with 5** -> + 2 p.
 
#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 20 | 6<br>26 |
| 175 | 37<br>212 |
| 2703 | 270.3<br>2973.3 |
| 15875 | 1589.5<br>17464.5 |

#### Hints and pointers

We can calculate the base and additional bonus score with a series of **`if-else-if-else`** statements. for the **main bonus points we have 3 cases** (the unput is less than or equal to 100, it is between 100 and 1000, and finally it is greater than 1000), for the **additional bonus soce - further 2 cases** (wether the number is even or odd and wether the remainder of division by 5 is 5).

![](assets/chapter-3-1-images/06.Bonus-score-01.png)

This is an example output, when the function is called with 175:

![](assets/chapter-3-1-images/06.Bonus-score-02.png)

Please note that for this problem the Judge system is set-up to ignore any non-number outputs, so we may print explanations along with the number output.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#5](https://judge.softuni.bg/Contests/Practice/Index/929#5).


### Problem: Summing Up Seconds

Three athletes finish with some **number of seconds** (between **1** and **50**). Write a function that takes the times of the contestants and calculates their **combined time** in **minutes:seconds** format. Seconds are to be printed with a **leading zero** (2 -> "02", 7 -> "07", 35 -> "35").

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 35<br>45<br>44 | 2:04 |
| 22<br>7<br>34 | 1:03 |
| 50<br>50<br>49 | 2:29 |
| 14<br>12<br>10 | 0:36 |

#### Hints and pointers

Firstly we sum the three numbers, in order to obtain the seconds total. As we know that **1 minute = 60 seconds**, we should calculate the minutes and seconds in the range 0 to 59:
- If the result is between 0 and 59, we print 0 minutes + calculated seconds.
- If the result is between 60 and 119, we print 1 minute + calculated seconds minus 60.
- If the result is between 120 and 179, we print 2 minutes + calculated seconds minus 120.
- If the seconds are less than 10, we print the number with a leading zero.

![](assets/chapter-3-1-images/07.Sum-seconds-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#6](https://judge.softuni.bg/Contests/Practice/Index/929#6).


### Problem: Metric Converter

Write a function, that **converts distance** between the folowing **8 units of measure**: **`m`, `mm`, `cm`, `mi`, `in`, `km`, `ft`, `yd`**. Ypu may use the conversion table below:

| Input measure | Output measure |
| :-------------: | :--------------: |
| 1 meter (m) | 1000 millimeters (mm) |
| 1 meter (m) | 100 centimeters (cm) |
| 1 meter (m) | 0.000621371192 miles (mi) |
| 1 meter (m) | 39.3700787 inches (in) |
| 1 meter (m) | 0.001 kilometers (km) |
| 1 meter (m) | 3.2808399 feet (ft)  |
| 1 meter (m) | 1.0936133 yards (yd) |

The input will be three parameters:

- First: A number.
- Second: Input unit of measure.
- Third: Output unit of measure (for the result).

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 12 <br>km <br>ft | 39370.0788 |
| 150 <br>mi <br>in | 9503999.99393599 |
| 450 <br>yd <br>km | 0.41147999937455 |

#### Hints and pointers

We take the input data and to the units of measure we can add the method **`toLowerCase()`**, which will convert all letters to lower case. As we can see from the conversion table above, we have data for **converting only between meters and any other measuring unit**. In order to make the conversion, firstly we must calculate the input measurement in meters. To this effect we need to create a set of conditionals to determine the input measuring unit and then the output.

![](assets/chapter-3-1-images/08.Metric-converter-01.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#7](https://judge.softuni.bg/Contests/Practice/Index/929#7).


## Debugging - simple operations with a debugger

To date we have written quite a lot of code and often times there were mistakes, were there? Now we can show you a tool to make finding mistakes easier.

### What is "debugging"?

**Debugging** is the process of „**attaching**“ to a program's execution, whch allows us to follow closely the execution of our program. We can follow **line by line** the events in our program, what is its evaluation route, what are the intermediate values of the declared variables at each step of the execution, among other useful information and thus allowing us to locate errors - the so-called **bugs**.

![](assets/chapter-3-1-images/00.Debugging-01.png)

### Debugging in Visual Studio Code

We add a point, at whicj our function will stop its execution - a **breakpoint** after which we start the program in **debug mode** through pressing [**F5**]. The program will follow its course untill it reaches our interrupt (**breakpoint**). After which we the execution can proceed to the **next line of code** with pressing [**F10**]. 

## Exercises: Simple Conditions

Now let's practice the lessons learned in this chapter with a few practical exercises.

### Empty Visual Studio Code file

We start Visual Studio Code and create a new file [**File**] -> [**New File**]:

![](assets/chapter-3-1-images/00.Visual-studio-01.png)

After that we will see a new file, which is anonimus for the moment to our system. In order to be recognized correctly, we need to save our code as a **JavaScript** file: [**File**] -> [**Save**]:

![](assets/chapter-3-1-images/00.VisualStuido-02.png)

After this a pop-up window will open, where we need to specify a name for our file and give it the **obligatory .js file extension**:

![](assets/chapter-3-1-images/00.VisualStuido-03.png)


### Problem: Excellent Grade

The first exercise for this topic is to write a **JavaScript function**, which **takes a grade** (decimal number) and prints "**Excellent!**", if the grade is **5.50** or higher.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 6 | Excellent! |
| 5 | (no output) |
| 5.5 | Excellent! |
| 5.49 | (no output) |

#### Hints and pointers

We create a **new anonimus file** by clicking [**File**] -> [**New File**]. Then we save it ([**File**] -> [**Save**]), as a **JavaScript file**, with the file extension **.js**  
 
Now that we have prepared a JavaScript file, we have to solve the problem. To this effect we write the folowing code:

 ![](assets/chapter-3-1-images/01.ЕxcellentResult-01.png)

**Start** the program with [**Ctrl+F5**], so we can **test** it with different input values:

 ![](assets/chapter-3-1-images/01.ЕxcellentResult-03.png)
 
For values **greater than 5.50** - there is an **Excellent!** output.

 ![](assets/chapter-3-1-images/01.ЕxcellentResult-04.png)
 
For values **less than 5.50** - there is no output.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#0](https://judge.softuni.bg/Contests/Practice/Index/929#0).

 ![](assets/chapter-3-1-images/01.ЕxcellentResult-05.png) 

 ![](assets/chapter-3-1-images/01.ЕxcellentResult-06.png)


### Задача: отлична оценка или не

Следващата задача от тази тема е да се напише **JavaScript функция**, която **приема оценка** (десетично число) и отпечатва “**Excellent!**”, ако оценката е **5.50** или по-висока, или “**Not excellent.**” в противен случай.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 6 | Excellent! |
| 5 | Not excellent. |
| 5.5 | Excellent! |
| 5.49 | Not excellent. |

#### Hints and pointers

Първо създаваме **нов JavaScript файл**. Следва да **напишем кода** на програмата. Може да си помогнем със следния примерен код:  

 ![](assets/chapter-3-1-images/02.Excellent-or-not-01.png)

Следва да извикваме функцията, като и подаваме примерни параметри и я тестваме дали работи коректно:

![](assets/chapter-3-1-images/02.Excellent-or-not-02.png)

 ![](assets/chapter-3-1-images/02.Excellent-or-not-03.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#1](https://judge.softuni.bg/Contests/Practice/Index/929#1).

 ![](assets/chapter-3-1-images/02.Excellent-or-not-04.png)


### Задача: четно или нечетно

Да се напише програма, която въвежда **цяло число** и печата дали е **четно** или **нечетно**.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 2 | even |
| 3 | odd |
| 25 | odd |
| 1024 | even |

#### Hints and pointers

Отново, първо добавяме **нов JavaScript файл**. Проверката дали дадено число е четно, може да се реализира с оператора **`%`**, който ще ни върне **остатъка при целочислено деление на 2** по следния начин: **`let isEven = (num % 2 == 0)`**.

Остава да **стартираме** програмата с [**Ctrl+F5**] и да я тестваме:  

![](assets/chapter-3-1-images/03.Even-or-odd-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#2](https://judge.softuni.bg/Contests/Practice/Index/929#2).


### Задача: намиране на по-голямото число

Да се напише програма, която въвежда **две цели числа** и отпечатва по-голямото от двете.

#### Sample Input and Output

| Input | Output |
|-----|------|
|5<br>3| 5 |
|3<br>5| 5 |
|10<br>10| 10 |
|-5<br>5| 5 |

#### Hints and pointers

Както обикновено, първо трябва да добавим **нов JavaScript файл**. За кода на програмата ни е необходима единична **`if-else`** конструкция. Може да си помогнете частично с кода от картинката, който е умишлено замъглен, за да помисли читателя как да го допише сам:  
![](assets/chapter-3-1-images/04.Greater-number-01.png)

След като сме готови с имплементацията на решението, извикваме функцията като й подаваме примерни параметри, **стартираме** програмата с [**Ctrl+F5**] и я тестваме:

![](assets/chapter-3-1-images/04.Greater-number-02.png)

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#3](https://judge.softuni.bg/Contests/Practice/Index/929#3).


### Задача: изписване на число до 9 с думи

Да се напише функция, която приема **цяло число в диапазона** [**0 … 9**] и го **изписва с думи** на английски език. Ако числото е извън диапазона, изписва “**number too big**”.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 5 | five |
| 1 | one |
| 9 | nine |
| 10 | number too big |

#### Hints and pointers

Може да използваме поредица **`if-else`** конструкции, с които да разгледаме възможните **11 случая**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#4](https://judge.softuni.bg/Contests/Practice/Index/929#4).


### Задача: познай паролата

Да се напише функция, която **приема парола** (произволен текст) и проверява дали въведеното **съвпада** с фразата “**s3cr3t!P@ssw0rd**”. При съответствие да се изведе “**Welcome**”, а при несъответствие да се изведе “**Wrong password!**”. 

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| qwerty | Wrong password! |
| s3cr3t!P@ssw0rd | Welcome |
| s3cr3t!p@ss | Wrong password! |

#### Hints and pointers

Използвайте **`if-else`** конструкцията.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#8](https://judge.softuni.bg/Contests/Practice/Index/929#8).


### Задача: число от 100 до 200

Да се напише функция, която като параметър **приема цяло число** и проверява дали е **под 100**, **между 100 и 200** или **над 200**. Да се отпечатат съответно съобщения, като в примерите по-долу.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 95 | Less than 100 |
| 120 | Between 100 and 200 |
| 210 | Greater than 200 |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#9](https://judge.softuni.bg/Contests/Practice/Index/929#9).


### Задача: еднакви думи

Да се напише функция, която като параметър **приема две думи** и проверява дали са еднакви. Да не се прави разлика между главни и малки букви. Да се изведе “**yes**” или “**no**”. 

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| Hello<br>Hello | yes |
| SoftUni<br>softuni | yes |
| Soft<br>Uni | no |
| beer<br>vodka | no |
| HeLlO<br>hELLo | yes |

#### Hints and pointers

Преди сравняване на думите, е препоръчително да ги обърнете в долен регистър, за да не оказва влияние размера на буквите (главни / малки): **`word = word.toLowerCase()`**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#10](https://judge.softuni.bg/Contests/Practice/Index/929#10).


### Задача: информация за скоростта

Да се напише функция, която като параметър **приема скорост** (десетично число) и отпечатва **информация за скоростта**. При скорост **до 10** (включително), отпечатайте "**slow**". При скорост **над 10** и **до 50**, отпечатайте "**average**". При скорост **над 50 и до 150**, отпечатайте "**fast**". При скорост **над 150 и до 1000**, отпечатайте "**ultra fast**". При по-висока скорост, отпечатайте "**extremely fast**".

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 8 | slow |
| 49.5 | average |
| 126 | fast |
| 160 | ultra fast |
| 3500 | extremely fast |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#11](https://judge.softuni.bg/Contests/Practice/Index/929#11).


### Задача: лица на фигури

Да се напише функция, която **приема размерите на геометрична фигура** и **пресмята лицето й**. Фигурите са четири вида: квадрат (**square**), правоъгълник (**rectangle**), кръг (**circle**) и триъгълник (**triangle**).

Като първи аргумент на функцията се подава вида на фигурата (**`square`**, **`rectangle`**, **`circle`**, **`triangle`**).
* Ако фигурата е **квадрат**, като следващ аргумент подаваме едно число – дължина на страната му.
* Ако фигурата е **правоъгълник**, като следващи аргументи подаваме две числа – дължините на страните му.
* Ако фигурата е **кръг**, като следващ аргумент подаваме едно число – радиусa на кръга.
* Ако фигурата е **триъгълник**,  като следващи аргументи подаваме две числа – дължината на страната му и дължината на височината към нея.

Резултатът да се закръгли до **3 цифри след десетичния знак**. 

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| square<br>5 | 25 |
| rectangle<br>7<br>2.5 | 17.5 |
| circle<br>6 | 113.097 |
| triangle<br>4.5<br>20 | 45 |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#12](https://judge.softuni.bg/Contests/Practice/Index/929#12).


### Задача: време + 15 минути

Да се напише функция, която като параметър **приема час и минути** от 24-часово денонощие и изчислява колко ще е **часът след 15 минути**. Резултатът да се отпечата във формат **`hh:mm`**. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри и с **водеща нула**, когато е необходимо.

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 1<br>46 | 2:01 |
| 0<br>01 | 0:16 |
| 23<br>59 | 0:14 |
| 11<br>08 | 11:23 |
| 12<br>49 | 13:04 |

#### Hints and pointers

Добавете 15 минути и направете няколко проверки. Ако минутите надвишат 59, **увеличете часовете** с 1 и **намалете минутите** с 60. По аналогичен начин разгледайте случая, когато часовете надвишат 23. При печатането на минутите, **проверете за водеща нула**.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#13](https://judge.softuni.bg/Contests/Practice/Index/929#13).


### Задача: еднакви 3 числа

Да се напише функция, в която се подават като аргументи **3 числа** и се отпечатва дали те са еднакви (**yes** / **no**).

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 5<br>5<br>5 | yes |
| 5<br>4<br>5 | no |
| 1<br>2<br>3 | no |

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#14](https://judge.softuni.bg/Contests/Practice/Index/929#14).


### Задача\*:  изписване на число от 0 до 100 с думи

Да се напише функция, която превръща число в диапазона [**0 … 100**] в текст. 

#### Sample Input and Output

| Input | Output |
| --- | ---- |
| 25 | twenty five |
| 42 | forty two |
| 6  | six |

#### Hints and pointers

Проверете първо за **едноцифрени числа** и ако числото е едноцифрено, отпечатайте съответната дума за него. След това проверете за **двуцифрени числа**. Тях отпечатвайте на две части: лява част (**десетици** = числото / 10) и дясна част (**единици** = числото % 10). Ако числото има 3 цифри, трябва да е 100 и може да се разгледа като специален случай.

#### Testing in the Judge System

Test your solution here: [https://judge.softuni.bg/Contests/Practice/Index/929#15](https://judge.softuni.bg/Contests/Practice/Index/929#15).


## Графично Web приложение

След като направихме няколко упражнения върху **условни конструкции (проверки)**, сега нека направим нещо по-интересно: приложение с графичен потребителски интерфейс за конвертиране на валути. Ще използваме знанията от тази глава, за да избираме измежду няколко налични валути и съответно да извършваме пресмятания по различен курс спрямо избраната валута.

### Задача\**: Конвертор за валути

Нека разгледаме как да създадем графично (**GUI**) приложение за **конвертиране на валути**. Приложението ще изглежда приблизително като на картинката по-долу:  

![](assets/chapter-3-1-images/14.Converter-01.png)

За визуализация ще използваме **интернет браузър**, който възпроизвежда **HTML** страници. Ще създадем нова такава и ще изградим **структурата**, **облика** и **функционалността** на нашето приложение.

Както обикновено **създаваме нов файл**, след това го запаметяваме с име **Currency-Converter**, но този път добавяме разширение **.html**.

![](assets/chapter-3-1-images/14.Converter-02.png)


Отваряме новосъздаденият файл въвеждаме **структурата на документа**, под формата на **HTML код**:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Currency Converter</title>
  <style>

        /* enter styling here */

  </style>
</head>
<body>
  <main id="conventer-window">
    <h1>Currency Converter</h1>
    <form name="conventer">
      <input type="number" placeholder="Enter number" min="0" 
      id="cash-input" onkeyup="convert()" onchange="convert()">
      <span>BGN &#8594; </span>
      <select onchange="convert()" id="currency-options">
        <option selected disabled>Select currency</option>
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="gbp">GBP</option>
      </select>
      <br />
      <input type="text" name="result" id="result" disabled>
    </form>
  </main>
  <script>

    // enter Javascript functionality here

  </script>
</body>
</html>
```

Запазваме файла и го отваряме.

![](assets/chapter-3-1-images/14.Converter-03.png)
     
Вече сме изградили структурата на документа, но той може да бъде визуално подобрен след като добавим допълнителни **стилове**. За целта добавяме следният код в **`<style>`** секцията на нашия **HTML** документ:

```css
body {
  background-color: #fff;
}

main {
  margin: 200px auto;
  height: 250px;
  width: 500px;
  background-color: #e7e7e7;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 3px 3px 3px gray;
}

h1 {
  text-align: center;
  color: #000;
  text-shadow: 1px 1px 1px #000;
}

form {
  width: 400px;
  margin:20px auto;
  text-align: center;
}

span {
  font-weight:bold;
  font-size: 16px;
}

input[type=number], input[type=text], select {
    width: 140px;
    padding: 8px 10px;
    margin: 20px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    outline: none;
    text-align: center
}
 input[type=text] {
   width: 80%;
   margin-top:20px;
   background-color: #7beb80;
   padding: 12px 10px;
   color:black;
   font-weight: bold;
   font-size: 15px;
 }

 input:focus {
   border: 2px solid #26a5e0;
 }
```

Вече имаме и по-приятен изглед на нашето приложение.
Остава да добавим и **функциалността**. Тя се добавя в **``<script>``** секцията в нашия **HTML** документ.
Ще използваме следния **JavaScript код** за обработка на събитията:

```javascript
function convert(){
  let x = document.getElementById("cash-input").value;
  let e = document.getElementById("currency-options");
  let selected = e.options[e.selectedIndex].text;
  let result;
  
  if (selected === "EUR") {
      result = x + " " + "лв. = " + (x * 1.95583).toFixed(2) + " " + selected;
      document.getElementById("result").value = result;
  } else if (selected === "USD") {
      result = x + " " + "лв. = " + (x * 1.63760).toFixed(2)  + " " + selected;
      document.getElementById("result").value = result;
  } else if (selected === "GBP") {
      result = x + " " + "лв. = " + (x * 2.22920).toFixed(2)  + " " + selected;
      document.getElementById("result").value = result;
  }
}
```

Горният код взима **сумата** за конвертиране от полето **`cash-input`** и **избраната валута** за резултата от полето **`currency-options`**. След това с **условна конструкция**, според избраната валута, сумата се дели на **валутния курс** (който е фиксиран твърдо в сорс кода). Накрая се генерира текстово **съобщение с резултата** (закръглен до 2 цифри след десетичния знак) и се записва в зелената кутийка **`result`**. Опитайте!

Ако имате проблеми с примерите по-горе, **гледайте видеото** в началото на тази глава или питайте във **форума на СофтУни**: https://softuni.bg/forum.
