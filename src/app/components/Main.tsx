import Header from "./Header";

const Main = ({children}: any) => {
    return (
        <main className="
            relative
            flex
            flex-col
            margin-0
            padding-0
            h-screen
            w-screen
            bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
            text-white
        ">

        <Header />

        {children}
    </main>
)};

export default Main;