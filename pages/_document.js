import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.css' integrity='sha512-NhLySQDkiKSKnT+R795uaHWRQ7D3VuIvgeOLCK8cWq4w5fq4sWF90gj8eURpTqn/f1mFzqClpOz8JPlgVTLfFw==' crossorigin='anonymous'/>
      <link href="https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
