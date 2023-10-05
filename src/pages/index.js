import Image from 'next/image'
import styles from 'src/app/page.module.css'


export default function Home() {
  return (
    <>
      <section className="pg-index-main">
        <h1 className="u-width-960">Hi! I'm Nao.<br />
          I build things for the web</h1>
        <div className="particle-wrapper" id="js-particle-wrapper">
          <div className="particle particle-front particle-8"></div>
          <div className="particle particle-back particle-7"></div>
          <div className="particle particle-front particle-6"></div>
          <div className="particle particle-back particle-5"></div>
          <div className="particle particle-front particle-4"></div>
          <div className="particle particle-back particle-3"></div>
          <div className="particle particle-front particle-2"></div>
          <div className="particle particle-back particle-1"></div>
        </div>
        <span className="scroll-border">Scroll</span>
      </section>
    </>
  )
}
