// ===== 1. БАЗА ИДЕЙ =====
// Формат: [название, English name, тип, сложность, интересы, описание, функции]
const RAW = [
["AI-помощник для Minecraft","Minecraft AI Helper","AI-проект","Средне",["minecraft","ai","игры"],"Чат-помощник, который советует рецепты, постройки и стратегии выживания.",["Чат с подсказками","База крафтов","Идеи построек","Избранные советы"]],
["Minecraft Mod Manager","Minecraft Mod Manager","Программа для ПК","Сложно",["minecraft","игры","программирование"],"Менеджер модов: список, версии, профили и проверка совместимости.",["Список модов","Профили сборок","Проверка версий","Импорт и экспорт"]],
["Telegram-бот для изучения английского","English Learning Telegram Bot","Telegram-бот","Средне",["английский","english","образование"],"Бот присылает слова дня, тесты и следит за прогрессом.",["Слово дня","Мини-тесты","Статистика","Напоминания"]],
["Трекер привычек","Habit Tracker","Веб-сайт","Легко",["привычки","здоровье","продуктивность"],"Отмечай привычки каждый день и смотри серии успехов.",["Список привычек","Отметка за день","Серии дней","Календарь прогресса"]],
["Генератор викторин","Quiz Generator","Образовательный проект","Легко",["образование","викторины","игры"],"Создавай викторины со своими вопросами и проходи их.",["Создание вопросов","Таймер","Подсчёт очков","Таблица рекордов"]],
["AI-помощник для учёбы","AI Study Helper","AI-проект","Сложно",["ai","образование","учёба"],"Объясняет темы, делает конспекты и готовит тесты по материалу.",["Объяснение темы","Автоконспект","Тесты по теме","План подготовки","История запросов"]],
["Генератор паролей","Password Generator","Инструмент","Легко",["безопасность","программирование"],"Создаёт надёжные пароли с настройкой длины и символов.",["Выбор длины","Типы символов","Индикатор надёжности","Копирование в один клик"]],
["To-Do List","To-Do List","Веб-сайт","Легко",["продуктивность","программирование"],"Простой список дел с категориями и фильтрами.",["Добавление задач","Категории","Фильтры","Сохранение в браузере"]],
["Генератор игровых идей","Game Idea Generator","Инструмент","Легко",["игры","gaming","креатив"],"Случайно сочетает жанр, механику и сеттинг для новой игры.",["Случайные комбинации","Фиксация элементов","Избранное","Копирование идеи"]],
["Трекер тренировок","Workout Tracker","Мобильное приложение","Средне",["fitness","спорт","здоровье"],"Записывай упражнения, подходы и вес, смотри рост результатов.",["Журнал тренировок","Графики прогресса","Шаблоны программ","Таймер отдыха"]],
["Сервис рекомендаций фильмов","Movie Recommender","Веб-сайт","Средне",["фильмы","кино","развлечения"],"Подбирает фильмы по жанру, настроению и твоим оценкам.",["Выбор настроения","Фильтры жанров","Оценки","Список «посмотреть позже»"]],
["Трекер расходов","Expense Tracker","Веб-сайт","Средне",["finance","деньги","бюджет"],"Учёт доходов и расходов с категориями и графиками.",["Добавление трат","Категории","Графики","Месячный бюджет"]],
["Карточки английских слов","English Flashcards","Образовательный проект","Легко",["английский","english","образование"],"Карточки со словами и повторением по интервалам.",["Свои колоды","Переворот карточки","Режим повторения","Счётчик выученного"]],
["Pomodoro Timer","Pomodoro Timer","Инструмент","Легко",["продуктивность","учёба","программирование"],"Таймер работы и отдыха с учётом статистики сессий.",["Циклы 25/5","Звуковой сигнал","Статистика дня","Настройка времени"]],
["AI-помощник для написания текста","AI Writing Assistant","AI-проект","Сложно",["ai","writing","текст"],"Помогает улучшать, сокращать и переписывать тексты в разных стилях.",["Выбор стиля","Исправление ошибок","Сокращение текста","История версий","Экспорт"]],
["Змейка с рекордами","Snake with High Scores","Игра","Легко",["игры","gaming","программирование"],"Классическая змейка с уровнями скорости и таблицей рекордов.",["Управление стрелками","Рост скорости","Рекорды","Пауза"]],
["Платформер на Canvas","Canvas Platformer","Игра","Сложно",["игры","gaming","программирование"],"2D-платформер с уровнями, врагами и монетами.",["Физика прыжка","Несколько уровней","Враги","Сбор монет","Меню и сохранения"]],
["Мини-игра на реакцию","Reaction Test Game","Игра","Легко",["игры","gaming","спорт"],"Проверь скорость реакции и побей свой рекорд.",["Случайная задержка","Измерение в мс","Лучший результат","Среднее по попыткам"]],
["Текстовый квест","Text Adventure Quest","Игра","Средне",["игры","история","gaming"],"Интерактивная история с выбором и разными концовками.",["Ветвление сюжета","Инвентарь","Несколько концовок","Автосохранение"]],
["Telegram-бот напоминаний","Reminder Telegram Bot","Telegram-бот","Легко",["продуктивность","telegram"],"Бот напоминает о делах в нужное время.",["Создание напоминаний","Повторы","Список дел","Удаление"]],
["Telegram-бот погоды и новостей","Telegram Digest Bot","Telegram-бот","Сложно",["новости","telegram","погода"],"Ежедневная сводка: погода, новости и курсы валют.",["Выбор города","Рассылка по времени","Темы новостей","Подписки","Админ-панель"]],
["Telegram-бот викторин","Quiz Telegram Bot","Telegram-бот","Средне",["викторины","игры","telegram"],"Бот проводит викторины и ведёт рейтинг игроков.",["Вопросы по темам","Рейтинг","Дуэли","Ежедневный вызов"]],
["Заметки с тегами","Tagged Notes App","Программа для ПК","Средне",["заметки","продуктивность","программирование"],"Десктопное приложение для заметок с тегами и поиском.",["Markdown","Теги","Быстрый поиск","Тёмная тема"]],
["Менеджер скриншотов","Screenshot Organizer","Программа для ПК","Легко",["файлы","инструмент","программирование"],"Сортирует скриншоты по папкам и датам.",["Выбор папки","Автосортировка","Переименование","Предпросмотр"]],
["Дневник настроения","Mood Journal","Мобильное приложение","Легко",["здоровье","психология","дневник"],"Записывай настроение и находи закономерности.",["Эмодзи-выбор","Заметка дня","График недели","Напоминания"]],
["Приложение для медитации","Meditation App","Мобильное приложение","Сложно",["здоровье","медитация","музыка"],"Дыхательные практики, таймеры и фоновые звуки.",["Дыхательные упражнения","Звуки природы","Серии дней","Профиль","Статистика"]],
["Конвертер единиц","Unit Converter","Инструмент","Легко",["математика","инструмент"],"Быстрый перевод длины, веса, температуры и валют.",["Много категорий","Мгновенный расчёт","Обмен местами","История"]],
["Генератор мемов","Meme Maker","Инструмент","Средне",["мемы","креатив","развлечения"],"Добавляй текст на картинки и скачивай мемы.",["Загрузка фото","Текст сверху и снизу","Шрифты","Скачивание PNG"]],
["Тренажёр программирования","Coding Practice Trainer","Образовательный проект","Сложно",["программирование","образование","coding"],"Мини-задачи по JavaScript с проверкой решений в браузере.",["Редактор кода","Автопроверка","Уровни","Подсказки","Прогресс"]],
["Тренажёр таблицы умножения","Multiplication Trainer","Образовательный проект","Средне",["математика","образование","дети"],"Игровой тренажёр с уровнями и наградами.",["Режимы сложности","Таймер","Ошибки на повтор","Награды"]],
["Личный дашборд","Personal Dashboard","Другое","Средне",["продуктивность","креатив"],"Стартовая страница с часами, задачами и ссылками.",["Виджет времени","Быстрые ссылки","Список дел","Смена тем"]],
["Коллекция рецептов","Recipe Book","Другое","Легко",["еда","рецепты","готовка"],"Сохраняй рецепты, ищи по ингредиентам и составляй список покупок.",["Добавление рецептов","Поиск по ингредиентам","Список покупок","Избранное"]],
["Генератор имён для проектов","Project Name Generator","Другое","Легко",["креатив","ai","стартапы"],"Придумывает названия для игр, ботов и стартапов.",["Выбор стиля","Случайные сочетания","Сохранение","Копирование"]]
];
const IDEAS = RAW.map((r, i) => ({ id: i, name: r[0], en: r[1], type: r[2], level: r[3], interests: r[4], description: r[5], features: r[6] }));

