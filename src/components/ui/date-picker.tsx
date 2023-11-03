"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as locale from 'date-fns/locale';


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ControllerRenderProps } from "react-hook-form"

interface DatePickerProps {
  disabledCalendarRule?: (date: Date) => boolean;
  formatLabelRule?: (date: Date) => string | JSX.Element;
}

export function formatWithLocale(date: Date) {
  return format(date, "PPP", { locale: locale.ptBR})
}

function disabledRuleDefault(date: Date) {
  return date > new Date() || date < new Date("1900-01-01")
}

function formatLabelDefault(date: Date) {
  return date ? format(date, "PPP", { locale: locale.ptBR}) : <span>Data Inicial</span>
}

export function DatePicker(props: DatePickerProps & ControllerRenderProps<any>) {
  const label = props?.formatLabelRule ? props?.formatLabelRule(props.value) : formatLabelDefault(props.value)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] justify-start text-left font-normal",
            !props.value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={locale.ptBR}
          lang="ptBR"
          mode="single"
          selected={props.value}
          onSelect={props.onChange}
          disabled={props?.disabledCalendarRule || disabledRuleDefault}
        />
      </PopoverContent>
    </Popover>
  )
}
