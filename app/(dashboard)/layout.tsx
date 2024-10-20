import Sidebar from '@/components/sidebar/Sidebar'

export default function DashboardLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='bg-background min-h-screen flex w-screen'>
      <Sidebar />
      <main className='w-full h-screen overflow-y-auto'>{children}</main>
    </div>
  )
}
