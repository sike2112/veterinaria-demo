export const WHATSAPP_NUMBER = '558896408809'

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message) {
  window.location.href = getWhatsAppUrl(message)
}
