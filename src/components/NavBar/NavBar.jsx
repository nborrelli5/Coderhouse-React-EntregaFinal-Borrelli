import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {ArrowPathIcon,Bars3Icon,ChartPieIcon,CursorArrowRaysIcon,FingerPrintIcon,SquaresPlusIcon,XMarkIcon,} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Favs from '../Favs/Favs'
import {Link, NavLink } from 'react-router-dom'


const products = [
{ name: 'DC',category:'DC', icon: ChartPieIcon },
{ name: 'Marvel',category:'Marvel', icon: ChartPieIcon },
{ name: 'Videjojuegos',category:'Videojuegos', icon: ChartPieIcon }
// { name: 'Destacados',category:'DC', icon: ChartPieIcon },
// { name: 'Figuras Coleccionables' ,category:'Marvel', icon: CursorArrowRaysIcon },
// { name: 'Miniaturas' ,category:'DC', icon: FingerPrintIcon },
// { name: 'Bustos' ,category:'DC', icon: SquaresPlusIcon },
// { name: 'Dioramas y escenografías' ,category:'DC', icon: ArrowPathIcon },
// { name: 'Juegos y Juguetes' ,category:'DC', icon: ArrowPathIcon },
// { name: 'Cosplay y Utilería' ,category:'DC', icon: ArrowPathIcon },
// { name: 'Decoración para el hogar' ,category:'DC', icon: ArrowPathIcon },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
    <header className="bg-neutral-800">
        <nav className="mx-auto flex max-w-9xl items-center justify-between h-18 p-6 lg:px-8" aria-label="Global">
            <div className="flex">
                <NavLink to={`/`} className="flex items-center -m-1.5 p-1.5">
                    <span className="sr-only"> CAPYBARA</span>
                    <p className="text-purple-500 font-bold text-4xl mx-1">CAPYBARA</p>
                    <img className="h-16 w-auto" src="../assets/img/Carpincho2.png" alt="capybara logo" />
                </NavLink>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Popover.Group className="hidden m-3 p-2 lg:flex lg:gap-x-6 items-center text-xl font-semibold leading-6 text-white">
                <NavLink to={`/`} className="nav-hover active:text-black">
                    Home
                </NavLink>
                <Popover className="relative">

                    <Popover.Button className="flex items-center gap-x-1 nav-hover active:text-black">
                    Categorías
                    <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-max max-w-md overflow-hidden rounded-2xl bg-neutral-800 shadow-lg ring-1 ring-violet-500">
                            <div className="p-4">
                            {products.map((item) => (
                                <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-violet-500"
                                >
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-80">
                                    <item.icon className="h-6 w-6 text-white group-hover:text-white" aria-hidden="true" />
                                </div>
                                <div className="flex-auto">
                                    <NavLink to={`/category/`+item.category} className="block text-xl font-semibold text-white">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                    </NavLink>
                                    {/* <a href={item.href} className="block text-xl font-semibold text-white">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                    </a> */}
                                </div>
                                </div>
                            ))}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <NavLink to={`Nuestros-Trabajos`} className="nav-hover active:text-black">
                    Nuestros Trabajos
                </NavLink>
                <NavLink to={`Descubrir`} className="nav-hover active:text-black">
                    Descubrir
                </NavLink>
                <NavLink to={`Contacto`} className="nav-hover active:text-black">
                    Contacto
                </NavLink>
            </Popover.Group>
            <div className='flex items-center'>
                <div className="hidden lg:flex lg:justify-end mx-2">
                    <Favs/>
                </div>
                <div className='flex mx-2'>
                    <CartWidget/>
                </div>
                <div className="hidden lg:flex lg:justify-end items-center ml-4">
                    <span className="sr-only">Open user menu</span>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Capybara
                    </a>
                        <img
                        className="h-10 w-10 ml-3 rounded-full border-purple-500 border-2"
                        src="./assets/img/Carpincho2.png"
                        alt=""
                        />
                </div>
            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-14 w-auto"
                    src="./assets/img/Carpincho2.png"
                    alt=""
                />
                </a>
                <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y white">
                <div className="space-y-2 py-6 text-white">

                    <NavLink to={`/`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-violet-500 hover:text-white"
                    >
                    Home
                    </NavLink>
                    <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  hover:bg-violet-500 hover:text-white">
                            Categorias
                            <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                            />
                        </Disclosure.Button>
                        </>
                    )}
                    </Disclosure>
                    
                    < NavLink to={`Nuestros-Trabajos`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-violet-500 hover:text-white"
                    >
                    Nuestros Trabajos
                    </NavLink>
                    < NavLink to={`Descubrir`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-violet-500 hover:text-white"
                    >
                    Descubrir
                    </NavLink>
                    <NavLink to={`Contacto`}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-violet-500 hover:text-white"
                    >
                    Contacto
                    </NavLink>
                </div>
                <div className="py-6 text-white">
                    <NavLink to={`Log-In`}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-violet-500 hover:text-white"
                    >
                    Log in
                    </NavLink>
                </div>
                </div>
            </div>
            </Dialog.Panel>
        </Dialog>
    </header>
    )
}
