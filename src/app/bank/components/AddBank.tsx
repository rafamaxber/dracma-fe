"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DatePicker } from "./DatePicker"

export const formSchema = z.object({
  bank: z.string().min(2).max(50),
  balance: z.coerce.number().positive(),
  date: z.date().optional(),
})


export const AddBankForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: "",
      balance: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

        <div className="flex gap-3 mb-4">
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => {
              return (
                <FormItem className="w-5/6">
                  <FormLabel>Banco</FormLabel>
                  <FormControl>
                    <Input  {...field} placeholder="Banco" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.bank?.message}
                  </FormMessage>
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="balance"
            render={({ field }) => {
              return (
                <FormItem className="w-5/12">
                  <FormLabel>Saldo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Saldo" />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.bank?.message}
                  </FormMessage>
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field, fieldState, formState }) => {
              return (
                <FormItem className="w-5/6">
                  <FormLabel>Data</FormLabel>
                  <FormControl>
                    <DatePicker {...field}/>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.bank?.message}
                  </FormMessage>
                </FormItem>
              )
            }}
          />
        </div>

        <Button type="submit" variant="default">
          Adicionar Banco
        </Button>
      </form>
    </Form>
  )
}
