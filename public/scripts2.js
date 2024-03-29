document.addEventListener('DOMContentLoaded', function () {
    fetch('/rss')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const items = xml.querySelectorAll('entry');

            let noticiasHTML = '';

            items.forEach(item => {
                const title = item.querySelector('title') ? item.querySelector('title').textContent : 'Sin título';
                const linkElement = item.querySelector('link[rel="alternate"]');
                const linkHref = linkElement ? linkElement.getAttribute('href') : '#';
                const thumbnailElement = item.querySelector('media\\:thumbnail, thumbnail');
                const imageUrl = thumbnailElement ? thumbnailElement.getAttribute('url') : 'ruta/a/imagen/por/defecto.jpg';

                noticiasHTML += `
                    <li>
                        <a href="${linkHref}" target="_blank">
                        <h3>${title}</h3>   
                        <img src="${imageUrl}" alt="Imagen de la noticia">
                        </a>
                    </li>`;
            });

            document.getElementById('lista-noticias').innerHTML = noticiasHTML;
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
});
