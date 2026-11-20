import React from 'react';
import './care-programme.css';
import { Stethoscope, CheckCircle2, MapPin } from 'lucide-react';
const heading = 'font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight';
const button = 'inline-flex items-center justify-center px-6 py-3 rounded-full bg-sand-dark hover:bg-sand-deep text-white font-heading font-medium text-sm transition-colors';
const cards = [
 { title: 'Individualized Pelvic Floor Physiotherapy', count: '10 Sessions', duration: '90 Minutes Per Session', image: '/images/services/edf2bd48-f28b-4157-8ec3-76c4dec6cac0.png', description: 'One-to-one physiotherapy sessions focusing on individualized assessment, pelvic floor muscle awareness, relaxation and treatment approaches appropriate to your symptoms and comfort.' },
 { title: 'Yoga & Meditation', count: '12 Sessions Per Month', duration: '60 Minutes Per Session', image: '/images/services/c70987ee-3483-4ebe-851d-e454f06589c5.png', description: 'Guided yoga, breathing awareness and meditation designed to support relaxation, body awareness and overall physical and emotional well-being.' },
 { title: 'Counselling & Emotional Support', count: '2 Sessions Per Month', duration: '60 Minutes Per Session', image: '/images/services/738ad2be-7b95-48a8-993d-44a96e15ed3d.png', description: 'Supportive counselling to explore emotional concerns, anxiety and experiences associated with pain, penetration or intimacy. Hypnotherapy may be considered when appropriate.' },
 { title: 'WhatsApp Support Group', count: 'Continued Support', duration: null, image: '/images/services/0e5fc711-43bb-4f2e-8f62-0f47dcced0b9.png', description: "Access to The BirthWave's WhatsApp support group, providing an additional way to stay connected and seek support during the care journey." },
];
export const CareProgramme: React.FC = () => <section id="treatment-programme" className="py-12 md:py-16 scroll-mt-24">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <header className="max-w-3xl mx-auto text-center space-y-3 mb-8">
   <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sand-dark">YOUR VAGINISMUS CARE PROGRAMME</p>
   <h2 className={heading}>A Structured Journey Towards Comfort, Confidence and Well-Being</h2>
   <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">Vaginismus care can involve both physical and emotional support. At The BirthWave, our multidisciplinary programme brings together individualized pelvic floor physiotherapy, gynaecological guidance, counselling, yoga and meditation to help you work towards your personal care goals.</p>
  </header>
  <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-sand-deep text-center mb-3">What's Included in Your Care Programme?</h3>
  <p className="text-sm sm:text-base text-charcoal/80 text-center mb-6">Session details for the in-person programme.</p>
  <div className="grid md:grid-cols-2 gap-5">
   {cards.map((card,index)=><article key={card.title} className={`rounded-2xl border p-5 sm:p-6 shadow-soft bg-white/90 ${index===0?'border-sand/60':'border-sand/25'}`}>
    <h4 className="font-heading text-lg sm:text-xl font-semibold text-sand-deep text-center min-h-14 flex items-center justify-center mb-2">{card.title}</h4>
    <div className="programme-art w-full rounded-xl overflow-hidden mb-2 flex items-center justify-center" style={index===3?{background: 'linear-gradient(#fcf2ec, #fdf4ef 50%, #fcf2ed)'}:undefined}>
     <img src={card.image} alt={`${card.title} illustration`} width={index===3?1122:1536} height={index===3?1402:1024} loading="lazy" decoding="async" className="w-full h-full object-contain" />
    </div>
    <p className="font-heading text-2xl font-bold text-sand-dark text-center">{card.count}</p>
    {card.duration&&<p className="text-sm font-medium text-sand-deep mt-1 text-center">{card.duration}</p>}
    <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mt-4 pt-4 border-t border-sand/25">{card.description}</p>
    {index===0&&<p className="text-sm font-medium text-sand-dark mt-3">Individualized Assessment · Personalized Treatment</p>}
    {index===3&&<p className="text-sm text-muted mt-3">Participation is optional. Ask the care team about privacy arrangements before joining.</p>}
   </article>)}
  </div>
  <div className="mt-6 rounded-2xl bg-sand-pale/70 p-5 flex gap-4"><Stethoscope className="shrink-0 text-sand-dark" aria-hidden="true"/><div><h3 className="font-heading font-semibold text-lg mb-2">Medical Guidance Throughout Your Care Journey</h3><p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">Gynaecological guidance forms part of The BirthWave's multidisciplinary approach, helping patients understand their concerns and explore appropriate care options.</p></div></div>
  <div className="text-center mt-6"><p className="text-sm text-muted mb-4">Your individual care requirements may vary. The appropriate treatment approach will be discussed following your assessment and consultation.</p><a className={button} href="#contact">Enquire About the Vaginismus Programme</a></div>
 </div>
