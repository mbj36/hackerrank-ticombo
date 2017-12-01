var axios = require("axios");
let article = "";

function getTopic(topic) {
    let text = "";
    axios
        .get(
            `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${
                topic
            }`
        )
        .then(res => {
            this.article = res.data.parse.text;
            console.log(typeof this.article);
        });
}

getTopic("pizza");
