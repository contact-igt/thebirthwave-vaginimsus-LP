import React from 'react';
import { Calendar } from 'lucide-react';

interface Doctor {
  name: string;
  role: string;
  qualification?: string;
  description: string;
  image: string;
  objectPosition: string;
}

export const CareTeam: React.FC = () => {
  // Founder Dr. Santoshi Nandigam strictly first, followed by Dr. Amudha, Deepa, and Dr. Adithi
  const team: Doctor[] = [
    {
      name: 'Dr. Santoshi Nandigam',
      role: 'Founder · Obstetrician & Gynaecologist',
      qualification: 'MBBS, DNB – Obstetrics & Gynaecology',
      description:
        "Provides gynaecological and obstetric care, with a focus on women's health and natural birth.",
      image: '/images/doctors/dr-santoshi.jpg',
      objectPosition: '50% 30%',
    },
    {
      name: 'Dr. Amudha Varshini',
      role: 'Naturopathy & Yoga Specialist',
      qualification: 'BNYS – Bachelor of Naturopathy and Yogic Sciences',
      description:
        "Supports women's well-being through naturopathy, yoga and pregnancy-related movement.",
      image: '/images/doctors/dr-amudha.jpg',
      objectPosition: '50% 40%',
    },
    {
      name: 'Deepa',
      role: 'Mental Health Expert · Psychological Support',
      qualification: 'M.Sc Psychology',
      description:
        'Supports emotional well-being, anxiety and concerns around intimacy.',
      image: '/images/doctors/dr-deepa.jpeg',
      objectPosition: '50% 35%',
    },
    {
      name: 'Dr. Adithi Nair',
      role: 'Pelvic Floor Therapy · Vaginismus Rehab Specialist',
      description:
        'Supports women experiencing pelvic-floor concerns, pain and difficulty with penetration.',
      image: '/images/doctors/dr-adithi.jpg',
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
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-12 sm:mb-14 md:mb-16">
          <span className="font-heading font-semibold text-xs text-sand-dark uppercase tracking-[0.12em]">
            MEET YOUR CARE TEAM
          </span>
          <h2 className="font-heading font-semibold sm:font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-charcoal tracking-tight">
            Meet the People Behind Your Care
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Meet the professionals supporting your health and well-being at The Birthwave.
          </p>
        </div>

        {/* 4-Profile Grid with Circular Overlapping Portraits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-14 gap-x-5 lg:gap-x-5 xl:gap-x-6 mb-8 md:mb-10 items-stretch">
          {team.map((doc, idx) => (
            <div
              key={idx}
              className="relative pt-16 sm:pt-20 flex flex-col group h-full"
            >
              {/* Circular Portrait Frame - Centred & Overlapping Top Edge of Rectangular Card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-[3px] border-white shadow-soft-lg z-10 bg-sand-pale/40 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role}`}
                  style={{ objectPosition: doc.objectPosition }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Rectangular Information Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-sand/20 p-5 sm:p-5.5 pt-14 sm:pt-16 shadow-soft group-hover:shadow-soft-lg group-hover:border-sand/35 transition-all duration-300 flex flex-col justify-between flex-1 text-center group-hover:-translate-y-1">
                
                {/* Professional Details */}
                <div className="space-y-1.5 flex flex-col items-center">
                  {/* Name */}
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-charcoal leading-snug">
                    {doc.name}
                  </h3>
                  
                  {/* Area of Expertise */}
                  <p className="font-heading text-xs sm:text-[13px] font-semibold text-sand-dark leading-snug">
                    {doc.role}
                  </p>
                  
                  {/* Qualification (Subtle Secondary Text) */}
                  {doc.qualification ? (
                    <p className="font-body text-xs text-muted font-medium min-h-[18px]">
                      {doc.qualification}
                    </p>
                  ) : (
                    <div className="min-h-[18px]" aria-hidden="true" />
                  )}
                  
                  {/* Short Professional Description */}
                  <p className="font-body text-xs sm:text-[13px] text-charcoal/75 leading-relaxed pt-1.5">
                    {doc.description}
                  </p>
                </div>

                {/* Book a Consultation Button (Pinned Consistently at Bottom) */}
                <div className="mt-5 pt-4 border-t border-sand/15">
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
          ))}
        </div>

        {/* Team Collaboration Reassurance Note */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="font-body text-xs sm:text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Your care plan may involve one or more professionals depending on your individual needs. We never assume every patient requires every service.
          </p>
        </div>

      </div>
    </section>
  );
};
