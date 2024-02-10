import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className='fixed top-0 w-full bg-opacity-50 bg-gray-100 py-3 flex flex-col sm:flex-row justify-center items-center gap-x-5'>
      <img src={logo} alt="logo" />
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl px-2 sm:px-0 text-center'>Technology to Learn & Grow as Front-End Developer</h1>
    </header>
  )
}