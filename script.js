// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* === FUNGSI DROPDOWN ABOUT US === */
document.addEventListener('DOMContentLoaded', function() {
    // Pastikan kita merujuk butang dropdown yang betul
    const dropbtn = document.querySelector('.about-dropbtn'); 
    const dropdownContent = document.getElementById("aboutDropdown");

    if (dropbtn && dropdownContent) {
        // ... (Kekalkan kod fungsi toggle dan window.onclick sedia ada)
        dropbtn.addEventListener('click', function(event) {
            event.stopPropagation(); 
            dropdownContent.classList.toggle("show");
        });

        // Logik untuk menutup dropdown bila klik di luar
        window.onclick = function(event) {
            if (!event.target.matches('.about-dropbtn')) {
                const openDropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < openDropdowns.length; i++) {
                    const openDropdown = openDropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }
});


const hospitalData = [
    // Pastikan URL di sini adalah URL Apps Script yang betul
    // Jika tiada URL, biarkan string kosong seperti ini: ''
    //---N9-------
    { name: "Hospital Tuanku Ja'afar, Seremban", 
        id: "TUANKU-JAAFAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbzPo5GejnnVGMMpjrxXeSgrGshHAfIz_0tGN2KSsF4MbkU8hWdc6T9Hs1CSWBc0B1UDWA/exec" },
    { name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah", 
        id: "KPL-KUALA-PILAH", sheetsUrl: "https://script.google.com/macros/s/AKfycbyvaosSv4j72-m2PiTFIx-rmIJGb0kYECUQrecAYVuFzL5xx-kCMsSqfM3zwY5rwU3S/exec" },
    { name: "Hospital Jempol", 
        id: "JMP-JEMPOL", sheetsUrl: "https://script.google.com/macros/s/AKfycbxUsAIoRrXrIK_dJcPRMjlc9lq_iaodP0lQyyX8qPx2b4c2Qln-xxmjyh0y7qoTpZY/exec" },
    { name: "Hospital Jelebu",
        id: "JLB-JELEBU", sheetsUrl:"https://script.google.com/macros/s/AKfycbyX1w0Q6Vny-kyH0srVranEx7EDwby98bdpBW7rQ-7OTSZE99aIVamGiAgNetiPy0Xx/exec" },
    { name: "Hospital Port Dickson", 
        id: "PDX-PORT-DICKSON", sheetsUrl:"https://script.google.com/macros/s/AKfycbwbm53eecbX3sDT9Ai6utjkv90GvXl9Mr1u_839BonY7DNMxKhFEFhYixmwAA1ZyU7bZQ/exec"},
    { name: "Hospital Tampin", 
        id: "TMP-TAMPIN", sheetsUrl: "https://script.google.com/macros/s/AKfycbyQKkxGfjSEin9YJoODe10d-mctQtkfhYqTtNcX60gvVWvwW2T09zM6NraAZkux0U3L/exec" },

    // --- MELAKA ---
    { name: "Hospital Melaka", 
        id: "MKA-MLK", sheetsUrl: "https://script.google.com/macros/s/AKfycbykZ52WTm5dbJ1AgeS8yL2TrpRXa2awip4gW_XWGzB343nZRrRjjK_pMwextAnvL0PE/exec"},
    { name: "Hospital Jasin", 
        id: "JSN-JASIN", sheetsUrl: "https://script.google.com/macros/s/AKfycbwKJ0OXG8frC98c7o_KD6f2NoXrnkIWhIUiQx7q8V2CZiTszq1dIHtFFBdr5Dgq9jyC/exec" },
    { name: "Hospital Alor Gajah", 
        id: "AGJ-ALOR-GAJAH", sheetsUrl: "https://script.google.com/macros/s/AKfycbxzgML-20kWlkpvexFk1I3k-BOSxbaHfA0VjQQ7ZbVen3l36FqLy6QWV9EK8Ypmub3J/exec" },

    // --- JOHOR ---
    { name: "Hospital Sultanah Aminah, Johor Bahru", 
        id: "HSA-JOHOR", sheetsUrl: "https://script.google.com/macros/s/AKfycbxAgWFABJebLSW1hRKemrOlxvKo3uoPjKRDVumQppG7mBWwaKMCZmxwvRiBR0jZyRbLLA/exec" },
    { name: "Hospital Sultan Ismail, Johor Bahru", 
        id: "HSI-JOHOR", sheetsUrl: "https://script.google.com/macros/s/AKfycbwTX5ftXVLmIwnzGEpVS0MzrI5IFrKkRp07Li0eH_E7-xuYcDwq1nVQ6-zFSH6ySSXk-w/exec" },
    { name: "Hospital Pakar Sultanah Fatimah, Muar", 
        id: "HPSF-MUAR", sheetsUrl: "https://script.google.com/macros/s/AKfycbyCMLOS0uwZin1th1ZYM1-7oH2TmNvzW09Czj7fj5VK7aNCAjK4hXHK9tSLsFYi_bB9/exec" },
    { name: "Hospital Kluang", 
        id: "KLN-KLUANG", sheetsUrl: "https://script.google.com/macros/s/AKfycbzuHIQMz8aMCPYYPYyeZI7CkPZlY2pwWxDfBu4HWW71oCIS-PFMxvaR7t_K8dMhlTX4sQ/exec" },
    { name: "Hospital Batu Pahat", 
        id: "BPH-BATU-PAHAT", sheetsUrl: "https://script.google.com/macros/s/AKfycbyvV0Gyh7m128V1xEq01L3VhfU7lH3s9D44-R0OUKXT5nVI0y-149C0UOVXj7XZLRTSkQ/exec" },
    { name: "Hospital Pontian", 
        id: "PON-PONTIAN", sheetsUrl: "https://script.google.com/macros/s/AKfycbxqVvRNifdpWP8sEW5j0ITZxBiCrZZu69I2Z0tbRJhhTp0Z7o9KSj3u7VyaETBoa57GdQ/exec" },
    { name: "Hospital Segamat", 
        id: "SEG-SEGAMAT", sheetsUrl: "https://script.google.com/macros/s/AKfycbxS2KR2CIf9Dljr3RpySmC78uiG_4LFA0sWBjtGrewOJoz72-xAjMzNmsC_lU3H32Nr/exec" },
    { name: "Hospital Temenggong Seri Maharaja Tun Ibrahim, Kulai", 
        id: "HTSMTI-KULAI", sheetsUrl: "https://script.google.com/macros/s/AKfycbxWBAn4byW82z4n-rGvmBlqiWBjBshx6AIB60sC6IKUp9LElbwMBiIOA43zyEvwrupL/exec" },
    { name: "Hospital Kota Tinggi", 
        id: "KTG-KOTA-TINGGI", sheetsUrl: "https://script.google.com/macros/s/AKfycbyx60ljswSeoupFdCaJkTLWIHjulKuwktPcGGB5wessuKCEPglBrRjZRBooXcf5btAmUA/exec" },
    { name: "Hospital Mersing", 
        id: "MER-MERSING", sheetsUrl: "https://script.google.com/macros/s/AKfycbyKjcVuQM_sb-HRHZ6JLlIvf-jgR_C57cg4bNFnAvbD5Dw4XJRufxybtvzIqaBXIUJS/exec" },
    { name: "Hospital Tangkak", 
        id: "TGK-TANGKAK", sheetsUrl: "https://script.google.com/macros/s/AKfycbxeDSK1DDzHiutqC955ucxBDGZKmOubOAq3-J6f7xp18sBhRQU-6SBHmZOWo4M6kBXTsg/exec" },
    { name: "Makmal Kesihatan Awam Johor", 
        id: "MKJ-JB", sheetsUrl: "https://script.google.com/macros/s/AKfycbzA30-RWIF6gLNRc5J57ky24AqyR7MjpOGZV-HcY4xMz5a_UvkDSMNpjSOisLdTzEFdVg/exec" },
    { name: "Hospital Permai", 
        id: "PER-PERMAI", sheetsUrl: "https://script.google.com/macros/s/AKfycbxkYQDLVlN6d7O1aQwwwcnzPMlaKQLK4NLmGYKWbkM-AAEk-UOqN3nhrTt65zXeDbN5aw/exec" },
    { name: "Hospital Pasir Gudang", 
        id: "PGD-PASIR-GUDANG", sheetsUrl: "https://script.google.com/macros/s/AKfycbwbfX7uEBSOqFf2AlHdMbwE0ZJqZ9qC90_a9cfIjHSS7Vk0RCKvPcUNtusB6rQBjlK2/exec" },
     { name: "Hospital Pantai", 
        id: "PAN-Pantai", sheetsUrl: "" },
    // Tambah hospital di sini dengan ID dan URL mereka
];

const criticalSystems = [
    { name: "AMBULANCE", id: "AMBULANCE"},
    { name: "NON AMBULANCE", id: "NON AMBULANCE"},
    // { name: "Water Supply System", id: "Water Supply System"},
    // { name: "Autoclave", id: "Autoclave"},
    // { name: "Medical Gas Pipeline System", id: "Medical Gas Pipeline System"},
    // { name: "Vertical Transportation", id: "Lift"},
    // { name: "Air Handling Unit", id: "Air Handling Unit"},
    // { name: "BAS System", id: "BAS System"},
    // { name: "Chiller And Cooling Tower", id: "Chiller And Cooling Tower" },
    // { name: "Fire Protection System", id: "Fire Protection System" }
];

//---------------------------------link submission form--------------------------------------------------
const submissionForms = {
    //NEGERI SEMBILAN
    'TUANKU-JAAFAR_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HTJ.html',
    'TUANKU-JAAFAR_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HTJ.html',
    // 'TUANKU-JAAFAR_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',
    // 'TUANKU-JAAFAR_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/HTJ.html',

    'JMP-JEMPOL_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JMP.html',
    'JMP-JEMPOL_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JMP.html',
    // 'JMP-JEMPOL_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',
    // 'JMP-JEMPOL_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/JMP.html',

    'TMP-TAMPIN_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/TMP.html',
    'TMP-TAMPIN_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/TMP.html',
    // 'TMP-TAMPIN_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',
    // 'TMP-TAMPIN_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/TMP.html',

    'PDX-PORT-DICKSON_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PDX.html',
    'PDX-PORT-DICKSON_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PDX.html',
    // 'PDX-PORT-DICKSON_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',
    // 'PDX-PORT-DICKSON_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/PDX.html',

    'JLB-JELEBU_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JLB.html',
    'JLB-JELEBU_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JLB.html',
    // 'JLB-JELEBU_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // // 'JLB-JELEBU_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // 'JLB-JELEBU_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // 'JLB-JELEBU_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // 'JLB-JELEBU_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // // 'JLB-JELEBU_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // 'JLB-JELEBU_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',
    // 'JLB-JELEBU_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/JLB.html',

    'KPL-KUALA-PILAH_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KPL.html',
    'KPL-KUALA-PILAH_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KPL.html',
    // 'KPL-KUALA-PILAH_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    // 'KPL-KUALA-PILAH_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/KPL.html',
    
    //MELAKA
    'MKA-MLK_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MKA.html',
    'MKA-MLK_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MKA.html',
    // 'MKA-MLK_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',
    // 'MKA-MLK_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/MKA.html',

    'AGJ-ALOR-GAJAH_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    'AGJ-ALOR-GAJAH_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Autoclave': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Lift': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Fire Protection System': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Water Supply System': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Air Handling Unit': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',
    // 'AGJ-ALOR-GAJAH_BAS System': 'https://femsmedivest-sys.github.io/vehicleform/AGJ.html',

    'JSN-JASIN_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JSN.html',
    'JSN-JASIN_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/JSN.html',
    // 'JSN-JASIN_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',
    // 'JSN-JASIN_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/JSN.html',

    //JOHOR DARUL TAKZIM (JDT)
    'HSA-JOHOR_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HSA.html',
    'HSA-JOHOR_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HSA.html',
    // 'HSA-JOHOR_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',
    // 'HSA-JOHOR_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/HSA.html',

    'HSI-JOHOR_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HSI.html',
    'HSI-JOHOR_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/HSI.html',
    // 'HSI-JOHOR_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',
    // 'HSI-JOHOR_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/HSI.html',

    'HPSF-MUAR_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MUR.html',
    'HPSF-MUAR_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MUR.html',
    // 'HPSF-MUAR_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',
    // 'HPSF-MUAR_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/MUR.html',

    'KLN-KLUANG_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KLN.html',
    'KLN-KLUANG_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KLN.html',
    // 'KLN-KLUANG_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',
    // 'KLN-KLUANG_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/KLN.html',

    'BPH-BATU-PAHAT_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/BPH.html',
    'BPH-BATU-PAHAT_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/BPH.html',
    // 'BPH-BATU-PAHAT_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',
    // 'BPH-BATU-PAHAT_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/BPH.html',

    'PON-PONTIAN_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PON.html',
    'PON-PONTIAN_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PON.html',
    // 'PON-PONTIAN_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',
    // 'PON-PONTIAN_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/PON.html',

    'SEG-SEGAMAT_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/SGT.html',
    'SEG-SEGAMAT_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/SGT.html',
    // 'SEG-SEGAMAT_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',
    // 'SEG-SEGAMAT_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/SGT.html',

    'HTSMTI-KULAI_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KUL.html',
    'HTSMTI-KULAI_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KUL.html',
    // 'HTSMTI-KULAI_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',
    // 'HTSMTI-KULAI_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/KUL.html',

    'KTG-KOTA-TINGGI_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KTG.html',
    'KTG-KOTA-TINGGI_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/KTG.html',
    // 'KTG-KOTA-TINGGI_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',
    // 'KTG-KOTA-TINGGI_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/KTG.html',

    'MER-MERSING_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MER.html',
    'MER-MERSING_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MER.html',
    // 'MER-MERSING_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',
    // 'MER-MERSING_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/MER.html',

    'TGK-TANGKAK_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/TGK.html',
    'TGK-TANGKAK_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/TGK.html',
    // 'TGK-TANGKAK_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',
    // 'TGK-TANGKAK_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/TGK.html',

    'MKJ-JB_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MKJ.html',
    'MKJ-JB_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/MKJ.html',
    // 'MKJ-JB_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',
    // 'MKJ-JB_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/MKJ.html',

    'PER-PERMAI_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PER.html',
    'PER-PERMAI_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PER.html',
    // 'PER-PERMAI_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',
    // 'PER-PERMAI_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/PER.html',

    'PGD-PASIR-GUDANG_AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PGD.html',
    'PGD-PASIR-GUDANG_NON AMBULANCE': 'https://femsmedivest-sys.github.io/vehicleform/PGD.html'
    // 'PGD-PASIR-GUDANG_Autoclave': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Lift': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Fire Protection System': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Chiller And Cooling Tower': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Water Supply System': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Air Handling Unit': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_Medical Gas Pipeline System': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
    // 'PGD-PASIR-GUDANG_BAS System': 'https://femsmedivest-sys.github.io/Submission-Form/PGD.html',
};

// Add this function to count JPJ Pass/Fail from data
function countJPJStatus(data) {
    let passCount = 0;
    let failCount = 0;
    
    data.forEach(item => {
        const jpjStatus = item['JPJ'] ? item['JPJ'].trim().toUpperCase() : '';
        if (jpjStatus === 'PASS') {
            passCount++;
        } else if (jpjStatus === 'FAIL') {
            failCount++;
        }
    });
    
    return { passCount, failCount };
}




// Fungsi untuk mengemas kini kad hospital sedia ada di halaman utama
// But the existing updateHospitalCards function is replaced with this:
function updateHospitalCards() {
    const fetchPromises = [];
    const loadingSpinner = document.getElementById('loading-spinner');

    if (loadingSpinner) {
        loadingSpinner.style.display = 'block';
    }

    hospitalData.forEach(hospital => {
        const cardElement = document.getElementById(`card-${hospital.id}`);
        if (cardElement && hospital.sheetsUrl) {
            const fetchPromise = fetch(hospital.sheetsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const functioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'FUNCTIONING').length;
                    const notFunctioningCount = data.filter(item => item.Status && item.Status.trim().toUpperCase() === 'NOT FUNCTIONING').length;
                    
                    // Add JPJ counts
                    const { passCount, failCount } = countJPJStatus(data);

                    // Update the card spans
                    const functioningSpan = cardElement.querySelector('.status-FUNCTIONING');
                    const notFunctioningSpan = cardElement.querySelector('.status-NOT-FUNCTIONING');
                    const jpjPassSpan = cardElement.querySelector('.status-JPJ-PASS');
                    const jpjFailSpan = cardElement.querySelector('.status-JPJ-FAIL');

                    if (functioningSpan) {
                        functioningSpan.textContent = `FUNCTIONING: ${functioningCount}`;
                    }
                    if (notFunctioningSpan) {
                        notFunctioningSpan.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;
                    }
                    if (jpjPassSpan) {
                        jpjPassSpan.textContent = `JKR PASS: ${passCount}`;
                    }
                    if (jpjFailSpan) {
                        jpjFailSpan.textContent = `JKR FAIL: ${failCount}`;
                    }
                })
                .catch(error => {
                    console.error(`Error fetching data for ${hospital.name}:`, error);
                    const statusContainer = cardElement.querySelector('.status-container');
                    if (statusContainer) {
                        statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">Data not available</p>';
                    }
                });
            fetchPromises.push(fetchPromise);
        } else if (cardElement) {
            const statusContainer = cardElement.querySelector('.status-container');
            if (statusContainer) {
                statusContainer.innerHTML = '<p style="color:red; font-size: 0.8em; margin: 0; padding: 0;">No URL API provided</p>';
            }
        }
    });

    Promise.all(fetchPromises.map(p => p.catch(e => e))).finally(() => {
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    });
}


