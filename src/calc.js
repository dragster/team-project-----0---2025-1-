// Получаем ссылки на элементы экрана и списка истории
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

/**
 * Добавляет символ (цифру или знак) на экран
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Полностью очищает экран
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Удаляет последний введенный символ (Backspace)
 */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/**
 * Основная функция вычисления
 */
function calculate() {
    try {
        const expression = display.value;

        // Если экран пуст, ничего не делаем
        if (expression === "") return;

        // Вычисляем результат выражения
        // eval() — стандартный способ для простых учебных калькуляторов
        const result = eval(expression);

        // Проверяем, чтобы результат был числом
        if (result === undefined || result === Infinity) {
            throw new Error();
        }

        // Создаем запись для истории
        const li = document.createElement('li');
        li.textContent = `${expression} = ${result}`;

        // Добавляем запись в начало списка истории
        historyList.prepend(li);

        // Выводим результат на экран
        display.value = result;
    } catch (error) {
        // Если в примере ошибка (например, "5++2"), пишем "Ошибка"
        display.value = "Ошибка";

        // Через 1.5 секунды очищаем экран автоматически
        setTimeout(() => {
            display.value = "";
        }, 1500);
    }
}
