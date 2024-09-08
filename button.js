<script>
    $(document).ready(function() {
        // Hide both contents initially
        $("#xml-content").hide();
        $("#rss-content").hide();

        // Show XML content when XML RULES button is clicked
        $("#xml-rules-btn").click(function() {
            $("#rss-content").hide();
            $("#xml-content").show();
        });

        // Show RSS content when RSS button is clicked
        $("#rss-btn").click(function() {
            $("#xml-content").hide();
            $("#rss-content").show();
            loadRssContent();
        });

        function loadRssContent() {
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
                // Add more RSS items here
            ];

            var container = $("#rss-content");
            container.empty(); // Clear any existing content

            rssData.forEach(function(item) {
                var rssItem = `
                    <div class="rss-item">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p class="date">${item.date}</p>
                    </div>
                `;
                container.append(rssItem);
            });
        }
    });
</script>
