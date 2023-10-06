
$(function () {
    //CRUD Application

    var story_list = $(".has-scrollbar");


    var url = "http://localhost:3000";


    function loadStories() {
    

        $.ajax({
            method: "GET",
            url: url + "/stories",
            dataType: "json"
        }).done(function (response) {
            console.log(response)
            story_list.empty();
            insertStories(response);

        })
            .fail(function (error) {
                console.log(error);
            })
    }

    loadStories();


    function insertStories(stories) {
        stories.forEach(function (story) {
            var li_1 = $(`            
            <li class="scrollbar-item">
            <div class="blog-card">

              <figure class="card-banner img-holder" style="--width: 500; --height: 600;">
                <img src="${story.featured_image}" width="500" height="600" loading="lazy"
                  alt="New technology is not good or evil in and of itself" class="img-cover">

                <ul class="avatar-list avatar-list-${story.id} absolute">


                </ul>
              </figure>

              <div class="card-content">

                <ul class="card-meta-list card-meta-list-${story.id}">



                </ul>

                <h3 class="h4">
                  <a href="#" class="card-title hover:underline">
                    ${story.title}
                  </a>
                </h3>

                <p class="card-text">
                  ${story.desc}
                </p>

              </div>

            </div>
          </li>`);
            story_list.append(li_1);

            var avatar_list = $(".avatar-list-" + story.id);

            var li_2 = '';

            story.authors.forEach(function (author) {
          
                li_2 = $(`
                    <li class="avatar-item">
                        <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
                        <img src="${author.profile_photo}" width="100" height="100" loading="lazy" alt="Author"
                            class="img-cover">
                        </a>
                    </li>            
                `);
                avatar_list.append(li_2);

            })

            var tag_list = $(".card-meta-list-" + story.id);

            var li_3 = '';

            story.tags.forEach(function(tag) {
          
                li_3 = $(`
                    <li>
                        <a href="#" class="card-tag">${tag.name}</a>
                    </li>          
                `);
                tag_list.append(li_3);

            })

        })
    }



   





   var  posts_list=$(".post");
    function loadPosts(){
      $.ajax({
        method: "GET" ,
        dataType:"json",
        url:url+"/Posts"
      }).done(function(response){
       posts_list.empty();
       console.log(response)
       insertPosts(response);
      })
      .fail(function(error){
        console.log(error);
      })
    }
    loadPosts();


     function insertPosts(Posts){
      Posts.forEach(function(post){
        var li_post=$(`
        <li>
        <div class="blog-card">

          <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
            <img src="${post.thumb}" width="550" height="660" loading="lazy"
              alt="Creating is a privilege but it’s also a gift" class="img-cover">

            <ul class="authorss authorss-${post.id}  avatar-list absolute ">

             
            </ul>
          </figure>

          <div class="card-content">

            <ul class=" tag tag-${post.id} card-meta-list ">


            </ul>

            <h3 class="h4">
              <a href="#" class="card-title hover:underline">
              ${post.title}
              </a>
            </h3>

            <p class="card-text">
            ${post.desc} 
            </p>

          </div>

        </div>
       </li>
        `);
        posts_list.append(li_post);

        var avatar_list_post=$(".authorss-"+post.id);
        var li_author_post=" ";
        
        post.authors.forEach(function(author1){
            li_author_post=$(`
            <li class="avatar-item">
            <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
              <img src="${author1.img}" width="100" height="100" loading="lazy" alt="Author"
                class="img-cover">
            </a>
          </li>
            `);
            avatar_list_post.append(li_author_post);

        })
        var tag_list_post = $(".tag-" + post.id);

        var li_tag_post = '';

        post.tages.forEach(function(tag1) {
      
            li_tag_post = $(`
            <li>
            <a href="#" class="card-tag">${tag1.name}</a>
          </li>         
            `);
            tag_list_post.append(li_tag_post);

        });
/*
        var the_writers=$(".writers");
        var li_writers="";
        post.the_writers.forEach(function(writer){
           li_writers=$(`
          <li class="avatar-item">
          <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
            <img src="${writer.img}" width="100" height="100" alt="top author" class="img-cover">
          </a>
         </li>
          `);
          the_writers.append(li_writers);

        })*/




      })
     }   
    



     var list_w=$(".writers");
     function loadWiters(){
       $.ajax({
         method:"GET",
         dataType:"json",
         url:url+"/the_writers"
       }).done(function(response){
        list_w.empty();
         insertWriters(response)
       }).fail(function(error){
         console.log(error);
       })
     }
     loadWiters()
     function insertWriters(the_writers){
       the_writers.forEach(function(writer){
         li_writers=$(`
         <li class="avatar-item">
         <a href="#" class="avatar large img-holder" style="--width: 100; --height: 100;">
           <img src="${writer.img}" width="100" height="100" alt="top author" class="img-cover">
         </a>
        </li>
         `);
       list_w.append(li_writers);
 
       })
     }







     var list_Recommend=$(".Recommend");
     function load_Recommend(){
      $.ajax({
        method:"GET",
        dataType:"json",
        url:url+"/Recommend"
      })
      .done(function(response){
        list_Recommend.empty();
        insertRecommend(response);
      })
     }
     load_Recommend();

     function insertRecommend(Recommend){
      Recommend.forEach(function(recom){
        var li_Recommend=$(`
        
        <li>
        <div class="blog-card">

          <figure class="card-banner img-holder" style="--width: 300; --height: 360;">
            <img src="${recom.thumb}" width="300" height="360" loading="lazy"
              alt="The trick to getting more done is to have the freedom to roam around " class="img-cover">

            <ul class="avatar-list ul_recom ul_recom-${recom.id} absolute ">


            </ul>
          </figure>

          <div class="card-content">

            <h3 class="h5">
              <a href="#" class="card-title hover:underline">
               ${recom.title}
              </a>
            </h3>

          </div>

        </div>
      </li>
        `);
        list_Recommend.append(li_Recommend);

        var  avatar_list_Recomment=$(".ul_recom-"+recom.id);
        var li_recom=" ";
        recom.authors.forEach(function(author2){
          li_recom=$(`
          <li class="avatar-item">
          <a href="#" class="avatar img-holder" style="--width: 100; --height: 100;">
            <img src="${author2.img}" width="100" height="100" loading="lazy" alt="Author"
              class="img-cover">
          </a>
        </li>
          `);
          avatar_list_Recomment.append(li_recom);
        })




      })

     }
     












});















