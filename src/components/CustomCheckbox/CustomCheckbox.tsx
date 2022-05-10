import "./CustomCheckbox.css";

export const CustomCheckbox = () => {
  return (
    <>
      <label>
        <input type="checkbox" className="checkbox" />
        <span className="checkbox-new"></span>
        <span>кастомный чекбокс</span>
      </label>
    </>
  )
}
