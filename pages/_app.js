import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
// import { MuiThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import JssProvider from 'react-jss/lib/JssProvider'
// import getPageContext from '../src/getPageContext'

// import Layout from '../components/layout'

class MyApp extends App {
    // constructor() {
    //     super()
    //     this.pageContext = getPageContext()
    // }

    // componentDidMount() {
    //     // Remove the server-side injected CSS.
    //     const jssStyles = document.querySelector('#jss-server-side')
    //     if (jssStyles && jssStyles.parentNode) {
    //         jssStyles.parentNode.removeChild(jssStyles)
    //     }
    // }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>My page</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    ></link>

                    {/* <!-- jQuery library --> */}
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

                    {/* <!-- Popper JS --> */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

                    {/* <!-- Latest compiled JavaScript --> */}
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
                </Head>

                <Component pathname={this.props.router.route} {...pageProps} />
            </>
        )
    }
}

export default MyApp
