

interface HeaderProps {
  user: string;
}

export default function Header({ user }: HeaderProps) {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const semanas =[
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ]
  const hoje = new Date();

  const dia = hoje.getDate();
  const mes = hoje.getMonth(); 
  const ano = hoje.getFullYear();

  return (
    <header className="flex flex-col">
      <h1 className="font-bold text-4xl">Bom dia, {user}</h1>
      <p className="text-text mt-1">{`${semanas[hoje.getDay()]}, ${dia} de ${meses[mes]} de ${ano}`}</p>
    </header>
  )
}