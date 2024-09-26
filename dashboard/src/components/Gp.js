import React from 'react'
import { GeneralContextProvider } from './GeneralContext'
import WatchList from './WatchList'
import TopBar from './TopBar'
import { ThemeProvider ,createTheme } from '@mui/material/styles'

const theme = createTheme();
const Gp = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
      <GeneralContextProvider>
      <TopBar/>
      <WatchList/>
      </GeneralContextProvider>
       
     
        </ThemeProvider>
     
    </div>
  )
}

export default Gp
