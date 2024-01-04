import Button from "components/atoms/button"
import InsertTargetArticle from "components/molecules/insert-target-article"
import DownloadIcon from 'assets/download-icon.svg'

export default function TargetArticle(){
    return <div className="flex flex-col items-center gap-4">
        <InsertTargetArticle/>
        <textarea className="w-44 h-80"/>
        <div className="flex flex-row-reverse gap-5 items-center">
            <p><span>Word Count:</span> <span>{250}</span></p>
            <p><span>Simliarity Percentage:</span> <span>{76}</span></p>
            <Button onClick={()=>console.log('download source')}  className="p-2" title="download">
                <img src={DownloadIcon} alt="download-source-article" className="h-6"/>
            </Button>
        </div>
    </div>
}