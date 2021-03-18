const imgNum = 4
const imgContainer = document.querySelector("#gallery-container")

var photoListDocument = ` 
<div class="col-md-4 ftco-animate gallery-item">
<div class="blog-entry">
  <a href="javascript:void(0)" class="block-20"
    style="background-image: url('../img/YNCCC gallery/National Climate Discourse- NCD-1- As Happened/10368831_1519928031598806_8343188825733845778_o.jpg');">
  </a>
  <div class="text pt-3 pb-4 px-4">
    <div class="meta">
      <div><a href="#">Sept. 06, 2019</a></div>
      <div><a href="#">Admin</a></div>
    </div>
    <h3 class="heading"><a href="#">National Climate Discourse</a></h3>
    <p class="clearfix">
      <a href="#" class="float-left read">Read more</a>
      <a href="#" class="float-right meta-chat"><span class="icon-chat"></span> 3</a>
    </p>
  </div>
</div>
</div>
`

// for (i = 0; i < imgNum +1; i++) {
//     photoListDocument += photoListDocument
//   }

  imgContainer.innerHTML = photoListDocument;
