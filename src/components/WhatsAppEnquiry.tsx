import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
const sessionKey = 'birthwave-enquiry-shown';
const whatsapp = 'https://wa.me/917904251378?text=' + encodeURIComponent('Hello, I would like to know more about the care options available at The BirthWave.');
export const WhatsAppEnquiry: React.FC = () => {
 const [open,setOpen] = useState(false);
 const dialog = useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  let shown=false;
  try { shown=sessionStorage.getItem(sessionKey)==='true'; } catch { /* Session memory remains available. */ }
  if(shown)return;
  let previousScrollY=window.scrollY;
  const onScroll=()=>{
   const currentScrollY=window.scrollY;
   const scrollingDown=currentScrollY>previousScrollY;
   previousScrollY=currentScrollY;
   if(shown||!scrollingDown||currentScrollY<40||document.visibilityState!=='visible')return;
   if(document.activeElement?.closest('form,#assessment,#video-resources,input,textarea,select,[role=dialog]'))return;
   if(Array.from(document.querySelectorAll<HTMLInputElement>('form input:not([type=checkbox]):not([type=radio]):not([type=hidden]),form textarea')).some(input=>input.value.trim()))return;
   const protectedArea=Array.from(document.querySelectorAll('#assessment,#video-resources')).some(element=>{
    const box=element.getBoundingClientRect();return box.top<innerHeight&&box.bottom>0;
   });
   if(protectedArea)return;
   shown=true;try{sessionStorage.setItem(sessionKey,'true');}catch{/* Keep in-memory guard. */}
   setOpen(true);
   window.removeEventListener('scroll',onScroll);
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  return ()=>window.removeEventListener('scroll',onScroll);
 },[]);
 useEffect(()=>{
  if(!open)return;
  const element=dialog.current;if(!element)return;
  const previous=document.activeElement as HTMLElement|null;
  const previousOverflow=document.body.style.overflow;
  element.showModal();document.body.style.overflow='hidden';
  return ()=>{element.close();document.body.style.overflow=previousOverflow;previous?.focus({preventScroll:true});};
 },[open]);
 if(!open)return null;
 return <dialog ref={dialog} aria-labelledby="enquiry-title" aria-describedby="enquiry-description" onCancel={event=>{event.preventDefault();setOpen(false);}}
  className="birthwave-enquiry w-[calc(100%-32px)] max-w-3xl max-h-[85dvh] overflow-y-auto rounded-3xl border border-sand/30 bg-cream p-6 sm:p-8 text-charcoal shadow-soft-lg">
  <button type="button" autoFocus onClick={()=>setOpen(false)} aria-label="Close enquiry" className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full text-sand-deep hover:bg-sand-pale focus-visible:outline focus-visible:outline-2"><X aria-hidden="true"/></button>
  <img src="/brand/wordmark-mauve.png" alt="The BirthWave" width="150" height="65" className="w-36 h-auto mb-5"/>
  <div className="grid sm:grid-cols-[1.5fr_1fr] gap-6 items-center">
   <div className="space-y-4"><h2 id="enquiry-title" className="font-heading font-semibold text-2xl sm:text-3xl text-sand-deep">Does Intimacy Feel Painful or Difficult?</h2>
    <p id="enquiry-description" className="text-sm sm:text-base leading-relaxed text-charcoal/80">Pain or difficulty with penetration could be associated with vaginismus or other pelvic health concerns. Our care team is here to help you understand your experiences and explore suitable care options.</p>
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-sand-dark hover:bg-sand-deep text-white rounded-full px-5 py-3 text-sm font-medium"><MessageCircle size={18} aria-hidden="true"/>WhatsApp Our Care Team</a>
   </div>
   <div className="grid grid-cols-[64px_1fr] sm:flex sm:flex-col items-center gap-3 sm:gap-4 sm:self-start sm:-mt-10">
    <img src="/brand/uterus-heart-symbol.svg" alt="" className="w-16 h-16 sm:w-full sm:h-auto sm:max-w-[300px] object-contain mx-auto" width="300" height="300"/>
    <p className="text-sm text-muted text-center">Take the first step, at your own pace.</p>
   </div>
  </div>
 </dialog>;
};
