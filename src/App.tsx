import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert from '@mui/material/Alert';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PrintIcon from '@mui/icons-material/Print';
import SettingsIcon from '@mui/icons-material/Settings';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UpdateIcon from '@mui/icons-material/Update';
import Navigation from './components/Navigation/Navigation.component';
import Canvas from './components/Canvas/Canvas.component';
import AppTypes from './App.types';
import AppStyles from './App.styles';

function App() {
  const data: AppTypes.Data = {
    contatos: {
      whatsapp: [{
        key: 'primeiro-whatsapp',
        label: 'Primeiro Whatsapp',
        value: '11 95371.6726',
        valid: true
      },
      {
        key: 'segundo-whatsapp',
        label: 'Segundo Whatsapp',
        value: '11 99165.1631',
        valid: true
      }],
      instagram: {
        value: 'mast.ercell59',
        valid: true
      }
    },
    precos: {
      validade: {
        value: '01/12/2022',
        valid: true
      },
      pagamento: {
        pix: true,
        picpay: true,
        debito: true,
        credito: true,
        parcelamento: {
          value: '18',
          valid: true
        }
      },
      produtos: [{
        key: 'product-1',
        device: {
          name: 'iPhone 12 Pro 128GB',
          price: '4700',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-2',
        device: {
          name: 'iPhone 11 Pro Max 64GB',
          price: '4100',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },{
        key: 'product-3',
        device: {
          name: 'iPhone 11 Pro 256GB',
          price: '3900',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-4',
        device: {
          name: 'iPhone 11 128GB',
          price: '3000',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },{
        key: 'product-5',
        device: {
          name: 'iPhone 11 64GB',
          price: '2800',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-6',
        device: {
          name: 'iPhone XR 128GB',
          price: '2300',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },{
        key: 'product-7',
        device: {
          name: 'iPhone XR 64GB',
          price: '2150',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-8',
        device: {
          name: 'iPhone 8 Plus 64GB',
          price: '1800',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },{
        key: 'product-9',
        device: {
          name: 'iPhone 8 256GB',
          price: '1700',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-10',
        device: {
          name: 'iPhone 8 64GB',
          price: '1600',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },{
        key: 'product-11',
        device: {
          name: 'iPhone XS Max 256GB',
          price: '2900',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      },
      {
        key: 'product-12',
        device: {
          name: 'iPhone X 64GB',
          price: '2100',
          valid: true
        },
        repair: {
          name: 'Bateria',
          price: '100',
          valid: true
        }
      }]
    }
  }

  const [whatsapp, setWhatsapp] = useState<AppTypes.Whatsapp[]>(data.contatos.whatsapp)
  const [instagram, setInstagram] = useState<AppTypes.Input>(data.contatos.instagram)

  const [pix, setPix] = useState<boolean>(data.precos.pagamento.pix)
  const [picPay, setPicPay] = useState<boolean>(data.precos.pagamento.picpay)
  const [debito, setDebito] = useState<boolean>(data.precos.pagamento.debito)
  const [credito, setCredito] = useState<boolean>(data.precos.pagamento.credito)
  const [partial, setPartial] = useState<AppTypes.Input>(data.precos.pagamento.parcelamento)

  const [validate, setValidate] = useState<AppTypes.Input>(data.precos.validade)
  const [table, setTable] = useState<AppTypes.Products[]>(data.precos.produtos)

  const [tabContact, setTabContact] = useState('validation')
  const changeTabContact = (_event: React.SyntheticEvent, newTab: AppTypes.Tabs) => setTabContact(newTab)

  const maskNumeric = (value: string): string => value.replace(/\D/g, '')
  const validNumeric = (value: string): boolean => (+value > 0)

  const maskPhone = (phone: string): string => maskNumeric(phone).replace(/(\d{2})(\d{5})(\d{4})/, '$1 $2.$3')
  const validPhone = (phone: string): boolean => (+phone[3] === 9 && phone?.length === 13)

  const maskDate = (date: string): string => maskNumeric(date).replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
  const validDate = (date: string): boolean => {
    const d = +date.slice(0, 2)
    const m = +date.slice(3, 5)
    const y = +date.slice(6, 10)
    return (d > 0 && d < 32) && (m > 0 && m < 13) && (y > new Date().getFullYear())
  }

  const changeInput = (value: string, name: AppTypes.Inputs, index?: number) => {
    const newWhatsapp = whatsapp
    const newTable = table

    let newPartial = partial
    let newInstagram = instagram
    let newValidate = validate

    switch (name) {
      case 'whatsapp':
        if (index) {
          newWhatsapp[index-1].value = maskPhone(value)
          newWhatsapp[index-1].valid = validPhone(value)
        }
        break;

      case 'instagram':
        newInstagram = { value, valid: value?.length > 3 }
        break;

      case 'validate':
        newValidate = { value: maskDate(value), valid: validDate(value) }
        break;

      case 'repair':
        if (index) {
          table[index-1].repair.name = value;
          table[index-1].repair.valid = (table[index-1].repair.name?.length > 3 && +table[index-1].repair.price > 100)
        }
        break;

      case 'device':
        if (index) {
          table[index-1].device.name = value;
          table[index-1].device.valid = (table[index-1].device.name?.length > 3 && +table[index-1].device.price > 30)
        }
        break;

      case 'partial':
        newPartial = { value: maskNumeric(value), valid: validNumeric(value) }
        break;

      case 'repairPrice':
        if (index) {
          table[index-1].repair.price = maskNumeric(value)
          table[index-1].repair.valid = validNumeric(value)
        }
        break;

      case 'devicePrice':
        if (index) {
          table[index-1].device.price = maskNumeric(value)
          table[index-1].device.valid = validNumeric(value)
        }
        break;
    }

    setWhatsapp(newWhatsapp)
    setInstagram(newInstagram)
    setValidate(newValidate)
    setPartial(newPartial)
    setTable(newTable)
  }

  const changeCheckbox = (name: AppTypes.Checks) => {
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

  const printContacts = () => {
    return whatsapp.map(item => item.valid).includes(false) || !instagram.valid
  }

  const downloadContacts = (type: 'post' | 'story') => {
    switch (type) {
      case 'post':
        console.log('download post')
      break;
      case 'story':
        console.log('download story')
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
          <img id="logo" src="logo.svg" alt="Mastercell" />
        </Container>
      </section>
      <section id="configurar">
        <Container>
          <Typography variant="h5">
            Configurar
          </Typography>
          <Typography sx={AppStyles.paragraph}>
            Informe os contatos:
          </Typography>
          <Grid container sx={AppStyles.grid} spacing={2}>
            {whatsapp.map((item, index) => (
              <Grid item xs={12} md={4} key={item.key}>
                <TextField sx={AppStyles.textfield} inputProps={{
                  maxLength: 13
                }} id={item.key} label={item.label} defaultValue={whatsapp[index].value} onChange={e => changeInput(e.target.value, 'whatsapp', index+1)} />
              </Grid>
            ))}
            <Grid item xs={12} md={4}>
              <TextField sx={AppStyles.textfield} id="conta-instagram" label="Conta instagram" value={instagram.value} onChange={e => changeInput(e.target.value, 'instagram')} InputProps={{
                startAdornment: <InputAdornment position="start">@</InputAdornment>,
              }} />
            </Grid>
          </Grid>
          <Typography sx={AppStyles.paragraph}>
            Informe as formas de pagamento:
          </Typography>
          <Grid container sx={AppStyles.grid} spacing={2}>
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
              <TextField sx={AppStyles.textfield} id="partial" label="Parcela em até" value={partial.value} onChange={e => changeInput(e.target.value, 'partial')}InputProps={{
                endAdornment: <InputAdornment position="end">x sem juros</InputAdornment>,
              }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField sx={AppStyles.textfield} id="validate" label="Preços válidos até" value={validate.value} onChange={e => changeInput(e.target.value, 'validate')} />
            </Grid>
          </Grid>
          {table.map((item, index) => (
            <Box key={item.key}>
              <Typography sx={AppStyles.paragraph}>
                Informe o aparelho {index+1}
                {` de ${table?.length}`}:
              </Typography>
              <Grid container sx={AppStyles.grid} spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField sx={AppStyles.textfield} id="device-price" label="Valor venda" defaultValue={table[index].device.price} onChange={e => changeInput(e.target.value, 'devicePrice', index+1)} InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField sx={AppStyles.textfield} id="device" label="Aparelho" defaultValue={table[index].device.name} onChange={e => changeInput(e.target.value, 'device', index+1)} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField sx={AppStyles.textfield} id="repair-price" label="Valor conserto" defaultValue={table[index].repair.price} onChange={e => changeInput(e.target.value, 'repairPrice', index+1)} InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                  }} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField sx={AppStyles.textfield} id="repair" label="Conserto" defaultValue={table[index].repair.name} onChange={e => changeInput(e.target.value, 'repair', index+1)} />
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
          <Grid container sx={AppStyles.grid} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Informações de contato
              </Typography>
              <Tabs
                value={tabContact}
                onChange={changeTabContact}
                sx={AppStyles.tabs}
              >
                <Tab value="validation" label="Validação" />
                <Tab value="post" label="Post" />
                <Tab value="story" label="Story" />
              </Tabs>
            </Grid>
            {tabContact === 'validation' && <Grid item xs={12}>
              <Box sx={AppStyles.box}>
                <ButtonGroup sx={AppStyles.buttonGroup} variant="contained">
                  <Button size="large" variant="outlined" disabled={printContacts()} onClick={() => setTabContact('post')} startIcon={<PhotoCameraIcon />}>
                    Gerar Post
                  </Button>
                  <Button size="large" variant="outlined" disabled={printContacts()} onClick={() => setTabContact('story')} startIcon={<UpdateIcon />}>
                    Gerar Story
                  </Button>
                </ButtonGroup>
              </Box>
              {whatsapp.map((item, index) => <Alert key={item.key} sx={AppStyles.alert} severity={
                item.valid
                ? 'success'
                : 'error'
              }>{
                item.valid
                ? `${index+1}º Whatsapp está preenchido`
                : `Falta preencher o ${index+1}º whatsapp`
              }</Alert>)}
              <Alert sx={AppStyles.alert} severity={
                instagram.valid
                ? 'success'
                : 'error'
              }>{
                instagram.valid
                ? 'Conta do Instagram está preenchida'
                : 'Falta preencher o conta do Instagram'
              }</Alert>
            </Grid>}
            {tabContact === 'post' && <Grid item xs={12}>
              <Box sx={AppStyles.box}>
                <Button size="large" variant="outlined" disabled={printContacts()} onClick={() => downloadContacts('post')} startIcon={<CloudDownloadIcon />}>
                  Download Post
                </Button>
              </Box>
              <Canvas size="post" background="contatos-post.png" callback={context => {
                context.font = '48px Arial'
                context.fillStyle = '#666666'
                context.fillText(whatsapp[0].value, 630, 915)
                context.fillText(whatsapp[1].value, 130, 915)
                context.font = '32px Arial'
                context.fillStyle = '#999999'
                context.fillText(`@${instagram.value}`, 100, 1021)
              }} />
            </Grid>}
            {tabContact === 'story' && <Grid item xs={12}>
              <Box sx={AppStyles.box}>
                <Button size="large" variant="outlined" disabled={printContacts()} onClick={() => downloadContacts('story')} startIcon={<CloudDownloadIcon />}>
                  Download Story
                </Button>
              </Box>
              <Canvas size="story" background="contatos-story.png" callback={context => {
                context.font = '48px Arial'
                context.fillStyle = '#666666'
                context.fillText(whatsapp[0].value, 630, 1635)
                context.fillText(whatsapp[1].value, 130, 1635)
                context.font = '32px Arial'
                context.fillStyle = '#999999'
                context.fillText(`@${instagram.value}`, 130, 1760)
              }} />
            </Grid>}
          </Grid>
        </Container>
      </section>
    </main>
  );
}

export default App;
