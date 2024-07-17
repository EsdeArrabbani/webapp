document.addEventListener('DOMContentLoaded', function() {
    const pencarianSpp = document.getElementById('search-spp');
    const listSpp = document.querySelectorAll('#pencarian-spp .data-siswa');
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'Data tidak ditemukan';
    noResultsMessage.style.display = 'none';
    noResultsMessage.classList.add('p-1');

    const searchContainer = document.getElementById('pencarian-spp');
    searchContainer.appendChild(noResultsMessage);

    pencarianSpp.addEventListener('input', function() {
      const searchTerm = pencarianSpp.value.toLowerCase();
      let foundSpp = false;

      listSpp.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          item.style.display = 'flex';
          foundSpp = true;
        } else {
          item.style.display = 'none';
        }
      });

      if(foundSpp){
        noResultsMessage.style.display = "none";
      } else {
        noResultsMessage.style.display = "block";
      }

    });


const topBar = document.querySelector(".top-bar");
// Buat event listener untuk mendengarkan peristiwa scroll
window.addEventListener("scroll", function () {
  // Periksa posisi scroll
  if (window.scrollY > 0) {
    // Jika .main digeser (scroll), tambahkan kelas .scroll ke .top-bar
    topBar.classList.add("scroll");
  } else {
    // Jika tidak, hapus kelas .scroll dari .top-bar
    topBar.classList.remove("scroll");
  }
});

// Ambil semua nav-base
const navBases = document.querySelectorAll(".nav-base");

// Tambahkan event listener untuk setiap nav-base
navBases.forEach(function (navBase) {
  navBase.addEventListener("click", function () {
    // Hapus kelas active dari semua nav-base
    navBases.forEach(function (item) {
      item.classList.remove("active");
    });
    // Tambahkan kelas active pada nav-base yang diklik
    navBase.classList.add("active");

    // Tampilkan konten yang sesuai dengan nav-base yang diklik
    showContent(navBase.id);
  });
});

// Fungsi untuk menampilkan konten yang sesuai dengan id
function showContent(id) {
  // Semua konten di div .main diubah menjadi display: none; terlebih dahulu
  const allContents = document.querySelectorAll(".main-page > div");
  allContents.forEach(function (content) {
    content.style.display = "none";
  });

  // Kemudian konten yang sesuai ditampilkan
  const contentElement = document.getElementById("content-" + id);
  contentElement.style.display = "block";
}
const menu = document.getElementById("menu-bar");
const nav = document.querySelector(".navbar");
const main = document.querySelector(".main");
menu.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
});
});
