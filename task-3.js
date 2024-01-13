/*Функція checkForSpam(message) приймає рядок (параметр message),
перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

Доповни код функції таким чином, що:

Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
Якщо в рядку відсутні заборонені слова, функція повертає буль false
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
У консоль будуть виведені результати її роботи.*/

function checkForSpam(message) {
    
    const messageToLow = message.toLowerCase();
    const messageCheckSpam = messageToLow.indexOf("spam");
    const messageCheckSale = messageToLow.indexOf("sale");

    return messageCheckSale !== -1 || messageCheckSpam !== -1;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

/*
✅ 3. Завдання вирішено правильно

Студентське рішення здається розв'язати проблему, як вимагається, але є кілька областей, які можуть піддаватися поліпшенню.

Добре виконані моменти:

Добре використана методологія toLowerCase (), щоб гарантувати,
що перевірки працюють незалежно від регістру вхідного рядка.
Точний логічний оператор return, який комбінує перевірки на 'spam' і 'sale' за допомогою оператора  (логічне або).
Поліпшення:

Змінну messagetolowercase можна було б краще назвати як normalizedMessage, щоб показати, що ця змінна представляє оригінальне повідомлення, перетворене до порівнянного формату.
Замість використання indexOf, який менш доступний, ніж includes, було б краще використовувати includes, як в попередніх рішеннях, для забезпечення послідовності та зрозумілості.
Прикоментований код (рядок з indexOf('spam'  'sale')) слід видалити з кінцевого рішення, оскільки він не функціональний і може призвести до плутанини.
Навички хорошого форматування коду вказують на те, що слід забезпечувати послідовний проміжок перед операторами і після ком.
З цим кажучи, ось поліпшена версія коду студента:

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  const checkSpam = normalizedMessage.includes('spam');
  const checkSale = normalizedMessage.includes('sale');
  
  return checkSpam || checkSale;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book is on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
Загалом, з трохи прибирання та використання більш доступних назв методів,
рішення було б далі поліпшено. Однак, завдання прийнято,
оскільки наданий код працюватиме правильно для всіх наданих тестових випадків.
*/