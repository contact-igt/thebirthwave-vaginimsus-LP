import React from 'react';
import { Calendar } from 'lucide-react';

interface Doctor {
  name: string;
  role: string;
  qualification?: string;
  specialisation?: string;
  description: string;
  image: string;
  objectPosition: string;
}

export const CareTeam: React.FC = () => {
  // Founder Dr. Santoshi Nandigam strictly first, followed by Dr. Amudha, Deepa, and Dr. Aditi
  const team: Doctor[] = [
    {
      name: 'Dr. Santoshi Nandigam',
      role: 'Founder · Obstetrician & Gynaecologist',
      qualification: 'MBBS, DNB – Obstetrics & Gynaecology',
      specialisation: 'Natural Birth & VBAC Specialist · Holistic Fertility Coach',
      description:
        "Provides gynaecological and obstetric care, with a focus on women's health, natural birth and VBAC.",
      image: '/images/doctors/dr-santoshi.jpg',
      objectPosition: '50% 30%',
    },
    {
      name: 'Dr. Amudha Varshini',
      role: 'Naturopathy & Yoga Specialist',
      qualification: 'BNYS – Bachelor of Naturopathy and Yogic Sciences',
      specialisation: 'Prenatal & Postpartum Yoga Specialist',
      description:
        "Supports women's well-being through naturopathy, yoga and pregnancy-related movement and breathing practices.",
      image: '/images/doctors/dr-amudha.jpg',
      objectPosition: '50% 60%',
    },
    {
      name: 'Deepa',
      role: 'Mental Health Expert · Psychological Support',
      qualification: 'M.Sc Psychology',
      description:
        'Provides psychological support for emotional well-being, anxiety and concerns around intimacy.',
      image: '/images/doctors/dr-deepa.jpeg',
      objectPosition: '50% 28%',
    },
    {
      name: 'Dr. Aditi Nair',
      role: 'Pelvic Floor Therapy · Vaginismus Coach',
      description:
        'Supports women experiencing pelvic-floor concerns, pain and difficulty with penetration through personalised guidance.',
      image: '/images/doctors/dr-aditi.jpg',
      objectPosition: '50% 22%',
    },
  ];

  return (
    <section
      id="care-team"
      className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24"
      aria-label="Care team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-12">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            MEET YOUR CARE TEAM
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            Meet the People Behind Your Care
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Get to know the professionals supporting your health and well-being at The Birthwave, including their areas of expertise and experience.
          </p>
        </div>

        {/* 4-Card Equal Importance Grid: Simultaneously Visible on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8 md:mb-10">
          {team.map((doc, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg flex flex-col justify-between border bg-[#FAF3F0] border-sand/20 shadow-2xs hover:border-sand/35"
            >
              {/* Doctor Photograph Area with Natural Framing & Full Normal Opacity */}
              <div className="relative w-full aspect-[4/4.3] overflow-hidden bg-sand-pale/30">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role}`}
                  style={{ objectPosition: doc.objectPosition }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Nested White Content Box at Bottom (Inspired by Reference Design) */}
              <div className="p-3 sm:p-3.5 pt-0 mt-2">
                <div className="bg-white rounded-2xl p-4 sm:p-4.5 shadow-2xs border border-sand/15 flex flex-col justify-between h-full space-y-3 text-center">
                  
                  {/* Doctor Details */}
                  <div className="space-y-1 text-center">
                    <h3 className="font-heading font-semibold sm:font-bold text-base sm:text-lg text-charcoal leading-snug">
                      {doc.name}
                    </h3>
                    <p className="font-heading text-xs sm:text-[13px] font-semibold text-sand-dark leading-snug">
                      {doc.role}
                    </p>
                    {doc.qualification && (
                      <p className="font-body text-[11px] text-muted font-medium pt-0.5">
                        {doc.qualification}
                      </p>
                    )}
                    <p className="font-body text-xs text-charcoal/75 leading-relaxed pt-1.5 line-clamp-3">
                      {doc.description}
                    </p>
                  </div>

                  {/* Consultation Action Button */}
                  <div className="pt-2.5 border-t border-sand/10">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 font-heading text-xs font-semibold text-white bg-sand-dark hover:bg-coral rounded-full transition-colors shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book a Consultation</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Team Collaboration Reassurance Note */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Your care plan may involve one or more professionals depending on your individual needs. We never assume every patient requires every service.
          </p>
        </div>

      </div>
    </section>
  );
};
