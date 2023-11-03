"use client"

import { BankList } from "./components/BankList"
import { AddBankForm } from "./components/AddBank"
import { ContainerForm } from "@/components/ui/container-form"


export default function BankForm() {
  return (
    <ContainerForm>
      <h2 className="text-2xl font-semibold leading-none tracking-tight mt-9">
        Bancos utilizados
      </h2>

      <h3 className="mt-4 text-lg font-medium">
        Saldo total:  <span className="font-semibold tracking-tight">R$ 0</span>
      </h3>

      <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>

      <div className="mt-4">
        <AddBankForm />

        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>

        <BankList />
      </div>
    </ContainerForm>
  )
}