// Fungsi untuk mengambil data dari Google Sheets API
async function fetchAssetData(sheetsUrl, systemId) {
    try {
        const response = await fetch(sheetsUrl);
        const data = await response.json();
        const filteredData = data.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (systemId || '').trim().toUpperCase());
        return filteredData;
    } catch (error) {
        console.error('Error fetching data from Google Apps Script:', error);
        return [];
    }
}

// Logik untuk halaman hospital
async function setupHospitalPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalId = urlParams.get('hosp');
    const systemId = urlParams.get('sys');

    const mainContent = document.querySelector('main');
    const headerTitle = document.getElementById('header-title');
    const backButton = document.getElementById('back-button');

    const currentHospital = hospitalData.find(hosp => hosp.id === hospitalId);
    const sheetsUrl = currentHospital ? currentHospital.sheetsUrl : null;

    // --- Logik untuk halaman senarai sistem kritikal ---
    if (!systemId) {
        if (backButton) {
            backButton.style.display = 'none';
        }
        headerTitle.textContent = `Type of Vehicles - ${currentHospital ? currentHospital.name : hospitalId}`;
        // Jangan hapuskan kandungan utama HTML hospital-page.html jika ia mengandungi struktur menu, 
        // tetapi kita akan ganti dengan grid yang dijana JS jika dataSheets ada.

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital. Please contact (012-3456495).</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please wait while the system load the data...</p>';

        try {
            const response = await fetch(sheetsUrl);
            const allData = await response.json();

            // Sediakan tajuk
            mainContent.innerHTML = `<h2 class="main-title"></h2>`;
            const cardGrid = document.createElement('div');
            cardGrid.className = 'system-grid'; 

            // --- PETA LALUAN GAMBAR (MAP) ---
            const systemImageMap = {
              "AMBULANCE": "Gambar-System/ambulance.webp", 
              "NON AMBULANCE": "Gambar-System/non-ambulance.webp"
                // "Electrical Supply": "Gambar-System/ElectricalSupply.webp",
                // "Electrical Supply": "Gambar-System/ElectricalSupply.webp",
                // "Generator Set": "Gambar-System/genset.webp", 
                // "Electrical Supply": "Gambar-System/ElectricalSupply.webp",
                // "Water Supply System": "Gambar-System/WSS.webp",
                // "Autoclave": "Gambar-System/autoclave.webp",
                // "Medical Gas Pipeline System": "Gambar-System/MGPS.webp",
                // "Lift": "Gambar-System/lift.webp",
                // "Air Handling Unit": "Gambar-System/AHU.webp",
                // "BAS System": "Gambar-System/BAS.webp",
                // "Chiller And Cooling Tower": "Gambar-System/CHILLER.webp", 
                // "Fire Protection System": "Gambar-System/FPS.webp"
            };

          // From line 505 to 521, the script are added to the original scripts, while for line 523, the function is changed a bit. The reason is so that, for JLB, only 8 critical systems show up instead of 10
          // Inside setupHospitalPage() function, in the section where system cards are generated
          // Find this line: criticalSystems.forEach(system => {

          // Replace that entire loop with this conditional logic:

          // Check if current hospital is JLB and filter out specific systems
          // let systemsToShow = criticalSystems;

          // if (hospitalId === 'JLB-JELEBU') {
          //   // Remove LIFT and AIR HANDLING UNIT (and any others you don't want)
          //   systemsToShow = criticalSystems.filter(system => {
          //     // List the system IDs to exclude for JLB hospital
          //     const excludedSystems = ['Lift', 'Air Handling Unit']; // IDs to remove
          //     return !excludedSystems.includes(system.id);
          //   });
          // }

            // REPLACE the system card generation section inside setupHospitalPage function (lines ~505-521)
// Find this section and replace the systemsToShow.forEach loop with:

// REPLACE the system card generation section inside setupHospitalPage function (lines ~505-521)
// Find this section and replace the systemsToShow.forEach loop with:

criticalSystems.forEach(system => {
    const card = document.createElement('a');
    card.className = 'system-card'; 
    card.href = `hospital-page.html?hosp=${hospitalId}&sys=${system.id}`;

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    card.appendChild(overlay);

    const img = document.createElement('img');
    const imageSrc = systemImageMap[system.id] || "Gambar/default.webp"; 
    img.src = imageSrc;
    img.alt = system.name;
    img.className = 'card-image';
    card.appendChild(img);

    const systemName = document.createElement('span');
    systemName.className = 'card-title';
    systemName.textContent = system.name;
    card.appendChild(systemName);
    
    // Calculate status for this system including JPJ
    const systemData = allData.filter(item => (item['Type of System'] || '').trim().toUpperCase() === (system.id || '').trim().toUpperCase());
    const functioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'FUNCTIONING').length;
    const notFunctioningCount = systemData.filter(item => (item.Status || '').trim().toUpperCase() === 'NOT FUNCTIONING').length;
    
    // Add JPJ counts for this system
    let passCount = 0;
    let failCount = 0;
    systemData.forEach(item => {
        const jpjStatus = item['JPJ'] ? item['JPJ'].trim().toUpperCase() : '';
        if (jpjStatus === 'PASS') {
            passCount++;
        } else if (jpjStatus === 'FAIL') {
            failCount++;
        }
    });

    // Create status container with 4 status boxes
    const statusContainer = document.createElement('div');
    statusContainer.className = 'status-container'; 

    const spanF = document.createElement('span');
    spanF.className = 'status-box status-FUNCTIONING';
    spanF.textContent = `FUNCTIONING: ${functioningCount}`;

    const spanNF = document.createElement('span');
    spanNF.className = 'status-box status-NOT-FUNCTIONING';
    spanNF.textContent = `NOT FUNCTIONING: ${notFunctioningCount}`;
    
    const spanJPJPass = document.createElement('span');
    spanJPJPass.className = 'status-box status-JPJ-PASS';
    spanJPJPass.textContent = `JKR PASS: ${passCount}`;
    
    const spanJPJFail = document.createElement('span');
    spanJPJFail.className = 'status-box status-JPJ-FAIL';
    spanJPJFail.textContent = `JKR FAIL: ${failCount}`;

    statusContainer.appendChild(spanF);
    statusContainer.appendChild(spanNF);
    statusContainer.appendChild(spanJPJPass);
    statusContainer.appendChild(spanJPJFail);
    
    card.appendChild(statusContainer);
    
    cardGrid.appendChild(card);
    });
          
          mainContent.appendChild(cardGrid);

        } catch (error) {
            console.error("Fetch error:", error);
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">Failed to retrieve data. Please check the URL or contact 012-3456495.</p>`;
        }
    }
    // --- Logik untuk halaman butiran aset ---
    else {
        // Pautan butang "Back"
        if (backButton) {
            backButton.style.display = 'inline-block';
            backButton.href = `hospital-page.html?hosp=${hospitalId}`;
        }

        const currentSystem = criticalSystems.find(system => system.id === systemId);
        if (currentSystem) {
            headerTitle.textContent = `${currentSystem.name} - ${currentHospital.name}`;
        } else {
            headerTitle.textContent = systemId;
        }

        if (!sheetsUrl || sheetsUrl === '') {
            mainContent.innerHTML = `<p style="text-align:center; color:red; font-weight:bold;">No data from Google Spreadsheet for this hospital.</p>`;
            return;
        }

        mainContent.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; margin-top:10px;">Please be patient, data is being loaded</p>';

        const data = await fetchAssetData(sheetsUrl, systemId);
        mainContent.innerHTML = '';

        const formKey = `${hospitalId}_${systemId}`;
        const formUrl = submissionForms[formKey];

        const formButton = document.createElement('a');
        formButton.className = 'form-button';
        formButton.textContent = 'Go to Submission Form';
        formButton.href = formUrl ? formUrl : '#';
        formButton.target = '_blank';
        if (!formUrl) {
            formButton.style.opacity = '0.5';
            formButton.style.cursor = 'not-allowed';
            formButton.textContent = 'Form Not Available';
        }
        mainContent.appendChild(formButton);

        const locations = {};
        data.forEach(item => {
            const location = item['Location'];
            if (!locations[location]) {
                locations[location] = [];
            }
            locations[location].push(item);
        });

        if (Object.keys(locations).length === 0) {
            mainContent.innerHTML += `<p style="text-align:center; color:red; font-weight:bold;">No data found for this system! 😲😤.</p>`;
            return;
        }

        for (const location in locations) {
            const locationSection = document.createElement('section');
            locationSection.className = 'location-section';

            const locationTitle = document.createElement('h2');
            locationTitle.textContent = location;
            locationSection.appendChild(locationTitle);

            const cardGrid = document.createElement('div');
            cardGrid.className = 'card-grid';

            locations[location].forEach(item => {
                let statusClass = '';
                const itemStatus = item['Status'] ? item['Status'].trim().toUpperCase() : '';

                if (itemStatus === 'FUNCTIONING') {
                    statusClass = 'status-FUNCTIONING';
                } else if (itemStatus === 'NOT FUNCTIONING') {
                    statusClass = 'status-NOT-FUNCTIONING';
                }

                const rawDate = item['Last Update'];
                let formattedDate = '';
                if (rawDate) {
                    try {
                        const dateObj = new Date(rawDate);
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const day = String(dateObj.getDate());
                        const month = monthNames[dateObj.getMonth()];
                        const year = String(dateObj.getFullYear()).slice(-2);
                        let hours = dateObj.getHours();
                        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
                        const seconds = String(dateObj.getSeconds()).padStart(2, '0');
                        const ampm = hours >= 12 ? 'PM' : 'AM';
                        hours = hours % 12;
                        hours = hours ? hours : 12;

                        formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
                    } catch (e) {
                        console.error('Failed to parse date:', rawDate);
                        formattedDate = rawDate;
                    }
                } else {
                    formattedDate = 'N/A';
                }

                // REPLACE the asset card generation section (where each subsystem block is created)
// Find this section and replace the card.innerHTML with:

                      const card = document.createElement('div');
                      card.className = 'asset-card';
                      
                      // Get JPJ status for display
                      const jpjStatus = item['JPJ'] ? item['JPJ'] : 'N/A';
                      let jpjClass = '';
                      const jpjUpper = jpjStatus.trim().toUpperCase();
                      if (jpjUpper === 'PASS') {
                          jpjClass = 'status-JPJ-PASS';
                      } else if (jpjUpper === 'FAIL') {
                          jpjClass = 'status-JPJ-FAIL';
                      }
                      
                      card.innerHTML = `
                          <h3>${item['Asset']}</h3>
                          <p><strong>Status:</strong> <span class="status-box ${statusClass}">${item['Status'] || 'N/A'}</span></p>
                          <p><strong>JKR:</strong> <span class="status-box ${jpjClass}">${jpjStatus}</span></p>
                          <p><strong>Remark:</strong> ${item['Remark'] || ''}</p>
                          <p><strong>Action:</strong> ${item['Action'] || ''}</p>
                          <p class="last-update">Last Update: ${formattedDate}</p>
                      `;
                      cardGrid.appendChild(card);            });

            locationSection.appendChild(cardGrid);
            mainContent.appendChild(locationSection);
        }
    }
}

// Panggil fungsi yang betul berdasarkan halaman
if (window.location.pathname.endsWith('hospital-page.html')) {
    document.addEventListener('DOMContentLoaded', setupHospitalPage);
} else if (window.location.pathname === '/' || window.location.pathname.endsWith('Critical-System.html')) {
    document.addEventListener('DOMContentLoaded', updateHospitalCards);

}

