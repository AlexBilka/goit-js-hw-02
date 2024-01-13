/*Оголоси функцію getShippingCost(country),
яка повинна перевіряти можливість доставки товару
в країну користувача (параметр country) і повертати повідомлення про результат.
Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
де замість <country> і <price> необхідно підставити відповідні значення.

Список країн і вартість доставки:

China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів
Зі списку видно, що доставка можлива не скрізь.
Якщо зазначена країна відсутня у списку,
то функція повинна повернути рядок "Sorry, there is no delivery to your country".

Візьми код нижче і встав після оголошення своєї функції для перевірки
коректності її роботи. У консоль будуть виведені результати її роботи.*/

function getShippingCost(country) {
    switch (country) {
  case "China":
    return `Shipping to ${country} will cost 100 credits`;

    case "Chile":
    return `Shipping to ${country} will cost 250 credits`;

  case "Australia":
    return `Shipping to ${country} will cost 170 credits`;

  case "Jamaica":
    return `Shipping to ${country} will cost 120 credits`;

  default:
    return "Sorry, there is no delivery to your country";
}
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


/*
✅ 4. Завдання вирішено правильно

Проблема була вирішена правильно і відповідно до вимог завдання. Функція getShippingCost(country) використовує вираз switch для повернення правильного рядка залежно від наданої країни. Також правильно використовується значення за замовчуванням для обробки країн, для яких немає доставки.

    Добро виконані моменти:

    Функція getShippingCost(country) оголошена, як вимагається.
Використовується вираз switch в межах тіла функції для перевірки можливості доставки в залежності від країни.
Шаблонні рядки послідовно використовуються для створення повертаємих рядків, що є хорошою практикою для покращення читабельності.
Хороші іменування змінних; змінна country описує те, що вона представляє.
    Покращення:

Коментарі на початку рішення написані не англійською мовою. Хоча це не впливає на функціональність коду, рекомендується писати коментарі англійською мовою для однорідності і забезпечення їх загального зрозуміння в багатомовному середовищі розробки.
Завдання прийнято.
*/