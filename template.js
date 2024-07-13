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
  const allContents = document.querySelectorAll(".main > div");
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
