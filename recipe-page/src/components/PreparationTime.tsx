export const PreparationTime = ({ total = 'Approximately 10 minutes', preparation = '5 minutes', cooking = '5 minutes' }) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-rose-50 rounded-xl">
      <h3 className="font-bold text-rose-800 text-lg">Prepatation time</h3>
      <ul className="list-disc list-inside text-stone-600 flex flex-col gap-1 pl-2" >
        <li><span className="font-bold pl-2">Total:</span> {total}</li>
        <li><span className="font-bold pl-2">Preparation:</span> {preparation}</li>
        <li><span className="font-bold pl-2">Cooking:</span> {cooking}</li>
      </ul>
    </div>
  )
};
