import Button from "./button"

export default function InsertSourceArticel() {
    return (
        <div className="flex items-center gap-5">
            <label>Source Article</label>
            <input className="rounded-lg"></input>
            <Button onClick={() => console.log("clicked")}>Enter</Button>
        </div>
    )
}
