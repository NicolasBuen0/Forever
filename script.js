document.addEventListener('DOMContentLoaded', function () {
  const content = {
    en: {
      weddingInvite: 'Please join us for<br>the wedding of',
      names: 'Crystiany and Joseph',
      date: "Sunday, November 10th,<br> at four o'clock in the afternoon",
      location: "in Stoughton, Massachusetts",
      confirmation: "Confirmation of<br> Attendance",
      eventDetails: "Event<br> details",
      gift: "Venmo <br>Gift",
      whatsappLink: "https://api.whatsapp.com/send?phone=17814678124&text=Hello,%20attendance%20confirmed",
      program: "Wedding Program",
      cerimonia: "Ceremony",
      locali: "4:00 - Celebration Pastor Jason LaPlanche<br>5:00 - Wedding Vows<br>5:30 - Word of Thanks - Joseph and Crystiany<br>6:00 - Reception - Appetizers<br>7:00 - Dinner<br>8:00 - Bride and Groom Waltz<br>",
      cerimonialocation: "Ceremony Location",
      drive: "Driving directions",
      waze: "Click here for Waze directions",
      maps: "Click here for Google Maps direction",
      scroll: "Scroll down",
      videoLink: "CrystianyandJoseph.html",  // Link do vídeo em inglês
      tapToOpen: "Tap to open"  // Texto em inglês
    },
    pt: {
      weddingInvite: 'o casamento de',
      names: 'Crystiany e Joseph',
      date: "Domingo, 10 de Novembro,<br> às quatro horas da tarde",
      location: "em Stoughton, Massachusetts",
      confirmation: "Confirmação de<br>Presença",
      eventDetails: "Detalhes do<br> Evento",
      gift: "Presente via <br>Venmo",
      whatsappLink: "https://api.whatsapp.com/send?phone=17814678124&text=Olá,%20gostaria%20de%20confirmar%20presença!",
      program: "Progama do casamento",
      cerimonia: "Cerimônia",
      locali: "16:00 - Celebração Pastor Jason LaPlanche<br>17:00 - Votos de Casamento<br>17:30 - Palavra de Agradecimento - Joseph e Crystiany<br>18:00 - Recepção - Aperitivos<br>19:00 - Jantar<br>20:00 - Valsa dos Noivos<br>",
      cerimonialocation: "Localização Cerimônia",
      drive: "Como chegar",
      waze: "Clique aqui para abrir no Waze",
      maps: "Clique aqui para abrir no Google Maps",
      scroll: "Role para baixo",
      videoLink: "CrystianyeJoseph.html",  // Link do vídeo em português
      tapToOpen: "Toque para abrir"  // Texto em português
    }
  };

  const elements = {
    weddingInvite: document.querySelector('.casamentode'),
    names: document.querySelector('.font-nome'),
    date: document.querySelector('.localidade'),
    confirmation: document.querySelector('.one .frase'),
    whatsappLink: document.querySelector('.one a'),
    program: document.querySelector('#program'),
    eventDetails: document.querySelector('#event-details-text'),  // Seletor para detalhes do evento
    gift: document.querySelector('#venmo-gift-text'),  // Seletor para presente via Venmo
    cerimonia: document.querySelector('#cerimon'),  // Seletor para a cerimônia
    locali: document.querySelector('#localiza'),  // Seletor para localização
    cerimonialocation: document.querySelector('#cerimonialocation'),  // Seletor para a localização da cerimônia
    drive: document.querySelector('#drive'),  // Seletor para como chegar
    waze: document.querySelector('#waze'),  // Seletor para abrir no Waze
    maps: document.querySelector('#maps'),  // Seletor para abrir no Google Maps
    title: document.querySelector('#title'),  // Seletor para o título
    scroll: document.querySelector('#scroll'),  // Seletor para rolar para baixo
    videoLink: document.querySelector('.envelope-link'),  // Seletor para o link do vídeo
    tapToOpen: document.querySelector('.toque')  // Seletor para "Tap to open" ou "Toque para abrir"
  };

  document.getElementById('language-toggle').addEventListener('click', function () {
    const lang = this.getAttribute('data-lang');
    const newLang = lang === 'en' ? 'pt' : 'en';

    // Atualizar o conteúdo da página
    elements.weddingInvite.innerHTML = content[newLang].weddingInvite;
    elements.names.textContent = content[newLang].names;
    elements.date.innerHTML = content[newLang].date + "<br>" + content[newLang].location;
    elements.confirmation.innerHTML = content[newLang].confirmation;
    elements.cerimonia.innerHTML = content[newLang].cerimonia;
    elements.locali.innerHTML = content[newLang].locali;
    elements.cerimonialocation.innerHTML = content[newLang].cerimonialocation;
    elements.drive.innerHTML = content[newLang].drive;
    elements.waze.innerHTML = content[newLang].waze;
    elements.maps.innerHTML = content[newLang].maps;
    elements.title.innerHTML = content[newLang].names;
    elements.scroll.innerHTML = content[newLang].scroll;

    if (elements.eventDetails) {
      elements.eventDetails.innerHTML = content[newLang].eventDetails;  // Atualiza detalhes do evento
    }

    if (elements.gift) {
      elements.gift.innerHTML = content[newLang].gift;  // Atualiza o presente (Venmo)
    }

    elements.whatsappLink.setAttribute("href", content[newLang].whatsappLink);
    elements.program.innerHTML = content[newLang].program;

    // Alterar o link do vídeo ao trocar de idioma
    elements.videoLink.setAttribute("href", content[newLang].videoLink);

    // Alterar o texto "Tap to open" ou "Toque para abrir"
    elements.tapToOpen.innerHTML = content[newLang].tapToOpen;

    // Trocar o texto do botão de idioma
    this.setAttribute('data-lang', newLang);
    this.classList.toggle('flip-horizontal');

    // Adicionar a animação de rotação horizontal ao botão
    this.classList.add('rotate-animation');

    // Remover a animação após 0.5 segundos (tempo da animação) para permitir que ela se repita
    setTimeout(() => {
      this.classList.remove('rotate-animation');
    }, 500);
  });
});

window.addEventListener('load', function () {
  const mainContent = document.getElementById('main-content');
  const fallingLeafContainer = document.querySelector('.falling-leaf-container');

  // Definir um temporizador para ocultar a folha e mostrar o conteúdo principal após 3 segundos
  setTimeout(function () {
    fallingLeafContainer.style.display = 'none'; // Esconder a folha
    mainContent.style.opacity = '1'; // Mostrar o conteúdo principal
  }, 3000); // 3 segundos (duração da animação)
});