</section>;
export const IndividualizedCare: React.FC = () => <section id="individualized-care" className="py-12 md:py-16 bg-sand-pale/65">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
  <figure><img src="/images/services/c5901659-0269-411e-8a1d-0188abb759e3.png" alt="Illustration of a physiotherapist assisting a woman on an exercise ball" width="1218" height="1291" loading="lazy" className="w-full h-auto object-contain mix-blend-darken" /></figure>
  <div className="one-to-one-content space-y-4"><p className="text-xs font-semibold tracking-[0.12em] text-sand-dark">PERSONALIZED ONE-TO-ONE CARE</p><h2 className={heading}>Every Woman's Experience Is Different. Her Care Should Be Too.</h2>
   <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">No two experiences of vaginismus are exactly alike. At The BirthWave, pelvic floor physiotherapy is provided through individualized, one-to-one sessions rather than group physiotherapy.</p>
   <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">Your assessment and treatment approach are guided by your symptoms, physical needs, comfort and personal care goals.</p>
   <p className="text-sm font-medium text-sand-dark border-l-2 border-sand pl-3">One-to-one care, not group physiotherapy.</p>
   <div className="grid sm:grid-cols-2 gap-3">{[
    ['One-to-One Sessions','Individual attention from your pelvic floor physiotherapy specialist.'],['Individualized Assessment','An assessment guided by your symptoms, concerns and comfort.'],['Personalized Treatment','Treatment approaches adapted to your individual needs.'],['Care at Your Own Pace','A supportive approach that respects your boundaries and informed consent.']
   ].map(([title,text])=><div key={title} className="rounded-xl bg-cream/90 border border-sand/25 p-4"><h3 className="font-heading font-semibold text-sm flex gap-2 items-center"><CheckCircle2 size={17} className="text-sand-dark shrink-0" aria-hidden="true"/>{title}</h3><p className="text-sm text-muted mt-1">{text}</p></div>)}</div>
   <p className="text-sm font-medium text-sand-dark">Your assessment is individual. Your treatment should be too.</p>
  </div>
 </div>
</section>;
export const TravellingForCare: React.FC = () => <section id="beyond-chennai" className="py-14 md:py-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <div className="space-y-4">
   <p className="text-xs font-semibold tracking-[0.12em] text-sand-dark">CARE THAT BRINGS WOMEN TOGETHER</p><h2 className={heading}>Trusted Beyond Chennai</h2>
   <p className="text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto">Women have travelled from Bengaluru, Madurai, Chidambaram and other locations to seek vaginismus care at The BirthWave in Chennai.</p>
   <div className="care-journey" aria-label="Women travel from these locations to The BirthWave in Chennai">
    <ul className="care-origins">{['Bengaluru','Madurai','Chidambaram','Other Locations'].map(city=><li key={city}><MapPin className="care-origin-pin" size={17} aria-hidden="true"/>{city}</li>)}</ul>
    <svg className="care-routes" viewBox="0 0 160 240" fill="none" preserveAspectRatio="none" aria-hidden="true">
     <path d="M0 30 C75 30 70 120 145 120 M0 90 C75 90 70 120 145 120 M0 150 C75 150 70 120 145 120 M0 210 C75 210 70 120 145 120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5"/><path d="M136 112 L146 120 L136 128" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
    <div className="care-destination"><MapPin size={28} aria-hidden="true"/><span className="text-xs uppercase tracking-[0.12em]">Care destination</span><h3 className="font-heading font-semibold text-lg sm:text-xl">Chennai — The BirthWave</h3><a className={button} href="#contact">Speak With Our Care Team</a></div>
   </div>
   <p className="text-sm text-muted">Personalized care, wherever your journey begins.</p>
  </div>
 </div>
</section>;
