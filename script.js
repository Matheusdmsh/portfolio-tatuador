document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Troca ícone (menu ↔ close)
    if (menuIcon.textContent === "menu") {
      menuIcon.textContent = "close";
    } else {
      menuIcon.textContent = "menu";
    }
  });

  // Fecha o menu quando um link é clicado
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add("hidden");
      menuIcon.textContent = "menu";
    });
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const estilo = document.getElementById('estilo').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !estilo || !message) {
        alert('Preencha todos os campos para continuar.');
        return;
      }

      const text = `Olá, Gabriel Juan! 

        Me chamo *${name}*. E gostaria de fazer um orçamento.

        *TAMANHO APROXIMADO OU LOCAL DO FECHAMENTO:* 
        ${estilo}

        *IDEIA DA TATTO:*
        ${message}`;
        
      const waUrl = 'https://wa.me/5534999311204?text=' + encodeURIComponent(text);
      window.open(waUrl, '_blank');
    });
  }

  // Dados das categorias com suas imagens
  const galleryCategories = {
    blackwork: {
      title: "BlackWork",
      images: [
        "imagens/BlackWork/BlackWork3.png",
        "imagens/BlackWork/BlackWork2.png",
        "imagens/BlackWork/BlackWork.png",
        "imagens/BlackWork/BlackWork4.png",
        "imagens/BlackWork/BlackWork5.png",
        "imagens/BlackWork/BlackWork6.png",
        "imagens/BlackWork/BlackWork7.jpeg",
        "imagens/BlackWork/BlackWork8.jpg",
        "imagens/BlackWork/BlackWork9.jpg",
        "imagens/BlackWork/BlackWork10.jpg",
        "imagens/BlackWork/BlackWork11.jpg",
        "imagens/BlackWork/BlackWork12.jpg",
        "imagens/BlackWork/BlackWork13.jpg",
        "imagens/BlackWork/BlackWork14.jpg",
        "imagens/BlackWork/BlackWork15.jpg",
        "imagens/BlackWork/BlackWork16.jpg",
        "imagens/BlackWork/BlackWork17.jpg",
        "imagens/BlackWork/BlackWork18.jpg",
        "imagens/BlackWork/BlackWork19.jpg",
        "imagens/BlackWork/BlackWork20.jpg"
      ],
      instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    pontilhismo: {
      title: "Pontilhismo & Geometria",
      images: [
        "imagens/Pontilhismo e Geométrico/Pontilhismo2.png",
        "imagens/Pontilhismo e Geométrico/Pontilhismo.png",
        "imagens/Pontilhismo e Geométrico/Pontilhismo3.png",
        "imagens/Pontilhismo e Geométrico/Pontilhismo4.jpg",
        "imagens/Pontilhismo e Geométrico/Pontilhismo5.jpg",
        "imagens/Pontilhismo e Geométrico/Pontilhismo6.jpg",
        
      ],
      instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    fineline: {
      title: "Fineline & Delicado",
      images: [
        "imagens/Fineline & Delicadas/Fineline1.jpg",
        "imagens/Fineline & Delicadas/Fineline2.png",
        "imagens/Fineline & Delicadas/Fineline3.jpg",
        "imagens/Fineline & Delicadas/Fineline4.jpg",
        "imagens/Fineline & Delicadas/Fineline5.jpg",
        "imagens/Fineline & Delicadas/Fineline6.jpg",
        "imagens/Fineline & Delicadas/Fineline7.jpg",
        "imagens/Fineline & Delicadas/Fineline8.jpg",
        "imagens/Fineline & Delicadas/Fineline9.jpg",
        "imagens/Fineline & Delicadas/Fineline10.jpg",
        "imagens/Fineline & Delicadas/Fineline11.jpg",
        "imagens/Fineline & Delicadas/Fineline12.jpg",
        "imagens/Fineline & Delicadas/Fineline13.jpg",
        "imagens/Fineline & Delicadas/Fineline14.jpg",
        "imagens/Fineline & Delicadas/Fineline15.jpg",
        "imagens/Fineline & Delicadas/Fineline16.jpg",
        "imagens/Fineline & Delicadas/Fineline17.jpg",
        "imagens/Fineline & Delicadas/Fineline18.jpg",
        "imagens/Fineline & Delicadas/Fineline19.jpg",
        "imagens/Fineline & Delicadas/Fineline20.jpeg",
        "imagens/Fineline & Delicadas/Fineline21.jpeg",
        "imagens/Fineline & Delicadas/Fineline22.jpg",
        "imagens/Fineline & Delicadas/Fineline23.jpg"
      ],
      instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    anime: {
      title: "Anime",
      images: [
        "imagens/Anime/Anime1.jpg",
        "imagens/Anime/Anime2.png",
        "imagens/Anime/Anime3.jpg",
        "imagens/Anime/Anime4.jpg",
        "imagens/Anime/Anime5.jpeg",
        "imagens/Anime/Anime6.jpg",
        "imagens/Anime/Anime7.jpg"
      ],
      instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    boldline: {
      title: "Bold Line",
      images: [
        "imagens/Bold Line/BoldLine 1.jpeg",
        "imagens/Bold Line/BoldLine 2.jpg",
        "imagens/Bold Line/BoldLine 3.jpeg",
        "imagens/Bold Line/BoldLine 4.jpg",
        "imagens/Bold Line/BoldLine 5.jpg",
        "imagens/Bold Line/BoldLine 6.jpg",
        "imagens/Bold Line/BoldLine 7.jpg"
      ],
      instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    realismo: {
      title: "Realismo",
      images: [
        "imagens/Realismo/Realismo1.jpg",
        "imagens/Realismo/Realismo2.jpeg",
        "imagens/Realismo/Realismo3.jpg",
        "imagens/Realismo/Realismo4.jpg",
        "imagens/Realismo/Realismo5.jpeg",
        "imagens/Realismo/Realismo6.jpg",
        "imagens/Realismo/Realismo7.jpg",
        "imagens/Realismo/Realismo8.jpg",
        "imagens/Realismo/Realismo9.jpg"
      ],
         instagram: {
        text: "Ver mais no Instagram",
        url: "https://instagram.com/gabrieljuan.tattoo"
      }
    },
    
  };

  // Modal Elements
  const galleryModal = document.getElementById("gallery-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalGallery = document.getElementById("modal-gallery");

  // Abrir modal ao clicar em categoria
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      const categoryData = galleryCategories[category];

      if (categoryData) {
        // Atualizar título
        modalTitle.textContent = categoryData.title;

        // Gerar grid de imagens
        modalGallery.innerHTML = categoryData.images.map(img => `
          <div class="group relative aspect-square bg-surface-container overflow-hidden">
            <img alt="${categoryData.title}" class="w-full h-full object-cover sm:grayscale md:transition-all md:duration-700 md:group-hover:scale-105 md:group-hover:grayscale-0" src="${img}"/>
          </div>
        `).join("");

        // Adiciona link do Instagram se existir
        if (categoryData.instagram) {
          modalGallery.innerHTML += `
            <div class="col-span-full flex justify-center items-center py-6">
              <a 
                href="${categoryData.instagram.url}" 
                target="_blank" 
                rel="noopener noreferrer"
                onclick="event.stopPropagation()"
                class="inline-flex items-center gap-2 text-white/60 hover:text-white font-manrope text-sm font-bold uppercase tracking-widest transition-colors duration-300 border border-white/20 hover:border-white/60 px-5 py-2 rounded-full"
              >
                <img src="imagens/instagram.png" alt="Instagram" class="w-4 h-4"/>
                ${categoryData.instagram.text}
              </a>
            </div>
          `;
        }


        // Abrir modal
        galleryModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Fechar modal
  closeModalBtn.addEventListener("click", () => {
    galleryModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  });

  // Fechar ao clicar fora
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });

  // Fechar ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !galleryModal.classList.contains("hidden")) {
      galleryModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  });
}); 