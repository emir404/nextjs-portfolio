import Header from "./components/Header";
import Main from "./components/Main";

const Home = () => {
    return (
        <Main>
            <div className="transition-all duration-200 m-auto text-center">
                <h1 className="text-8xl mb-8 font-extralight text-zinc-200">emir ayaz</h1>
                <p className="text-xl">software dev.</p>
            </div>
        </Main>
    );
};

export default Home;