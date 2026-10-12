import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="bento-grid">
        
        {/* Карточка 1: Шапка / Приветствие */}
        <header className="card hero-card">
          <div className="status-badge">
            <span className="status-dot"></span> Открыта к стажировкам и проектам
          </div>
          <h1>Тургунбаева Айбакыт</h1>
          <p className="hero-subtitle">
            Junior Fullstack Developer | 19 лет
          </p>
          <p className="hero-desc">
            Студентка 2 курса КГИПИ направления «Веб-технологии». Увлекаюсь созданием 
            клиент-серверных приложений, проектированием баз данных и написанием чистого, поддерживаемого кода.
          </p>
        </header>

        {/* Карточка 2: Контакты и локация */}
        <section className="card contact-card">
          <h2 className="card-title">Контакты</h2>
          <ul className="info-list">
            <li>
              <span className="label">Локация</span>
              <span className="value">Бишкек / Ош</span>
            </li>
            <li>
              <span className="label">Email</span>
              <span className="value">aibakyt.t@gmail.com</span>
            </li>
            <li>
              <span className="label">Telegram</span>
              <span className="value">@aibakyt_t</span>
            </li>
            <li>
              <span className="label">GitHub</span>
              <span className="value">github.com/aibakyt</span>
            </li>
          </ul>
        </section>

        {/* Карточка 3: Технологический стек */}
        <section className="card skills-card">
          <h2 className="card-title">Стек технологий</h2>
          <div className="skill-groups">
            <div>
              <span className="skill-cat">Frontend:</span>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">JavaScript (ES6+)</span>
                <span className="chip">HTML5 / SCSS</span>
                <span className="chip">Bootstrap</span>
              </div>
            </div>
            <div>
              <span className="skill-cat">Backend & Базы данных:</span>
              <div className="chips">
                <span className="chip">Python</span>
                <span className="chip">Django REST</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">SQLite</span>
              </div>
            </div>
            <div>
              <span className="skill-cat">Инструменты:</span>
              <div className="chips">
                <span className="chip">Git / GitHub</span>
                <span className="chip">Postman</span>
                <span className="chip">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Карточка 4: Проекты */}
        <section className="card projects-card">
          <h2 className="card-title">Учебные и практические проекты</h2>
          
          <div className="project-item">
            <div className="project-top">
              <h3>UniPortal — Студенческий портал расписания</h3>
              <span className="tech-tag">React + Django REST</span>
            </div>
            <p>
              Сервис интерактивного расписания занятий, отслеживания дедлайнов и учета посещаемости 
              для студенческих групп КГИПИ.
            </p>
          </div>

          <div className="project-item">
            <div className="project-top">
              <h3>LibraryHub — Каталог книжного фонда</h3>
              <span className="tech-tag">Python + PostgreSQL</span>
            </div>
            <p>
              CRUD-приложение для учета литературы, бронирования учебных пособий и управления читательскими билетами.
            </p>
          </div>

          <div className="project-item">
            <div className="project-top">
              <h3>EventSpace — Бронирование рабочих мест</h3>
              <span className="tech-tag">React + LocalStorage</span>
            </div>
            <p>
              Адаптивный интерфейс для резервации зон коворкинга с фильтрацией по времени и удобствам.
            </p>
          </div>
        </section>

        {/* Карточка 5: Образование */}
        <section className="card education-card">
          <h2 className="card-title">Образование</h2>
          <div className="edu-info">
            <p className="edu-name">Кыргызско-Германский институт прикладной информатики (КГИПИ)</p>
            <p className="edu-meta">2024 — 2028 | Бакалавриат, 2 курс</p>
            <p className="edu-spec">Профиль: «Веб-технологии»</p>
          </div>
        </section>

        {/* Карточка 6: Языковые навыки */}
        <section className="card languages-card">
          <h2 className="card-title">Языки</h2>
          <div className="languages-grid">
            <div className="lang-box">
              <span className="lang-name">Кыргызский</span>
              <span className="lang-level">Родной</span>
            </div>
            <div className="lang-box">
              <span className="lang-name">Русский</span>
              <span className="lang-level">Свободный</span>
            </div>
            <div className="lang-box">
              <span className="lang-name">Немецкий</span>
              <span className="lang-level">B1 (КГИПИ)</span>
            </div>
            <div className="lang-box">
              <span className="lang-name">Английский</span>
              <span className="lang-level">B1 (Intermediate)</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;