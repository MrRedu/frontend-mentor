import { ListProps } from "../types/components.types"

export const List = ({ items = [], decimal = false }: ListProps) => {
  return (
    <ul className={`${decimal ? 'list-decimal' : 'list-disc'} list-inside flex flex-col gap-2`}>
      {items.map((item, index: number) => (
        <li key={index} className="marker:text-brown-800 marker:font-bold text-pretty">
          {item.title &&
            <span className="font-bold pl-4">
              {item.title}{item.optional && <span>{` (optional)`}</span>}{`: `}
            </span>}
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
};
