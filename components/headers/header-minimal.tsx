import Link from 'next/link'

export default function HeaderMinimal() {
  return (
    <header className='border-b py-4'>
      <div className='container'>
        <div className='flex items-center justify-center'>
          <Link href='/' className='text-lg font-bold'>
            My Site
          </Link>
        </div>
      </div>
    </header>
  )
}

