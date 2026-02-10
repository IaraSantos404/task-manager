import { useNavigate } from "react-router-dom";

type Props = {
  active: string
}

export default function Head({ active }: Props) {
  const navigate = useNavigate();
  const css = 'bg-primary text-white glow-primary';
  return (
    <>
      <section className="flex bg-secondary rounded-xl border-primary border">
        <p
          className={`rounded-[9px] flex justify-center text-center px-5 py-1 ml-0.75 my-0.75 cursor-pointer
          ${active === 'login' ? css : 'text-gray-400'}`}
          onClick={() => navigate('/login')}>
          Login
        </p>
        <p className={`rounded-[9px] flex justify-center text-center px-5 py-1 mr-0.75 my-0.75 cursor-pointer
          ${active === 'signup' ? css : 'text-gray-400'}`}
          onClick={() => navigate('/cadastro')}>
          Cadastro
        </p>
      </section>
    </>
  )
}