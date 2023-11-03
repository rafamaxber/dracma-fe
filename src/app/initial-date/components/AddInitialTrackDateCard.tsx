"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePicker, formatWithLocale } from "@/components/ui/date-picker"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { isToday } from "date-fns"

enum FormFieldNames {
  INITIAL_DATE = "initialBalanceDate",
}

function formatCalendarLabel(date: Date) {
  if (isToday(date)) return "Hoje"

  return date ? formatWithLocale(date) : <span>Data Inicial</span>
}

export function AddInitialTrackDateCard() {
  const today = new Date()
  const formSchema = z.object({
    [FormFieldNames.INITIAL_DATE]: z.date().optional(),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [FormFieldNames.INITIAL_DATE]: today,
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Incluir data balanço inicial</CardTitle>
        <CardDescription>Adicione a data inicial para começar a atualizar e seu saldo baseado em suas transações a partir dessa data.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name={FormFieldNames.INITIAL_DATE}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Data do balanço inicial:</FormLabel>
                    <FormControl>
                      <DatePicker {...field} value={field.value ? field.value : today} formatLabelRule={formatCalendarLabel} />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors[FormFieldNames.INITIAL_DATE]?.message}
                    </FormMessage>
                  </FormItem>
                )
              }}
            />
            <Button type="submit" variant="default" className="mt-4">
              Atualizar data
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
