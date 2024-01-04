import { useState } from "react"

import Button from "components/atoms/button"
import ClearCompareTranslateButtons from "components/molecules/clear-compare-translate-buttons"
import SourceArticel from "components/orgamisms/source-article"
import TargetArticle from "components/orgamisms/target-article"

import SettingsIcon from "assets/settings-icon.svg"
import Overlay from "components/atoms/overlay"
import Settings from "components/orgamisms/settings"

function App() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="flex flex-col h-full">
            <Overlay show={show} setShow={setShow}>
                <Settings setShowModal={setShow} />
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
