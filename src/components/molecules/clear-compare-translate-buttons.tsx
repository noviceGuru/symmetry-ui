import Button from "components/atoms/button"
import TranslateIcon from "assets/translate-icon.svg"
import ClearIcon from "assets/clear-icon.svg"
import CompareIcon from "assets/compare-icon.svg"

export default function ClearCompareTranslateButtons() {
    return (
        <div className="h-45 flex justify-center gap-11 my-14">
            <Button onClick={() => alert("clicked!")} title="Clear" className="w-14">
                <img src={ClearIcon} alt="ClearIcon" />
            </Button>
            <Button onClick={() => alert("clicked!")} title="Compare" className="w-14">
                <img src={CompareIcon} alt="CompareIcon" />
            </Button>
            <Button onClick={() => alert("clicked!")} title="Translate" className="w-14">
                <img src={TranslateIcon} alt="translate" />
            </Button>
        </div>
    )
}
