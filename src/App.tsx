import Button from "components/atoms/button"
import ClearCompareTranslateButtons from "components/molecules/clear-compare-translate-buttons"
import SourceArticel from "components/orgamisms/source-article"
import TargetArticle from "components/orgamisms/target-article"

function App() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center flex-1 gap-8 px-8 pt-8 flex-wrap">
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
