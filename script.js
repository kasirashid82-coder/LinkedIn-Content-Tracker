 const form = document.querySelector("form")
 console.log(form)

 form.addEventListener("submit", function(event)  {
    event.preventDefault();

      const postDate = document.querySelector("#post-date").value;
    const hook = document.querySelector("#hook").value;
    const topic = document.querySelector("#topic").value;
    const reach = document.querySelector("#reach").value;
    const engagement = document.querySelector("#engagement").value;
    const connectionCount = document.querySelector("#connection-count").value;
    
    const post = {
    date: postDate,
    hook: hook,
    topic: topic,
    reach: reach,
    engagement: engagement,
    connections: connectionCount

};
let posts = localStorage.getItem("posts");
if (posts === null) {
    posts = [];
} else {
    posts = JSON.parse(posts);
}
posts.push(post);
localStorage.setItem("posts", JSON.stringify(posts));
console.log(posts);
});