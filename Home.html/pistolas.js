

var gunIndex = 0; // prev/next gun's state
var curGun = 0; // index/state of gun being selected

// collection of paintball guns

var pbGuns = [
  {
    name: "pistol",
    model: "R2 V12",
    img: "http://www.dickssportinggoods.com/graphics/product_images/pDSP1-17289058v750.jpg",
    description: "Packed with 12 different colors. one color at a shot"
  },
  {
    name: "Machine gun",
    model: "Q5 X2",
    img: "http://pbguy.com/wp-content/uploads/2014/07/tm3.jpg",
    description: "Packed with 12 different colors. one color at a shot"
  },
  {
    name: "Spinal",
    model: "Z3 X32",
    img: "https://images-na.ssl-images-amazon.com/images/I/51SIV1wd4UL._SL1500_.jpg",
    description: "Packed with 12 different colors. one color at a shot"
  },
  {
    name: "Tanker",
    model: "R2 V1ff2",
    img: "http://www.thepaintballprofessor.com/wp-content/uploads/2014/07/Tippmann98Custom.jpg",
    description: "Packed with 12 different colors. one color at a shot"
  },
  {
    name: "Baruwa",
    model: "444XE",
    img: "http://pbguy.com/wp-content/uploads/2014/07/tm1.jpg",
    description: "Packed with 12 different colors. one color at a shot"
  }
];

// selects a specific gun and renders to the DOM
function gunSelecter(index) {
  $("#name").text(pbGuns[index].name);
  $("#model").text(pbGuns[index].model);
  $("#gun-img").attr("src",pbGuns[index].img);
}

// next gun
function nextGun() {
  if(gunIndex === (pbGuns.length - 1)) {
    gunIndex = 0;
    curGun = gunIndex;
    gunSelecter(gunIndex);
    return false;
  }
  gunIndex++;
  curGun = gunIndex;
  gunSelecter(gunIndex);
}
// prev gun

function prevGun() {
  if(gunIndex === 0) {
    gunIndex = (pbGuns.length - 1);
    curGun = gunIndex;
    gunSelecter(gunIndex);
    return false;
  }
  gunIndex--;
  curGun = gunIndex;
  gunSelecter(gunIndex);

}
// hides a select gun container
function hideSgCon() {
  $("#sg-container").hide();
  $("#sg").removeClass("zoomIn");
  $("#game").show();
}
// shows a select gun container
function showSgCon() {
  $("#sg-container").show();
  $("#sg").addClass("zoomIn");
  $("#game").hide();
}
// diplays selected gun info
function displayInfo(index) {
  $("#dg-image").attr("src",pbGuns[index].img);
  $("#dg-name").text(pbGuns[index].name);
  $("#dg-model").text(pbGuns[index].model);
  $("#dg-description").text(pbGuns[index].description);
}
$("#sg-next").click(nextGun);
$("#sg-prev").click(prevGun);
$("#close, #sg-select").click(hideSgCon);
$("#select-gun").click(showSgCon);
$("#sg-select").click(function() {
  displayInfo(curGun);
});
// init with selecting first positioned gun
gunSelecter(0);
displayInfo(0);




/* class Game extends React.Component {
  render() {
    return (
      <div class="sg-container">
      <div class="sg">
        <div class="sg-title">
            select gun
        </div>
        <div class="sg-area">
          <div class="sg-prev">
            Previous
          </div>
          <div class="sg-gun">
            <img src="#" alt="gun" />
          </div>
          <div class="sg-next">
            Next
          </div>
        </div>
        <div class="sg-btn">
          <button type="button">Select</button>
        </div>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<Game/>,document.getElementById('game')); */