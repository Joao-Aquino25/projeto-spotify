document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique & Juliano', image: 'assets/img/artista-henrique-juliano.jpg' },
    { name: 'Jorge & Mateus', image: 'assets/img/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', image: 'assets/img/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', image: 'assets/img/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', image: 'assets/img/artista-luan-santana.jpg' },
    { name: 'Matheus & Kauan', image: 'assets/img/artista-mateus-kauan.jpg' }
  ];



  const albumsData = [
    { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'assets/img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: 'assets/img/album-ceu-explica.jpg' },
    { name: 'Nada Como um Dia Após o Outro Dia, Vol.1&2', artist: 'Racionais', image: 'assets/img/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'assets/img/album-hit-me.jpg' },
    { name: 'CAJU', artist: 'Linker', image: 'assets/img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: 'assets/img/album-escandalo.jpg' }
  ];


  const artistsGrid = document.querySelector('.artists-grid')
  const albumsGrid = document.querySelector('.albums-grid')

  artistsData.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="imagem do ${artist.name}">
      <div>
        <h3>${artist.name}</h3 >
        <p>artista</p>
      </div>
      `

    artistsGrid.appendChild(artistCard)
  })

  albumsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
      <img src="${album.image}" alt="imagem do ${album.name}">
      <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      </div>
      `

    albumsGrid.appendChild(albumCard)
  })
})



