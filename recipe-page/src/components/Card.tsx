import { List } from "./List"
import { PreparationTime } from "./PreparationTime"
import { CardProps } from "../types/components.types"
import { Table } from "./Table"

export const Card = ({ title, description, srcImg, altImage, instructions, ingredients, nutrition }: CardProps) => {
  return (
    <article className="bg-white rounded-3xl max-w-[45rem] md:p-10 flex flex-col gap-6">
      <img src={srcImg} alt={altImage} className="md:rounded-xl mb-4" />
      <div className="p-10 pt-0 md:p-0 flex flex-col gap-6">
        <header className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-[2.5rem] font-youngSerif text-stone-900 ">{title}</h2>
          <p className="text-stone-600 text-pretty">{description}</p>
        </header>
        <PreparationTime />
        <div className="text-stone-600 flex flex-col gap-4">
          <h3 className="font-youngSerif text-brown-800 text-2xl">{`Ingredients`}</h3>
          <List items={ingredients} />
        </div>
        <hr className="border-stone-300" />
        <div className="text-stone-600 flex flex-col gap-4">
          <h3 className="font-youngSerif text-brown-800 text-2xl">{`Instructions`}</h3>
          <List items={instructions} decimal />
        </div>
        <hr className="border-stone-300" />
        <div className="text-stone-600 flex flex-col gap-4">
          <h3 className="font-youngSerif text-brown-800 text-2xl">{`Nutrition`}</h3>
          <p className="text-stone-600">{`The table shows nutritional values per serving without the additional fillings.`}</p>
          <Table items={nutrition} />
        </div>
      </div>
    </article>
  )
}