const TYPES = ["Веб-сайт","Telegram-бот","AI-проект","Игра","Программа для ПК","Мобильное приложение","Инструмент","Образовательный проект","Другое"];
const LEVELS = [["Легко","Простые проекты для новичков."],["Средне","Больше функций и сложнее логика."],["Сложно","Продвинутые проекты со сложной системой."]];
const KEY_SAVED = "aig_saved", KEY_HISTORY = "aig_history", HISTORY_LIMIT = 20;

// ===== 2. СОСТОЯНИЕ =====
let selectedType = TYPES[0], selectedLevel = LEVELS[0][0], currentIdea = null;
const $ = id => document.getElementById(id);

// ===== 3. localStorage (с защитой от ошибок) =====
function load(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; } }
function store(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { toast("Не удалось сохранить данные"); } }

// ===== 4. НАВИГАЦИЯ без перезагрузки =====
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("active", b.dataset.nav === name));
  if (name === "saved") renderSaved();
  if (name === "history") renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== 5. УВЕДОМЛЕНИЕ =====
let toastTimer;
function toast(text) {
  const t = $("toast"); t.textContent = text; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

// ===== 6. ВЫБОР ПАРАМЕТРОВ =====
function renderOptions() {
  $("typeChips").innerHTML = TYPES.map(t => `<button class="opt ${t === selectedType ? "sel" : ""}" data-type="${t}">${t}</button>`).join("");
  $("levelChips").innerHTML = LEVELS.map(l => `<button class="opt ${l[0] === selectedLevel ? "sel" : ""}" data-level="${l[0]}">${l[0]}<small>${l[1]}</small></button>`).join("");
}

// ===== 7. ПОДБОР ИДЕИ =====
// Считаем, сколько слов интереса совпало с интересами идеи
function interestScore(idea, words) {
  const text = (idea.interests.join(" ") + " " + idea.name + " " + idea.description).toLowerCase();
  return words.filter(w => w.length >= 2 && text.includes(w)).length;
}

function pickIdea() {
  const words = $("interestInput").value.toLowerCase().split(/[,;\s]+/).filter(Boolean);
  // Пробуем всё более широкие фильтры, пока что-то не найдём
  let pool = IDEAS.filter(i => i.type === selectedType && i.level === selectedLevel);
  if (!pool.length) pool = IDEAS.filter(i => i.type === selectedType);
  if (!pool.length) pool = IDEAS.filter(i => i.level === selectedLevel);
  // Если есть интерес — идеи с совпадением идут первыми.
  // Если в точном пуле совпадений нет, ищем среди всех идей нужной сложности.
  if (words.length) {
    let scored = pool.filter(i => interestScore(i, words) > 0);
    if (!scored.length) scored = IDEAS.filter(i => i.level === selectedLevel && interestScore(i, words) > 0);
    if (scored.length) pool = scored;
  }
  // Не повторяем идею подряд и свежие идеи из истории, если есть другие варианты
  const recent = load(KEY_HISTORY).slice(0, 3).map(i => i.id);
  let fresh = pool.filter(i => !recent.includes(i.id) && (!currentIdea || i.id !== currentIdea.id));
  if (!fresh.length) fresh = pool.filter(i => !currentIdea || i.id !== currentIdea.id);
  if (!fresh.length) fresh = pool;
  // Случайная из лучших по баллу
  const best = Math.max(...fresh.map(i => interestScore(i, words)));
  const top = fresh.filter(i => interestScore(i, words) === best);
  return top[Math.floor(Math.random() * top.length)];
}

// ===== 8. ПОКАЗ РЕЗУЛЬТАТА =====
function generate() {
  currentIdea = pickIdea();
  addToHistory(currentIdea);
  showIdea(currentIdea, true);
}

function showIdea(idea, scroll) {
  currentIdea = idea;
  showView("generator");
  $("promptCard").classList.add("hidden");
  const card = $("resultCard");
  card.classList.remove("hidden");
  card.innerHTML = `
    <h2>💡 ${idea.name}</h2>
    <div class="tags"><span class="tag">Тип: ${idea.type}</span><span class="tag">Сложность: ${idea.level}</span></div>
    <p><b>Описание:</b> ${idea.description}</p>
    <p><b>Функции:</b></p><ul>${idea.features.map(f => `<li>${f}</li>`).join("")}</ul>
    <div class="actions">
      <button class="btn" data-act="again">🔄 Другая идея</button>
      <button class="btn primary" data-act="prompt">🚀 Получить промпт</button>
      <button class="btn" data-act="save">${isSaved(idea.id) ? "❤️ Сохранено" : "❤️ Сохранить"}</button>
      <button class="btn" data-act="copyIdea">📋 Скопировать идею</button>
    </div>`;
  if (scroll) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===== 9. ПРОМПТ (на английском) =====
function buildPrompt(idea) {
  const feats = idea.features.map((f, i) => `${i + 1}. ${f}`).join("\n");
  return `You are an expert full-stack developer. Build a fully working, production-quality project (not just a visual mockup) based on the brief below.

## Project Name
${idea.en} (${idea.name})

## Project Goal
Create a complete, usable ${idea.type.toLowerCase()} that solves a real problem for the user. Difficulty level: ${idea.level}.

## Project Description
${idea.description}

## Main Features
(The feature descriptions below are written in Russian; implement each one fully.)
${feats}

## UI Requirements
- Modern, clean dark interface with rounded cards, soft gradients and smooth animations
- Clear visual hierarchy, readable typography, generous spacing
- Hover and focus states on all interactive elements
- Helpful empty states and short notifications for user actions

## Functional Requirements
- Every button, form and control must work; no placeholder or dummy logic
- Validate user input and handle errors gracefully
- Persist user data (e.g. in localStorage) so it survives a page reload
- No errors in the browser console

## Responsive Design Requirements
- Works well on desktop, laptop, tablet and phone
- Mobile-first layout, touch-friendly buttons, no horizontal scrolling

## Suggested Technologies
${suggestTech(idea.type)}

## Instructions for Making the Project Fully Functional
1. Briefly outline the file structure, then provide the complete code for every file.
2. Make sure the project runs immediately after copying the files, with no missing parts.
3. Add short comments explaining the important parts of the code.
4. Explain how to run or deploy the project (for example, free hosting on GitHub Pages where possible).
5. Finally, mentally test the main user flow and fix any bugs before answering.`;
}
function suggestTech(type) {
  const map = {
    "Telegram-бот": "Python with aiogram (or Node.js with grammY), with simple file-based or SQLite storage",
    "Программа для ПК": "Python with Tkinter/PyQt, or Electron with HTML, CSS and JavaScript",
    "Мобильное приложение": "A responsive PWA built with HTML, CSS and vanilla JavaScript (or React Native if preferred)",
    "Игра": "HTML5 Canvas with vanilla JavaScript (or Pygame for desktop)",
    "AI-проект": "HTML, CSS and JavaScript frontend with an optional AI API integration (clearly marked where the API key goes)"
  };
  return map[type] || "HTML, CSS and vanilla JavaScript (no frameworks required), hostable on GitHub Pages";
}

// ===== 10. КОПИРОВАНИЕ =====
async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    // Запасной способ, если Clipboard API недоступен
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (err) { toast("Не удалось скопировать"); ta.remove(); return; }
    ta.remove();
  }
  toast(message);
}

