import Button from "components/atoms/button"

export default function InsertTargetArticle() {
    return (
        <div className="flex items-center gap-5">
            <label>Target Article</label>
            <select className="rounded-lg w-52 h-8" defaultValue={"placeholder"}>
                <option value="placeholder" disabled>
                    Enter a link first!
                </option>
            </select>
            <Button onClick={() => console.log("clicked")}>Enter</Button>
        </div>
    )
}
