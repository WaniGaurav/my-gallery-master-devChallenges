

let totalimages = 6;

let imageCreate = () =>{
    let imgId = document.getElementById("gridImages")
    // console.log(imgId)
    for (let index = 1; index <= totalimages; index++) {
        let imgtag = document.createElement("img")
        imgtag.loading = "lazy";
        imgtag.className = `img${index}`;
            if(index == 2 || index == 3){
                imgtag.classList.add ("grid-cols-span-2");
            }
        imgtag.src = `./images/photo${index}.png`;
        imgtag.alt = `img${index}`;

        imgId.appendChild(imgtag);
    }

}

imageCreate();

let profileInfoCount = ["100", "2,242" ,"1,432"];
let profileInfoTitle = ["Posts", "Follower" ,"Following"];
let profileInfoHeading = ["count", "title"];

let profileInfoCreate = () =>{
    let profileInfoId = document.getElementById("profileInfo");

    for (let index = 0; index < profileInfoTitle.length; index++) {
        let divtag = document.createElement("div")
        divtag.className = "homepage";

            let pTag1 = document.createElement("p")
            pTag1.className = profileInfoHeading[0];
            pTag1.innerHTML = profileInfoCount[index]
            divtag.appendChild(pTag1);
            
            let pTag2 = document.createElement("p")
            pTag2.className = profileInfoHeading[1];
            pTag2.innerHTML = profileInfoTitle[index]
            divtag.appendChild(pTag2);

        profileInfoId.appendChild(divtag)
    }
}

profileInfoCreate();