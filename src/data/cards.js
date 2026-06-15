import cat from '../assets/cat.webp'
import dog from '../assets/dog.avif'
import bird from '../assets/bird.jpg'
import fish from '../assets/fish.jpg'
import horse from '../assets/horse.webp'
import bread from '../assets/bread.jpg'
import water from '../assets/water.jpg'
import coffee from '../assets/coffee.avif'
import apple from '../assets/apple.webp'
import soup from '../assets/soup.jpg'
import street from '../assets/street.avif'
import store from '../assets/store.jpeg'
import park from '../assets/park.jpg'
import house from '../assets/house.avif'
import school from '../assets/school.jpg'

const starterCard = {
    question: "Start learning Ukrainian! Click for istructions",
    answer: "Click the Next card button to begin. You will see an English word first, then flip the flashcard to check its Ukrainian translation",
    image: null,
    topic: "starter"
}

const cards = {
    animals: [
        { question: "Cat", answer: "Кіт", image: cat, topic: "animals" },
        { question: "Dog", answer: "Собака", image: dog, topic: "animals" },
        { question: "Bird", answer: "Птах", image: bird, topic: "animals" },
        { question: "Fish", answer: "Риба", image: fish, topic: "animals" },
        { question: "Horse", answer: "Кінь", image: horse, topic: "animals" }
    ],
    food: [
        { question: "Bread", answer: "Хліб", image: bread, topic: "food" },
        { question: "Water", answer: "Вода", image: water, topic: "food" },
        { question: "Coffee", answer: "Кава", image: coffee, topic: "food" },
        { question: "Apple", answer: "Яблуко", image: apple, topic: "food" },
        { question: "Soup", answer: "Суп", image: soup, topic: "food" }
    ],
    city: [
        { question: "Street", answer: "Вулиця", image: street, topic: "city" },
        { question: "Store", answer: "Магазин", image: store, topic: "city" },
        { question: "Park", answer: "Парк", image: park, topic: "city" },
        { question: "House", answer: "Будинок", image: house, topic: "city" },
        { question: "School", answer: "Школа", image: school, topic: "city" }
    ]
}

export default cards;
export { starterCard };