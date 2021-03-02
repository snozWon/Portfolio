import { FaInternetExplorer } from "react-icons/fa";
import { FaBlackberry } from "react-icons/fa";
import { FaStickerMule } from "react-icons/fa";
import DoItem from './DoItem';

const WhatWeDo = () => {
    return (
        <div className="bg-green-200 text-green-900 p-12 w-screen">
            <h2 className="text-3xl font-bold mb-8">Detta gör vi</h2>
            <div className="max-w-xl w-full flex gap-8 flex-row justify-between">
                <DoItem Text="IE Gods" Icon={FaInternetExplorer} />
                <DoItem Text="Blackberry Mobile development" Icon={FaBlackberry} />
                <DoItem Text="Horse" Icon={FaStickerMule} />
            </div>
        </div>
    );
}

export default WhatWeDo;
