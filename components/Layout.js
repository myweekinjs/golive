import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => (
  <>
    <Head>
      <style global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 3rem 0 5rem;
          font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
          background: #0b0c15;
          color: #fff;
        }
      `}</style>
    </Head>
    { children }
  </>
)

export default Layout
