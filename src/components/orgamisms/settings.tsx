import { useState } from "react"
import Button from "components/atoms/button"

export default function Settings({
    setShowModal,
}: {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [rangeNumber, setRangeNumber] = useState<number>(10)

    return (
        <div className="h-3/5 w-3/5 min-w-60 bg-slate-600 rounded-xl relative">
            <Button
                title="Close"
                onClick={() => setShowModal(false)}
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
                <label className="w-full justify-around flex flex-wrap gap-4">
                    <span className="self-end">Similarity Percentage</span>
                    <div className="w-36 justify-center flex flex-col items-center">
                        <span>{rangeNumber}</span>
                        <input
                            type="range"
                            title={rangeNumber?.toString()}
                            value={rangeNumber}
                            onChange={e => setRangeNumber(parseInt(e.target.value))}
                        ></input>
                    </div>
                </label>
            </div>
        </div>
    )
}
