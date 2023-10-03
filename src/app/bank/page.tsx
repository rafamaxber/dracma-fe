export default function Bank() {
  return (
    <main>
      <h1>Saldos iniciais</h1>

      <div className="">
        <label htmlFor="bank">Data do saldo inicial</label>
        <input className="text-black" type="date" name="bank" id="bank" />
      </div>

      <div className="">
        <h2>Informe o banco e saldo total</h2>

        <form className="flex gap-8">
          <div>
            <label htmlFor="bank_name">Banco:</label>
            <input className="text-black" type="text" name="bank_name" id="bank_name" />
          </div>
          <div>
            <label htmlFor="balance">Saldo:</label>
            <input className="text-black" type="text" name="balance" id="balance" />
          </div>
        </form>
      </div>
    </main>
  )
}
