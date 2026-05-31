const PassportForm = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-5">
        Passport Form
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div
            key={key}
            className="flex flex-col"
          >
            <label className="text-sm font-semibold capitalize mb-1">
              {key}
            </label>

            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassportForm;