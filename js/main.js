/* start humburger */
const toggler = document.querySelector(".btn");
const btnMenu = document.getElementById("addMargin");
const lebarLayar = window.innerWidth;

toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
  const runtuh = document
    .querySelector("#sidebar")
    .classList.contains("collapsed");

  if (lebarLayar <= 320 && runtuh == true) {
    btnMenu.style.left = "0";
    btnMenu.style.width = "100%";
  } else if (lebarLayar <= 320 && runtuh == false) {
    btnMenu.style.left = "250px";
    btnMenu.style.width = "calc(100% - 250px)";
  } else {
    return;
  }
});
/* end humburger */

/* start chart */
const cMasuk = document.getElementById("chartMasuk");
const cKeluar = document.getElementById("chartKeluar");
new Chart(cMasuk, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Pemasukan",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        color: "#007bff",
        borderColor: "#28a745",
        backgroundColor: "#28a745",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  },
});

new Chart(cKeluar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Pengeluaran",
        data: [3, 5, 7, 15, 2, 3],
        borderWidth: 1,
        borderColor: "#dc3545",
        backgroundColor: "#dc3545",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "red",
      },
    },
  },
});
/* end chart */

const dboardButton = document.getElementById("dboardButton");
const transButton = document.getElementById("transButton");

const dboardPage = document.getElementById("dboardPage");
const transPage = document.getElementById("transPage");

/* Default */
dboardButton.classList.add("thisSelected");

function openDBoard() {
  dboardPage.style.display = "block";
  transPage.style.display = "none";

  dboardButton.classList.add("thisSelected");
  transButton.classList.remove("thisSelected");
}

function openTrans() {
  dboardPage.style.display = "none";
  transPage.style.display = "block";

  dboardButton.classList.remove("thisSelected");
  transButton.classList.add("thisSelected");
}

//Routing
document.getElementById("logout").addEventListener("click", function () {
  window.location.replace("login.html");
});
