// Ви створюєте компонент форми у React.Ви маєте поле введення,
//   в якому ви хочете відстежити зміни.Для цього ви використовуєте
//   обробник подій onChange.Ваше завдання – правильно типізувати подію,
//   яка передається у цю функцію.

import React, { useState } from "react";

type Props = {
  initialValue: string;
};
export function FormComponent({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
