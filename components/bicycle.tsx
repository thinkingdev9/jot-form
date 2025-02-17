import Dropdown from "@/components/dropdown";


const Bicycle = () => {
  return (
      <svg
        className="scale-[0.6] origin-center overflow-visible sm:scale-[1] transition-transform duration-300 transform translate-x-2 sm:translate-x-0"
        width="400"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
      >
      <image x="0" y="0" width="400" height="300" href="/bicycle.png" />
      <foreignObject className="overflow-visible" x="250" y="30" width="30" height="150" name="14">
        <Dropdown data={["Front Brake", "Motor"]} />
      </foreignObject>
      <foreignObject className="overflow-visible" x="330" y="60" width="30" height="150" name="12">
        <Dropdown data={["Front carrier plate", "Bag", "Stand"]} />
      </foreignObject>
      <foreignObject className="overflow-visible" x="270" y="130" width="30" height="150" name="17">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="290" y="140" width="30" height="150" name="9">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="235" y="160" width="30" height="150" name="20">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="295" y="195" width="30" height="150" name="1">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="295" y="255" width="30" height="150" name="6">
        <Dropdown data={["Flat front tire", "Front wheel"]} />
      </foreignObject>
      <foreignObject className="overflow-visible" x="220" y="130" width="30" height="150" name="5">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="200" y="160" width="30" height="150" name="4">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="110" y="80" width="30" height="150" name="3">
        <Dropdown data={["Seat", "Seapost"]} />
      </foreignObject>
      <foreignObject className="overflow-visible" x="125" y="110" width="30" height="150" name="16">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="75" y="135" width="30" height="150" name="15">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="120" y="150" width="30" height="150" name="8">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="15" y="140" width="30" height="150" name="21">
        <Dropdown data={["Flat front tire", "Front wheel wobble", "Front wheel spokes broken"]} />
      </foreignObject>
      <foreignObject className="overflow-visible" x="60" y="175" width="30" height="150" name="10">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="65" y="190" width="30" height="150" name="2">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="100" y="210" width="30" height="150" name="19">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="160" y="210" width="30" height="150" name="18">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="125" y="225" width="30" height="150" name="11">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="110" y="240" width="30" height="150" name="13">
        <Dropdown />
      </foreignObject>
      <foreignObject className="overflow-visible" x="65" y="255" width="30" height="150" name="7">
        <Dropdown data={["Rear tire", "Rear wheel"]} />
      </foreignObject>
    </svg>
  );
}

export default Bicycle;