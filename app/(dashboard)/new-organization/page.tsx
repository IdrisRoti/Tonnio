import NewOrganizationForm from "@/components/forms/new-organization-form";
import ThemeToggler from "@/components/ThemeToggler";
import Link from "next/link";

import { IoChevronBack } from "react-icons/io5";

export default function NewOrganization() {
  return (
    <div className='pb-6'>
      <nav className='border-b-2 border-color py-4 md:py-6'>
        <div className="container flex justify-between">
          <Link href="/" className="flex items-center gap-2">
            <IoChevronBack className="w-4 h-4" />
            <span>Back to home Page</span>
          </Link>
          <ThemeToggler />
        </div>
      </nav>
      <NewOrganizationForm />
    </div>
  )
}
