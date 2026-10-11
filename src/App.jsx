import './App.css';

function App() {
  return (
    <div className="layout-wrapper">
      <div className="cv-card">
        
        {/* Левая колонка (Сайдбар с контактами, навыками и языками) */}
        <aside className="cv-sidebar">
          <div className="avatar-circle">АА</div>
          
          <div className="sidebar-section">
            <h3>Контакты</h3>
            <p><strong>Локация:</strong> Бишкек / Ош</p>
            <p><strong>Email:</strong> aymeerim.ad@gmail.com</p>
            <p><strong>GitHub:</strong> github.com/aymeerim</p>
            <p><strong>Telegram:</strong> @aymeerim_ad</p>
          </div>

          <div className="sidebar-section">
            <h3>Hard Skills</h3>
            <div className="tags-container">
              <span className="tag">HTML5 / CSS3</span>
              <span className="tag">JavaScript (ES6+)</span>
              <span className="tag">React</span>
              <span className="tag">Figma</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Git & GitHub</span>
              <span className="tag">UI/UX Прототипирование</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Языки</h3>
            <ul className="lang-list">
              <li>Кыргызский — родной</li>
              <li>Русский — свободный</li>
              <li>Английский — B2 (Upper-Intermediate)</li>
              <li>Немецкий — A2 (в процессе)</li>
            </ul>
          </div>
        </aside>

        {/* Правая колонка (Основной контент) */}
        <main className="cv-main">
          <header className="main-header">
            <h1>Адилбекова Аймээрим</h1>
            <p className="role-title">Frontend Developer | UI/UX Designer (19 лет)</p>
          </header>

          <section className="main-section">
            <h2>О себе</h2>
            <p className="summary-text">
              Студентка 2 курса КГИПИ по направлению «Веб-технологии». Увлекаюсь созданием 
              интуитивно понятных, адаптивных веб-интерфейсов и внимательна к деталям визуального дизайна. 
              Люблю объединять чистый код на React с эстетичным дизайном из Figma.
            </p>
          </section>

          <section className="main-section">
            <h2>Проекты</h2>
            
            <div className="project-card">
              <div className="project-header">
                <h3>EcoBishkek — Сервис эко-инициатив</h3>
                <span className="project-badge">React, Tailwind</span>
              </div>
              <p>
                Веб-приложение с интерактивной картой точек сбора вторсырья в Бишкеке. 
                Реализован удобный поиск, фильтрация по категориям и адаптивный дизайн.
              </p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>StudyTracker — Студенческий планировщик</h3>
                <span className="project-badge">JavaScript, LocalStorage</span>
              </div>
              <p>
                Канбан-доска для управления дедлайнами и учебными заданиями семестра с автосохранением прогресса.
              </p>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Редизайн арт-галереи</h3>
                <span className="project-badge">Figma, UI/UX</span>
              </div>
              <p>
                Полная разработка дизайн-системы, прототипа мобильной и десктопной версий для виртуальной галереи искусств.
              </p>
            </div>
          </section>

          <section className="main-section">
            <h2>Образование</h2>
            <div className="education-block">
              <h3>Кыргызско-Германский институт прикладной информатики (КГИПИ)</h3>
              <p className="edu-dates">2024 — 2028 (2 курс)</p>
              <p>Бакалавриат, направление «Веб-технологии»</p>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}

export default App;