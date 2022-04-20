import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { classNames } from '../../utils'


export default function DropdownFilter({filterOptions, handleFilterOptionClick}) {

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="h-10 inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                {filterOptions.find(option => option.isActive).ticker}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    { filterOptions.map((option, idx) => (
                        <Menu.Item key={idx}>
                            <button href="#"
                                className={classNames(
                                    option.isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'flex justify-between block px-4 py-2 text-sm w-full'
                                )}
                                onClick={() => handleFilterOptionClick(option.ticker)}
                            >
                                <span>{ option.name }</span>
                                <span className="text-sm text-gray-500">{ option.ticker }</span>
                            </button>
                        </Menu.Item>
                    ) ) }
                </Menu.Items>
            </Transition>
        </Menu>
    )
}