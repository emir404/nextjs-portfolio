import Main from "@/app/components/Main"
import About from "./components/About";

let defaultStyle = "bg-gray-900/75 shadow-xl rounded-xl transition-all duration-200 ease-in-out";

const AboutPage = () => {
    return (
        <Main>
            <About>
                <div className={`${defaultStyle} row-start-1 col-start-1 row-end-7 col-end-3 flex flex-col w-full h-full`}>
                    <div className="flex w-full h-[10%] justify-center items-center border-b-2 border-b-gray-700">
                        <p className="text-2xl text-bold text-zinc-300">who is emir</p>
                    </div>
                    <p className="m-4 text-justify text-zinc-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsa! Alias cum ex sit neque nobis illum exercitationem. Dolores, error sunt quasi consequuntur facere magnam odit? Expedita dolorum sit sed at, officia dolor autem tempore, eum qui adipisci, voluptatum blanditiis ullam deserunt sint a sunt possimus. At id distinctio, neque ut ab eveniet consectetur dignissimos ipsam modi provident accusamus eaque vitae qui? Reprehenderit odio dolorum repudiandae? Ea commodi error quidem eos expedita, quod soluta officiis doloremque magni similique atque deleniti sapiente asperiores unde maiores, alias reiciendis at animi beatae vero dicta temporibus quam vel. Dignissimos, nobis culpa! Quia, quasi. Laborum.
                    </p>
                </div>
                <div className={`${defaultStyle} row-start-1 col-start-3 row-end-7 col-end-5`}>
                    <div className="flex w-full h-[10%] justify-center items-center border-b-2 border-b-gray-700">
                        <p className="text-2xl text-bold text-zinc-300">my roadmap</p>
                    </div>
                    <p className="m-4 text-justify text-zinc-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officiis nemo earum id suscipit, non fugit excepturi praesentium delectus saepe similique natus culpa est aliquid voluptates quisquam laborum placeat, adipisci rerum ipsa. Sapiente, error veniam minus natus suscipit illo ullam quos ratione quia quibusdam. Vel repellat omnis, voluptatibus sit voluptates illo vitae totam vero praesentium blanditiis! Perferendis, eligendi autem! Vitae illo tenetur, iusto labore iste iure, aspernatur cupiditate incidunt et, soluta distinctio tempore corporis tempora nulla harum ipsa asperiores dicta amet? Expedita tempore blanditiis, atque tenetur quidem unde facilis consequatur aliquam natus adipisci voluptatem aut iusto accusantium nisi autem consectetur.
                    </p>
                </div>
                <div className={`${defaultStyle} row-start-1 col-start-5 row-end-4 col-end-7`}>
                    <div className="flex w-full h-[20%] justify-center items-center border-b-2 border-b-gray-700">
                        <p className="text-2xl text-bold text-zinc-300">techs that i use</p>
                    </div>
                    <p className="m-4 text-justify text-zinc-200">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus laborum, quis ea obcaecati magni odio ullam reiciendis saepe! Esse totam, recusandae rerum voluptatum impedit ratione saepe optio commodi nihil, quo reiciendis sapiente maiores veritatis consequatur dolore ipsa cum dolorum molestiae tenetur nostrum provident officia obcaecati enim facere. Dignissimos, eveniet nobis.
                    </p>
                </div>
                <div className={`${defaultStyle} row-start-4 col-start-5 row-end-7 col-end-7`}>
                    <div className="flex w-full h-[20%] justify-center items-center border-b-2 border-b-gray-700">
                        <p className="text-2xl text-bold text-zinc-300">as a software dev.</p>
                    </div>
                    <p className="m-4 text-justify text-zinc-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui officiis dolorum iste cumque illo. Voluptas voluptatum, tempore, alias ipsa sapiente repellat sint vero quisquam distinctio quibusdam eligendi totam harum iste incidunt impedit temporibus possimus beatae voluptates unde inventore autem. Ducimus quas eligendi rem omnis quos eum delectus voluptatem optio?
                    </p>
                </div>
            </About>
        </Main>
    );
};

export default AboutPage;