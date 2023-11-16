import Sidebar from '@/components/Sidebar'
import Mood from '@/components/Mood'
import Modal from '@/components/Modal'

export default function Home() {
  return (
    <div className='flex h-screen w-screen max-h-screen max-w-screen bg-lavender-100 relative pb-2 pl-2 pt-2 overflow-hidden'>
      <Modal />
      <Mood />
      <Sidebar />
    </div>
  )
}
