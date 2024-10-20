import CustomButton from '@/components/custom-components/CustomButton'
import CustomCard from '@/components/custom-components/CustomCard'
import React from 'react'

export default function NewOrganization() {
  return (
    <form className='h-screen grid place-items-center'>
      <CustomCard className="h-[30rem] w-[40rem] relative border-color aspect-square rounded-md">
        <header className='border-b-2 border-color py-4 px-6'>
          <h2 className=''>Create a new organization</h2>
        </header>
        <footer className='absolute bottom-0 w-full border-t-2 border-color py-4 px-6 flex items-center justify-between'>
          <CustomButton>
            Cancel
          </CustomButton>
          <div className='flex items-center gap-2'>
            <p className='text-xs text-muted-foreground'>You can rename your organization later</p>
            <CustomButton variant='fill'>Create Organization</CustomButton>
          </div>
        </footer>
      </CustomCard>
    </form>
  )
}
