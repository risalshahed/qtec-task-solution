import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='bg-gray-100 py-3 flex justify-center items-center gap-x-5'>
      <img src={logo} alt="logo" />
      <h1 className='font-bold text-3xl'>Technology to Learn & Grow as Front-End Developer</h1>
    </header>
  )
}
