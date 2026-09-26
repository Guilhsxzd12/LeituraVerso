const books = [
  { title: "A Biblioteca da Meia-Noite", author: "Matt Haig", className: "cover-a" },
  { title: "É Assim que Acaba", author: "Colleen Hoover", className: "cover-b" },
  { title: "Verity", author: "Colleen Hoover", className: "cover-c" },
  { title: "Hábitos Atômicos", author: "James Clear", className: "cover-d" },
  { title: "A Paciente Silenciosa", author: "Alex Michaelides", className: "cover-e" },
  { title: "O Homem Mais Rico da Babilônia", author: "George S. Clason", className: "cover-f" },
  { title: "A Hipótese do Amor", author: "Ali Hazelwood", className: "cover-g" },
];

const categories = ["Romance", "Fantasia", "Suspense", "Ficção", "Biografias", "Desenvolvimento", "Finanças"];

function IconSearch() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/></svg>;
}

function IconArrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>;
}

function BookCard({ book }: { book: (typeof books)[number] }) {
  return (
    <article className="book-card">
      <div className={"book-cover " + book.className}>
        <span className="mini-logo">LV</span>
        <strong>{book.title}</strong>
        <small>{book.author}</small>
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </article>
  );
}

function Shelf({ title, offset = 0 }: { title: string; offset?: number }) {
  const items = [...books.slice(offset), ...books.slice(0, offset)];
  return (
    <section className="shelf">
      <div className="section-heading">
        <div>
          <span>SELEÇÃO LEITURAVERSO</span>
          <h2>{title}</h2>
        </div>
        <a href="#catalogo">Ver todos <IconArrow /></a>
      </div>
      <div className="rail">
        {items.map((book, i) => <BookCard key={title + i} book={book} />)}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <div className="header-wrap">
        <header className="header-capsule">
          <a className="brand" href="#" aria-label="LeituraVerso">
            <img src="/leituraverso-logo.svg" alt="LeituraVerso" />
          </a>

          <nav className="main-nav">
            <button className="nav-pill">Categorias <span>⌄</span></button>
            <a href="#catalogo">Catálogo</a>
          </nav>

          <form className="top-search">
            <IconSearch />
            <input aria-label="Pesquisar" placeholder="Buscar por título, autor ou ISBN..." />
            <button type="submit">Buscar</button>
          </form>

          <div className="header-actions">
            <a href="#pedido" className="request-link">Pedir livro</a>
            <a href="#login" className="login-btn">Entrar</a>
          </div>
        </header>
      </div>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">SUA BIBLIOTECA DIGITAL</span>
          <h1>Milhares de histórias,<br/><em>um só lugar.</em></h1>
          <p>Explore um acervo em constante crescimento e encontre sua próxima leitura em poucos segundos.</p>
          <form className="hero-search">
            <IconSearch />
            <input placeholder="O que você quer ler hoje?" />
            <button type="submit">Pesquisar</button>
          </form>
          <div className="hero-stats">
            <div><strong>10k+</strong><span>e-books</span></div>
            <div><strong>EPUB</strong><span>e PDF</span></div>
            <div><strong>24h</strong><span>acesso online</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="glow glow-one"/>
          <div className="glow glow-two"/>
          <div className="hero-book hero-book-one"><span>LEITURA</span><b>VERSO</b></div>
          <div className="hero-book hero-book-two"><span>DESCUBRA</span><b>NOVOS MUNDOS</b></div>
          <div className="hero-book hero-book-three"><span>SEU</span><b>PRÓXIMO LIVRO</b></div>
        </div>
      </section>

      <section className="category-strip" id="catalogo">
        {categories.map((category, i) => (
          <a className={i === 0 ? "active" : ""} href={"#"+category.toLowerCase()} key={category}>{category}</a>
        ))}
      </section>

      <div className="content-shell">
        <Shelf title="Novidades" />
        <Shelf title="Mais baixados" offset={2} />
        <Shelf title="Romance" offset={1} />
        <Shelf title="Suspense" offset={3} />
      </div>

      <section className="cta-panel" id="pedido">
        <div>
          <span>NÃO ENCONTROU?</span>
          <h2>Peça um livro para o acervo</h2>
          <p>Envie seu pedido e nossa biblioteca continua crescendo com você.</p>
        </div>
        <a href="#">Fazer pedido <IconArrow /></a>
      </section>

      <footer className="footer">
        <img src="/leituraverso-logo.svg" alt="LeituraVerso" />
        <p>Seu universo de leitura, sempre por perto.</p>
        <div className="footer-links">
          <a href="#">Sobre</a><a href="#">Ajuda</a><a href="#">Privacidade</a><a href="#">Termos</a>
        </div>
      </footer>
    </main>
  );
}
