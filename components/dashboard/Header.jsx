import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8">
      <div className="flex gap-3">
        {/* Recent activities */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* Search */}
        <SearchInput />
      </div>
      {/* Right side Icon */}
      <div className="flex item-center gap-3">
        {/* Plus ICON */}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-700 rounded-lg">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="flex  border-r space-x-2  border-gray-300">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="text-slate-900 w-4 h-4" />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        {/*  */}
        <div className="flex gap-6">
        <button className="flex items-center">
          <span>Naeem</span>
          <ChevronDown className="w-6 h-6"/>
          </button>
          <button>
            <img 
            src="/image1.png" 
            alt="user image" 
            width={96} height={96} 
            className="rounded-full w-8 h-8 border border-slate-700"/>
          </button>

          <button>
            <LayoutGrid className="w-6 h-6 text-slate-800"/>
          </button>
      </div>

        {/*  */}

      </div>

      
    </div>
  );
}
