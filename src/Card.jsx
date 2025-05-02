import productImage from "/images/image-equilibrium.jpg";
import avatarImg from "/images/image-avatar.png";

export default function Card() {
    return (
        <div>
            <img src={productImage} alt="Etherem product image" />
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div>
                <div>
                    <img src="./images/icon-ethereum.svg" alt="Ethereum icon" />
                    <span>0.041 ETH</span>
                </div>
                <div>
                    <img src="images/icon-clock.svg" alt="Clock icon" />
                    <span>3 days left</span>
                </div>
            </div>
            <div>
                <img src={avatarImg} alt="Creator avatar" />
                <span>
                    Creation of <span>Jules Wyvern</span>
                </span>
            </div>
        </div>
    );
}
