function SelectInput({ title, data, handleChange }) {
  return (
    <select
      name={title}
      id={title}
      onChange={handleChange}
      className="block w-full px-2 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">{title}</option>
      {data.map(({ name, id }) => (
        <option className="" value={id} key={id}>
          {name}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
