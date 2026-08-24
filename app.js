const services = [
  {id:"pan-new", icon:"🪪", en:"New PAN Card", hi:"नया PAN Card", price:"₹300", descEn:"New PAN application assistance.", descHi:"नए PAN के लिए आवेदन सहायता।"},
  {id:"pan-correction", icon:"✏️", en:"PAN Card Correction", hi:"PAN Card Correction", price:"₹350", descEn:"Correction/update assistance for PAN.", descHi:"PAN में correction/update की सहायता।"},
  {id:"aadhaar-address", icon:"🆔", en:"Aadhaar Address Update", hi:"आधार Address Update", price:"On request", descEn:"Address update assistance through your authorised workflow.", descHi:"आपके authorised workflow के अनुसार address update सहायता।"},
  {id:"fssai", icon:"🍽️", en:"FSSAI Registration / License", hi:"FSSAI Registration / License", price:"₹300/year", descEn:"FSSAI application assistance; fee shown is your current service price.", descHi:"FSSAI आवेदन सहायता; दिखाई गई fee आपकी वर्तमान service price है।"},
  {id:"gumasta", icon:"🏪", en:"Gumasta / Shop Registration", hi:"Gumasta / Shop Registration", price:"₹1,500", descEn:"Lifetime-validity service as currently offered by your business.", descHi:"आपके business द्वारा अभी offered lifetime-validity service।"},
  {id:"printing", icon:"🖨️", en:"Printing & Documentation", hi:"Printing & Documentation", price:"On request", descEn:"Printing, scanning and document assistance.", descHi:"Printing, scanning और document assistance।"}
];

let lang = "en";
const $ = s => document.querySelector(s);

const i18n = {
  en:{
    tagline:"Aapke Documents, Hamari Seva.", nav_services:"Services",nav_how:"How it works",nav_track:"Track Order",nav_contact:"Contact",
    pill:"Online Document Service",hero_title:"Aapke Documents,<br><em>Hamari Seva.</em>",
    hero_text:"Ghar baithe documentation services ke liye apply karein. Documents upload karein, advance payment karein aur order status track karein.",
    apply:"Apply Now",track:"Track Order",secure:"Secure workflow",support:"Bhopal-based support",bilingual:"Hindi + English",
    hero_card:"One place for your document services.",our_services:"OUR SERVICES",services_title:"Choose a service",services_sub:"Select a service to see the starting fee and apply.",
    how_eyebrow:"HOW IT WORKS",how_title:"Simple, clear & online",s1t:"Choose service",s1p:"Apni required service select karein.",s2t:"Upload documents",s2p:"Required documents ki details dein.",s3t:"Pay advance",s3p:"Order confirm karne ke liye 50% advance.",s4t:"We process",s4p:"Aap order status online track kar sakte hain.",
    track_eyebrow:"ORDER TRACKING",track_title:"Apna order track karein",track_sub:"Demo tracker abhi frontend par hai. Backend connect hone ke baad real-time status dikhega.",track_btn:"Track",
    contact_eyebrow:"CONTACT",contact_title:"DocSeva, Bhopal",contact_sub:"Hindi ya English mein humse baat karein.",
    footer_tag:"Aapke Documents, Hamari Seva.",footer_note:"This website is an initial prototype. Service eligibility and authorised workflows apply.",
    upload_label:"Select document files",upload_note:"For this prototype, files are not uploaded to a server. Secure backend storage will be added before live document collection.",continue_whatsapp:"Continue on WhatsApp"
  },
  hi:{
    tagline:"आपके Documents, हमारी सेवा।",nav_services:"सेवाएं",nav_how:"कैसे काम करता है",nav_track:"Order Track करें",nav_contact:"संपर्क",
    pill:"ऑनलाइन Document Service",hero_title:"आपके Documents,<br><em>हमारी सेवा।</em>",
    hero_text:"घर बैठे documentation services के लिए apply करें। Documents की जानकारी दें, advance payment करें और order status track करें।",
    apply:"Apply Now",track:"Order Track करें",secure:"सुरक्षित workflow",support:"भोपाल से support",bilingual:"हिंदी + English",
    hero_card:"आपकी document services के लिए एक जगह।",our_services:"हमारी सेवाएं",services_title:"Service चुनें",services_sub:"Service की fee देखें और apply करें।",
    how_eyebrow:"कैसे काम करता है",how_title:"आसान, साफ और online",s1t:"Service चुनें",s1p:"अपनी जरूरत की service चुनें।",s2t:"Documents दें",s2p:"Required documents की जानकारी दें।",s3t:"Advance payment",s3p:"Order confirm करने के लिए 50% advance।",s4t:"हम process करेंगे",s4p:"आप online order status track कर सकेंगे।",
    track_eyebrow:"ORDER TRACKING",track_title:"अपना order track करें",track_sub:"यह अभी frontend demo है। Backend जुड़ने के बाद real-time status दिखेगा।",track_btn:"Track करें",
    contact_eyebrow:"संपर्क",contact_title:"DocSeva, भोपाल",contact_sub:"हमसे हिंदी या English में बात करें।",
    footer_tag:"आपके Documents, हमारी सेवा।",footer_note:"यह website शुरुआती prototype है। Service eligibility और authorised workflows लागू होंगे।",
    upload_label:"Document files चुनें",upload_note:"इस prototype में files server पर upload नहीं होतीं। Live document collection से पहले secure backend storage जोड़ा जाएगा।",continue_whatsapp:"WhatsApp पर जारी रखें"
  }
};

function renderServices(){
  $("#serviceGrid").innerHTML = services.map(s=>`
    <article class="service">
      <div class="service-icon">${s.icon}</div>
      <h3>${lang==="en"?s.en:s.hi}</h3>
      <div class="price">${s.price}</div>
      <p>${lang==="en"?s.descEn:s.descHi}</p>
      <button class="btn primary apply-btn" data-id="${s.id}">${i18n[lang].apply}</button>
    </article>`).join("");
  document.querySelectorAll(".apply-btn").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.id)));
}
function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(i18n[lang][key]) el.innerHTML=i18n[lang][key];
  });
  $("#langBtn").textContent = lang==="en" ? "हिन्दी" : "English";
  renderServices();
}
$("#langBtn").onclick=()=>{lang=lang==="en"?"hi":"en";applyLang();};

let selected=null;
function openModal(id){
  selected=services.find(s=>s.id===id);
  $("#modalTitle").textContent=lang==="en"?selected.en:selected.hi;
  $("#modalPrice").textContent=`${selected.price} • 50% advance model`;
  $("#modal").hidden=false;
}
$("#closeModal").onclick=()=>$("#modal").hidden=true;
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal") $("#modal").hidden=true;});

$("#applyForm").onsubmit=e=>{
  e.preventDefault();
  const name=$("#name").value.trim(), mobile=$("#mobile").value.trim(), notes=$("#notes").value.trim();
  const msg=`Hello DocSeva,%0A%0AI want to apply for: ${selected.en}%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ANotes: ${encodeURIComponent(notes||"N/A")}%0AService price: ${encodeURIComponent(selected.price)}%0A%0APlease guide me for the next steps.`;
  window.open(`https://wa.me/919584279861?text=${msg}`,"_blank");
};

$("#trackForm").onsubmit=e=>{
  e.preventDefault();
  const id=$("#orderId").value.trim();
  $("#trackResult").hidden=false;
  $("#trackResult").innerHTML=`<b>${id}</b><br><span style="color:#63758b">Demo status: <strong>Processing</strong>. Real order tracking will be connected to the secure backend.</span>`;
};

if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
applyLang();
