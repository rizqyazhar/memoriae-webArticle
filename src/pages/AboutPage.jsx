const AboutPage = () => {
  return (
    <div className='min-h-dvh px-3 pt-10 bg-slate-100 font-inter flex flex-col'>
      <div className='flex flex-col gap-2 border-b border-b-slate-700 py-5'>
        <h2 className='text-xl font-medium'>Selamat datang di website kami!</h2>
        <p className='text-sm text-slate-800'>
          Website ini merupakan proyek tugas kelompok mata kuliah sejarah, yang
          dibuat oleh kami, tujuh siswa yang memiliki minat besar terhadap
          sejarah. Melalui website ini, kami ingin menyajikan artikel-artikel
          sejarah yang informatif, akurat, dan menarik, agar generasi muda lebih
          memahami dan menghargai perjalanan masa lalu yang membentuk dunia
          seperti sekarang.
        </p>
      </div>
      <div className='flex flex-col gap-2 border-b border-b-slate-700 py-5'>
        <h2 className='text-xl font-medium'>Tujuan Kami</h2>
        <p className='text-sm text-slate-800'>
          Tujuan utama kami adalah menyediakan sumber bacaan sejarah yang mudah
          dipahami dan relevan, baik untuk pelajar maupun masyarakat umum. Kami
          berusaha menyampaikan informasi sejarah dari berbagai periode dan
          tempat, mulai dari sejarah Indonesia, sejarah dunia, hingga
          tokoh-tokoh penting yang berpengaruh.
        </p>
      </div>
      <div className='flex flex-col gap-2 border-b border-b-slate-700 py-5'>
        <h2 className='text-xl font-medium'>Apa yang Kami Tawarkan:</h2>
        <ul className='pl-4 list-disc list-outside text-sm text-slate-800'>
          <li>Artikel sejarah berdasarkan penelitian dan sumber terpercaya</li>
          <li>Konten yang disajikan dengan bahasa yang jelas dan ringan</li>
          <li>Visual pendukung seperti gambar, peta, dan infografis</li>
          <li>Perspektif beragam dari berbagai peristiwa sejarah</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2 py-5'>
        <h2 className='text-xl font-medium'>Anggota Kelompok Kami:</h2>
        <ul className='pl-4 list-disc list-outside text-sm text-slate-800'>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
          <li>John Doe</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
