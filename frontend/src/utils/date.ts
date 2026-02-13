
  export default function formatDate(date: Date) {
    const meses = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ]

    const today = new Date();

    const dia = date.getDate();
    const mes = date.getMonth(); 

    const resul = `${dia +1} de ${meses[mes]}`;
    const resulToday = `${today.getDate()} de ${meses[today.getMonth()]}`;

    return resul === resulToday ? "Hoje" : resul
  }