
const Home = () => {
  return (
    <>
     <div className="app-container">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <section className="hero-section">
            <h1>Welcome to NoteVault</h1>
            <p>Your notes, secure and organized.</p>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}

export default Home