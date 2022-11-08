import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Logo from './images/logo.svg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import PrintIcon from '@mui/icons-material/Print';
import SettingsIcon from '@mui/icons-material/Settings';
import Navigation from './components/Navigation/Navigation.component';
import Grid from '@mui/material/Grid';

declare namespace AppTypes {
  type Table = {
    key: string
    device: string
    devicePrice: number
    repair: string
    repairPrice: number
  }

  type Whatsapp = {
    key: string
    label: string
    value: string
  }

  type Data = {
    contatos: {
      whatsapp: Whatsapp[]
      instagram: string
    },
    precos: {
      validade: string
      pagamento: {
        pix: boolean
        picpay: boolean
        debito: boolean
        credito: boolean
        parcelamento: number
      }
      table: Table[]
    }
  }

  type Inputs = 'whatsapp' | 'instagram' | 'validate' | 'device' | 'repair'
  type Values = 'partial' | 'devicePrice' | 'repairPrice'
  type Checkboxes = 'pix' | 'picpay' | 'debito' | 'credito'
}

function App() {
  const data: AppTypes.Data = {
    contatos: {
      whatsapp: [{
        key: 'primeiro-whatsapp',
        label: 'Primeiro Whatsapp',
        value: '11 95371.6726'
      },
      {
        key: 'segundo-whatsapp',
        label: 'Segundo Whatsapp',
        value: '11 99165.1631'
      }],
      instagram: 'mast.ercell58',
    },
    precos: {
      validade: '01/12/2022',
      pagamento: {
        pix: true,
        picpay: true,
        debito: true,
        credito: true,
        parcelamento: 18
      },
      table: [{
        key: 'product-1',
        device: 'iPhone 12 Pro 128GB',
        devicePrice: 4700,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-2',
        device: 'iPhone 11 Pro Max 64GB',
        devicePrice: 4100,
        repair: 'Bateria',
        repairPrice: 100
      },{
        key: 'product-3',
        device: 'iPhone 11 Pro 256GB',
        devicePrice: 3900,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-4',
        device: 'iPhone 11 128GB',
        devicePrice: 3000,
        repair: 'Bateria',
        repairPrice: 100
      },{
        key: 'product-5',
        device: 'iPhone 11 64GB',
        devicePrice: 2800,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-6',
        device: 'iPhone XR 128GB',
        devicePrice: 2300,
        repair: 'Bateria',
        repairPrice: 100
      },{
        key: 'product-7',
        device: 'iPhone XR 64GB',
        devicePrice: 2150,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-8',
        device: 'iPhone 8 Plus 64GB',
        devicePrice: 1800,
        repair: 'Bateria',
        repairPrice: 100
      },{
        key: 'product-9',
        device: 'iPhone 8 256GB',
        devicePrice: 1700,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-10',
        device: 'iPhone 8 64GB',
        devicePrice: 1600,
        repair: 'Bateria',
        repairPrice: 100
      },{
        key: 'product-11',
        device: 'iPhone XS Max 256GB',
        devicePrice: 2900,
        repair: 'Bateria',
        repairPrice: 100
      },
      {
        key: 'product-12',
        device: 'iPhone X 64GB',
        devicePrice: 2100,
        repair: 'Bateria',
        repairPrice: 100
      }]
    }
  }

  const [whatsapp, setWhatsapp] = useState<AppTypes.Whatsapp[]>(data.contatos.whatsapp)
  const [instagram, setInstagram] = useState<string>(data.contatos.instagram)

  const [pix, setPix] = useState<boolean>(data.precos.pagamento.pix)
  const [picPay, setPicPay] = useState<boolean>(data.precos.pagamento.picpay)
  const [debito, setDebito] = useState<boolean>(data.precos.pagamento.debito)
  const [credito, setCredito] = useState<boolean>(data.precos.pagamento.credito)
  const [partial, setPartial] = useState<number>(data.precos.pagamento.parcelamento)

  const [validate, setValidate] = useState<string>(data.precos.validade)
  const [table, setTable] = useState<AppTypes.Table[]>(data.precos.table)

  const changeInput = (value: string, name: AppTypes.Inputs, index?: number) => {
    switch (name) {
      case 'whatsapp':
        if (index) {
          const newWhatsapp = whatsapp
          newWhatsapp[index].value = value;
          setWhatsapp(newWhatsapp)
        }
        break;

      case 'instagram':
        setInstagram(value)
        break;

      case 'validate':
        setValidate(value)
        break;

      case 'repair':
        if (index) {
          const newTable = table
          table[index].repair = value;
          setTable(newTable)
        }
        break;

      case 'device':
        if (index) {
          const newTable = table
          table[index].device = value;
          setTable(newTable)
        }
        break;
    }
  }

  const changeValue = (value: number, name: AppTypes.Values, index?: number) => {
    switch (name) {
      case 'partial':
        setPartial(value)
        break;

      case 'repairPrice':
        if (index) {
          const newTable = table
          table[index].repairPrice = value;
          setTable(newTable)
        }
        break;

      case 'devicePrice':
        if (index) {
          const newTable = table
          table[index].devicePrice = value;
          setTable(newTable)
        }
        break;
    }
  }

  const changeCheckbox = (name: AppTypes.Checkboxes, index?: number) => {
    switch (name) {
      case 'pix':
        setPix(!pix)
        break;

      case 'picpay':
        setPicPay(!picPay)
        break;

      case 'debito':
        setDebito(!debito)
        break;

      case 'credito':
        setCredito(!credito)
        break;
    }
  }

  return (
    <main>
      <section id="main">
        <Container>
          <Navigation items={[
            { key: 'configurar', label: 'Configurar', icon: <SettingsIcon /> },
            { key: 'imprimir', label: 'Imprimir', icon: <PrintIcon /> }
          ]} />
          <img id="logo" src={Logo} alt="Mastercell" />
        </Container>
      </section>
      <section id="configurar">
        <Container>
          <Typography variant="h5">
            Configurar
          </Typography>
          <Typography sx={{ paddingTop: '24px' }}>
            Informe os contatos:
          </Typography>
          <Grid container sx={{ padding: '24px 0' }} spacing={2}>
            {whatsapp.map((item, index) => (
              <Grid item xs={12} md={4} key={item.key}>
                <TextField sx={{ width: '100%' }} id={item.key} label={item.label} defaultValue={whatsapp[index].value} onChange={e => changeInput(e.target.value, 'whatsapp', index)} />
              </Grid>
            ))}
            <Grid item xs={12} md={4}>
              <TextField sx={{ width: '100%' }} id="conta-instagram" label="Conta instagram" value={instagram} onChange={e => changeInput(e.target.value, 'instagram')} InputProps={{
                startAdornment: <InputAdornment position="start">@</InputAdornment>,
              }} />
            </Grid>
          </Grid>
          <Typography sx={{ paddingTop: '24px' }}>
            Informe as formas de pagamento:
          </Typography>
          <Grid container sx={{ padding: '24px 0' }} spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControlLabel control={
                <Checkbox id="pix" size="small" checked={pix} onChange={() => changeCheckbox('pix')} />
              } label="Aceita Pix?" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControlLabel control={
                <Checkbox id="picpay" size="small" checked={picPay} onChange={() => changeCheckbox('picpay')} />
              } label="Aceita PicPay?" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControlLabel control={
                <Checkbox id="debito" size="small" checked={debito} onChange={() => changeCheckbox('debito')} />
              } label="Aceita Débito?" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControlLabel control={
                <Checkbox id="credito" size="small" checked={credito} onChange={() => changeCheckbox('credito')} />
              } label="Aceita Crédito?" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} id="partial" label="Parcela em até" value={partial} onChange={e => changeValue(+e.target.value, 'partial')}InputProps={{
                endAdornment: <InputAdornment position="end">x sem juros</InputAdornment>,
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={{ width: '100%' }} id="validate" label="Preços válidos até" value={validate} onChange={e => changeInput(e.target.value, 'validate')} />
            </Grid>
          </Grid>
          {table.map((item, index) => (
            <Box key={item.key}>
              <Typography sx={{ paddingTop: '24px' }}>
                Informe o aparelho {index+1}
                {` de ${table?.length}`}:
              </Typography>
              <Grid container sx={{ padding: '24px 0' }} spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField sx={{ width: '100%' }} id="device-price" label="Valor venda" defaultValue={table[index].devicePrice} onChange={e => changeValue(+e.target.value, 'devicePrice', index)} InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField sx={{ width: '100%' }} id="device" label="Aparelho" defaultValue={table[index].device} onChange={e => changeInput(e.target.value, 'device', index)} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField sx={{ width: '100%' }} id="repair-price" label="Valor conserto" defaultValue={table[index].repairPrice} onChange={e => changeValue(+e.target.value, 'repairPrice', index)} InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField sx={{ width: '100%' }} id="repair" label="Conserto" defaultValue={table[index].repair} onChange={e => changeInput(e.target.value, 'repair', index)} />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>
      </section>
      <section id="imprimir">
        <Container>
          <Typography variant="h5">
            Imprimir
          </Typography>
        </Container>
      </section>
    </main>
  );
}

export default App;
