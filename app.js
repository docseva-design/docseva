const services = [
  { id:"pan", icon:"🪪", en:"PAN Card", hi:"PAN Card", descEn:"New PAN and PAN-related assistance.", descHi:"नए PAN और PAN से संबंधित सहायता।" },
  { id:"voter", icon:"🗳️", en:"Voter ID Card", hi:"Voter ID Card", descEn:"Voter ID application assistance.", descHi:"Voter ID के लिए आवेदन सहायता।" },
  { id:"income", icon:"📄", en:"Income Certificate", hi:"Income Certificate", descEn:"Income certificate application assistance.", descHi:"Income Certificate के लिए आवेदन सहायता।" },
  { id:"domicile", icon:"🏠", en:"Domicile Certificate", hi:"Domicile Certificate", descEn:"Domicile certificate application assistance.", descHi:"Domicile Certificate के लिए आवेदन सहायता।" },
  { id:"gumasta", icon:"🏪", en:"Gumasta Registration", hi:"Gumasta Registration", descEn:"Shop and business registration assistance.", descHi:"Shop और business registration की सहायता।" },
  { id:"fssai", icon:"🍽️", en:"Food Licence (FSSAI)", hi:"Food Licence (FSSAI)", descEn:"FSSAI registration and licence assistance.", descHi:"FSSAI registration और licence की सहायता।" },
  { id:"udyam", icon:"🏢", en:"Udyam Registration", hi:"Udyam Registration", descEn:"Udyam/MSME registration assistance.", descHi:"Udyam/MSME registration की सहायता।" },
  { id:"passport", icon:"🛂", en:"Passport Assistance", hi:"Passport Assistance", descEn:"Passport application assistance.", descHi:"Passport application की सहायता।" },
  { id:"itr", icon:"💼", en:"ITR Filing", hi:"ITR Filing", descEn:"Income Tax Return filing assistance.", descHi:"Income Tax Return filing की सहायता।" },
  { id:"gst", icon:"📑", en:"GST Registration", hi:"GST Registration", descEn:"GST registration assistance for businesses.", descHi:"Business के लिए GST registration की सहायता।" }
];

let lang = "en";

const $ = selector => document.querySelector(selector);

const i18n = {
  en: {
    tagline:"Aapke Documents, Hamari Seva.",
    nav_services:"Services",
    nav_how:"How it works",
    nav_contact:"Contact",
    pill:"DOCUMENTATION ASSISTANCE",
    hero_title:"Aapke Documents,<br><em>Hamari Seva.</em>",
    hero_text:"Government aur business documentation services ke liye humse directly connect karein. Service choose karein aur WhatsApp par enquiry bhejein.",
    apply:"Enquire Now",
    track:"Connect With Us",
    secure:"Easy communication",
    support:"Bhopal-based support",
    bilingual:"Hindi + English",
    hero_card:"Your documentation needs, connected in one place.",
    our_services:"OUR SERVICES",
    services_title:"Choose a service",
    services_sub:"Apni required service select karein aur humse directly connect karein.",
    how_eyebrow:"HOW IT WORKS",
    how_title:"Simple, clear & convenient",
    s1t:"Choose service",
    s1p:"Apni required service select karein.",
    s2t:"Send enquiry",
    s2p:"Enquire Now par click karke WhatsApp par message bhejein.",
    s3t:"Get guidance",
    s3p:"Required documents aur process ki information humse lein.",
    s4t:"Complete your service",
    s4p:"Aage ki process hum aapko guide karenge.",
    contact_eyebrow:"CONTACT",
    contact_title:"Connect with DocSeva",
    contact_sub:"Hindi ya English mein humse baat karein.",
    footer_tag:"Aapke Documents, Hamari Seva.",
    footer_note:"DocSeva is an independent documentation assistance service and is not affiliated with any government department."
  },

  hi: {
    tagline:"आपके Documents, हमारी सेवा।",
    nav_services:"सेवाएं",
    nav_how:"कैसे काम करता है",
    nav_contact:"संपर्क",
    pill:"DOCUMENTATION ASSISTANCE",
    hero_title:"आपके Documents,<br><em>हमारी सेवा।</em>",
    hero_text:"Government और business documentation services के लिए हमसे सीधे connect करें। Service चुनें और WhatsApp पर enquiry भेजें।",
    apply:"Enquire Now",
    track:"Connect With Us",
    secure:"आसान communication",
    support:"भोपाल से support",
    bilingual:"हिंदी + English",
    hero_card:"आपकी documentation जरूरतों के लिए एक जगह।",
    our_services:"हमारी सेवाएं",
    services_title:"Service चुनें",
    services_sub:"अपनी required service चुनें और हमसे सीधे connect करें।",
    how_eyebrow:"कैसे काम करता है",
    how_title:"आसान, साफ और convenient",
    s1t:"Service चुनें",
    s1p:"अपनी जरूरत की service चुनें।",
    s2t:"Enquiry भेजें",
    s2p:"Enquire Now पर click करके WhatsApp पर message भेजें।",
    s3t:"Guidance लें",
    s3p:"Required documents और process की जानकारी हमसे लें।",
    s4t:"Service complete करें",
    s4p:"आगे की process में हम आपको guide करेंगे।",
    contact_eyebrow:"संपर्क",
    contact_title:"DocSeva से जुड़ें",
    contact_sub:"हमसे हिंदी या English में बात करें।",
    footer_tag:"आपके Documents, हमारी सेवा।",
    footer_note:"DocSeva एक independent documentation assistance service है और किसी government department से affiliated नहीं है।"
  }
};

function renderServices() {
  const grid = $("#serviceGrid");

  if (!grid) return;

  grid.innerHTML = services.map(service => `
    <article class="service">
      <div class="service-icon">${service.icon}</div>
      <h3>${lang === "en" ? service.en : service.hi}</h3>
      <p>${lang === "en" ? service.descEn : service.descHi}</p>
      <button class="btn primary apply-btn" data-id="${service.id}">
        ${i18n[lang].apply}
      </button>
    </article>
  `).join("");

  document.querySelectorAll(".apply-btn").forEach(button => {
    button.addEventListener("click", function() {
      const service = services.find(s => s.id === this.dataset.id);

      if (!service) return;

      const message =
        "Hello DocSeva,%0A%0A" +
        "I want information about: " +
        encodeURIComponent(service.en) +
        "%0A%0APlease guide me regarding the required documents, process and charges.";

      window.open(
        "https://wa.me/919584279861?text=" + message,
        "_blank"
      );
    });
  });
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (i18n[lang][key]) {
      element.innerHTML = i18n[lang][key];
    }
  });

  const langButton = $("#langBtn");

  if (langButton) {
    langButton.textContent = lang === "en" ? "हिन्दी" : "English";
  }

  renderServices();
}

document.addEventListener("DOMContentLoaded", function() {

  const langButton = $("#langBtn");

  if (langButton) {
    langButton.addEventListener("click", function() {
      lang = lang === "en" ? "hi" : "en";
      applyLang();
    });
  }

  applyLang();

});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
