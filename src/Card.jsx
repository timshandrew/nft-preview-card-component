import productImage from "/images/image-equilibrium.jpg";
import avatarImg from "/images/image-avatar.png";

export default function Card() {
  return (
    <div className="w-2xs bg-gray-700 p-5 text-white">
      <img src={productImage} alt="Etherem product image" />
      <h1 className="mb-2 text-xl">Equilibrium #3429</h1>
      <p className="mb-2 text-gray-400">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="mb-2 flex justify-between">
        <div className="flex">
          <img src="./images/icon-ethereum.svg" alt="Ethereum icon" />
          <span className="text-teal-300">0.041 ETH</span>
        </div>
        <div className="flex">
          <img src="images/icon-clock.svg" alt="Clock icon" />
          <span className="text-gray-400">3 days left</span>
        </div>
      </div>
      <div className="flex items-center">
        <img className="size-12" src={avatarImg} alt="Creator avatar" />
        <span className="mx-auto">
          Creation of <span>Jules Wyvern</span>
        </span>
      </div>
    </div>
  );
}
