    const artistContainer = document.getElementById("artistContainer");


        const artistDataScript = document.getElementById("artistData");
        const artists = JSON.parse(artistDataScript.textContent);
    
        artistContainer.innerHTML = artists
            .map(
                (artist) => `
                <div class="card">
                    <a href="/artist/${artist.id}">
                        <img src="${artist.image}" alt="${artist.name}">
                        <h2>${artist.name}  </h2>
                        <p>${artist.Type}</p>
                    </a>
                </div>
            `
            )
    

