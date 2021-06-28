import { useState } from 'react'
import { SearchIcon, MenuAlt3Icon } from '@heroicons/react/solid'
import { ShoppingBagIcon } from '@heroicons/react/outline'

function NavBar() {
    const [toggleSearch, setToggleSearch] = useState(false)

    const search = () => {
        setToggleSearch((toggleSearch = !toggleSearch))
    }
    return (
        <div>
            <div className='flex items-center justify-between text-gray-600'>
                <div>
                    <a href='#' onClick={() => setToggleSearch(!toggleSearch)}>
                        <SearchIcon className='h-7' />
                    </a>
                </div>
                <div>
                    <h1 className='brand text-xl text-[#D90429]'>
                        Fashion Alley
                    </h1>
                </div>

                <div className='flex'>
                    <div>
                        <ShoppingBagIcon className='h-7 mr-2' />
                    </div>

                    <div>
                        <MenuAlt3Icon className='h-7' />
                    </div>
                </div>
            </div>

            <div className={toggleSearch ? 'block' : 'hidden'}>
                <input
                    className='bg-gray-100 w-full rounded-lg p-1 px-2 mt-4'
                    type='text'
                    placeholder='search clothes, brands....'
                    highlight='false'
                />
            </div>
        </div>
    )
}

export default NavBar
