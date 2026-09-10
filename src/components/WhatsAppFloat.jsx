import { MESSAGES } from '../data/content.js'
import { openWhatsApp } from '../utils/whatsapp.js'

function WhatsAppFloat() {
  return (
    <button
      type="button"
      className="whatsapp-float"
      aria-label="Falar com a VittaVet pelo WhatsApp"
      onClick={() => openWhatsApp(MESSAGES.geral)}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.24.62 4.34 1.7 6.14L4 29l8.14-1.62a12.9 12.9 0 0 0 3.88.6c6.62 0 12.02-5.36 12.02-11.94C28.04 8.36 22.64 3 16.02 3Zm7.02 17.06c-.3.84-1.5 1.56-2.44 1.76-.65.14-1.5.24-4.36-.94-3.66-1.5-6.02-5.18-6.2-5.42-.18-.24-1.48-1.96-1.48-3.74 0-1.78.94-2.65 1.27-3.01.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.64-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71Z" />
      </svg>
    </button>
  )
}

export default WhatsAppFloat
