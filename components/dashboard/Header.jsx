import { History } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8'>
      <div className='flex gap-3'>
        {/* Recent activities */}
          <button >
            <History className='w-6 h-6'/>
          </button>
        {/* Search */}
          <SearchInput/>
      </div>
    </div>
  )
}
