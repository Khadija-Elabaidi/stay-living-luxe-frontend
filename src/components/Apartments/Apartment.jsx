import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BedDouble, Bath, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { listings } from '../data/content'
import './Apartment.css'

export default function Apartment() {
  const trackRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const width = card ? card.offsetWidth + 24 : 320
    el.scrollBy({ left: dir * width, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const card = el.querySelector('[data-card]')
      const width = card ? card.offsetWidth + 24 : 320
      setActiveDot(Math.round(el.scrollLeft / width))
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="nos-logements" className="listings-section">
      <div className="listings-container">
        
        <div className="listings-header">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="listings-title">
              Nos logements
              <span className="listings-title-line" />
            </h2>
          </motion.div>

          <div className="listings-view-all">
            <a href="#contact" className="listings-link">
              VOIR TOUS LES LOGEMENTS <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="listings-track-wrapper">
          <div
            ref={trackRef}
            className="listings-track [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none' }}
          >
            {listings.map((l, i) => (
              <motion.article
                data-card
                key={l.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="listing-card"
              >
                <div className="card-image-wrapper">
                  <img
                    src={l.img}
                    alt={l.name}
                    className="card-image"
                    style={{ filter: 'sepia(0.12) saturate(1.1) contrast(1.03)' }}
                  />
                  <div className="card-image-overlay" />
                  <div className="card-badge">
                    DISPONIBLE
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{l.name}</h3>
                  
                  <div className="card-features">
  <span className="feature-item">
    <BedDouble className="feature-icon" size={16} strokeWidth={1.5} />
    {l.beds}
  </span>

  <span className="feature-item">
    <Bath className="feature-icon" size={16} strokeWidth={1.5} />
    {l.baths}
  </span>

  <span className="feature-item">
    <Users className="feature-icon" size={16} strokeWidth={1.5} />
    {l.guests} pers.
  </span>
</div>

                  <div className="card-footer">
                    <span className="card-price-label">
                      À partir de <span className="card-price-value">{l.price}€</span>/nuit
                    </span>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#contact"
                      className="card-action-btn"
                      aria-label={`Réserver ${l.name}`}
                    >
                      <ArrowRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <button
            onClick={() => scrollByCard(-1)}
            className="slider-arrow-btn slider-arrow-prev"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={() => scrollByCard(1)}
            className="slider-arrow-btn slider-arrow-next"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="slider-dots">
          {listings.map((_, i) => (
            <span
              key={i}
              className="slider-dot-item"
              style={{
                width: i === activeDot ? 24 : 8,
                backgroundColor: i === activeDot ? '#C9A15F' : '#E4DCCB',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}