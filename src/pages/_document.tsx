import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    {/* <link rel="icon" href="/instagram.ico" /> */}
                </Head>
                <body>
                    <div id="root">
                        <Main />
                        <NextScript />
                    </div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;