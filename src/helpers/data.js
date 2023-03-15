export const gamesData = [
  {
    id: 1,
    name: "Candy crush",
    details: "This is a fun game and is available on mobile.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vI0PJAUA0IHuX-3AD1II0hPbFasEXmAuUg&usqp=CAU",
  },
  {
    id: 2,
    name: "Super Contra",
    details: "This is a very old and awesome game.",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4e/Super_contra.jpg",
  },
  {
    id: 3,
    name: "PubG",
    details: "Pubg is very popular game",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IYxxD0o9aMYE4vdQPU6zDTIJ3eY9EUAKVQ&usqp=CAU",
  },
  {
    id: 4,
    name: "Mario",
    details: "Mario is kids friendly and top performing game.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZjF_mZPIHTcMig6ZN037mlQl70g6oByzDw&usqp=CAU",
  },

];



function AddGame(name,image,desc){
  gamesData.push({id:Math.random(),name:name,poster:image,details:desc})

}

export default AddGame;