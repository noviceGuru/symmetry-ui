import { useState } from "react"

import Button from "components/atoms/button"
import ClearCompareTranslateButtons from "components/molecules/clear-compare-translate-buttons"
import SourceArticel from "components/orgamisms/source-article"
import TargetArticle from "components/orgamisms/target-article"

import SettingsIcon from "assets/settings-icon.svg"
import Overlay from "components/atoms/overlay"

function App() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="flex flex-col">
            <Overlay show={show} setShow={setShow}>
                <div className="h-3/5 w-3/5 min-w-60 bg-slate-600 rounded-xl relative">
                    <Button
                        title="Close"
                        onClick={() => setShow(false)}
                        className="absolute flex items-center justify-center left-2 top-4 w-8 h-8 hover:rotate-90 transition-transform"
                    >
                        X
                    </Button>
                    <div className="flex flex-col gap-12 items-center justify-center h-full w-3/5 m-auto">
                        <label className="w-full justify-around flex flex-wrap gap-4">
                            App Language
                            <select className="w-36">
                                <option>English</option>
                                <option>Francais</option>
                                <option>فارسی</option>
                            </select>
                        </label>
                        <label className="w-full justify-around flex flex-wrap gap-4">
                            Comparison tool
                            <select className="w-36">
                                <option>BLEU Score</option>
                                <option>BLEU Score1</option>
                                <option>BLEU Score2</option>
                            </select>
                        </label>
                        <label className="w-full justify-around flex flex-wrap gap-4">Similarity Percentage</label>
                    </div>
                </div>
            </Overlay>
            <Button
                onClick={() => setShow(true)}
                className="w-14 md:absolute mt-3 ml-3 left-3 top-5 rounded-full hover:rotate-90 transition-transform ease-in"
            >
                <img src={SettingsIcon} alt="settingsIcon" />
            </Button>
            <div className="flex justify-center flex-1 gap-16 px-8 md:px-20 pt-8 flex-wrap">
                <SourceArticel />
                <TargetArticle />
            </div>
            <ClearCompareTranslateButtons />
            <div className="flex justify-end items-center">
                <Button onClick={() => alert("user guide!")} className="w-fit self-end mr-7 my-8">
                    User Guide
                </Button>
            </div>
        </div>
    )
}

export default App
