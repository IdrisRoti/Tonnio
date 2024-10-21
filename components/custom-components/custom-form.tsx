import { cn } from "@/lib/utils";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TCustomInput = {
    placeholder?: string;
    className?: string;
    type?: "password" | "text" | "email" | "number"
    formType?: "input" | "textarea" | "select";
    selectOptions?: {label: string, value: string}[];
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors<FieldValues>
}

export default function CustomForm({placeholder, className, type="text", formType="input", selectOptions, name, register, errors}: TCustomInput) {
  switch (formType){
    case "input":
      return (
        <div className="w-full">
          <input 
          {...register(name)}
          type={type}
          placeholder={placeholder} 
          className={cn('w-full bg-transparent border border-color rounded-md p-2 placeholder:text-sm darK:placeholder:text-muted dark:placeholder:opacity-45 focus:outline-none focus:border-muted-foreground', className)} />
          {
            errors[name] && (
              <small className="text-xs text-red-600">{errors[name].message as string}</small>
            )
          }
        </div>
      )
      case "textarea":
        return (
          <div className="w-full">
            <textarea 
            {...register(name)}
            placeholder={placeholder} 
            className={cn('w-full bg-transparent border border-color rounded-md p-2 placeholder:text-sm darK:placeholder:text-muted dark:placeholder:opacity-45 focus:outline-none focus:border-muted-foreground', className)}
          />
          {
            errors[name] && (
              <small className="text-xs text-red-600">{errors[name].message as string}</small>
            )
          }
          </div>
        )
      case "select":
        return (
          <select
            {...register(name)}
            className={cn('w-full bg-transparent border border-color rounded-md p-2 focus:outline-none focus:border-muted-foreground', className)}
          >
            {selectOptions?.map((opt)=>{
              return (
                <option
                 key={opt.value} 
                 value={opt.value}
                 className={cn('bg-foreground')}
                 >
                  {opt.label}
                </option>
              )
            })}
          </select>
        )
  }
}
