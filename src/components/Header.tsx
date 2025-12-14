import Logo from "./Logo";

const Header = () => (
    <header className={"flex justify-center items-center gap-2 my-1 pb-1 border-b-2 border-green-900/50"}>
        <Logo />
        <h1 className="text-white font-bold text-xl">EnergyMix</h1>
    </header>
)

export default Header;