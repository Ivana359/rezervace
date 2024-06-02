import { Storno } from "./Storno";
import { Sluzby } from "./Sluzby";
import { Detail } from "./Detail";
import { Pokoj } from "./Pokoj";
import { Hlavicka } from "./Hlavicka";

export const BookingSummary = () => {
    return (
      <div className="summary">
        <h2>Booking Summary</h2>
        <Hlavicka rating = {4.65}/>
        <Pokoj name = {2} type = "Dvoulůžkový s dětskou přistýlkou" price = {1800}/>
        <Detail number = "459787 - 745" dates = "13.6.2024 - 17.6.2024" person = {2} child = {2} services = "žádné" price = {7200}  checkin = "13.6.2023 do 18:00" checkout = "17.6.2026 do 10:00"/>
        <Sluzby parking={200} breakfast = {150} wellness= "zdarma" />
        <Storno textA = "Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována žádná částka. " textB= "Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám účtována částka za první noc pobytu."/>
      </div>
    );
  };
  