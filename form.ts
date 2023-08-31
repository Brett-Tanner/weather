import { getForecast } from "./weatherApi.js";

function searchForm() {
  const form = document.createElement("form");
  const search = document.createElement("input");
  search.type = "search";
  search.classList.add(
    "h-10",
    "p-1",
    "text-center",
    "rounded-md",
    "bg-slate-600"
  );

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.innerText = "Get Forecast";
  submit.classList.add(
    "h-10",
    "p-1",
    "border",
    "border-slate-500",
    "rounded-md",
    "bg-slate-600",
    "hover:bg-slate-500"
  );

  form.append(search, submit);
  form.classList.add(
    "w-100",
    "flex",
    "justify-center",
    "items-center",
    "gap-3",
    "p-5"
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;
    getForecast(city);
  });

  return form;
}

export { searchForm };
