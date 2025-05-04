import productImage from "/images/image-equilibrium.jpg";
import avatarImg from "/images/image-avatar.png";

export default function Card() {
  return (
    <div className="w-2xs rounded-2xl bg-gray-700 p-5 text-white">
      <img
        className="mb-4 rounded-2xl"
        src={productImage}
        alt="Etherem product image"
      />
      <h1 className="mb-4 text-xl font-semibold">Equilibrium #3429</h1>
      <p className="mb-4 text-gray-400">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between border-b-2 border-teal-600 pb-4">
        <div className="flex gap-2">
          <img src="./images/icon-ethereum.svg" alt="Ethereum icon" />
          <span className="w-max font-semibold text-teal-300">0.041 ETH</span>
        </div>
        <div className="flex gap-2">
          <img src="images/icon-clock.svg" alt="Clock icon" />
          <span className="text-gray-400">3 days left</span>
        </div>
      </div>
      <div className="flex items-center pt-4">
        <img
          className="size-9 rounded-full border-1 border-white"
          src={avatarImg}
          alt="Creator avatar"
        />
        <span className="mx-auto">
          <span className="text-gray-300">Creation of</span> Jules Wyvern
        </span>
      </div>
    </div>
  );
}
