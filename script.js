$(document).ready(function() {
    var rssData = [
        {
            "title": "lorem ipsum dolarsit",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "Wed, 14 Feb 2021 13:30"
        },
        {
            "title": "lorem ipsum dolarsit",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "Wed, 14 Feb 2021 13:30"
        },
        {
            "title": "lorem ipsum dolarsit",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "Wed, 14 Feb 2021 13:30"
        },
        {
            "title": "lorem ipsum dolarsit",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "Wed, 14 Feb 2021 13:30"
        }
    ];

    var container = $(".rss-container");

    rssData.forEach(function(item) {
        var rssItem = `
            <div class="rss-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p>${item.description}</p>
                <p class="date">${item.date}</p>
            </div>
        `;
        container.append(rssItem);
    });
});
