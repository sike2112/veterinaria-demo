import { CLINIC } from '../data/content.js'

function Logo({ inverse = false, className = '' }) {
  return (
    <span className={`logo ${inverse ? 'logo--inverse' : ''} ${className}`}>
      <svg
        className="logo__mark"
        viewBox="0 0 36 36"
        role="presentation"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="17" />
        <circle cx="18" cy="18" r="9.5" className="logo__mark-ring" />
        <circle cx="18" cy="18" r="3.4" className="logo__mark-dot" />
      </svg>
      <span className="logo__word">
        {CLINIC.name}
        <span className="logo__tagline">{CLINIC.tagline}</span>
      </span>
    </span>
  )
}

export default Logo
