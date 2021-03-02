const DoItem = ({ Text, Icon }) => {
    return (
        <div className="hover:scale-110 transform duration-300  shadow-2xl flex flex-col items-center rounded-2xl bg-white bg-opacity-70 bd-blur h-48 w-full">
            <Icon size="4em" className="relative mt-8"/>
            <h3 className="relative mt-4 text-center">{Text}</h3>
        </div>
    );
}

export default DoItem;
