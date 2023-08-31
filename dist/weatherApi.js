var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getForecast(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestString = `http://api.weatherapi.com/v1/forecast.json?key=925c939da9b7415f81050421233108&days=3&q=${city}`;
        const response = yield fetch(requestString);
        const data = yield response.json();
        const forecast = data.forecast;
        console.log(forecast);
    });
}
export { getForecast };
//# sourceMappingURL=weatherApi.js.map