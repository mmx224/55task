import './App.css';

function App() {
  return (
    <div className="resume-wrapper">
      <div className="resume-card">
        
        <header className="header">
          <h1>Темирлан Ибраимов</h1>
          <p className="subtitle">Web-разработчик | 19 лет</p>
        </header>

        <main className="content">
          <section className="section">
            <h2>Обо мне</h2>
            <p>
              Студент 2 курса КГИПИ, направление «Веб-технологии». Увлекаюсь созданием 
              веб-приложений, от верстки интерфейсов до проектирования баз данных. 
              Родом из Оша, в данный момент живу и учусь в Бишкеке. Открыт к новым знаниям и командной работе.
            </p>
          </section>

          <section className="section">
            <h2>Технические навыки</h2>
            <ul className="skills-list">
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, основы React</li>
              <li><strong>Backend & БД:</strong> Python, Django, Flask, PostgreSQL, MS Access</li>
              <li><strong>Проектирование и сети:</strong> UML (Component/Use Case), Chen ER, Cisco Packet Tracer</li>
              <li><strong>Языки:</strong> Кыргызский (родной), Немецкий (уровень A2), Английский (уровень B1)</li>
            </ul>
          </section>

          <section className="section">
            <h2>Опыт и Проекты</h2>
            <div className="item">
              <h3>Система бронирования «MoodFood»</h3>
              <p>Разработка структуры и веб-дизайна для сервиса онлайн-резервации столиков в ресторане.</p>
            </div>
            <div className="item">
              <h3>Генератор QR-кодов</h3>
              <p>Веб-приложение на Python (Flask) с интеграцией базы данных PostgreSQL и возможностью экспорта в PDF/SVG.</p>
            </div>
            <div className="item">
              <h3>Многоагентная симуляция путей поездов</h3>
              <p>Учебный проект с использованием Java и связкой HTML/CSS/JS для визуализации логики движения.</p>
            </div>
            <div className="item">
              <h3>Курьер — Яндекс</h3>
              <p>Частичная занятость в свободное от учебы время. Развитие навыков ответственности и тайм-менеджмента.</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;