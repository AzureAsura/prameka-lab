import { MessageCircle } from 'lucide-react'
import React from 'react'

const ContactToast = () => {
    return (
        <button className="fixed bottom-6 right-6 bg-red-700 text-white px-3 py-3 rounded-xl flex items-center gap-2 shadow-2xl hover:bg-[#475569] transition-all z-50">
            <MessageCircle size={20} />
            <span className="text-sm font-bold tracking-wide">Let's Chat!</span>
        </button>
    )
}

export default ContactToast