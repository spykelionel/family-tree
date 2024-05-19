import { OptionIncubator } from "@components";

export function LanguageSelector() {
  const name = "language";
  const languages = ["English", "French"];
  const defaultValue = languages[0] ?? "English";
  return (
    <OptionIncubator
      name={name}
      defaultValue={defaultValue}
      options={languages}
    />
  );
}
