const ticketsAbertosResolvidosMensal = document.getElementById(
  "ticketsAbertosResolvidosMensal"
);
const ticketsDentroForaPrazoPrimeiraResposta = document.getElementById(
  "ticketsDentroForaPrazoPrimeiraResposta"
);

const ticketsResolvidosDentroForaPrazo = document.getElementById(
  "ticketsResolvidosDentroForaPrazo"
);

const ticketsAbertosPorEmpres = document.getElementById('ticketsAbertosPorEmpres');

new Chart(ticketsDentroForaPrazoPrimeiraResposta, {
  type: "pie",
  data: {
    labels: ["Dentro do Prazo", "Fora do Prazo"],
    datasets: [
      {
        data: [140, 10],
        backgroundColor: [
          "#111d41",
          "#1d3272"
        ],
      },
    ],
  },
  options: {
    layout: {

    },
  },
});

new Chart(ticketsResolvidosDentroForaPrazo, {
  type: "pie",
  data: {
    labels: ["Dentro do Prazo", "Fora do Prazo"],
    datasets: [
      {
        data: [120, 40],
        backgroundColor: [
          "#111d41",
          "#1d3272"
        ],
      },
    ],
  },
  options: {
    layout: {

    },
  },
});


new Chart(ticketsAbertosPorEmpres, {
  type: 'bar',
  data: {
    labels: ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D', 'Empresa E'],
    datasets: [{
      label: 'Tickets',
      data: [120, 95, 80, 60, 40],
      backgroundColor: '#111d41',
      borderColor: '#111d41',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // barra horizontal
    layout: {
    },
  }
});


new Chart(ticketsAbertosResolvidosMensal, {
  data: {
    datasets: [
      {
        type: "line",
        label: "Tickets Abertos",
        data: [80, 120, 95, 160, 140, 180, 110, 150, 130, 170, 90, 100, 110],
        borderColor: "#111d41",
      },
      {
        type: "line",
        label: "Tickets Resolvidos",
        data: [70, 100, 115, 140, 155, 175, 120, 160, 140, 165, 100, 110, 120],
        borderColor: "#4d6ed1",
      },
    ],
    labels: [
      "Outubro/24",
      "Novembro/24",
      "Dezembro/24",
      "Janeiro/25 ",
      "Fevereiro/25",
      "Marco/25",
      "Abril/25",
      "Maio/25",
      "Junho/25",
      "Julho/25",
      "Agosto/25",
      "Setembro/25",
      "Outubro/25",
    ],
  },
  options: {
    layout: {
    },
  },
});
