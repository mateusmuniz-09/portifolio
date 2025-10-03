
const sendRequest = (dados) => {





  const mensagem = `🧾 *NOVA MENSAGEM*
\n\n👤 *Nome:* ${dados.name}\n📩 *Email:* ${dados.email}\n\n📲 *Mensagem:*\n ${dados.message}
`
  const numeroWhatsApp = 88981252883;
  const url = `https://wa.me/+55${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
 
  window.open(url, "_blank");
  
};

export default sendRequest;