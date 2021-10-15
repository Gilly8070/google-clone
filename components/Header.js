import Image from "next/image";
import logo from '../components/images/google.jpg';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from '../components/Avatar'
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
    e.preventDefault();
        const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className="flex w-full p-4 items-center">
            <Image
                src={logo}
                height={60}
                width={90}
                className='cursor-pointer'
                onClick={() => router.push('/')}
            />
            <form action="" className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input type="text" defaultValue={router.query.term} ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
                    <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-125'
                        onClick={() => (searchInputRef.current.value = '')}
                    />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
                    />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'
                    />
                    <button type='submit' hidden onClick={search}>Submit</button>
                </form>
            <Avatar className='ml-auto' url='https://coaching.papareact.com/ai9' />
            </div>
            
            <HeaderOptions />
        </header>
    )
}

export default Header;
