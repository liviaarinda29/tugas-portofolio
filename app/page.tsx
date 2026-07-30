export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Biodata */}
        <div className="biodata">
          <h1>Halooo semuaa👋, kenalin aku</h1>
          <h2>Livia Arinda</h2>
          <p>
            <strong>Kelas:</strong> XII RPL B
          </p>
          <p>
            <strong>Absen:</strong> 15
          </p>
          <p>
            <strong>Hobi:</strong> Melukis 🎨,Menggambar,Mendengarkan musik 
          </p>
        </div>

        {/* Foto Profil */}
        <div>
          <img src="/foto1.jpeg" alt="Foto Profil" className="profile-pic" />
        </div>
      </div>
    </main>
  );
}
