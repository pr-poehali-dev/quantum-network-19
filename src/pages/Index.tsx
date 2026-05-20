export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">МЯСО*МАНИЯ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Акции</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              МЯСО —
              <br />
              ЭТО <span>РЕЛИГИЯ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Стейки, рёбра и бургеры в духе брутальных 70-х. Только огонь, только мраморная говядина, только настоящий вкус.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="https://cdn.poehali.dev/projects/ec1c12ed-7074-468d-a56f-a970a5fb5642/files/36a2ef6d-0d7d-4283-9063-4991981ed93f.jpg"
              alt="Стейк Мясомания"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
            />
            <div className="sticker">
              СОЧНО
              <br />
              КАЖДЫЙ РАЗ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #МЯСОМАНИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СТЕЙКИ КОТОРЫЕ РВУТ * МРАМОРНАЯ ГОВЯДИНА * ТОЛЬКО ОГОНЬ * ОТКРЫТЫ ДО 2:00 * ЛУЧШЕЕ МЯСО В ГОРОДЕ *
            СТЕЙКИ КОТОРЫЕ РВУТ * МРАМОРНАЯ ГОВЯДИНА * ТОЛЬКО ОГОНЬ * ОТКРЫТЫ ДО 2:00 * ЛУЧШЕЕ МЯСО В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Рибай на кости"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Рибай на кости</h3>
                  <span className="price">2 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Мраморная говядина Prime, угольный гриль, масло с травами и розмарином. 400г чистого удовольствия.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Мастхэв
              </span>
              <img
                src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Рёбра BBQ"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Рёбра BBQ</h3>
                  <span className="price">2 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Свиные рёбра 12 часов в маринаде, фирменный BBQ-соус, копчёный картофель.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Брутал
              </span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Смэш-бургер Мания"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Смэш-бургер «Мания»</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойной смэш из говяжьей грудинки, карамелизированный лук, соус «Мания» на бриоши.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЯСО — ЭТО СЕРЬЁЗНО.</h2>
            <p className="vibe-text">
              Мы не просто жарим мясо — мы создаём культ. От угольного гриля до чугунных сковородок в стиле 70-х — каждый кусок
              готовится с уважением. Никаких компромиссов, только лучшее сырьё и огонь.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @МЯСОМАНИЯ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стейк на гриле"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Рёбра BBQ"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Мясо на углях"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Бургер Мания"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">МЯСО*МАНИЯ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Культовое мясное место в духе 70-х. Угольный гриль, мраморная говядина и атмосфера, которую не забудешь.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Акции
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 12:00 - 23:00</li>
            <li>Пт-Сб: 12:00 - 02:00</li>
            <li>Вс: 12:00 - 22:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 МЯСОМАНИЯ</span>
          <span>ВКУС БЕЗ КОМПРОМИССОВ</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