// ===== 11. СОХРАНЁННЫЕ =====
function isSaved(id) { return load(KEY_SAVED).some(i => i.id === id); }
function toggleSave(idea) {
  let saved = load(KEY_SAVED);
  if (saved.some(i => i.id === idea.id)) { toast("Идея уже в сохранённых"); return; }
  saved.unshift(idea); store(KEY_SAVED, saved);
  toast("✓ Идея сохранена!"); showIdea(idea, false);
}
function deleteSaved(id) {
  store(KEY_SAVED, load(KEY_SAVED).filter(i => i.id !== id));
  renderSaved(); toast("Идея удалена");
}

// ===== 12. ИСТОРИЯ (последние 20) =====
function addToHistory(idea) {
  const list = load(KEY_HISTORY).filter(i => i.id !== idea.id);
  list.unshift(idea);
  store(KEY_HISTORY, list.slice(0, HISTORY_LIMIT));
}

// ===== 13. РИСУЕМ СПИСКИ =====
function listCard(idea, withDelete, full) {
  return `<div class="card"><h3 style="color:var(--text);margin-top:0;font-size:1.05rem">${idea.name}</h3>
    <div class="tags"><span class="tag">${idea.type}</span><span class="tag">${idea.level}</span></div>
    ${full ? `<p>${idea.description}</p><ul>${idea.features.map(f => `<li>${f}</li>`).join("")}</ul>` : ""}
    <div class="actions"><button class="btn" data-open="${idea.id}">Открыть</button>
    ${withDelete ? `<button class="btn danger" data-del="${idea.id}">Удалить</button>` : ""}</div></div>`;
}
function renderSaved() {
  const list = load(KEY_SAVED);
  $("savedList").innerHTML = list.length ? list.map(i => listCard(i, true, true)).join("")
    : `<p class="empty">Пока нет сохранённых идей. Найди что-нибудь интересное для создания!</p>`;
}
function renderHistory() {
  const list = load(KEY_HISTORY);
  $("historyList").innerHTML = list.length ? list.map(i => listCard(i, false, false)).join("")
    : `<p class="empty">Здесь появятся твои сгенерированные идеи.</p>`;
}

