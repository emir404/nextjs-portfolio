const About = ({ children }: any) => {
    return (
        <div className="
            grid
            grid-cols-6
            grid-rows-6
            gap-4
            m-8
            h-[calc(100%-10rem)]
            w-[calc(100%-10rem))]
        ">
            {children}
        </div>
    );
};

export default About;