import { CircleX, Paperclip } from "lucide-react"
import { useRef, useState } from "react"

function UploadAttachments({ text }: { text: string }) {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [attachments, setAttachments] = useState<File[]>([]);

    // Trigger file input when clicking the Paperclip div
    const handleFileInput = () => {
        fileInputRef.current?.click();
    }

    // handle file section 
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setAttachments([...attachments, ...selectedFiles])
        }
    }

    // remove file from the list
    const handleRemoveFile = (name: string) => {
        const filterName = attachments.filter(file => file.name !== name);
        setAttachments(filterName);
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="cursor-pointer text-text-head text-base font-medium px-2">{text}</label>
            <input ref={fileInputRef}
                onChange={handleFileChange} type="file" id="file" className="hidden" multiple />
            <div className="flex items-center gap-2">
                <div className="flex flex-wrap gap-2">
                    {attachments.map(file => (
                        <div key={file.name} className="flex items-center gap-2 bg-primary-10 p-2 rounded-sm">
                            <p className="text-primary-150 text-sm">{file.name}</p>
                            <CircleX
                                className="cursor-pointer"
                                fill="#E63946"
                                color="white"
                                strokeWidth={1}
                                onClick={() => handleRemoveFile(file.name)}
                            />
                        </div>
                    ))}
                </div>
                <div
                    onClick={handleFileInput}
                    className="border border-primary-20 rounded-full bg-primary-10 p-2 cursor-pointer hover:bg-primary-20 duration-200">
                    <Paperclip strokeWidth="1px" className="text-primary-150 rotate-[135deg] font-bold" />
                </div>
            </div>
        </div>
    )
}

export default UploadAttachments