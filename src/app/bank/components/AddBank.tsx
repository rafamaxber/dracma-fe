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
// import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useMaskito } from '@maskito/react';
import { currencyMaskOption, currencyToNumber } from "@/components/ui/mask"

export const formSchema = z.object({
  bank: z.string().min(2).max(50),
  balance: z.coerce.string(),
  date: z.date().optional(),
})

export const AddBankForm = () => {
  const maskedInputRef = useMaskito({ options: currencyMaskOption });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: "",
      balance: "0",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Incluir banco e saldo</CardTitle>
        <CardDescription>Adicione quantos bancos desejar</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

            <div className="mb-6 grid grid-cols-2 grid-rows-1 gap-3">
              <FormField
                control={form.control}
                name="bank"
                render={({ field }) => {
                  return (
                    <FormItem >
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
                    <FormItem >
                      <FormLabel>Saldo</FormLabel>
                      <FormControl>
                        <Input inputMode="numeric" {...field} placeholder="Saldo" ref={maskedInputRef} onInput={(e) => {
                          field.onChange(e.currentTarget.value)
                        }} />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.bank?.message}
                      </FormMessage>
                    </FormItem>
                  )
                }}
              />

              {/* <FormField
                control={form.control}
                name="date"
                render={({ field }) => {
                  return (
                    <FormItem className="col-span-2">
                      <FormLabel>Data</FormLabel>
                      <FormControl>
                        <DatePicker {...field}/>
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.date?.message}
                      </FormMessage>
                    </FormItem>
                  )
                }}
              /> */}
            </div>

            <Button type="submit" variant="default">
              Adicionar Banco
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
