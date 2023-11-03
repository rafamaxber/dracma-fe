export function ContainerForm({ children }: { children: React.ReactNode }) {
  return (
    <section className="md:w-[100%] bg-background text-foreground mt-4 mb-4">
      <div className="container md:w-[660px] flex flex-col gap-4">
        {children}
      </div>
    </section>
  )
}
