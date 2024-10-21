"use client"

import CustomCard from '../custom-components/custom-card'
import CustomButton from '../custom-components/custom-button'
import CustomForm from '../custom-components/custom-form'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

const selectOptions = [
    {
        label: "Personal",
        value: "personal"
    },
    {
        label: "Education",
        value: "education"
    },
    {
        label: "Startup",
        value: "startup"
    },
    {
        label: "Agency",
        value: "agency"
    },
    {
        label: "Company",
        value: "company"
    },
]

export default function NewOrganizationForm() {
    const newOrgSchema = z.object({
        organizationName: z.string().min(2, "Minimum of 2 characters"),
        organizationType: z.string()
    })

    type newOrgType = z.infer<typeof newOrgSchema>

    const {
        register,
        formState: {errors},
        reset,
        handleSubmit
    } = useForm<newOrgType>({
        resolver: zodResolver(newOrgSchema)
    })

    const onSubmit = (data: newOrgType) => {
        console.log(data)
    }

  return (
    <CustomCard className="w-[90%] md:w-[45rem] lg:w-[50rem] mx-auto relative border-color rounded-md mt-10 mb-6">
        <form onSubmit={handleSubmit(onSubmit)}>
            <header className='border-b-2 border-color py-4 px-6'>
                <h2 className=''>Set up your organization</h2>
            </header>
            <div className='p-6'>
                <h2 className='text-sm'>This is your organization within Tonnio.</h2>
                <p className='text-muted-foreground text-sm'>For example, you can use the name of your company or department.</p>
                <div className='py-10 flex flex-col gap-10'>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <label className='md:w-1/2 text-muted-foreground' htmlFor="organizationName">Name</label>
                        <div className='w-full'>
                            <CustomForm formType='input' placeholder="Organization's name" name="organizationName" register={register} errors={errors} />
                            <p className='text-muted-foreground text-sm mt-2'>What&apos;s the name of your company or team?</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <label className='md:w-1/2 text-muted-foreground' htmlFor="organizationType">Type of organization</label>
                        <div className='w-full'>
                            <CustomForm selectOptions={selectOptions} formType='select' placeholder="Organization's name" name="organizationType" register={register} errors={errors} />
                            <p className='text-muted-foreground text-sm mt-2'>What would best describe your oraganization?</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className=' w-full border-t-2 border-color py-3 px-6 flex items-center justify-between'>
                <CustomButton>Cancel</CustomButton>
                <div className='flex items-center gap-2'>
                    <p className='text-xs text-muted-foreground hidden md:block'>You can rename your organization later</p>
                    <CustomButton variant='fill'>Create Organization</CustomButton>
                </div>
            </footer>
        </form>
    </CustomCard>
  )
}
