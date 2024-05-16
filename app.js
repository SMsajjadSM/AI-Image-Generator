const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");
const ApiKey = "";
const AIGenerateImage = async (userPrompt, imageUserQuantity) => {
  try {
    const reponse = await fetch("", {
      method: "POST",
      headers: {},
      body: JSON.stringify({
        prompt: userPrompt,
        n: imageUserQuantity,
        size: "512*512",
        response_format: "b64_json",
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
const handleFormSubmition = (e) => {
  e.preventDefault();
  const userPrompt = e.srcElement[0].value;
  const imageUserQuantity = e.srcElement[1].value;
  const imgCardMarkup = Array.from({ length: imageUserQuantity }, () => {
    `<div class="img-card loading">
        <img src="" alt="image" />
        <a class="download-btn" href="">
          <img src="" alt="download image" />
        </a>
      </div>`;
  }).join("");
  imageGallery.innerHTML = imgCardMarkup;
  AIGenerateImage(userPrompt, imageUserQuantity);
};
generateForm.addEventListener("submit", handleFormSubmition);
