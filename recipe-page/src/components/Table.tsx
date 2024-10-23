import { Nutrition } from "../types/components.types";
export const Table = ({ items }: { items: Nutrition[] }) => {
  return (
    <table className="w-full">
      <tbody>
        {items.map(({ title, text }, index: number) => (
          <tr key={index} className="border-b last:border-b-0 border-stone-300 ">
            <td className="text-stone-600 py-2 pl-8 w-5/12">{title}</td>
            <td className="text-brown-800 font-bold pl-6 w-7/12">{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
