import React from 'react';
import { Scale, Check, Minus, Info } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonRows = [
    {
      area: 'Initial Discussion & History',
      online: 'Consultation and symptom discussion conducted remotely via video call.',
      birthwave: 'In-person clinical consultation and individual physical assessment in Chennai.',
      highlight: false,
    },
    {
      area: 'Pelvic-Floor Muscle Assessment',
      online: 'Not possible remotely; requires separate external in-person clinical arrangements.',
      birthwave: 'Specialist pelvic-floor physiotherapy assessment coordinated on-site.',
      highlight: true,
    },
    {
      area: 'Physical Pelvic Rehabilitation',
      online: 'May require referral to a third-party physical therapy provider.',
      birthwave: 'Hands-on pelvic-floor down-training, bio-awareness & graded exercises included.',
      highlight: true,
    },
    {
      area: 'Psychological & Emotional Support',
      online: 'Virtual talk therapy and psychological counselling is typically the primary service.',
      birthwave: 'Psychological support coordinated collaboratively alongside physical rehabilitation.',
      highlight: false,
    },
    {
      area: 'Yoga, Breathwork & Somatic Relaxation',
      online: 'May include general remote exercise videos or recommendations.',
      birthwave: 'Individualised yoga, breathing, and relaxation guidance adapted to muscle tone.',
      highlight: false,
    },
    {
      area: 'Partner Involvement & Couple Guidance',
      online: 'Depends on the individual remote service provider.',
      birthwave: 'Individual and joint educational discussions arranged when comfortable.',
      highlight: false,
    },
    {
      area: 'Care Coordination & Follow-Up',
      online: 'Often fragmented between separate, unlinked practitioners.',
      birthwave: 'Unified follow-up coordinated directly across gynaecologist, physio, and counselor.',
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-pale text-sand-dark text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Understanding Care Options</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            Is Online Counselling Alone Enough for Vaginismus?
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Online counselling provides valuable emotional support and education. 
            However, vaginismus often involves physical neuromuscular responses that benefit from an in-person assessment.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-border-soft shadow-soft mb-8 bg-cream">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border-soft">
                  <th className="py-4 px-6 text-sm font-bold text-charcoal w-1/3 bg-sand-pale/60">
                    Area of Care
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-muted w-1/3 bg-white/70">
                    Online Counselling Focus
                  </th>
                  <th className="py-4 px-6 text-sm font-bold text-sand-deep w-1/3 bg-sand-pale">
                    The Birthwave Coordinated In-Person Care
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft/60 text-xs sm:text-sm text-charcoal/85">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-sand-pale/25' : 'bg-white/40'}>
                    <td className="py-4 px-6 font-semibold text-charcoal">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 text-muted">
                      {row.online}
                    </td>
                    <td className="py-4 px-6 font-medium text-charcoal bg-sand-pale/40">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.birthwave}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Balanced Conclusion Box */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-cream border border-border-soft text-center space-y-2.5">
          <p className="text-sm text-charcoal/80 leading-relaxed">
            <strong className="text-charcoal font-semibold">A Balanced Perspective:</strong>{' '}
            Both online and in-person approaches have an important role. The most appropriate care depends on your 
            symptoms, physical muscle tightness, access to qualified clinicians, and individual clinical assessment.
          </p>
          <p className="text-xs text-muted">
            The vital question is not simply whether care is virtual or offline, but whether the support addresses 
            all physical and emotional factors contributing to your personal experience.
          </p>
        </div>

      </div>
    </section>
  );
};

