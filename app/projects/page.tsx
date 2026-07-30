export default function Projects() {
  return (
    <main>
      <div className="page-container">
        <section>
          <h1>My Projects</h1>
          <ul>
            <li>Website PORTOFOLIO mengggunakan css</li>
            <li>Website ktp </li>
            <li>Portfolio pribadi dengan Next.js</li>
            <li>mampu melayani customer </li>
            <li>merespon orang komplain</li>
          </ul>

          <div className="project-list">
            <div className="project-item">
              <img src="/member.PNG" alt="Input Data Member Baru" className="project-image" />
              <p className="project-caption">INPUT DATA MEMBER BARU</p>
            </div>

            <div className="project-item">
              <img src="/fu.PNG" alt="Follow Up Data" className="project-image" />
              <p className="project-caption">FOLLOW UP DATA</p>
            </div>

            <div className="project-item">
              <img src="/save%20kontak.PNG" alt="Save Kontak Data Member" className="project-image" />
              <p className="project-caption">SAVE KONTAK DATA MEMBER</p>
            </div>

            <div className="project-item">
              <img src="/acc%20sosmed.PNG" alt="Acc Sosial Media Seluruhnya" className="project-image" />
              <p className="project-caption">ACC SOSIAL MEDIA SELURUHNYA</p>
            </div>

            <div className="project-item">
              <img src="/misi%20kerjain.PNG" alt="Mengerjakan Tugas Misi" className="project-image" />
              <p className="project-caption">MENGERJAKAN TUGAS MISI</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}