import Button from "components/atoms/button"

export default function InsertSourceArticel() {
    return (
        <div className="flex items-center gap-5">
            <label>Source Article</label>
            <input className="rounded-lg w-52 h-8" placeholder="https://wikipedia.org/wiki/..."></input>
            <Button onClick={() => console.log("clicked")}>Enter</Button>
        </div>
    )
}
