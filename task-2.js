/*Оголоси функцію formatMessage(message, maxLength),
яка приймає рядок (параметр message)
та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

Доповни код функції таким чином, що:

Якщо довжина рядка дорівнює або менша за maxLength,
то функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів,
додає трикрапку "..." в кінці та повертає обрізану версію.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
У консоль будуть виведені результати її роботи.*/

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

/*✅ 2. Завдання вирішено правильно

Проблема була вирішена правильно, критичних помилок немає.

Добре виконані моменти:

Хороший вибір назв змінних, які точно описують, що міститься в змінній.
Гарне форматування коду, що робить код легким для читання.
Ви також надали тестові варіанти, що є чудовим для перевірки того, як функція працює за очікуванням.
Покращення:

Хоча функція працює правильно, для стандартності бажано видалити зайві пробіли. Наприклад, використовуйте message.slice(0, maxLength) замість message.slice(0, maxLength ).
Також вважається гарною практикою вилучити else після оператору return всередині оператора if, оскільки оператор return призводить до виходу з функції, що робить блок else непотрібним. Це може допомогти зменшити рівень вкладеності і зробити код більш чистим.
Завдання прийнято з рекомендаціями для не критичних покращень.
*/