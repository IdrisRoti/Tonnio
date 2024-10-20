import React from 'react'
import CustomCard from '../custom-components/CustomCard'
import CustomButton from '../custom-components/CustomButton'

export default function NewOrganizationForm() {
  return (
    <CustomCard className="h-[26rem] w-[40rem] mx-auto shadow relative border-color aspect-square rounded-md mt-10">
        <form className=''>
            <header className='border-b-2 border-color py-4 px-6'>
                <h2 className=''>Set up your organization</h2>
            </header>
            <div className='p-6'>
                <h2 className='text-sm'>This is your organization within Tonnio.</h2>
                <p className='text-muted-foreground text-sm'>For example, you can use the name of your company or department.</p>
            </div>
            <footer className='absolute bottom-0 w-full border-t-2 border-color py-3 px-6 flex items-center justify-between'>
                <CustomButton>Cancel</CustomButton>
                <div className='flex items-center gap-2'>
                    <p className='text-xs text-muted-foreground'>You can rename your organization later</p>
                    <CustomButton variant='fill'>Create Organization</CustomButton>
                </div>
            </footer>
        </form>
    </CustomCard>
  )
}
