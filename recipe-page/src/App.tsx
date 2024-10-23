import { Card } from "./components/Card";
import { Ingredient, Instruction, Nutrition } from "./types/components.types";

const instructions: Instruction[] = [
  {
    title: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    optional: true
  },
  {
    title: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  }
]
const ingredients: Ingredient[] = [
  { text: '2-3 large eggs' },
  { text: 'Salt, to taste' },
  { text: 'Pepper, to taste' },
  { text: '1 tablespoon of butter or oil' },
  { text: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs.' }
]
const nutrition: Nutrition[] = [
  {
    title: 'Calories',
    text: '277kcal'
  },
  {
    title: 'Carbs',
    text: '0g'
  },
  {
    title: 'Protein',
    text: '20g'
  },
  {
    title: 'Fat',
    text: '22g'
  }
]

export default function App() {
  return (
    <div className="flex flex-col items-center md:my-16">
      <Card title="Simple Omelette Recipe" description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats." srcImg="/image-omelette.jpeg" altImage="Omelette image" instructions={instructions} ingredients={ingredients} nutrition={nutrition} />
    </div>
  )
}

