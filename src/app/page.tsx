import { ContainerForm } from "@/components/ui/container-form";
import { AddBankForm } from "./bank/components/AddBank";
import { AddInitialTrackDateCard } from "./initial-date/components/AddInitialTrackDateCard";

export default function Home() {
  return (
    <ContainerForm>
      <AddInitialTrackDateCard />
      <AddBankForm />
    </ContainerForm>
  )
}

