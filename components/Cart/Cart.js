import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://ebraw-server-5d3f.onrender.com/all-goods")
      .then((response) => response.json())
      .then((data) => setGoods(data))
      .catch((error) => console.error("Error fetching goods:", error));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-20 py-10 gap-10 bg-[#F3F3F3]">
      <h1 className="text-[30px] font-bold text-[#333333]">Our Featured Products</h1>

      <h5 className="text-[14px] font-regular text-[#666666]">
        Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
      </h5>

      <div className="flex gap-5 cursor-pointer">
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">Hoodie</li>
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">Accessories</li>
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">Mens</li>
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">Womans</li>
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">Trendy</li>
        <li className="w-[100px] h-[45px] text-[#333333] font-medium text-[14px] rounded-xl flex items-center justify-center hover:bg-[#023047] hover:text-[#ffffff] hover:scale-105 transition-all duration-300">T-shirt</li>
      </div>

      <cartContainer className="flex flex-wrap justify-between max-w-[1200px] mx-auto gap-5">
        {goods.map((item) => (
          <div key={item.id} className="w-[370px] h-[460px] bg-white flex flex-col gap-3">
            <Image src={item.image} alt={item.name} width={370} height={350} />
            <div className="flex justify-between items-center">
              <h3 className="text-[#000000] text-[18px] font-medium">{item.name}</h3>
              <stars className="text-[#023047] text-[10px] flex gap-0.5">⭐⭐⭐⭐⭐</stars>
            </div>
            <div className="flex justify-between items-center">
              <button className="w-[130px] h-[45px] border-2 border-[#333333] text-[14px] font-medium text-[#333333] cursor-pointer hover:bg-[#333333] hover:text-[#ffffff] hover:scale-110 transition-all duration-300 hover:duration-300">Add to Cart</button>
              <p className="text-[#000000] text-[18px] font-medium">${item.price}</p>
            </div>
          </div>
        ))}
      </cartContainer>
    </div>
  );
}
