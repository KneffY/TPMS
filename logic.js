// VARIABLES #################################################

let lista_secciones = document.querySelectorAll('.m_opt');
let B = {
    news: lista_secciones[0],
    us: lista_secciones[1],
    projects: lista_secciones[2],
    partners: lista_secciones[3],
    services: lista_secciones[4],
    contact: lista_secciones[5],
};

let s_wrap = document.getElementById("s_wrap");
// let origen = B.news[0] // por defecto 

// FUNCIONES #################################################

let move = (destino) => {
    s_wrap.style.marginLeft = `${-destino[1]+150}px`;
}

let push_css = (distancia) => {
    s_wrap.style.setProperty("--holded-margin", `${distancia}px`);
}

// INTERACCIONES #################################################

B.news.onclick = () => {push_css (100)}
B.us.onclick = () => {push_css (-900)}
B.projects.onclick = () => {push_css (-1900)}
B.partners.onclick = () => {push_css (-2900)}
B.services.onclick = () => {push_css (-3900)}
B.contact.onclick = () => {push_css (-4900)}

