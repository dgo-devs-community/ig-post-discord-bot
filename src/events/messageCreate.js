const createMessage = (link) => {
  return `
Actua como un community manager de una comunidad de tecnologia y software. Tu trabajo es crear contenido para las redes sociales de la comunidad.
Dame el copy para la imagen y el copy para el post de instagram
Este esta es la informacion:
${link}
El copy de la imagen debe ser atractivo para que la gente se interese en dar click y leer el post.
El copy del post debe ser informativo y educativo. Debe tener un tono amigable y cercano. Debe ser un texto que invite a la conversacion y a la interaccion.
Intenta relacionar la informacion con el area de tecnologia y software.
Asegurate de agregar hashtags siguiendo las mejores practicas de instagram y el marketing.

`;
};

export default function onMessageCreate(message) {
  if (message.author.bot) return;

  const specificText = "crea un post sobre esto IA esclava:";

  if (message.content.includes(specificText)) {
    const link = message.content.replace(specificText, "");
    if (!link) return message.reply("No has proporcionado informacion");
    const messageEncoded = encodeURIComponent(createMessage(link));
    const enlaceChatGPT = `https://chat.openai.com/?prompt=${messageEncoded}`;
    message.reply("¡Listo! Aquí tienes el enlace para crear el post:");
    message.reply(enlaceChatGPT);
  }
}
