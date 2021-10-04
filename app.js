
//console.log(songName);


document.getElementById('searchBtn').addEventListener('click',function(){
    const getInputValue = id => document.getElementById(id).value;

    const songName= getInputValue('search-field');
    const count=10;
  
    
   function getArtist(){
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res=>res.json())
    .then(data=>{
        
        //data=data.slice(0,count);
        const songlist = document.getElementById('songList');
        songlist.innerHTML="";
        for(let i=0 ;i<data.length;i++){
           
            const song=data[i];
            const p = document.createElement('div');
            p.innerHTML=` 
            <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
       
            songlist.appendChild(p);
        }
        
    } 
    )
};
    getArtist();
})
