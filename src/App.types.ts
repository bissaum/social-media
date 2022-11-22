declare namespace AppTypes {
  type Products = {
    key: string
    device: {
      name: string
      price: string
      valid: boolean
    }
    repair: {
      name: string
      price: string
      valid: boolean
    }
  }

  type Whatsapp = {
    key: string
    label: string
    value: string
    valid: boolean
  }

  type Input = {
    value: string
    valid: boolean
  }

  type Data = {
    contatos: {
      whatsapp: Whatsapp[]
      instagram: Input
    },
    precos: {
      validade: Input
      pagamento: {
        pix: boolean
        picpay: boolean
        debito: boolean
        credito: boolean
        parcelamento: Input
      }
      produtos: Products[]
    }
  }

  type Inputs = 'whatsapp' | 'instagram' | 'validate' | 'device' | 'repair' | 'partial' | 'devicePrice' | 'repairPrice'
  type Checks = 'pix' | 'picpay' | 'debito' | 'credito'
  type Tabs = 'validation' | 'post' | 'story'
}

export default AppTypes
