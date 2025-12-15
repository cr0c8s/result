document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// ======== ПЕРЕМЕШИВАНИЕ ТРЕКОВ ========

document.getElementById("shuffleBtn").addEventListener("click", () => {

    const list = document.getElementById("audioList");
    const items = Array.from(list.children);

    // Анимация исчезновения
    items.forEach(item => item.classList.add("animate"));

    setTimeout(() => {

        // Алгоритм Фишера-Йетса
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            list.appendChild(items[j]);
            items.splice(j, 1);
        }

        // Убираем анимацию после перемешивания
        setTimeout(() => {
            Array.from(list.children).forEach(item => item.classList.remove("animate"));
        }, 50);

    }, 300);
});

    function updateDateTime() {
        const now = new Date();

        const optionsDate = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        
        const optionsTime = {
            hour: "2-digit",
            minute: "2-digit"
        };

        // Дата на русском
        let date = now.toLocaleDateString("ru-RU", optionsDate);

        // Время
        let time = now.toLocaleTimeString("ru-RU", optionsTime);

        // Генерация атмосферной фразы в зависимости от времени суток
        let hour = now.getHours();
        let mood = "";

        if (hour >= 5 && hour < 12) mood = "— спокойное утро для спокойной музыки";
        else if (hour >= 12 && hour < 18) mood = "— хорошее время, чтобы что-то динамичное послушать";
        else if (hour >= 18 && hour < 23) mood = "— отличный вечер для взрывной музыки";
        else mood = "— ночная атмосфера для глубоких треков";

        document.getElementById("date-time").textContent =
            `Сегодня: ${date} • ${time} ${mood}`;
    }

    // Обновляем сразу
    updateDateTime();

    // И каждую минуту
    setInterval(updateDateTime, 1000 * 60);