// ===== 14. СОБЫТИЯ =====
document.addEventListener("click", e => {
  const nav = e.target.closest("[data-nav]");
  if (nav) { e.preventDefault(); showView(nav.dataset.nav); return; }
  const type = e.target.closest("[data-type]");
  if (type) { selectedType = type.dataset.type; renderOptions(); return; }
  const level = e.target.closest("[data-level]");
  if (level) { selectedLevel = level.dataset.level; renderOptions(); return; }
  const open = e.target.closest("[data-open]");
  if (open) { const id = +open.dataset.open; showIdea(IDEAS.find(i => i.id === id), true); return; }
  const del = e.target.closest("[data-del]");
  if (del) { deleteSaved(+del.dataset.del); return; }
  const act = e.target.closest("[data-act]");
  if (!act || !currentIdea) return;
  if (act.dataset.act === "again") generate();
  if (act.dataset.act === "save") toggleSave(currentIdea);
  if (act.dataset.act === "copyIdea")
    copyText(`${currentIdea.name}\n\n${currentIdea.description}\n\nФункции:\n${currentIdea.features.map(f => "- " + f).join("\n")}`, "✓ Идея скопирована!");
  if (act.dataset.act === "prompt") {
    $("promptText").textContent = buildPrompt(currentIdea);
    $("promptCard").classList.remove("hidden");
    $("promptCard").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
$("heroBtn").addEventListener("click", () => showView("generator"));
$("generateBtn").addEventListener("click", generate);
$("interestInput").addEventListener("keydown", e => { if (e.key === "Enter") generate(); });
$("copyPromptBtn").addEventListener("click", () => copyText($("promptText").textContent, "✓ Промпт скопирован!"));

renderOptions();
