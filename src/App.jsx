import { useState } from 'react'
import "./scss/index.scss";
import {ChakraProvider} from "@chakra-ui/react"
import { QueryClientProvider } from "react-query";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Router from "./router/index";
import { createBrowserHistory } from "history";
import queryClient from './services/queryClient';

function App() {

  return (
    <>
      <div className="App">
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <HistoryRouter history={createBrowserHistory({window})}>
              <Router />
            </HistoryRouter>
          </QueryClientProvider>
        </ChakraProvider>
      </div>
    </>
  )
}

export default App
