export let gamesData = [
  {
    id: Math.random(),
    name: "Candy crush",
    details: "This is a fun game and is available on mobile.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vI0PJAUA0IHuX-3AD1II0hPbFasEXmAuUg&usqp=CAU",
  },
  {
    id: Math.random(),
    name: "Super Contra",
    details: "This is a very old and awesome game.",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Super_contra.jpg",
  },
  {
    id: Math.random(),
    name: "PubG",
    details: "Pubg is very popular game",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IYxxD0o9aMYE4vdQPU6zDTIJ3eY9EUAKVQ&usqp=CAU",
  },
  {
    id: Math.random(),
    name: "Mario",
    details: "Mario is kids friendly and top performing game.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZjF_mZPIHTcMig6ZN037mlQl70g6oByzDw&usqp=CAU",
  },
];

function AddGame(data, valueArray, setter) {
  setter([
    ...valueArray,
    {
      id: Math.random(),
      name: data.gameName,
      poster: data.gameImg,
      details: data.gameDiscrption,
    },
  ]);
}

export function removeGame(id, valueArray, setter) {
  const updatedData = valueArray.filter((val) => val.id !== id);
  setter(updatedData);
}

export default AddGame;
