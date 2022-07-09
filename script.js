let waifu = {

    get_waifu: function() {


        fetch("https://api.waifu.pics/sfw/waifu")
        .then(response => response.json())
        .then(data => this.displayWaifu(data))
    },


    displayWaifu: function(data) {
        
        const {url} = data;
        document.querySelector('img').src = url;
    }

}


document.querySelector('.card').addEventListener('click', () => {

    waifu.get_waifu();

})